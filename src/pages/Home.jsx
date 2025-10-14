import React from "react";
import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import Newsletter from "../components/Newsletter.jsx";
import Testimonials from "../components/Testimonials.jsx";
import Card from "../components/Cards.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";
import Services from "../components/Services.jsx";
import Navbar from "../components/Navbar.jsx";
import { useRef } from "react";
import FadeInOnView from "../components/FadeInOnView.jsx";
import { useLayoutEffect } from "react";

export default function Home() {
  useLayoutEffect(() => {
    if (window.location.hash) {
      setTimeout(() => {
        const element = document.querySelector(window.location.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    } else {
      window.scrollTo(0, 0);
    }
  }, []);
  const contactRef = useRef();
  const servicesRef = useRef();
  const aboutRef = useRef();

  return (
    <>
      <Navbar contactRef={contactRef} aboutRef={aboutRef} />

      <FadeInOnView>
        <Hero servicesRef={servicesRef} />
      </FadeInOnView>

      <FadeInOnView>
        <About contactRef={contactRef} Aref={aboutRef} />
        <Card />
      </FadeInOnView>

      <Newsletter />
      <Services Sref={servicesRef} />
      <Testimonials />
      <Contact ref={contactRef} />
      <Footer />
    </>
  );
}
