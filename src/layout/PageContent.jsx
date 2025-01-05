import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Alacati from "../images/KayanFotolar/Alacati.jpg";
import BicycleAlacati from "../images/KayanFotolar/BicycleAlacati.jpg";
import blueVoyage from "../images/KayanFotolar/blueVoyage.jpg";
import Bodrum from "../images/KayanFotolar/Bodrum.jpg";
import CappadociaLandscape from "../images/KayanFotolar/CappadociaLandscape.jpg";
import cappadociaReligiousHistory from "../images/KayanFotolar/cappadociaReligiousHistory.jpg";
import EphesusCelsiusLibrary from "../images/KayanFotolar/EphesusCelsiusLibrary.jpg";
import EphesusRuins from "../images/KayanFotolar/EphesusRuins.jpg";
import HouseofVirginMary from "../images/KayanFotolar/HouseofVirginMary.jpg";
import LocalCuisine from "../images/KayanFotolar/LocalCuisine.jpg";
import ReligiousIstanbul from "../images/KayanFotolar/ReligiousIstanbul.jpg";
import seafood from "../images/KayanFotolar/seafood.jpg";
import SpiceBazaar from "../images/KayanFotolar/SpiceBazaar.jpg";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Dilara from "../images/WhoWeAre/Dilara.png";
import Ugur from "../images/WhoWeAre/Ugur.png";
import InstagramContent from "../components/InstagramContent";
import ContactForm from "../components/ContactForm";

const InstagramData = [
  {
    title: "Swissotel The Bosphorus",
    description:
      "Swissotel The Bosphorus, Istanbul is a five-star luxury hotel right in the centre of Istanbul on the European banks of the Bosphorus. Nestled within 65 acres of historical gardens with world-class shopping and vibrant nightlife nearby, it offers 566 guest rooms and suites, featuring state-of-the-art technology and exclusive amenities.",
    image:
      "https://www.instagram.com/p/DC6QTwjg-0S/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==",
    href: "https://www.instagram.com/p/DC6QTwjg-0S/?img_index=1",
  },
  {
    title: "Istanbul, Turkiye",
    description:
      "Anchored on the European shores of the Bosphorus strait in a historical building from the 1930’s, Shangri-La Bosphorus sits in the Beşiktaş district and is only a 15 minute walk from the iconic Dolmabahçe Palace. Guests will find solace in chandelier-accented rooms and suites accentuated by soothing cool tones, inspired by palatial...",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
    href: "https://www.instagram.com/reel/DBGqTa5AMu9/",
  },
  {
    title: "Rixos Tersane Istanbul",
    description:
      "Nestled along the Haliç, Rixos Tersane Istanbul epitomises unmatched guest experiences and service excellence. Dedicated to redefining Istanbul’s lifestyle scene, the hotel is an eclectic fusion, creating an urban hotspot and lifestyle hub with panoramic views of the Haliç. Situated in Istanbul’s historic Tersane district along the Golden Horn...",
    image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1",
    href: "https://www.instagram.com/p/DAGe8iyoIJ0/?img_index=1",
  },
];

