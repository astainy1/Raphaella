import React from "react";
import img1 from "../img/Untitled-design-85.png";
import img2 from "../img/Untitled-design-87.png";
import img3 from "../img/Untitled-design-88.png";

const teamMembers = [
  {
    name: "Jesayda Wright",
    img: img1,
    bio: `Holds a BA in Business Management with Marketing. My journey
    into special needs advocacy began after my daughter was
    diagnosed with autism. Facing stigma and misinformation,
    especially within African communities, inspired me to speak out
    and educate others.`,
  },
  {
    name: "Nathaniel B. Garpue",
    img: img3,
    bio: `A devout Christian and proud graduate of St. Cloud State
    University with over a decade of experience in Special
    Education, working with students facing challenges such as ASD,
    EBD, and FASD.`,
  },
  {
    name: "Shayla Harris",
    img: img2,
    bio: `A dedicated Special Education Assistant with nearly 10 years of
    experience, working with individuals with diverse needs since
    2006. As a former Autism Teacher, I had the honor of teaching
    Raphaella, which deepened my passion for autism advocacy.`,
  },
];

const TeamMembers = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="200"
      className="bg-white mt-20 mb-40 px-6 md:px-16"
    >
      <h1 className="text-center text-sky-900 capitalize text-4xl font-bold font-sans mb-20">
        Meet Our Team
      </h1>

      <div className="flex flex-wrap justify-center gap-y-16 gap-x-12">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={150 * (index + 1)}
            className="w-80 bg-white shadow-xl rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-full h-64 object-cover transition-transform duration-300 ease-in-out hover:scale-105"
            />
            <div className="p-6">
              <h5 className="mb-4 text-2xl font-bold text-sky-900 capitalize font-sans">
                {member.name}
              </h5>
              <p className="text-sky-900 font-normal text-base leading-relaxed">
                {member.bio}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;
