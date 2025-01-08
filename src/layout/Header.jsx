import Goleta from "../images/Goleta.mp4";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import DilarasLogo from "../images/DilarasLogo.png";

export default function Header(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="flex flex-col min-h-screen max-w-md md:max-w-7xl"
      ref={props.homeRef}
    >
      {/* Navbar */}
      <section className="flex justify-center">
        <nav className="fixed w-full bg-black/10 backdrop-blur-md z-50">
          <div className="max-w-md md:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-24">
              <div className="flex items-center">
                <Link
                  href="/"
                  className="w-44 md:w-36"
                  onClick={() =>
                    window.scrollTo({
                      top: props.homeRef.current.offsetTop,
                      behavior: "smooth",
                    })
                  }
                >
                  <img src={DilarasLogo} alt="DilarasLogo" />
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-4">
                <div>
                  <ul className="flex flex-row">
                    <li>
                      <Link
                        to="/"
                        onClick={() =>
                          window.scrollTo({
                            top: props.homeRef.current.offsetTop,
                            behavior: "smooth",
                          })
                        }
                      >
                        <div className="group inline-flex rounded-md h-10 w-max items-center justify-center text-[#FFFFFF] px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                          HOGAR
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        onClick={() =>
                          window.scrollTo({
                            top: props.aboutUsRef.current.offsetTop,
                            behavior: "smooth",
                          })
                        }
                      >
                        <div className="group inline-flex rounded-md h-10 w-max items-center justify-center text-[#FFFFFF] px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                          SOBRE NOSOTROS
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        onClick={() =>
                          window.scrollTo({
                            top: props.servicesRef.current.offsetTop,
                            behavior: "smooth",
                          })
                        }
                      >
                        <div className="group inline-flex rounded-md h-10 w-max items-center justify-center text-[#FFFFFF] px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                          SERVICIOS
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        onClick={() =>
                          window.scrollTo({
                            top: props.contactRef.current.offsetTop,
                            behavior: "smooth",
                          })
                        }
                      >
                        <div className="group inline-flex rounded-md h-10 w-max items-center justify-center text-[#FFFFFF] px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                          CONTACTO
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                >
                  <span className="sr-only">Open main menu</span>
                  {isOpen ? (
                    <X className="block h-6 w-6" />
                  ) : (
                    <Menu className="block h-6 w-6" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          {isOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link
                  href="/"
                  className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-[#98B8DF] hover:bg-gray-50"
                  onClick={() =>
                    window.scrollTo({
                      top: props.homeRef.current.offsetTop,
                      behavior: "smooth",
                    })
                  }
                >
                  HOGAR
                </Link>
                <Link
                  href="/"
                  className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-[#98B8DF] hover:bg-gray-50"
                  onClick={() =>
                    window.scrollTo({
                      top: props.aboutUsRef.current.offsetTop,
                      behavior: "smooth",
                    })
                  }
                >
                  SOBRE NOSOTROS
                </Link>
                <Link
                  href="/"
                  className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-[#98B8DF] hover:bg-gray-50"
                  onClick={() =>
                    window.scrollTo({
                      top: props.servicesRef.current.offsetTop,
                      behavior: "smooth",
                    })
                  }
                >
                  SERVICIOS
                </Link>
                <Link
                  href="/"
                  className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-[#98B8DF] hover:bg-gray-50"
                  onClick={() =>
                    window.scrollTo({
                      top: props.contactRef.current.offsetTop,
                      behavior: "smooth",
                    })
                  }
                >
                  CONTACTO
                </Link>
              </div>
            </div>
          )}
        </nav>
      </section>

      {/* Video */}
      <section className="relative h-screen md:h-[46rem]">
        <video
          src={Goleta}
          id="bannerVideo"
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full"
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
        ></video>
        <div className="absolute inset-0 bg-black/30" />{" "}
        {/* Reduced overlay opacity for better video visibility */}
        <div className="absolute bottom-0 flex items-center justify-center">
          <div className="flex flex-row justify-between text-center text-white space-y-6 max-w-6xl">
            <div className="hidden md:flex md:flex-col ml-64 bottom-0">
              <p className="-rotate-90 ">VOLUTA</p>
              <div className="vertical-line mb-1"></div>
            </div>
            <div className="relative mx-12 md:ml-64 bottom-20">
              <h1 className="text-4xl text-left md:text-right md:text-6xl font-bold opacity- italic leading-normal">
                La Bahía Escondida en el Mar Egeo
              </h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