export default function PageContent() {
  return (
    <div>
      {/* About Us */}
      <section>
        <div className="py-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#FAFAFA]">
          <div className="text-center">
            <h5 className="text-lg font-bold text-[#98B8DF]">SOBRE NOSOTROS</h5>
            <h2 className="text-5xl font-bold text-[#39405A] px-96">
              Somos su Socia Local en Turquia
            </h2>
            <p className="mt-4 text-lg text-[#C0BABA] px-48">
              Contarán con nosotros para crear sus itinerarios y poder dejar
              todo en manos de nuestro equipo dedicado y profesional. ¡Le
              aseguramos que nuestro apasionado equipo estará a su disposición
              para hacer realidad sus sueños! Somos una empresa de Agencia de
              Viajes de lujo ubicada en Estambul que ofrece un servicio
              impecable a sus estimados huéspedes de todo el mundo. Creamos
              experiencias de viaje exquisitas y nos ocupamos de cada aspecto de
              sus necesidades para que su viaje sea el más memorable.
            </p>
          </div>
        </div>
      </section>

      {/* Kayan Fotolar */}
      <section>
        <Swiper
          slidesPerView={5}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          speed={5000}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
        >
          <SwiperSlide>
            <img src={Alacati} alt="Alacati" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={BicycleAlacati} alt="BicycleAlacati" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={blueVoyage} alt="blueVoyage" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Bodrum} alt="Bodrum" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={CappadociaLandscape} alt="CappadociaLandscape" />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={cappadociaReligiousHistory}
              alt="cappadociaReligiousHistory"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img src={EphesusCelsiusLibrary} alt="EphesusCelsiusLibrary" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={EphesusRuins} alt="EphesusRuins" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={HouseofVirginMary} alt="HouseofVirginMary" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={LocalCuisine} alt="LocalCuisine" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={ReligiousIstanbul} alt="ReligiousIstanbul" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={seafood} alt="seafood" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={SpiceBazaar} alt="SpiceBazaar" />
          </SwiperSlide>
        </Swiper>
      </section>

      {/* What We Offer */}
      <section className="max-w-7xl">
        <div className="py-40  mx-auto px-4 sm:px-6 lg:px-8 bg-[#FAFAFA]">
          <div className="text-center">
            <h5 className="text-lg font-bold text-[#98B8DF]">
              ¿QUE OFRECEMOS?
            </h5>
            <CarouselProvider
              naturalSlideWidth={500}
              naturalSlideHeight={500}
              totalSlides={5}
              className="max-w-7xl mx-auto"
              infinite={true}
            >
              <ButtonBack>
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  size="3x"
                  className="hover:text-[#737373] z-10"
                />
              </ButtonBack>
              <ButtonNext>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  size="3x"
                  className="hover:text-[#737373] z-10"
                />
              </ButtonNext>
              <Slider>
                <Slide index={0}>
                  <img src={CataDeVino} alt="CataDeVino" />
                  <div className="text-xl font-bold z-10">Cata de Vino</div>
                </Slide>
                <Slide index={1}>
                  <img
                    src={CeramoniaDeLosDerviches}
                    alt="CeramoniaDeLosDerviches"
                  />
                </Slide>
                <Slide index={2}>
                  <img src={ClaseDeCocinaPrivada} alt="ClaseDeCocinaPrivada" />
                </Slide>
                <Slide index={3}>
                  <img src={CulinariosDeEstambul} alt="CulinariosDeEstambul" />
                </Slide>
                <Slide index={4}>
                  <img src={DesayunaConLosGlobos} alt="DesayunaConLosGlobos" />
                </Slide>
              </Slider>
            </CarouselProvider>
          </div>
        </div>
      </section>

      {/* Carousel */}
      <section>
        <CarouselProvider
          naturalSlideWidth={200}
          naturalSlideHeight={125}
          totalSlides={10}
          className="max-w-7xl mx-auto"
          infinite={true}
        >
          <Slider>
            <Slide index={0}>
              <img src={CataDeVino} alt="CataDeVino" />
              <div className="text-xl font-bold z-10">Cata de Vino</div>
            </Slide>
            <Slide index={1}>
              <img
                src={CeramoniaDeLosDerviches}
                alt="CeramoniaDeLosDerviches"
              />
            </Slide>
            <Slide index={2}>
              <img src={ClaseDeCocinaPrivada} alt="ClaseDeCocinaPrivada" />
            </Slide>
            <Slide index={3}>
              <img src={CulinariosDeEstambul} alt="CulinariosDeEstambul" />
            </Slide>
            <Slide index={4}>
              <img src={DesayunaConLosGlobos} alt="DesayunaConLosGlobos" />
            </Slide>
            <Slide index={5}>
              <img src={ExperienciaDeBañoTurco} alt="ExperienciaDeBañoTurco" />
            </Slide>
            <Slide index={6}>
              <img
                src={ExperienciaDeBicicletaEnCapadocia}
                alt="ExperienciaDeBicicletaEnCapadocia"
              />
            </Slide>
            <Slide index={7}>
              <img
                src={HelicopteroViajePorEncimaDeEstambul}
                alt="HelicopteroViajePorEncimaDeEstambul"
              />
            </Slide>
            <Slide index={8}>
              <img src={ViajeEnGoleta} alt="ViajeEnGoleta" />
            </Slide>
            <Slide index={9}>
              <img
                src={VisitaPrivadaDelAzoteaDeGranBazar}
                alt="VisitaPrivadaDelAzoteaDeGranBazar"
              />
            </Slide>
          </Slider>
          <ButtonBack>
            <FontAwesomeIcon
              icon={faChevronLeft}
              size="3x"
              className="hover:text-[#737373] z-10"
            />
          </ButtonBack>
          <ButtonNext>
            <FontAwesomeIcon
              icon={faChevronRight}
              size="3x"
              className="hover:text-[#737373] z-10"
            />
          </ButtonNext>
        </CarouselProvider>
      </section>

      {/* Who we are */}
      <section className="py-20 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h5 className="text-lg font-bold text-[#98B8DF]">
              ¿QUIENES SOMOS?
            </h5>
            <div>
              <div className="flex flex-row">
                <img src={Dilara} alt="Dilara" className="w-60" />
                <div>
                  <h5 className="text-lg font-bold text-[#39405A]">
                    Dilara Bayramoglu
                  </h5>
                  <p className="text-lg text-[#39405A]">Creativa de la Marca</p>
                  <p className="mt-4 text-md text-[#C0BABA]">
                    ¡Hola! Soy Dilara. Me gradué del Liceo Francés Sainte
                    Pulchérie y termine mis estudios en la Universidad de
                    Istanbul sobre traducción Francés y Español.  Después de
                    graduarme tuve oportunidad de empezar con el sector turismo
                    en el segmento de lujo y llevo más de 15 años trabajando con
                    las agencias de viajes más reconocidas de Sudamérica, Mexico
                    y el Caribe brindando un servicio personalizado. Participé
                    en varios eventos internacionales como Travel Week, ILTM São
                    Paulo, Virtuoso Events y Virtuoso Roadshows en Mexico y Pure
                    Life Experiences en Marruecos. Me gusta conocer las
                    diferentes culturas y expectativas de mis futuros ‘posibles’
                    viajeros. Estamos ofreciendo experiencias extraordinarias en
                    todo Turquía. Soy perfeccionista, detallista y amante de
                    explorar las últimas tendencias. Y siempre  me fascina tener
                    buenos comentarios de los huéspedes. Me consideró ser una
                    persona empática y creo firmemente que es una de las claves
                    para cumplir los sueños de los que viajarán a Turquía
                    conmigo.
                  </p>
                </div>
              </div>
              <div className="flex flex-row">
                <img src={Ugur} alt="Ugur" className="w-60" />
                <div>
                  <h5 className="text-lg font-bold text-[#39405A]">
                    Ugur Kiyici
                  </h5>
                  <p className="text-[#39405A] text-lg">Chief of Operations</p>
                  <p className="mt-4 text-md text-[#C0BABA]">
                    ¡Hola! Soy Uğur.  Bienvenidos a mi rincón de mundo digital,
                    donde los daré una idea de quién soy y qué me motiva.Siempre
                    me ha apasionado el turismo y siempre es un camino lleno de
                    emociones. Mi camino desde el principio hasta ahora ha sido
                    una mezcla de aprendizaje, desafíos y crecimiento en el
                    sentido de superación personal. Soy curioso por aprender
                    nuevas cosas y descubrir lugares nuevos. Yo creo que
                    curiosidad es la esencia del aprendizaje continuo. Disfruto
                    explorar el mundo que nos rodea profundizando en las
                    complejidades de las temas turismo ,educación y trabajo. He
                    tenido el privilegio de trabajar en todos los campos de la
                    industria del turismo en mis 12 años de carrera. A través de
                    estas experiencias logré mantener mi determinación de
                    aprender más. El cielo es el límite! Gracias acompañarme en
                    este sección y aprender un poco sobre mí. ¡El viaje que
                    tienen por delante está lleno de curiosidad, crecimiento y
                    experiencias únicas!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Posts */}
      <section className="py-20">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-lg font-bold text-[#98B8DF]">
              PUBLICACIONES DESTACADAS
            </h2>
          </div>
          <div className="flex flex-row">
            {InstagramData.slice(0, 3).map((post, index) => (
              <InstagramContent key={index} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Comments */}
      <section className="py-20 bg-[#FAFAFA]">
        <div className="flex flex-row mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-lg font-bold text-[#98B8DF]">
              COMENTARIOS DE CLIENTES
            </h2>
            <h2 className="text-5xl font-bold text-[#39405A] pr-20">
              Viajeros Satisfechos
            </h2>
          </div>
          <InstagramContent post={InstagramData[0]} />
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <h2 className="text-lg font-bold text-[#98B8DF]">CONTÁCTANOS</h2>
        <ContactForm />
      </section>
    </div>
  );
}
