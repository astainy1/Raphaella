import React from 'react';
import $ from 'jquery';
import img from './img/RLF-7-2-1024x570.webp';
import FAQ from './FAQ'

class Content extends React.Component {
  componentDidMount() {
    
  }

  componentWillUnmount() {
    $(window).off('scroll');
  }

  render() {
    return (
      <>
      <div
        className="bg-white mb-12 flex bg-scroll flex-col md:flex-row gap-6 p-6 items-center"
        id="container"
      >
        <div className="w-full m-5 md:w-1/2 md:m-12">
          <h1 className="text-5xl font-bold capitalize mb-6 text-center text-sky-900">
            What we do
          </h1>
          <p className="text-gray-800 text-lg">
            At the Raphaella Lewis Foundation (RLF), we raise autism awareness, support families,
            and advocate for inclusion in Liberia and beyond. We provide education, therapy support,
            and community outreach to break stigma and ensure autistic children thrive.
          </p>
          <div className="mt-12 flex justify-center">
            <button className="bg-sky-800 text-white py-3 px-8 cursor-pointer hover:underline">
              our services
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center m-14">
          <img src={img} alt="RLF Program" className="m-auto md:max-w-full md:h-auto cursor-pointer" />

        </div>
        
      </div>
      <div className="h-auto mb-36">
        <h1 className="text-sky-900 uppercase font-bold text-4xl md:ml-14 m-14">
          faq
        </h1>
        <FAQ/>
      </div>
      </>
    );
  }
}

export default Content