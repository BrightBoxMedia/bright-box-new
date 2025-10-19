import React, { useEffect, useRef, useCallback, useState } from "react";
import { ReactTyped } from "react-typed";
import Marquee from "../components/Marquee.jsx";
import { Link } from "react-router-dom";

// Constants
const PARALLAX_CONFIG = {
  MOBILE_BREAKPOINT: 1024,
  TABLET_BREAKPOINT: 1400,
  INITIAL_SCALE: 1.1,
  FINAL_SCALE: 2.0,
  INITIAL_TRANSLATE_X: 0,
  FINAL_TRANSLATE_X: -300,
  TEXT_FADE_THRESHOLD: 0.3,
  SCROLL_THROTTLE: 16, // ~60fps
};

function AnimatedLines() {
  const linesData = [
    { id: 1, direction: "horizontal", speed: 15, top: "10%", delay: 0 },
    { id: 2, direction: "horizontal", speed: 25, top: "25%", delay: 2 },
    { id: 3, direction: "horizontal", speed: 20, top: "45%", delay: 4 },
    { id: 4, direction: "horizontal", speed: 18, top: "65%", delay: 1 },
    { id: 5, direction: "horizontal", speed: 22, top: "85%", delay: 3 },
    { id: 6, direction: "vertical", speed: 13, left: "5%", delay: 1 },
    { id: 7, direction: "vertical", speed: 17, left: "15%", delay: 3 },
    { id: 8, direction: "vertical", speed: 16, left: "85%", delay: 2 },
    { id: 9, direction: "vertical", speed: 14, left: "95%", delay: 4 },
  ];

  function getLineAnimation(direction, speed) {
    switch (direction) {
      case "horizontal":
        return {
          animation: `moveHorizontal ${speed}s linear infinite`,
          width: "200px",
          height: "1px",
        };
      case "vertical":
        return {
          animation: `moveVertical ${speed}s linear infinite`,
          width: "1px",
          height: "200px",
        };
      default:
        return {};
    }
  };

  return (
    <>
      <style jsx>{`
        @keyframes moveHorizontal {
          0% {
            transform: translateX(-100vw);
            opacity: 0;
          }
          10% {
            opacity: 0.3;
          }
          90% {
            opacity: 0.3;
          }
          100% {
            transform: translateX(100vw);
            opacity: 0;
          }
        }

        @keyframes moveVertical {
          0% {
            transform: translateY(-100vh);
            opacity: 0;
          }
          10% {
            opacity: 0.3;
          }
          90% {
            opacity: 0.3;
          }
          100% {
            transform: translateY(100vh);
            opacity: 0;
          }
        }
      `}</style>

      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ zIndex: 1 }}
      >
        {linesData.map((line) => (
          <div
            key={line.id}
            className="absolute bg-gradient-to-r from-transparent via-[#8f012d] to-transparent opacity-30"
            style={{
              top: line.top,
              left: line.left || "0%",
              animationDelay: `${line.delay}s`,
              ...getLineAnimation(line.direction, line.speed),
            }}
          />
        ))}
      </div>
    </>
  );
};

