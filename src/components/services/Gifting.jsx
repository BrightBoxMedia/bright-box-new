import { useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import gift from "../../assets/gift.png";

const services = [
  {
    name: "Tailored gifting options",
    description:
      "Our tailored gifting options are thoughtfully curated to match your brand’s voice and the recipient’s preferences. From personalized items to custom packaging, we ensure every gift feels unique and memorable.",
    features: [
      "Branded packaging and messaging",
      "Eco-Friendly and Ethical choices",
      "End-to-End Fulfillment",
    ],
    image: gift,
    docLink: "#",
  },
  {
    name: "Corporate/client gifting",
    description:
      "Strengthen business relationships with our corporate and client gifting solutions. Whether it's for onboarding, appreciation, or milestone celebrations, we deliver high-impact gifts that reflect your brand’s professionalism and care.",
    features: [
      "Employee appreciation kits",
      "Executive and VIP gifting programs",
      "Client onboarding and thank-you gifts",
    ],
    image: gift,
    docLink: "#",
  },
];

export default function Gifting() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="text-white py-12 px-4 mt-8">
      <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row gap-10">
        {/* Sidebar */}
        <aside className="md:w-1/4">
          <h3 className="text-[#8f012d] font-semibold mb-6">Events</h3>
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
            <h1 className="text-3xl font-bold mb-2">
              Thoughtful Gifting Solutions
            </h1>
            <p className="text-gray-200 text-md">
              We offer personalized, brand-aligned gifting solutions designed to
              deepen relationships and create lasting impressions. Each gift is
              thoughtfully curated to reflect your brand's values, ensuring a
              meaningful and memorable experience for your recipients.
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

            {/* Docs Link
            <a
              href={services[activeIndex].docLink}
              className="text-red-400 text-sm hover:underline inline-block mt-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read {services[activeIndex].name} docs ↗
            </a>*/}
          </div>
        </main>
      </div>
    </div>
  );
}
