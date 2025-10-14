import { useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import webdev from "../../assets/web-design.png";
import backend from "../../assets/back-end-2.png";

const services = [
  {
    name: "Front End",
    description:
      "Experience the power of intuitive design and seamless interaction! Our front-end development brings you visually stunning and highly engaging interfaces that work flawlessly across all your devices.",
    features: [
      "Visually Stunning Interfaces",
      "Highly Engaging Experiences",
      "Cross-Device Compatibility",
      "User-Centric Design",
      "Blazing-Fast Performance",
    ],
    image: webdev,
    docLink: "https://en.wikipedia.org/wiki/Front-end_web_development",
  },
  {
    name: "Back End",
    description:
      "Unlock the robust engine powering your digital experiences! Our back-end development provides a secure, scalable, and efficient infrastructure to handle all the behind-the-scenes magic, ensuring your applications run smoothly and reliably.",
    features: [
      "Secure Foundation",
      "Scalable Infrastructure",
      "Efficient Performances",
      "Gate-Based Authorization",
      "Granular Access Control",
    ],
    image: backend,
    docLink: "https://en.wikipedia.org/wiki/Back-end_database",
  },
];

export default function WebDev() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="text-white py-12 px-4 mt-8">
      <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row gap-10">
        {/* Sidebar */}
        <aside className="md:w-1/4">
          <h3 className="text-[#8f012d] font-semibold mb-6">Development</h3>
          <ul className="space-y-3">
            {services.map((service, index) => (
              <li key={index} className="w-fit">
                <button
                  onMouseEnter={() => setActiveIndex(index)}
                  className={`group inline-flex items-center font-semibold transition-colors cursor-pointer px-1 py-0.5 rounded ${
                    index === activeIndex ? "text-white" : "text-gray-500"
                  }`}
                >
                  {/* Arrow marker */}
                  <span className="mr-2 text-[#8f012d] transition-transform duration-300 group-hover:translate-x-1">
                    ›
                  </span>
                  {service.name}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Content */}
        <main className="md:w-3/4 space-y-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Web Development</h1>
            <p className="text-gray-200 text-md">
              Crafting intuitive user interfaces with thoughtfully designed
              components leads to seamless and engaging online experiences.
              Furthermore, a consistent visual style and responsive design,
              leveraging updated technologies, ensures accessibility and a
              unified brand presence across all devices.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">
              {services[activeIndex].name}
            </h2>
            <p className="text-gray-200 mb-6">
              {services[activeIndex].description}
            </p>

            {/* Feature Points and Image side-by-side */}
            <div className="flex flex-col lg:flex-row justify-between items-start gap-10 mt-8">
              {/* Feature Points */}
              <ul className="space-y-3 flex-1">
                {services[activeIndex].features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mt-1" />
                    <span className="text-md text-gray-200">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Image */}
              {services[activeIndex].image && (
                <div className="flex-1">
                  <img
                    src={services[activeIndex].image}
                    alt={services[activeIndex].name}
                    loading="lazy"
                    className="w-50 max-w-md rounded-xl shadow-2xl transform rotate-x-[8deg] rotate-y-[10deg] transition-transform duration-500"
                  />
                </div>
              )}
            </div>

            {/* Docs Link */}
            <a
              href={services[activeIndex].docLink}
              className="text-red-400 text-sm hover:underline inline-block mt-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read about {services[activeIndex].name} ↗
            </a>
          </div>
        </main>
      </div>
    </div>
  );
}
