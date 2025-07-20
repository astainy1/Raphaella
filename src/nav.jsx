import React from 'react';
import image from './img/Logo-102x85.png';

class NavBar extends React.Component {
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
  render() {
    return (
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
    );
  }
}

export default NavBar;
