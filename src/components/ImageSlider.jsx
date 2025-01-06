import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const ImageSliderData = [
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

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const length = ImageSliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(ImageSliderData) || ImageSliderData.length <= 0) {
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
      {ImageSliderData.map((slide, index) => {
        return (
          <div key={index}>
            {index === current && (
              <div className="flex flex-row">
                <div className="w-60 mt-36 md:w-[50rem] md:text-left lg:mt-10">
                  <h5 className="text-lg font-bold text-[#98B8DF]">
                    ¿QUE OFRECEMOS?
                  </h5>
                  <h2 className="text-5xl font-bold text-[#39405A] px-96">
                    {slide.title}
                  </h2>
                  <h4 className="mt-4 text-lg text-[#C0BABA]">
                    {slide.description}
                  </h4>
                </div>
                ;
                <div className="h-[50rem] w-[50rem]">
                  <img
                    src={slide.image}
                    alt="travel image"
                    className="w-full h-full rounded-full"
                  />
                </div>
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
