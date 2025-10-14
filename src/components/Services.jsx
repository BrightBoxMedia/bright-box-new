import React from "react";

export default function Services({ Sref }) {
  const handleClick = () => {
    // Navigate to services page
    console.log("Navigate to /services");
  };

  const categories = [
    {
      title: "Digital Experiences",
      subtitle: "Crafting seamless digital journeys with impactful design and technology.",
      icon: (
        <svg
          viewBox="0 0 64 64"
          className="h-8 w-8"
          xmlns="http://www.w3.org/2000/svg"
          strokeWidth="3"
          stroke="#000000"
          fill="none"
        >
          <g id="SVGRepo_iconCarrier">
            <path d="M39.93,55.72A24.86,24.86,0,1,1,56.86,32.15a37.24,37.24,0,0,1-.73,6"></path>
            <path d="M37.86,51.1A47,47,0,0,1,32,56.7"></path>
            <path d="M32,7A34.14,34.14,0,0,1,43.57,30a34.07,34.07,0,0,1,.09,4.85"></path>
            <path d="M32,7A34.09,34.09,0,0,0,20.31,32.46c0,16.2,7.28,21,11.66,24.24"></path>
            <line x1="10.37" y1="19.9" x2="53.75" y2="19.9"></line>
            <line x1="32" y1="6.99" x2="32" y2="56.7"></line>
            <line x1="11.05" y1="45.48" x2="37.04" y2="45.48"></line>
            <line x1="7.14" y1="32.46" x2="56.86" y2="31.85"></line>
            <path d="M53.57,57,58,52.56l-8-8,4.55-2.91a.38.38,0,0,0-.12-.7L39.14,37.37a.39.39,0,0,0-.46.46L42,53.41a.39.39,0,0,0,.71.13L45.57,49Z"></path>
          </g>
        </svg>
      ),
      services: [
        {
          name: "Web Development",
          description: "Build modern, scalable websites tailored to your brand."
        },
        {
          name: "App Development",
          description: "Develop secure, intuitive mobile apps for Android, iOS, and beyond."
        },
        {
          name: "UI/UX Designing",
          description: "Create sleek, user-first interfaces that enhance customer engagement."
        }
      ]
    },
    {
      title: "Brand Growth & Visibility",
      subtitle: "Helping brands stand out, connect, and grow in competitive markets.",
      icon: (
        <svg
          fill="#000000"
          className="h-8 w-8 fill-current"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_iconCarrier">
            <path d="M14.25 2.1a1.25 1.25 0 0 0-1.17-.1L6.91 4.43a1.22 1.22 0 0 1-.46.09H2.5a1.25 1.25 0 0 0-1.25 1.25v.1H0v3h1.25V9a1.25 1.25 0 0 0 1.25 1.22L4 13.4a1.26 1.26 0 0 0 1.13.72h.63A1.25 1.25 0 0 0 7 12.87v-2.53l6.08 2.43a1.27 1.27 0 0 0 .47.09 1.29 1.29 0 0 0 .7-.22 1.25 1.25 0 0 0 .55-1V3.13a1.25 1.25 0 0 0-.55-1.03zm-8.5 3.67V9H2.5V5.77zm0 7.1h-.63l-1.23-2.65h1.86zm1.62-3.72A2.29 2.29 0 0 0 7 9V5.7a2.26 2.26 0 0 0 .37-.11l6.18-2.46v8.48zm7.46-3.03v2.5a1.25 1.25 0 0 0 0-2.5z"></path>
          </g>
        </svg>
      ),
      services: [
        {
          name: "Marketing",
          description: "Blend traditional and digital strategies to reach the right audience."
        },
        {
          name: "Visibility Enhancement Services",
          description: "Boost brand presence with SEO, content, and smart strategies."
        },
        {
          name: "Brand Management",
          description: "Ensure consistent brand identity and long-term resonance."
        }
      ]
    },
    {
      title: "Experiences & Engagement",
      subtitle: "Creating memorable experiences that connect emotionally with audiences.",
      icon: (
        <svg
          fill="#000000"
          className="h-8 w-8 fill-current"
          version="1.1"
          viewBox="0 0 495.61 495.61"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_iconCarrier">
            <g>
              <g>
                <g>
                  <path d="M441.899,0H53.754C24.224,0,0.043,24.202,0.043,53.754v388.102c0,29.574,24.181,53.754,53.711,53.754h388.102 c29.574,0,53.711-24.224,53.711-53.754V53.754C495.632,24.202,471.429,0,441.899,0z M427.921,44.414 c13.978,0,25.367,11.346,25.367,25.367s-11.325,25.367-25.367,25.367c-14.043,0-25.367-11.346-25.367-25.367 S413.922,44.414,427.921,44.414z M348.778,44.393c13.999,0,25.389,11.346,25.389,25.389S362.799,95.17,348.778,95.17 s-25.389-11.346-25.389-25.389S334.778,44.393,348.778,44.393z M454.971,449.514H40.747V131.56h414.224V449.514z"></path>
                  <rect x="128.13" y="317.047" width="79.229" height="79.208"></rect>
                  <rect x="291.551" y="317.047" width="79.251" height="79.208"></rect>
                  <rect x="128.13" y="188.291" width="79.229" height="79.186"></rect>
                  <rect x="291.551" y="188.291" width="79.251" height="79.186"></rect>
                </g>
              </g>
            </g>
          </g>
        </svg>
      ),
      services: [
        {
          name: "Fixtures and Events",
          description: "Design unforgettable brand activations and events."
        },
        {
          name: "Thoughtful Gifting Solutions",
          description: "Deliver custom, brand-focused gifts for lasting impressions."
        },
        {
          name: "Digital Transformation",
          description: "Empower businesses to adopt technology for efficiency and growth."
        }
      ]
    }
  ];

  return (
    <section ref={Sref} className="bg-[#FFFAF0] py-8">
      <div className="container mx-auto px-4 space-y-6 md:py-12 lg:py-20">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-bold text-2xl leading-[1.1] sm:text-3xl md:text-4xl">
            Services
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            We provide a diverse set of solutions aimed at enhancing digital
            experiences, driving user engagement, and fostering business growth
            through innovative design, development, and personalized strategies.
          </p>
        </div>

        <div className="flex justify-center items-center">
          <button
            onClick={handleClick}
            className="relative bg-black text-white font-medium text-[17px] px-4 py-[0.35em] pl-5 h-[2.8em] rounded-[0.9em] flex items-center overflow-hidden cursor-pointer group"
          >
            <span className="mr-10">Learn more</span>
            <div className="absolute right-[0.3em] bg-[white] h-[2.2em] w-[2.2em] rounded-[0.7em] flex items-center justify-center transition-all duration-300 group-hover:w-[calc(100%-0.6em)] shadow-[0.1em_0.1em_0.6em_0.2em_#8f012d] active:scale-95">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="w-[1.1em] transition-transform duration-300 text-[#8f012d] group-hover:translate-x-[0.1em]"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  fill="currentColor"
                  d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                ></path>
              </svg>
            </div>
          </button>
        </div>

        <div className="mx-auto max-w-5xl space-y-16 pt-8">
          {categories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              <div className="space-y-3 text-center">
                <div className="flex items-center justify-center gap-4">
                  <div className="flex-shrink-0">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                    {category.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-base md:text-lg">
                  {category.subtitle}
                </p>
              </div>
              
              <div className="space-y-4 max-w-3xl mx-auto">
                {category.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="flex items-start gap-4 group">
                    <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#8f012d] text-white font-bold text-sm mt-0.5">
                      {serviceIndex + 1}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="text-lg font-semibold text-gray-900">
                          {service.name}
                        </h4>
                        <svg 
                          className="w-4 h-4 text-[#8f012d]" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                      <p className="text-gray-600 text-sm md:text-base mt-1">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}