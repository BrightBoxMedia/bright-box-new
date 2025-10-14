import { useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import uiux from "../../assets/layers.png";

const services = [
  {
    name: "UI",
    description:
      "We offer intuitive and visually appealing interfaces that make user interactions seamless and engaging.",
    features: [
      "Consistent Design System",
      "Interactive Elements",
      "Color & Theme Customization",
      "Microinteractions",
    ],
    image: uiux,
    docLink: "https://en.wikipedia.org/wiki/User_interface",
  },
  {
    name: "UX",
    description:
      "We deliver smooth, user-centered experiences that ensure satisfaction and ease of use across every touchpoint.",
    features: [
      "User Research & Persona Mapping",
      "Task Flow Optimization",
      "Error Prevention & Handling",
      "Usability Testing & Feedback Loops",
    ],
    image: uiux,
    docLink: "https://en.wikipedia.org/wiki/User_experience_design",
  },
];

export default function Uiux() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="text-white py-12 px-4 mt-8">
      <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row gap-10">
        {/* Sidebar */}
        <aside className="md:w-1/4">
          <h3 className="text-[#8f012d] font-semibold mb-6">Designing</h3>
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
            <h1 className="text-3xl font-bold mb-2">UI/UX Designing</h1>
            <p className="text-gray-200 text-md">
              Crafting exceptional digital experiences that are both visually
              stunning and intuitively functional. We focus on understanding
              user needs and behaviors to design seamless and engaging
              interfaces that drive satisfaction and achieve business goals.
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
