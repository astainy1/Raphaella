import React from "react";
import TeamMembers from "./team";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandshake,
  faLightbulb,
  faHandsHelping,
  faRocket,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

const CoreValues = () => {
  const values = [
    {
      title: "Accept",
      description:
        "Embracing each individual for who they are, fostering inclusion and understanding.",
      icon: faHandshake,
      bg: "bg-sky-900",
    },
    {
      title: "Inspire",
      description:
        "Encouraging families, communities, and individuals to see unique strengths with potential within everyone.",
      icon: faLightbulb,
      bg: "bg-sky-800",
    },
    {
      title: "Nurture",
      description:
        "Providing support, education, and resources to help individuals and families thrive.",
      icon: faHandsHelping,
      bg: "bg-sky-900",
    },
    {
      title: "Empower",
      description:
        "Equipping individuals and families with the tools and opportunities to overcome challenges and succeed.",
      icon: faRocket,
      bg: "bg-sky-800",
    },
    {
      title: "Embrace",
      description:
        "Celebrating diversity and creating a compassionate, supportive community.",
      icon: faHeart,
      bg: "bg-sky-900",
    },
  ];

  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className="mb-20 bg-white mt-20 px-4 md:px-10"
      >
        <h1 className="font-bold font-sans capitalize text-4xl text-center mt-16 text-sky-900">
          Our Core Values
        </h1>

        <div className="flex flex-wrap justify-center gap-5 md:gap-0 mt-9">
          {values.slice(0, 3).map((val, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={100 * (index + 1)}
              className={`w-80 h-80 text-white rounded p-5 ${val.bg} transition-transform duration-300 ease-in-out transform hover:scale-105`}
            >
              <div className="text-white text-3xl mb-3">
                <FontAwesomeIcon icon={val.icon} />
              </div>
              <h1 className="text-2xl font-bold font-sans capitalize">
                {val.title}
              </h1>
              <p className="font-normal font-sans text-lg mt-2">
                {val.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-5 mt-5 md:gap-0 md:mt-5">
          {values.slice(3).map((val, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={100 * (index + 4)}
              className={`w-80 h-80 text-white rounded p-5 ${val.bg} transition-transform duration-300 ease-in-out transform hover:scale-105`}
            >
              <div className="text-white text-3xl mb-3">
                <FontAwesomeIcon icon={val.icon} />
              </div>
              <h1 className="text-2xl font-bold font-sans capitalize">
                {val.title}
              </h1>
              <p className="font-normal font-sans text-lg mt-2">
                {val.description}
              </p>
            </div>
          ))}
        </div>

        {/* Smooth Responsive Image */}
    
        <div className="mt-16">
          <TeamMembers />
        </div>
      </div>
    </>
  );
};

export default CoreValues;
