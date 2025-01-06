import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import CataDeVino from "../images/Carousel/CataDeVino.jpg";
import CeramoniaDeLosDerviches from "../images/Carousel/CeramoniaDeLosDerviches.jpg";
import ClaseDeCocinaPrivada from "../images/Carousel/ClaseDeCocinaPrivada.jpg";
import CulinariosDeEstambul from "../images/Carousel/CulinariosDeEstambul.jpg";
import DesayunaConLosGlobos from "../images/Carousel/DesayunaConLosGlobos.jpg";
import ExperienciaDeBicicletaEnCapadocia from "../images/Carousel/ExperienciaDeBicicletaEnCapadocia.jpg";
import ExperienciaDeBañoTurco from "../images/Carousel/ExperienciaDeBañoTurco.jpg";
import HelicopteroViajePorEncimaDeEstambul from "../images/Carousel/HelicopteroViajePorEncimaDeEstambul.png";
import ViajeEnGoleta from "../images/Carousel/ViajeEnGoleta.jpg";
import VisitaPrivadaDelAzoteaDeGranBazar from "../images/Carousel/VisitaPrivadaDelAzoteaDeGranBazar.jpeg";

const ImageSliderData2 = [
  {
    title: "Cata de Vino",
    src: CataDeVino,
  },
  {
    title: "Ceramonia de Los Derviches",
    src: CeramoniaDeLosDerviches,
    alt: "CeramoniaDeLosDerviches",
  },
  {
    title: "Clase de Cocina Privada",
    src: ClaseDeCocinaPrivada,
    alt: "ClaseDeCocinaPrivada",
  },
  {
    title: "Culinarios de Estambul",
    src: CulinariosDeEstambul,
    alt: "CulinariosDeEstambul",
  },
  {
    title: "Desayuna con Los Globos",
    src: DesayunaConLosGlobos,
    alt: "DesayunaConLosGlobos",
  },
  {
    title: "Experiencia de Bicicleta en Capadocia",
    src: ExperienciaDeBicicletaEnCapadocia,
    alt: "ExperienciaDeBicicletaEnCapadocia",
  },
  {
    title: "Experiencia de Baño Turco",
    src: ExperienciaDeBañoTurco,
    alt: "ExperienciaDeBañoTurco",
  },
  {
    title: "Helicoptero Viaje por Encima de Estambul",
    src: HelicopteroViajePorEncimaDeEstambul,
    alt: "HelicopteroViajePorEncimaDeEstambul",
  },
  {
    title: "Viaje en Goleta",
    src: ViajeEnGoleta,
    alt: "ViajeEnGoleta",
  },
  {
    title: "Visita Privada del Azotea de Gran Bazar",
    src: VisitaPrivadaDelAzoteaDeGranBazar,
    alt: "VisitaPrivadaDelAzoteaDeGranBazar",
  },
];

const ImageSlider2 = () => {
  const [current, setCurrent] = useState(0);
  const length = ImageSliderData2.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(ImageSliderData2) || ImageSliderData2.length <= 0) {
    return null;
  }

  const ArrowButton = ({ direction, handleClick }) => (
    <FontAwesomeIcon
      icon={direction === "left" ? faChevronLeft : faChevronRight}
      size="xl"
      className="hover:text-[#737373]"
      onClick={handleClick}
    />
  );

  return (
    <section className="font-montserrat relative h-full flex justify-center items-center max-[639px]:pt-8">
      <ArrowButton direction="left" handleClick={prevSlide} />

      {ImageSliderData2.map((slide, index) => {
        return (
          <div key={index}>
            {index === current && (
              <div className="md:h-[30rem] md:w-[70rem] w-full h-full object-cover">
                <div className="absolute w-60 mt-36 md:w-[50rem] md:text-left lg:mt-10">
                  <h2 className="font-bold text-3xl text-[#FFFFFF] mt-5 md:text-5xl md:mt-10">
                    {slide.title}
                  </h2>
                </div>
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="w-full h-full"
                />
              </div>
            )}
          </div>
        );
      })}

      <ArrowButton direction="right" handleClick={nextSlide} />
    </section>
  );
};

export default ImageSlider2;
