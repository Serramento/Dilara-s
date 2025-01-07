import React from "react";
import { Link } from "react-router-dom";
import DilarasLogo from "../images/DilarasLogo.png";
import { Instagram, Linkedin } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelopeOpen,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <div className="max-w-md md:max-w-7xl">
      {/* Contact Info */}
      <section className="py-20 bg-primary text-white bg-[#98B8DF]">
        <div className="max-w-7xl flex flex-col items-center justify-center md:flex-row mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <Link href="/" className="items-center w-44 mt-24 mb-16 md:mr-24">
            <img src={DilarasLogo} alt="DilarasLogo" />
          </Link>
          <div className="space-y-4 mb-16 md:mr-24">
            <h3 className="text-lg font-semibold text-center md:text-left">
              Ponte en Contacto
            </h3>
            <ul className="space-y-2 text-white ">
              <div className="flex flex-row w-64">
                <FontAwesomeIcon icon={faPhone} className="h-6 mt-1 mr-2" />
                <li>+90 216 326 58 56</li>
              </div>
              <div className="flex flex-row w-64">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="h-6 mt-1 mr-2"
                />
                <li>
                  Kosuyolu Mah. Imar Limited Sk. Laila Apt. No:24 D:1
                  Kadikoy/Istanbul TURQUÍA
                </li>
              </div>
              <div className="flex flex-row w-64">
                <FontAwesomeIcon
                  icon={faEnvelopeOpen}
                  className="h-6 mt-1 mr-2"
                />
                <li>
                  dilara@earthlighttravel.com <br /> ugur@earthlighttravel.com
                </li>
              </div>
            </ul>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.803237059692!2d29.03705507589835!3d41.007679671350616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab95eb3e9ca39%3A0xed1b02ec1b80dfaa!2sEarthlight%20Travel%20Services!5e0!3m2!1str!2str!4v1736174244800!5m2!1str!2str"
            width="350"
            height="250"
          ></iframe>
        </div>
      </section>

      {/* Footer */}
      <section>
        <div className="pt-8 border-t bg-[#39405A]">
          <div className="flex flex-col max-w-7xl md:flex-row justify-between items-center gap-4">
            <p className="text-white">
              © {new Date().getFullYear()} Earthlight Travel. All rights
              reserved.
            </p>
            <div className="flex space-x-4">
              <Link
                to="https://www.instagram.com/earthlighttravel?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                className="text-[#98B8DF] hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                to="https://tr.linkedin.com/company/earthlight-travel-services"
                className="text-[#98B8DF] hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
