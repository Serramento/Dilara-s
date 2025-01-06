import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Navbar } from "../components/Navbar";

export default function Header() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Video */}
      <section className="relative h-screen">
        <video id="bannerVideo" autoPlay muted loop>
          <source
            src="https://video.wixstatic.com/video/31fb8b_ff06ce69847e4497be30ffd66b923974/480p/mp4/file.mp4"
            type="video/mp4"
            className="absolute inset-0 w-full h-full"
          />
        </video>
        <div className="absolute inset-0 bg-black/30" />{" "}
        {/* Reduced overlay opacity for better video visibility */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-row justify-between text-center text-white space-y-6 max-w-4xl px-4">
            <div className="-rotate-90 opacity-75">
              <p>VOLUTA</p>
              <div
                style={{
                  borderTop: "2px solid #fff opacity-75",
                  marginRight: 50,
                  height: 50,
                }}
              ></div>
            </div>
            <div className="relative ml-96">
              <h1 className="text-4xl md:text-6xl font-bold">Santa Sofia</h1>
              <div className="flex flex-row absolute right-0 mt-20">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="h-6 opacity-75 mt-1"
                />
                <p className="text-xl md:text-2xl opacity-75 pl-2">Estambul</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
