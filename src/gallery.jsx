import { useEffect, useState, useRef } from "react";

import { motion } from "framer-motion";

// const baseURL = "http://localhost:1337";

let serverUrl;
if (import.meta.env.VITE_SERVER_URL) {
  serverUrl = import.meta.env.VITE_SERVER_URL;
} else {
  serverUrl = "http://localhost:1337";
}

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [galleryImages, setGalleryImages] = useState([]);

  const scrollContainerRef = useRef(null);
  const isUserInteracting = useRef(false);
  const animationFrameId = useRef(null);
  const pauseTimeoutId = useRef(null);

  useEffect(() => {
    fetch(
      `${serverUrl}/api/home-page-galleries?populate=HomePageGallerySection.image`
    )
      .then((res) => res.json())
      .then((data) => {
        const gallerySection = data?.data?.[0]?.HomePageGallerySection || [];
        const extractedImages = gallerySection
          .map((item) => item?.image?.url)
          .filter(Boolean)
          .map((url) => url);
        setGalleryImages(extractedImages);
      })
      .catch((err) => console.error("Failed to load gallery images", err));
  }, []);

  useEffect(() => {
    if (!scrollContainerRef.current || galleryImages.length === 0) return;

    const container = scrollContainerRef.current;
    const speed = 0.5; // pixels per frame (~30px per second if 60fps)
    let scrollPos = container.scrollLeft;

    const step = () => {
      if (!isUserInteracting.current) {
        scrollPos += speed;
        if (scrollPos >= container.scrollWidth / 2) {
          scrollPos = 0;
        }
        container.scrollLeft = scrollPos;
      }
      animationFrameId.current = requestAnimationFrame(step);
    };

    animationFrameId.current = requestAnimationFrame(step);

    const onUserInteractionStart = () => {
      isUserInteracting.current = true;
      if (pauseTimeoutId.current) {
        clearTimeout(pauseTimeoutId.current);
      }
    };

    const onUserInteractionEnd = () => {
      pauseTimeoutId.current = setTimeout(() => {
        isUserInteracting.current = false;
      }, 1500);
    };

    container.addEventListener("mousedown", onUserInteractionStart);
    container.addEventListener("touchstart", onUserInteractionStart);
    container.addEventListener("wheel", onUserInteractionStart);

    container.addEventListener("mouseup", onUserInteractionEnd);
    container.addEventListener("touchend", onUserInteractionEnd);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      if (pauseTimeoutId.current) {
        clearTimeout(pauseTimeoutId.current);
      }
      container.removeEventListener("mousedown", onUserInteractionStart);
      container.removeEventListener("touchstart", onUserInteractionStart);
      container.removeEventListener("wheel", onUserInteractionStart);
      container.removeEventListener("mouseup", onUserInteractionEnd);
      container.removeEventListener("touchend", onUserInteractionEnd);
    };
  }, [galleryImages]);

  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className="bg-white min-h-screen mt-0 mb-32 md:mt-24"
      >
        {/* Auto-scrolling image carousel */}
        <div
          ref={scrollContainerRef}
          className="overflow-x-auto whitespace-nowrap py-10 no-scrollbar"
          // DO NOT set scrollBehavior: smooth here, for manual control
        >
          <div className="flex gap-6">
            {galleryImages.concat(galleryImages).map((img, index) => (
              <motion.div
                key={index}
                className="cursor-pointer flex-shrink-0"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                onClick={() => setSelectedImg(img)}
              >
                <img
                  src={img}
                  alt={`gallery-${index}`}
                  className="w-[260px] sm:w-[280px] md:w-[300px] h-auto rounded-lg"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Text + CTA */}
        <motion.h2
          data-aos="fade-down"
          data-aos-delay="200"
          className="text-sky-900 font-bold text-4xl text-center pt-24"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Partner with Us - Autism Awareness Foundation
        </motion.h2>
        <motion.p
          className="text-center text-sky-600 font-bold text-lg p-7"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Together, We Can Build a More Inclusive Liberia and across Africa.
        </motion.p>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <a
            href="https://whatsapp.com/channel/0029VbBDbP82kNFlGTRLl81X"
            className="bg-sky-800 text-white uppercase py-4 px-8 hover:underline hover:bg-sky-900 hover:rounded"
          >
            join us
          </a>
        </motion.div>
      </div>

      {/* Full image view */}
      {selectedImg && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center"
          onClick={() => setSelectedImg(null)}
        >
          <motion.img
            src={selectedImg}
            data-aos="fade-up"
            data-aos-delay="200"
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <style>{`
        /* Hide scrollbar but keep scroll */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </>
  );
};

export default Gallery;
