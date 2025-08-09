import React, { useState, useEffect } from "react";
import image from "./img/Logo-102x85.png";
import { Link } from "react-router-dom";
import DonationModal from "./DonationModal";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Banner() {
  //Server base url

  // let serverUrl;
  // if (import.meta.env.VITE_SERVER_URL) {
  //   serverUrl = import.meta.env.VITE_SERVER_URL;
  // } else {
  //   serverUrl = "http://localhost:1337";
  // }

  const [showModal, setShowModal] = useState(false);
  const [slides, setSlides] = useState([]);
  const [scrolled, setScrolled] = useState(false);

  const path = "http://localhost:1337";

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Fetch hero slides from Strapi
  useEffect(() => {
    const serverUrl = import.meta.env.VITE_SERVER_URL;
    fetch(`${serverUrl}/api/hero-sections?populate=slides.image`)
      .then((res) => res.json())
      .then((data) => {
        const slideData = data.data.flatMap((item) => item.slides || []);
        setSlides(slideData);
      });
    console.log("Environment variable: ", serverUrl);
  }, []);

  // Scroll detection for shrinking effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav
        data-aos="fade-down"
        data-aos-delay="400"
        className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${
          scrolled ? "bg-white shadow-md py-1" : "bg-gray-50 py-4"
        }`}
      >
        <div className="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto px-4">
          <Link
            to="/home"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src={image}
              className={`transition-all duration-300 ${
                scrolled ? "h-12" : "h-20"
              }`}
              alt="Raphaella Logo"
            />
          </Link>
          <div className="flex md:order-2 items-center space-x-2">
            <button
              className="text-white bg-sky-900 px-4 py-2 text-sm md:text-base font-medium rounded hover:underline hover:scale-105 cursor-pointer"
              onClick={() => setShowModal(true)}
            >
              Donate
            </button>
            <button
              data-collapse-toggle="navbar-menu"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sky-900 md:hidden"
              onClick={() =>
                document
                  .getElementById("navbar-menu")
                  .classList.toggle("hidden")
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <div
            className="hidden w-full md:flex md:w-auto md:order-1 transition-all duration-300 ease-in-out"
            id="navbar-menu"
          >
            <ul className="flex flex-col md:flex-row font-medium capitalize p-4 md:p-0 mt-4 md:mt-0 md:space-x-8 [&_li]:rounded [&_li]:hover:bg-sky-800 [&_a]:hover:text-white">
              {["about", "services", "cores", "involve", "contact"].map(
                (text) => (
                  <li key={text}>
                    <Link
                      to={`/${text}`}
                      className="block text-sky-900 px-3 py-2"
                    >
                      {text.replace("cores", "core values")}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Image Slider */}
      <div className="pt-24">
        <div
          className={`relative z-0 w-full transition-all duration-500 ease-in-out ${
            scrolled ? "h-[60vh]" : "h-screen"
          }`}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            autoplay={{ delay: 4000 }}
            loop
            pagination={{ clickable: true }}
            className="h-full w-full"
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div
                  className="h-full w-full bg-cover bg-center relative"
                  style={{
                    backgroundImage: `url(${path + slide.image?.url})`,
                  }}
                >
                  <div className="h-full w-full bg-black/85 flex flex-col items-center justify-center text-white text-center px-4">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">
                      {slide.title}
                    </h1>
                    <p className="text-lg md:text-xl">{slide.subtitle}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Donation Modal */}
        {showModal && <DonationModal onClose={() => setShowModal(false)} />}
      </div>
    </>
  );
}

export default Banner;
