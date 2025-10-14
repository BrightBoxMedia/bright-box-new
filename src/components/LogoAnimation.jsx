import { motion } from "framer-motion";
import logo from "/bbm-2.0(b).svg";

export default function Preloader() {
  return (
    <>
      <div className="fixed inset-0 bg-[#FFFAF0] z-50 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: [0.7, 0, 0.3, 1] }}
          className="logo-container relative"
        >
          <img
            src={logo}
            alt="Logo"
            className="logo w-[180px] h-auto relative z-10"
          />

          <div className="absolute top-0 left-0 z-20 mask-animation">
            <img
              src={logo}
              alt="Logo Animation"
              className="logo w-[180px] h-auto white-logo"
            />
          </div>
        </motion.div>
      </div>
      <style>{`
        .logo-container {
          position: relative;
          display: inline-block;
        }
        
        /* Make the second logo image white */
        .white-logo {
          filter: brightness(0);
        }
        
        .mask-animation {
          mask-image: linear-gradient(to right, white 0%, white 50%, transparent 50%, transparent 100%);
          mask-size: 200% 100%;
          animation: maskSlide 3s ease-in-out infinite;
        }
        
        @keyframes maskSlide {
          0% {
            mask-position: 100% 0;
          }
          40% {
            mask-position: 0% 0;
          }
          60% {
            mask-position: 0% 0;
          }
          100% {
            mask-position: 100% 0;
          }
        }
      `}</style>
    </>
  );
}
