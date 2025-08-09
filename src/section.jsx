import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const textVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const imageVariant = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const Section = () => {
  const controls = useAnimation();
  const [scrollDirection, setScrollDirection] = useState(null);
  const lastScrollY = useRef(0);

  //Store this section content from the CMS strapi
  const [content, setContent] = useState(null);
  const [contentImage, setContentImage] = useState([]);

  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY.current) {
        setScrollDirection("up");
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  // Fetch data from CMS (Strapi)
  let serverUrl;
  if (import.meta.env.VITE_SERVER_URL) {
    serverUrl = import.meta.env.VITE_SERVER_URL;
  } else {
    serverUrl = "http://localhost:1337";
  }

  //Image
  useEffect(() => {
    fetch(`${serverUrl}/api/home-page-abouts?populate=media`)
      .then((res) => res.json())
      .then((data) => {
        setContentImage(data.data);
        // console.log(data);
      });
  }, [serverUrl]);
  // const baseUrl = "http://localhost:1337";
  // const imageUrl =
  //   baseUrl + contentImage?.data?.[0]?.attributes?.media?.data?.attributes?.url;
  // contentImage.map((image) => {
  //   console.log(image.media.url)
  // })
  // console.log(contentImage.media)

  // Content
  useEffect(() => {
    fetch(`${serverUrl}/api/home-page-abouts`)
      .then((res) => res.json())
      .then((data) => {
        setContent(data);
      });
  }, [serverUrl]);
  // console.log(content);

  if (!content) {
    return (
      <div className="text-center text-white py-10">Loading section...</div>
    );
  } else {
    return (
      <motion.div
        ref={ref}
        variants={containerVariant}
        initial="hidden"
        animate={controls}
        className="flex flex-col md:flex-row gap-8 justify-center align-middle bg-gradient-to-b from-sky-700 to-sky-900  px-8 py-20 mx-auto"
      >
        {/* Text content */}
        <motion.div
          data-aos="fade-up"
          data-aos-delay="200"
          variants={textVariant}
          className="text-white md:w-1/2 md:mt-32"
        >
          <h1 className="font-bold text-5xl capitalize mb-10 ml-5">
            {content?.data?.[0]?.title || "Loading..."}
          </h1>
          <p className="font-bold text-xl mb-5 ml-5">
            {content?.data?.[0]?.description.split(".")[0] + "." || ""}
          </p>
          <p
            className="text-xl font-normal font-sans mb-5 ml-5 pt-8"
            id="paragraph"
          >
            {content?.data?.[0]?.description.split(".").slice(1).join(".") ||
              ""}
          </p>
          <div className="mt-20 md:mt-32">
            <button
              className="bg-white text-sky-900 uppercase text-md py-3 px-3 font-normal font-sans ml-5 cursor-pointer hover:underline hover:bg-gray-100 hover:rounded"
              onClick={() =>
                document.getElementById("paragraph").classList.toggle("hidden")
              }
            >
              learn more
            </button>
          </div>
        </motion.div>

        {/* Image */}
        {contentImage.map((item, index) => (
          <motion.div
            data-aos="fade-up"
            data-aos-delay="200"
            variants={imageVariant}
            className="md:w-1/2 mt-32 md:mt-0 h-full mb-0 m-0"
            key={index}
          >
            {/* {console.log(item.media.url)} */}
            <img
              data-aos="fade-up"
              data-aos-delay="200"
              className="hover:brightness-105 cursor-pointer rounded-2xl"
              src={item.media.url}
              alt="Autism Awareness"
            />
          </motion.div>
        ))}
      </motion.div>
    );
  }
};

export default Section;
