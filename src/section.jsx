import React from 'react';
import img from './img/RLF-6-1.webp'
import $ from 'jquery'

class Section extends React.Component{

  componentDidMount(){

    $(document).ready(function() {

    $("#paragraph").hide();

    $('#learnmore').click(function() {

    $("#paragraph").toggle();

  });

});

  }

	render(){

		return(

			<>
			
		
		<div className="flex flex-col md:flex-row gap-8 justify-center bg-gradient-to-b from-sky-700 to-sky-900 h-auto px-8 py-20">
  <div className="text-white md:w-1/2 md:mt-32">
    <h1 className="font-bold text-5xl capitalize mb-10 ml-5">
      about us - autism awareness foundation
    </h1>
    <p className="font-bold text-xl mb-5 ml-5">
      The Raphaella Lewis Foundation, Autism Awareness Foundation, was created in honor of Raphaella Lewis, a courageous and inspiring young girl diagnosed with autism.
    </p>
    <p className="text-xl font-normal font-sans mb-5 ml-5 pt-8" id="paragraph">
      RLF is an Autism Awareness Foundation. RLF is committed to raising awareness, breaking stigmas, and empowering individuals with autism and their families, particularly within the Liberian community in the USA, Liberia, West Africa, and across Africa.
    </p>
    <div className=" mt-20 md:mt-32">
    	<button className="bg-white text-sky-900 uppercase text-md py-3 px-3 font-normal font-sans ml-5 cursor-pointer hover:underline" id="learnmore">
      learn more
    </button>
  </div>
  </div>

  <div className="md:w-1/2 mt-32 md:mt-0 h-full mb-0 m-0">
  <img className="hover:brightness-105 cursor-pointer"
    src={img}
    alt="Autism Awareness"
  />
</div>
</div>
			</>

			)
	}
}

export default Section