import { useState } from "react";
import { motion } from "framer-motion";
import img1 from "../img/RLF-3.webp";
import img2 from "../img/RLF-2.webp";
import img3 from "../img/Untitled-design-76.webp";

const images = [img1, img2, img3];

const About = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-delay="400"
        className="h-auto md:h-96 mb-20 md:mb-32 bg-white"
      >
        <div data-aos="fade-down" data-aos-delay="200" className="pt-20">
          <h1 className="text-sky-900 font-sans font-bold capitalize text-5xl ml-5 md:ml-32">
            who we are
          </h1>
          <br />
          <hr className="mx-5 md:mx-32 border-sky-900 p-2" />
          <div className="flex flex-wrap justify-evenly gap-5">
            <div className="w-96">
              <p className="mx-5 font-bold text-sky-900 font-sans text-xl">
                The Raphaella Lewis Foundation was created in honor of Raphaella
                Lewis, a courageous and inspiring young girl diagnosed with
                autism.
              </p>
            </div>
            <div
              data-aos="fade-down"
              data-aos-delay="200"
              className="w-96 md:w-96"
            >
              <p className="mx-5 font-sans font-normal text-sm text-sky-900">
                Learn About Raphaella Lewis Foundation RLF. Raphaella Lewis, a
                young girl, journey reminds us that autism does not define her,
                nor does it define the countless children and families who often
                go unheard.
              </p>
            </div>
          </div>

          <div
            data-aos="fade-down"
            data-aos-delay="200"
            className="flex flex-wrap justify-evenly"
          >
            <div className="w-96 mx-5"></div>
            <div className="mx-5 mt-2 md:w-96">
              <p className="md:mx-5 font-normal text-sm font-bold font-sans text-sky-900">
                Know About Raphaella Lewis Foundation RLF. Driven by her story,
                the Foundation is committed to{" "}
                <b>
                  raising awareness, breaking stigmas, and empowering
                  individuals with autism and their families, particularly
                  within the Liberian community in the USA, Liberia, West
                  Africa, and across Africa.
                </b>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*Gallery*/}

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        transition={{ staggerChildren: 0.2 }}
        className="flex flex-wrap justify-center gap-4"
      >
        {images.map((img, index) => (
          <motion.div
            key={index}
            data-aos="fade-in"
            data-aos-delay="100"
            className="cursor-pointer "
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            onClick={() => setSelectedImg(img)}
          >
            <img
              data-aos="fade-in"
              data-aos-delay="100"
              src={img}
              className="w-[300px] h-auto rounded"
            />
          </motion.div>
        ))}
      </motion.div>

      {/*our approach*/}
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className="bg-white mt-20 mx-5 mb-24 md:h-72 md:mt-24"
      >
        <div className="flex flex-wrap justify-evenly">
          <div className="w-96">
            <h1 className="text-sky-900 font-bold font-sans capitalize text-4xl">
              our mission
            </h1>
            <p className="font-sans font-normal text-sky-900 pt-5">
              The Raphaella Lewis Foundation is dedicated to a culture of
              acceptance, educating, and empowering the lives of all individuals
              with autism and their families. Breaking stigmas against
              individuals with autism in West African communities, building
              futures for individuals to be treated fairly and given a chance to
              live a productive life with purpose.
            </p>
          </div>

          <div data-aos="fade" data-aos-delay="200" className="mt-8 w-96">
            <h1 className="text-sky-900 font-bold font-sans capitalize text-4xl">
              our vision
            </h1>
            <p className="font-sans font-normal text-sky-900 pt-5">
              <b>Breaking Stigmas, Building Futures.</b>
              We are working toward a society that fully accepts and respects
              all individuals on the autism spectrum, removing stigmas and shame
              surrounding autism, and building a future that empowers each
              person to reach their full potential.
            </p>
          </div>
        </div>
      </div>

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
          />
        </div>
      )}
    </>
  );
};

export default About;
