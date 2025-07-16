import React from 'react';
import image from './img/Logo-102x85.png';

class NavBar extends React.Component {
  render() {
    return (
      <div className="bg-black py-2 px-6  flex  flex-wrap items-center justify-evenly">
        
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
            <button className="px-4 py-3 bg-sky-900 text-white font-sans font-normal capitalize cursor-pointer hover:underline md:flex md:justify-start">
              donate
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
