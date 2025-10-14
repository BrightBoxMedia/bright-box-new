import { Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home.jsx";
import { useState, useEffect } from "react";
import LogoAnimaiton from "../src/components/LogoAnimation.jsx";
import Services from "../src/pages/ServicesPage.jsx";
import ShowCase from "./pages/ShowCase.jsx";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <LogoAnimaiton />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          {/* <Route path="/showcase" element={<ShowCase />} /> */}
        </Routes>
      )}
    </>
  );
}