function isMobileOrTablet() {
  const width = window.innerWidth;
 
  if (width <= PARALLAX_CONFIG.MOBILE_BREAKPOINT) {
    return true;
  }
  
  const isTouchDevice = 'ontouchstart' in window || 
                       navigator.maxTouchPoints > 0 || 
                       navigator.msMaxTouchPoints > 0;
  
  const isIPad = /iPad/.test(navigator.userAgent) || 
                 (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  
  const isAndroidTablet = /Android/.test(navigator.userAgent) && !/Mobile/.test(navigator.userAgent);
  
  if ((isTouchDevice || isIPad || isAndroidTablet) && width <= PARALLAX_CONFIG.TABLET_BREAKPOINT) {
    return true;
  }
  
  return false;
}

export default function Hero({ servicesRef }) {
  const [isMobile, setIsMobile] = useState(false);
  const [isVideoInView, setIsVideoInView] = useState(true);
  const videoRef = useRef(null);
  const textRef = useRef(null);
  const videoContainerRef = useRef(null);
  const scrollTimeoutRef = useRef(null);
  const observerRef = useRef(null);

  const handleScrollToServices = useCallback(() => {
    servicesRef?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [servicesRef]);

  const handleVideoVisibility = useCallback((isVisible) => {
    if (!videoRef.current) return;

    setIsVideoInView(isVisible);

    if (isVisible) {
      videoRef.current.play().catch(console.error);
    } else {
      videoRef.current.pause();
    }
  }, []);

  useEffect(() => {
    if (!videoRef.current) return;

    const options = {
      root: null,
      rootMargin: "50px",
      threshold: 0.1,
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        handleVideoVisibility(entry.isIntersecting);
      });
    }, options);

    observerRef.current.observe(videoRef.current);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [handleVideoVisibility]);

  const handleScroll = useCallback(() => {
    if (scrollTimeoutRef.current) return;

    scrollTimeoutRef.current = setTimeout(() => {
      if (
        !videoRef.current ||
        !videoContainerRef.current ||
        !textRef.current ||
        isMobile
      ) {
        scrollTimeoutRef.current = null;
        return;
      }

      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const scrollProgress = Math.max(0, Math.min(scrollY / windowHeight, 1));

      // Video scaling and translation
      const scale =
        PARALLAX_CONFIG.INITIAL_SCALE +
        scrollProgress *
        (PARALLAX_CONFIG.FINAL_SCALE - PARALLAX_CONFIG.INITIAL_SCALE);

      const translateX =
        PARALLAX_CONFIG.INITIAL_TRANSLATE_X +
        scrollProgress *
        (PARALLAX_CONFIG.FINAL_TRANSLATE_X -
          PARALLAX_CONFIG.INITIAL_TRANSLATE_X);

      const videoElement = videoRef.current;
      videoElement.style.transform = `translateX(${translateX}px) scale(${scale})`;
      videoElement.style.transformOrigin = "50% 20%";
      videoElement.style.transition = "none";

      const textOpacity = Math.max(0, 1 - scrollProgress * 1.5);
      const textTranslateY = -scrollProgress * 100;

      const textElement = textRef.current;
      textElement.style.opacity = textOpacity;
      textElement.style.transform = `translateY(${textTranslateY}px)`;
      textElement.style.transition = "none";
      textElement.style.pointerEvents =
        scrollProgress > PARALLAX_CONFIG.TEXT_FADE_THRESHOLD ? "none" : "auto";

      scrollTimeoutRef.current = null;
    }, PARALLAX_CONFIG.SCROLL_THROTTLE);
  }, [isMobile]);

  // Handle resize with debouncing
  const handleResize = useCallback(() => {
    const newIsMobile = isMobileOrTablet();

    if (newIsMobile !== isMobile) {
      setIsMobile(newIsMobile);

      if (videoRef.current && textRef.current) {
        if (newIsMobile) {
          videoRef.current.style.transform = "none";
          textRef.current.style.opacity = "1";
          textRef.current.style.transform = "none";
          textRef.current.style.pointerEvents = "auto";
        } else {
          handleScroll();
        }
      }
    }
  }, [isMobile, handleScroll]);

  useEffect(() => {
    setIsMobile(isMobileOrTablet());

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [handleScroll, handleResize]);

  // pauses video if the browser tab is switched
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!videoRef.current) return;

      if (document.hidden) {
        videoRef.current.pause();
      } else if (isVideoInView) {
        videoRef.current.play().catch(console.error);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [isVideoInView]);

  return (
    <div className="text-black relative mt-24 sm:mt-28 lg:mt-10">
      <AnimatedLines />
      <div className={`${isMobile ? "h-screen" : "h-[200vh]"}`}>
        <div className="max-w-[1240px] mx-auto px-4 w-full h-screen flex items-center justify-center sticky top-0 pb-30 pt-4 sm:pt-8 lg:pt-0">
          {/* Main Content Container */}
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between w-full relative min-h-0 overflow-visible gap-8 lg:gap-0">
            {/* Left Column - Text and Buttons */}
            <div
              ref={textRef}
              className="w-full lg:w-1/2 max-w-[600px] px-2 sm:px-4 lg:pr-8 relative order-2 lg:order-1"
              style={{ zIndex: 50 }}
            >
              <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
                <p className="text-[#8f012d] font-bold p-2 text-xs sm:text-sm md:text-base">
                  ENTER THE WORLD OF SURREAL EXPERIENCE.
                </p>

                <div className="font-bold py-2 sm:py-4 space-y-3 sm:space-y-4">
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight">
                    We create innovative digital solutions that help businesses
                    grow.
                  </h1>

                  <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center lg:justify-start gap-1 sm:gap-x-2 pt-2 sm:pt-4">
                    <p className="text-base sm:text-lg md:text-xl font-bold">
                      We help businesses grow &
                    </p>
                    <ReactTyped
                      className="text-[#8f012d] text-base sm:text-lg md:text-xl font-bold"
                      strings={["Excel", "Succeed", "Expand", "Lead"]}
                      typeSpeed={120}
                      backSpeed={140}
                      loop
                    />
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mt-6 sm:mt-10 justify-center lg:justify-start">
                  {/* Get Started Button */}
                  <div className="relative group">
                    <button
                      onClick={handleScrollToServices}
                      className="relative inline-block p-px font-semibold leading-6 text-white hover:text-black bg-gray-800 cursor-pointer rounded-xl transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#8f012d] focus:ring-offset-2"
                      aria-label="Get started with our services"
                    >
                      <span className="absolute inset-0 rounded-xl bg-[#8f012d] p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                      <span className="relative z-10 block px-6 py-3 rounded-xl bg-[#8f012d] hover:bg-[#FFFAF0]">
                        <div className="relative z-10 flex items-center justify-center space-x-2">
                          <span className="transition-all duration-500 group-hover:translate-x-1">
                            Get started
                          </span>
                          <svg
                            className="w-4 h-4 sm:w-6 sm:h-6 transition-transform duration-500 group-hover:translate-x-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </span>
                    </button>
                  </div>

                  {/* Projects Button */}
                  <Link to="/services">
                    <div className="relative group">
                      <button
                        className="relative inline-block p-px font-semibold leading-6 text-black hover:text-white bg-gray-800 cursor-pointer rounded-xl transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                        aria-label="Learn more about our services"
                      >
                        <span className="absolute inset-0 rounded-xl p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                        <span className="relative z-10 block px-6 py-3 rounded-xl bg-[#FFFAF0] hover:bg-black">
                          <div className="relative z-10 flex items-center justify-center space-x-2">
                            <span className="transition-all duration-500 group-hover:translate-x-1">
                              Our Services
                            </span>
                            <svg
                              className="w-4 h-4 sm:w-6 sm:h-6 transition-transform duration-500 group-hover:translate-x-1"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        </span>
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column - Video */}
            <div
              ref={videoContainerRef}
              className="w-full lg:w-1/2 flex justify-center items-center relative order-1 lg:order-2 px-2"
              style={{ zIndex: isMobile ? 50 : 10 }}
            >
              <div className="relative w-full max-w-[350px] sm:max-w-[450px] lg:max-w-[900px] flex justify-center items-center">
                <video
                  ref={videoRef}
                  className="w-full h-auto relative rounded-2xl shadow-2xl"
                  muted
                  autoPlay
                  loop
                  playsInline
                  style={{
                    transformOrigin: "center center",
                    zIndex: isMobile ? 50 : 100,
                    position: "relative",
                    // filter: "drop-shadow(0 25px 50px rgba(0, 0, 0, 0.25))",
                    maxHeight: isMobile ? "45vh" : "85vh",
                    transform: `scale(${PARALLAX_CONFIG.INITIAL_SCALE})`,
                  }}
                  aria-label="Hero demonstration video"
                >
                  <source src="/video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Marquee Section */}
      <div
        className="max-w-[1240px] mx-auto px-4 -mt-16 sm:-mt-20"
        style={{ zIndex: 10, position: "relative" }}
      >
        <Marquee />
      </div>
    </div>
  );
}