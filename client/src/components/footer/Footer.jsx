import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-3xl mb-4 custom-font tracking-wider text-orange-500">
              Apollo Expeditions
            </h3>
            <p>Delivering unforgettable experiences.</p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-500">
              Contact Us
            </h4>
            <ul className="space-y-2">
              <li>Jaipur, Rajasthan (IN) | Dehradun, Uttarakhand (IN)</li>
              <li>Phone: +91 99830 65030</li>
              <li>
                Email:{" "}
                <a
                  className="hover:underline"
                  href="mailto:apolloexpeditions@outlook.in"
                >
                  {" "}
                  apolloexpeditions@outlook.in
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-500">
              Follow Us
            </h4>
            <div className="flex space-x-4 ">
              <a
                href="https://qr.me-qr.com/ZuGm4lyw"
                target="_blank"
                className="hover:text-white"
              >
                <FaFacebook className="text-[22px]" />
              </a>
              <a
                href="https://qr.me-qr.com/522QzcQU"
                target="_blank"
                className="hover:text-white"
              >
                <FaInstagram className="text-[23px]" />
              </a>
              <a
                href="https://qr.me-qr.com/0bSIOXmp"
                target="_blank"
                className="hover:text-white"
              >
                <FaYoutube className="text-[24px]" />
              </a>
              <a
                href="https://qr.me-qr.com/92rGVIuT"
                target="_blank"
                className="hover:text-white"
              >
                <FaWhatsapp className="text-[24px]" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-7 pt-7 text-center Third">
          <p>&copy; 2025 Apollo Expeditions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
