import React from 'react';
import image from './img/Logo-102x85.png';

class NavBar extends React.Component {
  render() {
    return (
      <div className="bg-black py-1 px-6  flex  flex-wrap items-center justify-evenly">
        
        <img className="h-auto px-5 m-1" src={image} alt="Logo" />

        
        <ul className="flex justify-center items-center flex-1">
          <li className="px-5">
            <a className="text-white text-lg font-sans" href="#">About Us</a>
          </li>
          <li className="px-5">
            <a className="text-white font-sans text-lg" href="#">Services</a>
          </li>
          <li className="px-5">
            <a className="text-white text-lg" href="#">Contact</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
