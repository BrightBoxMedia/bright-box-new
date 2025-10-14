import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Newsletter() {
  const form = useRef();
  const [email, setEmail] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_NEWSLETTER_SERVICE_ID,
        import.meta.env.VITE_NEWSLETTER_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          alert("Email sent successfully");
          setEmail("");
        },
        (error) => {
          alert("Failed to send email. Try again!");
          console.error(error);
        },
      );
  };

  return (
    <div className="w-full py-16 px-4 sm:px-6 wd:px-8 text-white bg-black">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Want to know about tech news daily?
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className="my-4">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col sm:flex-row items-center justify-between w-full"
          >
            <input
              name="user_email"
              className="p-3 flex w-full rounded-xl text-black bg-white focus:outline focus:outline-[#8f012d]"
              type="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            ></input>
            <div className="relative group p-3">
              <button className="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 cursor-pointer rounded-xl transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
                <span className="absolute inset-0 rounded-xl bg-red-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                <span className="relative z-10 block px-6 py-3 rounded-xl bg-[#8f012d] hover:bg-black">
                  <div className="relative z-10 flex items-center space-x-2">
                    <span className="transition-all duration-500 group-hover:translate-x-1">
                      Send
                    </span>
                    <svg
                      className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.25 17.25h-4.5m9-6v-2a6.75 6.75 0 10-13.5 0v2a5.25 5.25 0 01-1.5 3.69v.06a.75.75 0 00.75.75h15a.75.75 0 00.75-.75v-.06a5.25 5.25 0 01-1.5-3.69z"
                      />
                    </svg>
                  </div>
                </span>
              </button>
            </div>
          </form>
          <p>
            We care about the protection of your data. Read our{" "}
            <span className="underline hover:text-[#8f102d]">
              Privacy Policy.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
