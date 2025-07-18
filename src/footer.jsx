import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faMobileAlt} from '@fortawesome/free-solid-svg-icons'
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
import { faTiktok } from '@fortawesome/free-brands-svg-icons'


class Footer extends React.Component {
  render() {
    return (
      <>
        <div className="bg-sky-900  md:h-96 pb-14 flex flex-wrap justify-evenly gap-5">
          {/* contact us */}
          <div className="w-64  ml-2 md:w-52 mt-10 md:mt-9">
            <h1 className="text-white font-bold font-sans text-2xl md:text-2xl capitalize">
              resource
            </h1>

            <ul className="list-none text-white pt-3 font-sans font-normal capitalize">
              <li className="p-2">
                <a href="#">
                  what is autism?
                </a>
              </li>
              <li className="p-2">
                <a href="#">
                  understanding your child
                </a>
              </li>
              <li className="p-2">
              <a href="#">
                it's okay to ask for help
              </a>
              </li>
              <li className="p-2">
              <a href="#">
                how can i help?
              </a>
              </li>
              <li className="p-2">
              <a href="#">
                how can i education someone about autism?
              </a>
              </li>
              </ul>
          </div>
          <div className="w-52 mt-8 mr-5">
          <h1 className="text-white font-bold font-sans text-2xl md:text-2xl capitalize">
              contact us
            </h1>
            <div className="flex flex-wrap justify-evenly gap-5">
              <ul className="list-none text-white pt-3 font-sans font-normal text-sm">
              <li className="p-2 capitalize">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-white mr-2" />
                :<span className="uppercase text-sm"> p o box 28332</span> minneapolis 55428
              </li>
              <li className="p-2">
                <FontAwesomeIcon icon={faEnvelope} className="text-white text-sm mr-2"/> : <a href="mailto:info@raphaellalewisfoundation.org">
                      info@raphaellalewisfoundation.org
                      </a>

              </li>
              <li className="p-2">
                <FontAwesomeIcon icon={faMobileAlt} className="text-white mr-2"/>
                :<a href="tel:+16124406495">+1 612-440-6495</a>

              </li>
            </ul>
          </div>
        </div>
        
          <div className="w-52 m-0 h-auto md:mt-8">
            <h1 className="text-white font-bold font-sans text-2xl md:text-2xl capitalize">
              follow us
            </h1>
            <div className="pt-8 pb-8">
              <form action="#" method = "POST">
                <input className="bg-white py-2 px-3 w-64 text-sky-900 lowercase font-sans font-normal text-lg" type="email" placeholder="johnbrown@example.com"/>
                
                <div className="flex flex-1 pt-2 pd-2">
                  <button className="border border-white py-2 px-4 border-2 text-white cursor-pointer hover:bg-white hover:text-sky-900 font-sans font-normal uppercase">subscribe</button>
                </div>
              </form>
            </div>
            {/* Facebook */}
            <div className="flex flex-wrap justify-evenly gap-5">
            <div>
              <a href="https://www.facebook.com/share/1F7uYhVoHN/?mibextid=wwXIfr">
                <FontAwesomeIcon icon={faFacebook} className="text-white text-3xl w-auto"/>
              </a>
            </div>
            {/* WhatsAPP */}
            <div>
              <a href="https://whatsapp.com/channel/0029VbBDbP82kNFlGTRLl81X">
                <FontAwesomeIcon icon={faWhatsapp} className="text-white w-auto text-3xl"/>
              </a>
              
            </div>
            {/* Instagram */}
            <div>
              
              <a href="https://www.instagram.com/raphaellalewisfoundation?igsh=MWc4MjV6OTZxMDF2eg%3D%3D&utm_source=qr">
                <FontAwesomeIcon icon={faInstagram} className="text-white w-auto text-3xl"/>

              </a>

            </div>
            {/* Tiktok */}
            <div>
              <a href="www.tiktok.com/@raphaellalewisfoundation">
                <FontAwesomeIcon icon={faTiktok} className="text-white w-auto text-3xl"/>
              </a>
            </div>
            </div>
          </div>
         </div> 

      </>
    )
  }
}

export default Footer