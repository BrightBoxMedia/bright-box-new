import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact({ ref }) {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_CONTACT_SERVICE_ID,
        import.meta.env.VITE_CONTACT_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          alert("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          alert("Something went wrong! Try again later.");
          console.error(error.text);
        },
      );
  };
  return (
    <div ref={ref} id="contact" className="bg-[#0a0a0a] text-white py-26 px-6">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let’s get in <br /> touch with us
          </h2>
          <p className="text-gray-300 mb-8">
            Email, call or complete the form to connect with us. We’ll get back
            to you within 24 hours.
          </p>

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-sm text-gray-400">Phone</h4>
              <p className="text-lg">+91 7483482405</p>
            </div>
            <div>
              <h4 className="font-semibold text-sm text-gray-400">Email</h4>
              <p className="text-lg">support@brightboxmedia.in</p>
            </div>
            <div>
              <h4 className="font-semibold text-sm text-gray-400">Office</h4>
              <p className="text-lg">
                Third Floor, Sankeys Burger Building, Hennur Main Rd, St Thomas
                Town, Kacharakanahalli, Bengaluru, Karnataka 560084
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="bg-[#111111] p-8 rounded-xl shadow-xl">
          <h3 className="text-2xl font-semibold mb-2">Get in Touch</h3>
          <p className="text-gray-400 mb-6">
            We’ll get back to you within 24 hours.
          </p>

          <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                name="first_name"
                type="text"
                placeholder="First name"
                className="bg-[#1c1c1c] border border-gray-700 text-white p-3 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-[#8f012d]"
                required
              />
              <input
                name="last_name"
                type="text"
                placeholder="Last name"
                className="bg-[#1c1c1c] border border-gray-700 text-white p-3 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-[#8f012d]"
                required
              />
            </div>
            <input
              name="user_email"
              type="email"
              placeholder="youremail@company.com"
              className="bg-[#1c1c1c] border border-gray-700 text-white p-3 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-[#8f012d]"
              required
            />
            <input
              name="phone"
              type="tel"
              placeholder="+91 1234567890"
              className="bg-[#1c1c1c] border border-gray-700 text-white p-3 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-[#8f012d]"
              required
            />
            <textarea
              name="message"
              placeholder="Type your message"
              rows="4"
              className="bg-[#1c1c1c] border border-gray-700 text-white p-3 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-[#8f012d]"
              required
            />
            <button
              type="submit"
              className="w-full bg-[#8f012d] hover:bg-transparent border border-[#8f012d] text-white font-semibold py-3 px-4 rounded-xl transition-transform ease-in-out hover:scale-101 active:scale-100 duration-300"
            >
              <div>Send Message</div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
