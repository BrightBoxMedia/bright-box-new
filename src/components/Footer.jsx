import React from "react";
import { SiFacebook, SiInstagram, SiWhatsapp, SiX } from "react-icons/si";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <section className="bg-white">
      <div className="max-w-[1240px] mx-auto py-16 px-4 text-gray-600">
        <div className="flex flex-col items-center lg:items-start mb-12 lg:mb-8">
          <a href="/">
            <img src="/bbm.png" className="h-26 mb-8" alt="Bright Box Media" />
          </a>
          <div className="flex justify-center lg:justify-start gap-6 w-full max-w-xs">
            <a
              className="duration-300 hover:text-[#8f102d]"
              href="https://www.facebook.com/people/Bright-Box-Media/61559693625624/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <SiFacebook size={27} />
            </a>

            <a
              className="duration-300 hover:text-[#8f102d]"
              href="https://www.instagram.com/brightbox_media/profilecard/?theme=dark"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <SiInstagram size={25} />
            </a>

            <a
              className="duration-300 hover:text-[#8f102d]"
              href="https://wa.link/bctgc8"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <SiWhatsapp size={25} />
            </a>

            <a
              className="duration-300 hover:text-[#8f102d]"
              href="https://www.x.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
            >
              <SiX size={24} />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="text-center sm:text-left">
            <h6 className="font-medium text-[#8f012d] mb-4">Development & Design</h6>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/services?category=Development" 
                  className="block py-1 text-sm hover:text-[#8f102d] transition-colors duration-300"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link 
                  to="/services?category=Development" 
                  className="block py-1 text-sm hover:text-[#8f102d] transition-colors duration-300"
                >
                  App Development
                </Link>
              </li>
              <li>
                <Link 
                  to="/services?category=Designing" 
                  className="block py-1 text-sm hover:text-[#8f102d] transition-colors duration-300"
                >
                  UX/UI Designing
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h6 className="font-medium text-[#8f012d] mb-4">Strategy & Marketing</h6>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/services?category=Strategies" 
                  className="block py-1 text-sm hover:text-[#8f102d] transition-colors duration-300"
                >
                  Brand Management
                </Link>
              </li>
              <li>
                <Link 
                  to="/services?category=Strategies" 
                  className="block py-1 text-sm hover:text-[#8f102d] transition-colors duration-300"
                >
                  Digital Transformation
                </Link>
              </li>
              <li>
                <Link 
                  to="/services?category=Strategies" 
                  className="block py-1 text-sm hover:text-[#8f102d] transition-colors duration-300"
                >
                  Engagement Strategies
                </Link>
              </li>
              <li>
                <Link 
                  to="/services?category=Marketing" 
                  className="block py-1 text-sm hover:text-[#8f102d] transition-colors duration-300"
                >
                  Marketing
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h6 className="font-medium text-[#8f012d] mb-4">Events & Solutions</h6>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/services?category=Events" 
                  className="block py-1 text-sm hover:text-[#8f102d] transition-colors duration-300"
                >
                  Fixtures and Events
                </Link>
              </li>
              <li>
                <Link 
                  to="/services?category=Events" 
                  className="block py-1 text-sm hover:text-[#8f102d] transition-colors duration-300"
                >
                  Gifting Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div className="text-center sm:text-left sm:col-span-2 lg:col-span-1">
            <h6 className="font-medium text-[#8f012d] mb-4">Legal</h6>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#" 
                  className="block py-1 text-sm hover:text-[#8f102d] transition-colors duration-300"
                >
                  Claim
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="block py-1 text-sm hover:text-[#8f102d] transition-colors duration-300"
                >
                  Policy
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="block py-1 text-sm hover:text-[#8f102d] transition-colors duration-300"
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-gray-200">
          <div className="text-sm mb-2">
            &copy; 2025 Bright Box Media. All rights reserved.
          </div>
          <div className="text-xs text-gray-500">
            Branding by Trigonal Ventures Services Pvt. Ltd.
          </div>
        </div>
      </div>
    </section>
  );
}