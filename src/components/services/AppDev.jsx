import { useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import apple from "../../assets/apple.png";
import android from "../../assets/android.png";
import app from "../../assets/app.png";

const services = [
  {
    name: "Android",
    description:
      "Reach the majority of global mobile users with powerful and engaging Android applications! Leveraging the world's most popular operating system, we craft intuitive and feature-rich experiences that connect with a vast and diverse audience.",
    features: ["Android Studio - By Google", "Jetpack Compose", "Firebase"],
    image: android,
    docLink: "https://en.wikipedia.org/wiki/Android",
  },
  {
    name: "iOS",
    description:
      "Deliver premium mobile experiences to a highly engaged user base with sleek and powerful iOS applications. We specialize in crafting elegant and intuitive apps that seamlessly integrate with the Apple ecosystem, offering exceptional performance and a refined user journey.",
    features: ["Xcode - Apple's IDE", "TestFlight", "SwiftUI"],
    image: apple,
    docLink: "https://en.wikipedia.org/wiki/Ios",
  },
  {
    name: "Cross-Platfrom",
    description:
      "Maximize your reach and efficiency with cross-platform applications that run seamlessly on both Android and iOS from a single codebase. Our development approach leverages cutting-edge frameworks to deliver cost-effective, high-performance apps without compromising the native user experience.",
    features: [
      "Flutter - by Google",
      "React Native - by Meta",
      "Xamarin - by Microsoft",
      "Ionic",
    ],
    image: app,
    docLink: "https://en.wikipedia.org/wiki/Mobile_app_development",
  },
];

export default function AppDev() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section>
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
              <h1 className="text-3xl font-bold mb-2">App Development</h1>
              <p className="text-gray-200 text-md">
                Developing native and cross-platform mobile applications with
                user-centered design principles results in fluid and captivating
                experiences on the go. Furthermore, a cohesive brand identity
                and adaptable layouts, utilizing the latest mobile technologies,
                guarantee accessibility and a consistent user journey across
                diverse devices and operating systems.
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
