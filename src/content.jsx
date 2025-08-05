import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FAQ from "./FAQ";

function Content() {
  const [content, setContent] = useState([]);
  const baseUrl = "http://localhost:1337"; // Change this in production

  useEffect(() => {
    fetch(`${baseUrl}/api/home-page-services?populate=*`)
      .then((res) => res.json())
      .then((data) => {
        setContent(data.data); // this is already an array
      })
      .catch((err) => {
        console.error("Error fetching content:", err);
      });
  }, []);

  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-offset="200"
        data-aos-duration="1000"
        className="h-auto bg-gray-100 mb-12 flex flex-col md:flex-row gap-6 p-6 items-center"
        id="services"
      >
        {content.length > 0 &&
          content.map((item) => {
            // const { id, attributes } = item;
            const {id, title, description, media } = item;
            const imageUrl =
              baseUrl + (media?.url || "");
            // {console.log(media?.url)}
            return (
              <React.Fragment key={id}>
                <div className="w-full m-5 md:w-1/2 md:m-12">
                  <h1
                    data-aos="fade-down"
                    className="text-5xl font-bold capitalize mb-6 text-center text-sky-900"
                  >
                    {title}
                  </h1>
                  <p data-aos="fade-up" className="text-gray-800 text-lg">
                    {description}
                  </p>
                  <div data-aos="fade-down" className="mt-12 flex justify-center">
                    <Link
                      to="/services"
                      className="uppercase bg-sky-800 text-white py-3 px-8 cursor-pointer hover:underline hover:bg-sky-900 hover:rounded"
                    >
                      our services
                    </Link>
                  </div>
                </div>
                <div
                  data-aos="fade-up"
                  className="w-full md:w-1/2 flex justify-center m-14"
                >
                  {imageUrl ? (
                    <img
                      src={imageUrl}
                      alt={title}
                      className="m-auto transition-all md:max-w-full md:h-auto cursor-pointer rounded-2xl hover:scale-101"
                    />
                  ) : (
                    <p>Loading image...</p>
                  )}
                </div>
              </React.Fragment>
            );
          })}
      </div>

      <div className="h-auto mb-24">
        <h1 className="text-sky-900 uppercase font-bold text-4xl m-8 md:ml-14 md:m-14">
          faq
        </h1>
        <FAQ />
      </div>
    </>
  );
}

export default Content;
