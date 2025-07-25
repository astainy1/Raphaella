import React from 'react';
import image from './img/Logo-102x85.png';
import DonationForm from './donationForm';
import { Link } from 'react-router-dom';
import $ from 'jquery';

class Banner extends React.Component {
  componentDidMount() {
    $('#donateform').hide();

    $('#donate').on('click', function () {
      $('#donateform').show();
    });

    $('[data-collapse-toggle="navbar-menu"]').on('click', function () {
      $('#navbar-menu').toggleClass('hidden');
    });
  }

  render() {
    return (
      <>
        <nav className="bg-black md:bg-white lg:bg-white md:dark:bg-black">
          <div className="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto p-2">
            <Link to="/home" className="flex items-center space-x-3 rtl:space-x-reverse">
              <img src={image} className="h-auto m-3" alt="Raphaella Logo" />
            </Link>
            <div className="flex md:order-2 space-x-2 md:space-x-3 items-center">
              <button
                className="text-white bg-sky-900 font-sans font-normal px-4 py-3 text-lg cursor-pointer dark:bg-sky-900 hover:underline"
                id="donate"
              >
                Donate
              </button>
              <button
                data-collapse-toggle="navbar-menu"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center  text-sky-900 md:text-lg md:text-white md:hidden"
                aria-controls="navbar-menu"
                aria-expanded="false"
              >
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
            <div className="hidden transition-all duration-300 ease-in-out w-full md:flex md:w-auto md:order-1" id="navbar-menu">
              <ul className="flex flex-col font-medium capitalize p-4 md:p-0 mt-4 border-none  md:bg-black lg:bg-black md:bg-white md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-black">
                {/*<li>
                  <Link to="/home" className=" bg-sky-900 md:bg-black block md:py-2 md:px-2 md:text-white border-b-sky-900 md:border-none md:text-white md:hover:text-sky-900 hover:text-white text-white py-3 px-3">home</Link>
                </li>*/}
                <li>
                  <Link to="/about" className="block lg:bg-black md:bg-white bg-sky-900 md:border-none md:py-2 md:px-2 md:text-white md:hover:text-sky-900 text-white px-3 py-3 md:hover:bg-black hover:bg-sky-900 hover:text-white">about</Link>
                </li>
                <li>
                  <Link to="/services" className="block lg:bg-black md:bg-white md:border-none md:py-2 md:px-2 md:text-white md:hover:text-sky-900 text-sky-900 px-3 py-3 hover:bg-sky-800 hover:text-white md:hover:bg-black">services</Link>
                </li>
                <li>
                  <Link to="/cores" className="block lg:bg-black md:bg-white md:border-none md:py-2 md:px-2 md:text-white md:hover:text-sky-900 text-sky-900 px-3 py-3 hover:bg-sky-800 hover:text-white md:hover:bg-black">core values</Link>
                </li>
                 <li>
                  <Link to="/involve" className="block lg:bg-black md:bg-white md:border-none md:py-2 md:px-2 md:text-white md:hover:text-sky-900 text-sky-900 px-3 py-3 hover:bg-sky-800 hover:text-white md:hover:bg-black">get involve</Link>
                </li>
                <li>
                  <Link to="/contact" className="block md:border-none md:py-2 md:px-2 md:text-white md:hover:text-sky-900 text-sky-900 px-3 py-3 hover:bg-sky-800 hover:text-white md:hover:bg-black">contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="bg-no-repeat bg-cover h-96 md:min-h-screen md:bg-center w-screen" id="hero-image">
          <div className="py-3">
            <div className="flex flex-wrap justify-center mt-10 md:mt-32">
              <div className="bg-white w-96 h-96" id="donateform">
                <DonationForm/>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Banner;