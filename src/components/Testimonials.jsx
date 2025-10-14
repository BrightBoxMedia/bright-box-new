import React from "react";

const testimonials = [
  {
    name: "Prakash Kumar",
    role: "HR Manager",
    image: "/default.jpg",
    quote:
      "The employee portal developed by your team has streamlined our hiring process. It's intuitive, fast, and has made coordination much easier. Truly appreciated!",
  },
  {
    name: "Neha Sharma",
    role: "Operations Head",
    image: "/default.jpg",
    quote:
      "Your website design and backend support have significantly improved our online presence. Our clients love the interface, and we’ve seen a boost in engagement.",
  },
  {
    name: "Ravi Verma",
    role: "IT Consultant",
    image: "/default.jpg",
    quote:
      "From planning to execution, your team delivered exactly what we needed for our internal portal. Timely updates, responsive design, and great support. Thank you!",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Left Side */}
        <div className="md:w-1/2">
          <div className="inline-block px-3 py-1 mb-4 text-sm font-medium bg-[#8f012d] text-white rounded">
            HAPPY CLIENTS
          </div>
          <h2 className="text-4xl font-bold mb-4">
            What our clients say about our services
          </h2>
          <p className="text-gray-600 mb-6">
            We provide customized solutions tailored to our clients unique
            business needs, ensuring sustainable success.
          </p>
          <a href="#" className="text-[#8f012d] underline hover:text-red-500">
            Read other reviews
          </a>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 space-y-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className={`${idx !== 0 ? "border-t pt-6" : ""}`}>
              <p className="text-gray-700 mb-4">“{t.quote}”</p>
              <div className="flex items-center gap-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
