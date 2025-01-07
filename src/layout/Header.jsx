import React from "react";
import { Navbar } from "../components/Navbar";
import Goleta from "../images/Goleta.mp4";

export default function Header() {
  return (
    <div className="flex flex-col min-h-screen max-w-md md:max-w-7xl">
      {/* Navbar */}
      <section className="flex justify-center">
        <Navbar />
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
        <div className="absolute bottom-20 flex items-center justify-center">
          <div className="flex flex-row justify-between text-center text-white space-y-6 max-w-6xl">
            <div className="hidden md:flex ml-64 mb-20">
              <p className="-rotate-90 ">VOLUTA</p>
            </div>
            <div className="relative mx-12 md:ml-64">
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
