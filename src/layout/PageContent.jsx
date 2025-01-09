import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
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
import Dilara from "../images/WhoWeAre/Dilara.png";
import Ugur from "../images/WhoWeAre/Ugur.png";
import InstagramContent from "../components/InstagramContent";
import ContactForm from "../components/ContactForm";
import ImageSlider from "../components/ImageSlider";
import ImageSlider2 from "../components/ImageSlider2";
import ImageSlider3 from "../components/ImageSlider3";

const InstagramData = [
  {
    title: "Swissotel The Bosphorus",
    description:
      "Swissotel The Bosphorus, Istanbul is a five-star luxury hotel right in the centre of Istanbul on the European banks of the Bosphorus. Nestled within 65 acres of historical gardens with world-class shopping and vibrant nightlife nearby, it offers 566 guest rooms and suites, featuring state-of-the-art technology and exclusive amenities.",
    image:
      "https://instagram.fist6-2.fna.fbcdn.net/v/t51.2885-15/468716180_18009347114665240_4766186843765991480_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi44NTN4NTY5LnNkci5mNzU3NjEuZGVmYXVsdF9pbWFnZSJ9&_nc_ht=instagram.fist6-2.fna.fbcdn.net&_nc_cat=104&_nc_ohc=cGB-Lr0mALYQ7kNvgEctQ9x&_nc_gid=7d3f0bf4575c4590ac3aa61dc27fa4dc&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzUxMTE5MDU3NzM5ODA4MDAyNA%3D%3D.3-ccb7-5&oh=00_AYC4NTr_0AliUqIMW7otKaBqxs_mOD3BYbEdaAiZk76f4Q&oe=678172A8&_nc_sid=7a9f4b",
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

export default function PageContent(props) {
  return (
    <div className="max-w-md md:max-w-7xl">
      {/* About Us */}
      <section className="bg-[#FAFAFA] md:bg-white" ref={props.aboutUsRef}>
        <div className="max-w-7xl px-4 md:px-0 ">
          <div className="text-center mx-5 md:mx-0 bg-white md:bg-[#FAFAFA] px-5 md:px-0 py-20 md:py-24 md:w-screen">
            <h5 className="text-lg font-bold text-[#98B8DF] mb-3">
              SOBRE NOSOTROS
            </h5>
            <div className="vertical-line2 mb-1"></div>
            <h2 className="text-5xl mb-10 font-bold text-[#39405A] italic">
              Somos su Socia Local en Turquia
            </h2>
            <p className="mt-4 text-lg text-[#C0BABA] md:px-24">
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
      <section className="w-screen">
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 5,
            },
          }}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          speed={5000}
          loop={true}
          modules={[Autoplay]}
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
      <section className="max-w-md md:max-w-7xl " ref={props.servicesRef}>
        <div className="md:bg-[#FAFAFA] w-screen md:mx-0 md:py-20 mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ImageSlider />
        </div>
      </section>

      {/* Carousel */}
      <section className="max-w-md md:max-w-7xl">
        <ImageSlider2 />
      </section>

      {/* Who we are */}
      <section className="py-20 bg-[#FAFAFA] w-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h5 className="text-lg font-bold pb-3 text-[#98B8DF] md:text-left md:ml-36">
              ¿QUIENES SOMOS?
            </h5>
            <div className="vertical-line2 mb-1 md:ml-56"></div>
            <div>
              <div className="flex flex-col mb-3 px-5 items-center justify-center md:flex-row md:mx-20">
                <img src={Dilara} alt="Dilara" className="w-60 mb-5 md:mr-10" />
                <div>
                  <h5 className="text-lg font-bold text-[#39405A] md:text-left">
                    Dilara Bayramoglu
                  </h5>
                  <p className="text-lg text-[#39405A] md:text-left italic">
                    Creativa de la Marca
                  </p>
                  <p className="mt-3 text-md text-[#C0BABA] md:text-left">
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
              <div className="vertical-line2 mb-1 md:ml-56"></div>
              <div className="flex flex-col items-center justify-center px-5 md:flex-row md:mx-20">
                <img src={Ugur} alt="Ugur" className="w-60 mb-5 md:mr-10" />
                <div>
                  <h5 className="text-lg font-bold text-[#39405A] md:text-left">
                    Ugur Kiyici
                  </h5>
                  <p className="text-[#39405A] text-lg md:text-left italic">
                    Chief of Operations
                  </p>
                  <p className="mt-3 text-md text-[#C0BABA] md:text-left">
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
      <section className="py-20 w-screen">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-3">
            <h2 className="text-lg font-bold mb-3 text-[#98B8DF]">
              PUBLICACIONES DESTACADAS
            </h2>
            <div className="vertical-line2 mb-1"></div>
          </div>
          <div className="md:hidden flex flex-col items-center justify-center md:flex-row">
            {InstagramData.slice(0, 2).map((post, index) => (
              <InstagramContent key={index} post={post} />
            ))}
          </div>
          <div className="hidden md:flex flex-row items-center justify-center">
            {InstagramData.slice(0, 3).map((post, index) => (
              <InstagramContent key={index} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Comments */}
      <section className="py-20 bg-[#FAFAFA] w-screen">
        <ImageSlider3 />
      </section>

      {/* Contact Form */}
      <section
        className="flex flex-col md:flex-row items-center justify-center w-screen"
        ref={props.contactRef}
      >
        <div className="hidden md:flex flex-col mt-40 bottom-0">
          <h2 className="text-lg font-bold text-[#98B8DF] -rotate-90">
            CONTÁCTANOS
          </h2>
          <div className="vertical-line3 mt-16"></div>
        </div>
        <ContactForm />
        <h2 className="md:hidden mb-3 text-lg font-bold text-[#98B8DF]">
          CONTÁCTANOS
        </h2>
        <div className="md:hidden vertical-line2"></div>
      </section>
    </div>
  );
}
