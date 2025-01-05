import React from "react";
import { Link } from "react-router-dom";
import DilarasLogo from "../images/DilarasLogo.png";
import { Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <div>
      {/* Contact Info */}
      <section className="py-20 bg-primary text-white bg-[#98B8DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link href="/" className="flex items-center w-36">
            <img src={DilarasLogo} alt="DilarasLogo" />
          </Link>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Ponte en Contacto</h3>
            <ul className="space-y-2 text-white">
              <li>+90 216 326 58 56</li>
              <li>
                Kosuyolu Mah. Imar Limited Sk. Laila Apt. No:24 D:1
                Kadikoy/Istanbul TURQUÍA
              </li>
              <li>dilara@earthlighttravel.com ugur@earthlighttravel.com</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section>
        <div className="mt-8 pt-8 border-t bg-[#39405A]">
          <div className="flex flex-col max-w-7xl md:flex-row justify-between items-center gap-4">
            <p className="text-white">
              © {new Date().getFullYear()} Earthlight Travel. All rights
              reserved.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-[#98B8DF] hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
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
