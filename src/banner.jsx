import React from 'react';
import image from './img/Logo-102x85.png';
import $ from 'jquery';

class Banner extends React.Component{

	componentDidMount() {

  $(document).ready(function(){

  	$("#dontateform").hide();

  	$("#donate").click(function(){

  		$("#dontateform").show();

  	});


  	$("#close").click(function(){

  		$("#dontateform").hide();

  	});

  });
}


	render(){

		return(

			<>
			{/* Nav bar */}

				 <div className="bg-black py-0 px-6  flex  flex-wrap items-center justify-evenly">
        
        <img className="h-auto px-5 m-1" src={image} alt="Logo" />

        
        <ul className="flex justify-center items-center flex flex-wrap md:justify-center items-center md:flex md: flex-wrap md:border-none">
          <li className="px-5">
            <a className="text-white text-lg font-sans" href="#">About Us</a>
          </li>
          <li className="px-5">
            <a className="text-white font-sans text-lg" href="#">Services</a>
          </li>
          <li className="px-5">
            <a className="text-white text-lg" href="#">Contact</a>
          </li>
          <li className="px-5">
            <button className="px-3 py-3 bg-sky-900 text-white font-sans font-normal capitalize cursor-pointer hover:underline md:flex md:justify-start" id="donate">
              donate
            </button>
          </li>
        </ul>
      </div>

			<div className="bg-no-repeat bg-cover h-96 md:min-h-screen md:bg-center bg-scroll static md:bg-fixed w-screen" id="hero-image">		<div className="py-5">

				
				<div className="flex flex-wrap justify-center mt-10 md:mt-32">

					<div className="bg-white w-96 h-72" id="dontateform">
						<p className="text-center font-normal text-sky-900 capitalize pt-8 text-xl md:text-2xl"><br/><span className="font-normal font-sans text-xl">account 1: 0775470314 </span> <br/>
							<span className="font-normal font-sans text-xl">account 2: 0880860240 </span>
						</p>
						<div className=" pt-20 flex justify-center">

							<button className="bg-blue-900 text-white font-normal text-xlg  px-24 md:px-36 py-3 cursor-pointer" id="close">close</button>
						</div>
					</div>
				</div>
			</div>
			</div>

			</>
			)
	}
}

export default Banner