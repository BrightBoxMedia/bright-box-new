import { useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import branding from "../../assets/brand-1.png";
import guideline from "../../assets/guidline.png";

const services = [
  {
    name: "Brand Development",
    description:
      "We lay the foundation for your brand with a clear strategy that defines your mission, vision, values, and audience. This ensures every branding effort aligns with your business goals and resonates with the right people.",
    features: [
      "Mission, vision, and value alignment",
      "Brand voice and tone definition",
      "Competitive positioning",
    ],
    image: branding,
    docLink: "https://en.wikipedia.org/wiki/Brand",
  },
  {
    name: "Visual Identity Design",
    description:
      "Our visual identity services bring your brand to life through custom logo design, color palettes, typography, and graphic elements. We create a cohesive look that reflects your personality and captures attention.",
    features: [
      "Logo creation",
      "Brand color palette and typography",
      "Business cards and stationary design",
    ],
    image: branding,
    docLink: "https://en.wikipedia.org/wiki/Brand",
  },
  {
    name: "Brand Guidelines",
    description:
      "We develop comprehensive brand guidelines to maintain consistency across all touchpoints. From logo usage to color schemes and typography, your team will have clear direction to keep your brand unified and professional.",
    features: [
      "Comprehensive brand style guide",
      "Usage rules for logos, fonts, colors",
      "Guidelines for digital and print materials",
    ],
    image: guideline,
    docLink: "https://brandingstyleguides.com/",
  },
];

export default function Brand() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="text-white py-12 px-4 mt-8">
      <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row gap-10">
        {/* Sidebar */}
        <aside className="md:w-1/4">
          <h3 className="text-[#8f012d] font-semibold mb-6">Strategies</h3>
          <ul className="space-y-3">
            {services.map((service, index) => (
              <li key={index} className="w-fit">
                <button
                  onMouseEnter={() => setActiveIndex(index)}
                  className={`group inline-flex items-center font-semibold transition-colors cursor-pointer px-1 py-0.5 rounded ${index === activeIndex ? "text-white" : "text-gray-500"
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
            <h1 className="text-3xl font-bold mb-2">Brand Management</h1>
            <p className="text-gray-200 text-md">
              We build distinctive brand identities that capture the essence of
              your business and ensure consistency across all platforms. By
              aligning every visual and verbal element with your core values, we
              help your brand grow authentically and sustainably.
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
