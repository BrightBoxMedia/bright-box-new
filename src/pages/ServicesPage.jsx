import { useEffect, useRef } from "react";
import { lazy, Suspense } from "react";

const AppDev = lazy(() => import("../components/services/AppDev.jsx"));
const WebDev = lazy(() => import("../components/services/WebDev.jsx"));
const Uiux = lazy(() => import("../components/services/Uiux.jsx"));
const Visibility = lazy(() => import("../components/services/Visibility.jsx"));
const Fixtures = lazy(() => import("../components/services/Fixtures.jsx"));
const Gifting = lazy(() => import("../components/services/Gifting.jsx"));
const Marketing = lazy(() => import("../components/services/Marketing.jsx"));
const Digital = lazy(() => import("../components/services/Digital.jsx"));
const Brand = lazy(() => import("../components/services/Brand.jsx"));
import NavBar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { Link } from "react-router-dom";
import { useLayoutEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useMemo } from "react";
import ScrollToTopButton from "../components/scrollToTop.jsx";

const allServices = [
  { id: 1, tag: "Development", component: <AppDev /> },
  { id: 2, tag: "Development", component: <WebDev /> },
  { id: 3, tag: "Designing", component: <Uiux /> },
  { id: 4, tag: "Strategies", component: <Brand /> },
  { id: 5, tag: "Strategies", component: <Visibility /> },
  { id: 6, tag: "Strategies", component: <Digital /> },
  { id: 7, tag: "Events", component: <Fixtures /> },
  { id: 8, tag: "Events", component: <Gifting /> },
  { id: 9, tag: "Marketing", component: <Marketing /> },
];

const tags = [
  "All",
  "Development",
  "Designing",
  "Strategies",
  "Events",
  "Marketing",
];

export default function ServicesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentTag = searchParams.get("category") || "All";

  const filteredServices = useMemo(() => {
    return currentTag === "All"
      ? allServices
      : allServices.filter((service) => service.tag === currentTag);
  }, [currentTag]);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const headingRef = useRef(null);

  useEffect(() => {
    const heading = headingRef.current;

    const handleScroll = () => {
      if (!heading) return;

      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      const scale = 1 + scrollTop * 0.001;
      const translateY = -scrollTop * 0.3;
      const opacity = 1 - scrollTop * 0.003;

      heading.style.transform = `translateY(${translateY}px) scale(${scale})`;
      heading.style.opacity = opacity > 0 ? opacity : 0;
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <NavBar className="" />
      <div className="parallax-container">
        <div className="hero-section flex items-center justify-center">
          <h1
            ref={headingRef}
            className="text-5xl text-zinc-800 md:text-7xl lg:text-8xl font-bold transition-transform duration-200 ease-out"
          >
            Our Services
          </h1>
        </div>

        {/* Content section */}
        <div className="content-container bg-[#141414] min-h-screen p-8">
          <div className="max-w-[1240px] mx-auto">
            <div className="w-full flex justify-center">
              <div className="p-6 w-full max-w-[1240px]">
                <div className="flex flex-wrap gap-2 mb-6 justify-center">
                  {tags.map((tag) => (
                    <button
                      key={tag}
                      className={`px-4 py-2 rounded-xl hover:bg-[#8f012d] ${
                        tag === currentTag
                          ? "bg-[#8f012d] text-white"
                          : "bg-[#141414] text-white"
                      }`}
                      onClick={() => setSearchParams({ category: tag })}
                    >
                      {tag}
                    </button>
                  ))}
                </div>

                <Suspense
                  fallback={
                    <div className="text-white text-center">
                      Loading service...
                    </div>
                  }
                >
                  <div className="grid gap-6">
                    {filteredServices.map((service) => (
                      <div key={service.id}>{service.component}</div>
                    ))}
                  </div>
                </Suspense>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Link to="/">
              <button className="relative bg-[#141414] text-white font-medium text-[17px] px-4 py-2 pr-5 h-12 rounded-3xl flex items-center overflow-hidden cursor-pointer group">
                <div className="absolute left-1 bg-white h-9 w-9 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:w-full shadow-[0.1em_0.1em_0.6em_0.2em_#8f012d] active:scale-95">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    className="w-5 transition-transform duration-300 text-[#8f012d] group-hover:-translate-x-1"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      fill="currentColor"
                      d="M7.828 11l5.364-5.364-1.414-1.414L4 12l7.778 7.778 1.414-1.414L7.828 13H20v-2z"
                    ></path>
                  </svg>
                </div>
                <span className="ml-10">Go back</span>
              </button>
            </Link>
          </div>
        </div>
        <ScrollToTopButton />
        <Footer />
      </div>

      {/* Parallax Effect */}
      <style>{`
        .parallax-container {
          position: relative;
          overflow-x: hidden;
          overflow-y: auto;
          height: 100%;
        }
        
        .hero-section {
          height: 100vh; /* Full viewport height */
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          /* This padding compensates for the navbar height */
          padding-top: 0;
          padding-bottom: 0;
          box-sizing: border-box;
        }
        
        .content-container {
          position: relative;
          z-index: 2;
          box-shadow: 0 -10px 30px rgba(0, 0, 0, 0.1);
          border-radius: 40px 40px 0 0;
          margin-top: -40px;
        }
        
        h1 {
          text-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
          will-change: transform, opacity;
        }
      `}</style>
    </>
  );
}
