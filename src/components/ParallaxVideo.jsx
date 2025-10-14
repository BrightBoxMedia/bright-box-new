import React, { useEffect, useRef } from "react";

export default function ParallaxVideo() {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const video = videoRef.current;
      const section = sectionRef.current;
      if (!video || !section) return;

      const rect = section.getBoundingClientRect();

      if (rect.top <= 0 && rect.bottom >= 0) {
        // Progress from 0 to 1 as you scroll through the section
        const progress = Math.min(Math.abs(rect.top) / section.offsetHeight, 1);
        const scaleValue = 1 + progress * 0.5; // Scale from 1 to 1.5

        video.style.transform = `scale(${scaleValue})`;
      } else if (rect.top > 0) {
        video.style.transform = "scale(1)";
      } else if (rect.bottom < 0) {
        video.style.transform = "scale(1)";
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        style={{
          height: "100vh",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <video
          ref={videoRef}
          src="https://youtu.be/Tn6-PIqc4UM?si=BWzmjEOu1cl8PPea"
          muted
          autoPlay
          loop
          playsInline
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transformOrigin: "center center",
            transition: "transform 0.3s ease-out",
          }}
        />
      </section>

      <section
        style={{
          height: "100vh",
          backgroundColor: "#f0f0f0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "2rem",
        }}
      ></section>
    </>
  );
}
