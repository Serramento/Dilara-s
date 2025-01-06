import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const ImageSliderData3 = [
  {
    title: "Flexibilidad",
    description:
      "Creamos que ser flexible es el clave para retener y atraer talento humano aumentar la productividad. somos amantes de lo que hacemos y diseñamos su itinerario de forma flexible.",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
  },
  {
    title: "Personalización",
    description:
      "Trabajamos en base a sus gustos, preferencias y necesidades, asegurándose de que el viaje sea personalizado para ustedes.",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
  },
  {
    title: "Immersión Local",
    description: "Ofrecemos ofertas exclusivas y descuentos.",
    image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1",
  },
  {
    title: "Facilidad de Reserva",
    description: "Somos accesibles.",
    image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1",
  },
  {
    title: " Apoyo en Destino (24_7)",
    description:
      "Brindamos asistencia y apoyo durante todo el viaje, esperando que esto los brinda tranquilidad y seguridad durante su estancia en Turquía. Estamos pendientes para cualquier cosa cuando están en destino.",
    image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1",
  },
  {
    title: "Integración de Tecnología",
    description:
      "Usamos el plataforma Axus y nuestros itinerarios siempre son en español, portugués o ingles. Creamos código de barras según preferencia.",
    image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1",
  },
  {
    title: "Amplia Conexiones Locales (guia en Español, experiencias etc.)",
    description: "Contamos con experiencia y conocimiento en la industria.",
    image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1",
  },
];

const ImageSlider3 = () => {
  const [current, setCurrent] = useState(0);
  const length = ImageSliderData3.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(ImageSliderData3) || ImageSliderData3.length <= 0) {
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
    <section className="flex justify-center items-center max-[639px]:pt-8">
      <div>
        <ArrowButton direction="left" handleClick={prevSlide} />
        <ArrowButton direction="right" handleClick={nextSlide} />
      </div>
      <div className="text-center mb-12">
        <h2 className="text-lg font-bold text-[#98B8DF]">
          COMENTARIOS DE CLIENTES
        </h2>
        <h2 className="text-5xl font-bold text-[#39405A] pr-20">
          Viajeros Satisfechos
        </h2>
      </div>
      {ImageSliderData3.map((slide, index) => {
        return (
          <div key={index}>
            {index === current && (
              <div className="flex flex-row">
                <div className="shadow-md w-80 lg:w-65 bg-[#FAFAFA]">
                  <div className="h-80 lg:h-65 relative">
                    <img
                      src={slide.image}
                      className="w-full h-full object-cover "
                    />
                  </div>
                  <div className="m-7 text-left">
                    <h4 className="text-xl font-semibold mt-3 text-[#98B8DF]">
                      {slide.title}
                    </h4>
                    <p className="text-[#C0BABA] text-sm font-semibold text-left mt-3">
                      {slide.description}
                    </p>
                    <div className="flex flex-row justify-between mt-7">
                      <div className="flex flex-row text-bluex">
                        <i className="fa-regular fa-clock"></i>
                        <p className="text-[#C0BABA] text-xs font-semibold pl-1">
                          22 April 2021
                        </p>
                      </div>
                      <div className="flex flex-row text-[#98B8DF]">
                        <i className="fa-solid fa-chart-line"></i>
                        <p className="text-[#C0BABA] text-xs font-semibold pl-1">
                          10 comments
                        </p>
                      </div>
                    </div>
                    <div className="text-bluex">
                      <button className="text-[#39405A] font-bold text-sm mt-7 pr-1 mb-10 lg:mb-3">
                        Aprender Más
                      </button>
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        size="sm"
                        className="text-[#98B8DF] z-10"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider3;
