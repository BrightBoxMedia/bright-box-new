import { useEffect, useState, useRef } from "react";

export default function Marquee() {
  const logos = [
    { src: "/logo/dezy.svg", class: "h-10 mt-2" },
    { src: "/logo/vivo.svg", class: "" },
    { src: "/logo/xiaomi-1.svg", class: "" },
    { src: "/logo/embassy.svg", class: "h-24" },
    { src: "/logo/activus.png", class: "mb-2 h-28" },
    { src: "/logo/chinmaya.png", class: "h-28" },
    { src: "/logo/kanasu-1.png", class: "h-22 mb-2" },
    { src: "/logo/burpins.png", class: "h-28 mb-2" },
    { src: "/logo/ckc-1.png", class: "h-52 w-52" },
  ];

  const mobileLogos = [
    { src: "/logo/dezy.svg", logoClass: "h-12" },
    { src: "/logo/vivo.svg", logoClass: "mt-2" },
    { src: "/logo/xiaomi-1.svg", logoClass: "mt-2" },
    { src: "/logo/embassy.svg", logoClass: "h-24 ml-6" },
    { src: "/logo/activus.png", logoClass: "mt-2" },
    { src: "/logo/chinmaya.png", logoClass: "h-22" },
    { src: "/logo/burpins.png", logoClass: "h-12" },
    { src: "/logo/ckc.png", logoClass: "" },
    { src: "/logo/kanasu-1.png", class: "" },
  ];

  const [currentSet, setCurrentSet] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const intervalRef = useRef(null);
  const marqueeRef = useRef(null);
  const totalSets = Math.ceil(logos.length / 5);

  // intersection observer to detect visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1, // 10% is visible
        rootMargin: "50px",
      },
    );

    if (marqueeRef.current) {
      observer.observe(marqueeRef.current);
    }

    return () => {
      if (marqueeRef.current) {
        observer.unobserve(marqueeRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible && !isHovered) {
      intervalRef.current = setInterval(() => {
        setCurrentSet((prev) => (prev + 1) % totalSets);
      }, 4000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isHovered, isVisible, totalSets]);

  const visibleLogos = logos.slice(currentSet * 5, currentSet * 5 + 5);

  return (
    <div ref={marqueeRef} className="pt-2 sm:pt-2 md:pt-4 lg:pt-28">
      <h3 className="font-bold text-center">Trusted by</h3>

      {/*Desktop*/}
      <div className="py-6 justify-center hidden md:flex">
        <div
          className="w-[1240px] overflow-hidden flex justify-center gap-12 transition-opacity duration-700 opacity-100"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {visibleLogos.map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center h-26 w-32 transition-all duration-700"
            >
              <img
                src={logo.src}
                alt={`Logo ${i}`}
                className={`object-contain grayscale hover:grayscale-0 transition duration-300 ${logo.class || "max-h-12"}`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile*/}
      <div className="block md:hidden overflow-hidden whitespace-nowrap py-6 relative">
        <div className={`inline-block ${isVisible ? "animate-marquee" : ""}`}>
          {[...mobileLogos, ...mobileLogos].map((logo, i) => (
            <span
              key={i}
              className="inline-block mx-6 h-24 w-26 flex items-center justify-center"
            >
              <img
                src={logo.src}
                alt={`Logo ${i}`}
                className={`object-contain max-h-16 w-auto grayscale hover:grayscale-0 transition duration-300 ${logo.logoClass}`}
              />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
