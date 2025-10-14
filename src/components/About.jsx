import React from "react";
import Image from "../assets/about2.png";

export default function About({ contactRef, Aref }) {
  const handleScroll = () => {
    contactRef?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div ref={Aref} id="about" className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          className="w-[500px] mx-auto my-4"
          src={Image}
          alt="End-To-End Business Solutions"
        />
        <div className="flex flex-col justify-center">
          <p className="text-[#8f012d] font-bold">INNOVATION DRIVES IMPACT</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            We Deliver End-to-End Business Solutions, Empowering Your Growth
            Every Step of the Way!
          </h1>
          <p>
            Our innovative strategies and cutting-edge technology help
            streamline your operations for maximum efficiency. We provide
            customized solutions tailored to your unique business needs,
            ensuring sustainable success.
          </p>

          <div className="relative group mt-10 flex justify-center sm:justify-start">
            <a>
              <button
                onClick={handleScroll}
                className="relative inline-block p-px font-semibold leading-6 text-white bg-red-900 cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
              >
                <span className="absolute inset-0 rounded-xl bg-[#8f012d] p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                <span className="relative z-10 block px-6 py-3 rounded-xl bg-black hover:bg-white hover:text-[#8f012d]">
                  <div className="relative z-10 flex items-center space-x-2">
                    <span className="transition-all duration-500 group-hover:translate-x-1">
                      Contact Us
                    </span>
                    <svg
                      className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2.94 4.44A2 2 0 0 1 4.67 4h10.66a2 2 0 0 1 1.73.94l-6.06 4.54a1 1 0 0 1-1.22 0L2.94 4.44ZM2 6.13V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6.13l-6.4 4.8a3 3 0 0 1-3.6 0L2 6.13Z" />
                    </svg>
                  </div>
                </span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
