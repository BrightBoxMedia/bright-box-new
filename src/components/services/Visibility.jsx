import { useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import content from "../../assets/content.png";
import seo from "../../assets/seo.png";
import brand from "../../assets/brand.png";

const services = [
  {
    name: "SEO",
    description:
      "Our SEO services are designed to elevate your website's visibility in search engines through comprehensive keyword research, on-page optimization, technical audits, and backlink strategies. We ensure your site ranks higher, attracts qualified traffic, and delivers measurable results.",
    features: [
      "Keywoard research and stratergy",
      "On-page and Off-page Optimization",
      "Local SEO services",
    ],
    image: seo,
    docLink: "https://en.wikipedia.org/wiki/Search_engine_optimization",
  },
  {
    name: "Content Marketing",
    description:
      "We craft compelling, SEO-optimized content that resonates with your audience and drives engagement. From blog posts to landing pages, our content strategy focuses on providing value, improving user experience, and supporting your business goals.",
    features: [
      "Engaging blog posts and articles",
      "Website and landing page content",
      "Content calendar planning",
    ],
    image: content,
    docLink: "https://en.wikipedia.org/wiki/Content_marketing",
  },
  {
    name: "Brand Enhancements",
    description:
      "Enhance your brand's presence across digital platforms through strategic visibility efforts, including Google My Business optimization, authority-building backlinks, and online reputation management. We help your brand stand out and stay top-of-mind.",
    features: [
      "Authority building through backlinks",
      "Google My business Optimization",
      "Review and reputation management",
    ],
    image: brand,
    docLink: "https://en.wikipedia.org/wiki/Brand_engagement",
  },
];

export default function Visibility() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section>
      <div className="text-white py-12 px-4 mt-8">
        <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row gap-10">
          {/* Sidebar */}
          <aside className="md:w-1/4">
            <h3 className="text-[#8f012d] font-semibold mb-6">Stratergies</h3>
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
                Visibility Enhancement Services
              </h1>
              <p className="text-gray-200 text-md">
                Boosting your brand's visibility through a strategic blend of
                Search Engine Optimization (SEO), high-quality content creation,
                and intelligent marketing tactics. Our goal is to help your
                brand stand out in competitive markets by increasing organic
                traffic, enhancing audience engagement, and establishing a
                strong online presence.
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
    </section>
  );
}
