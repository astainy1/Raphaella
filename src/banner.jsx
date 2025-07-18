import React from 'react';
import image from './img/Logo-102x85.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaypal } from '@fortawesome/free-brands-svg-icons';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery';

class Banner extends React.Component {
  componentDidMount() {
    $('#donateform').hide();

    $(document).ready(function () {

      $('#donate').click(function () {

        $('#donateform').show();
      });

      $('#close').click(function () {

        $('#donateform').fadeOut(3000);

      });
    });
  }

  render() {
    return (
      <>
        <div className="bg-black py-0 px-6 flex flex-wrap items-center justify-evenly">
          <img className="h-auto px-5 m-1 cursor-pointer" src={image} alt="Logo" />

          <ul className="flex justify-center items-center flex-wrap md:border-none">
            <li className="px-5">
              <a className="text-white text-lg font-sans hover:text-sky-900 capitalize" href="#">about us</a>
            </li>
            <li className="px-5">
              <a className="text-white font-sans text-lg hover:text-sky-900 capitalize" href="#">services</a>
            </li>
             <li className="px-5">
              <a className="text-white font-sans text-lg hover:text-sky-900 capitalize" href="#">core values</a>
            </li>
            <li className="px-5">
              <a className="text-white text-lg hover:text-sky-900 capitalize" href="#">contact</a>
            </li>
            <li className="px-5 uppercase md:visible">
              <a className="text-white text-lg hover:text-sky-900" href="#">FAQ</a>
            </li>
            <li className="px-5">
              <button className="px-3 py-3 bg-sky-900 text-white font-sans font-normal capitalize cursor-pointer hover:underline md:flex md:justify-start" id="donate">
                Donate
              </button>
            </li>
          </ul>
        </div>

        <div className="bg-no-repeat bg-cover h-96 md:min-h-screen md:bg-center bg-scroll static md:bg-fixed w-screen" id="hero-image">
          <div className="py-3">
            <div className="flex flex-wrap justify-center mt-10 md:mt-32">
              <div className="bg-white w-96 h-96" id="donateform">
                <form className="ml-5 pt-8">
                  <label className="capitalize text-sky-900 font-sans" htmlFor="email">Email:</label>
                  <br />
                  <input className="border rounded border-sky-900 py-2 px-2 w-80" type="email" />
                  <br /><br />

                  <label className="capitalize text-sky-900 font-sans" htmlFor="card">Card Number:</label>
                  <br />
                  <input className="border rounded border-sky-900 py-2 px-2 w-80" type="text" placeholder="MM/YY CVC" />
                  <br />
                  <label className="capitalize text-sky-900 font-sans" htmlFor="amount">Amount:</label>
                  <br />
                  <input className="border rounded border-sky-900 py-1 px-2 w-24" type="text" />
                  <br />
                  <div className="flex flex-wrap justify-center gap-8">
                    <div>
                      <FontAwesomeIcon icon={faPaypal} className="cursor-pointer text-sky-900 text-xl mr-2" />
                  </div>
                  <div>
                      <FontAwesomeIcon icon={faCreditCard} className="cursor-pointer text-sky-900 text-xl mr-2" />
                    </div>

                  <div className="flex flex-nowrap justify-center">
                    <button type="submit" className="bg-sky-900 rounded text-white font-normal text-lg px-24 md:px-36 py-3 cursor-pointer" id="close">
                      Donate
                    </button>
                  </div>
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

export default Banner