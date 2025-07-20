import React from 'react';
import image from './img/Logo-102x85.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaypal } from '@fortawesome/free-brands-svg-icons';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery';

class Banner extends React.Component {
  componentDidMount() {
    $('#donateform').hide();

    $('#donate').click(() => {
      $('#donateform').show();
    });

    $('#close').click(() => {
      $('#donateform').fadeOut(3000);
    });
  }

  render() {
    return (
      <>
        {/* NavBar*/}
        <nav className="bg-black border-none dark:bg-black">
          <div className="max-w-screen-md flex flex-wrap items-center justify-evenly mx-auto p-2">
            <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <img src={image} className="h-auto" alt="Raphaella Logo" />
            </Link>

            {/* Donate Button*/}
            <div className="flex md:order-2 space-x-2 md:space-x-4 items-center">
              <button
                className="text-white bg-sky-900 font-sans font-normal px-4 py-3 text-lg cursor-pointer dark:bg-sky-900 hover:underline mr-5"
                id="donate"
              >
                Donate
              </button>
              <button
                data-collapse-toggle="navbar-menu"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white  md:hidden "
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
            {/*Menu*/}
            <div className="hidden w-full md:flex md:w-auto md:order-1" id="navbar-menu">
              <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border-none bg-black md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-black">
                <li>
                  <Link to="/" className="block py-2 px-3 text-white hover:text-sky-900">Home</Link>
                </li>
                <li>
                  <Link to="/about" className="block py-2 px-3 text-white hover:text-sky-900">About</Link>
                </li>
                <li>
                  <Link to="/services" className="block py-2 px-3 text-white hover:text-sky-900">Services</Link>
                </li>
                <li>
                  <Link to="/contact" className="block py-2 px-3 text-white hover:text-sky-900">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/*Donation Form*/}
        <div
          className="bg-no-repeat bg-cover h-96 md:min-h-screen md:bg-center w-screen"
          id="hero-image"
        >
          <div className="py-3">
            <div className="flex flex-wrap justify-center mt-10 md:mt-32">
              <div className="bg-white w-96 h-96" id="donateform">
                <form action="/" className="ml-5 pt-8" method="POST">
                  <label className="capitalize text-sky-900 font-sans">Email:</label>
                  <br />
                  <input
                    className="border rounded border-sky-900 py-2 px-2 w-80"
                    type="email"
                  />
                  <br />
                  <br />
                  <label className="capitalize text-sky-900 font-sans">Card Number:</label>
                  <br />
                  <input
                    className="border rounded border-sky-900 py-2 px-2 w-80"
                    type="text"
                    placeholder="MM/YY CVC"
                  />
                  <br />
                  <label className="capitalize text-sky-900 font-sans">Amount:</label>
                  <br />
                  <input
                    className="border rounded border-sky-900 py-1 px-2 w-24"
                    type="text"
                  />
                  <br />
                  <div className="flex justify-center gap-8 mt-4">
                    <FontAwesomeIcon
                      icon={faPaypal}
                      className="cursor-pointer text-sky-900 text-xl"
                    />
                    <FontAwesomeIcon
                      icon={faCreditCard}
                      className="cursor-pointer text-sky-900 text-xl"
                    />
                  </div>
                  <div className="flex justify-center mt-4">
                    <button
                      type="submit"
                      className="bg-sky-900 rounded text-white font-normal text-lg px-24 md:px-36 py-3"
                      id="close"
                    >
                      Donate
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Banner;