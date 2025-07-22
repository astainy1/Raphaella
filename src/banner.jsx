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
        <nav className="bg-black border-none dark:bg-black">
          <div className="max-w-screen-md flex flex-wrap items-center justify-between mx-auto p-2">
            <Link to="/home" className="flex items-center space-x-3 rtl:space-x-reverse">
              <img src={image} className="h-auto" alt="Raphaella Logo" />
            </Link>
            <div className="flex md:order-2 space-x-2 md:space-x-3 items-center">
              <button
                className="text-white bg-sky-900 font-sans font-normal px-4 py-3 text-lg cursor-pointer dark:bg-sky-900 hover:underline mr-2"
                id="donate"
              >
                Donate
              </button>
              <button
                data-collapse-toggle="navbar-menu"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white md:hidden"
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
              <ul className="flex flex-col font-medium capitalize p-4 md:p-0 mt-4 border-none bg-black md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-black">
                <li>
                  <Link to="/home" className="block py-2 px-2 text-white hover:text-sky-900">home</Link>
                </li>
                <li>
                  <Link to="/about" className="block py-2 px-2 text-white hover:text-sky-900">about</Link>
                </li>
                <li>
                  <Link to="/services" className="block py-2 px-2 text-white hover:text-sky-900">services</Link>
                </li>
                <li>
                  <Link to="/cores" className="block py-2 px-2 text-white hover:text-sky-900">core values</Link>
                </li>
                <li>
                  <Link to="/contact" className="block py-2 px-2 text-white hover:text-sky-900">contact</Link>
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