import { useEffect, useState } from "react";
import SubscriptionForm from "./subscriptionForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faEnvelope,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp,
  faFacebook,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  // const baseURL = "http://localhost:1337";

  let serverUrl;
  if (import.meta.env.VITE_SERVER_URL) {
    serverUrl = import.meta.env.VITE_SERVER_URL;
  } else {
    serverUrl = "http://localhost:1337";
  }

  const [info, setInfo] = useState(null);

  // Fetch contact info from CMS
  useEffect(() => {
    fetch(`${serverUrl}/api/contact-infos`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data.data) && data.data.length > 0) {
          setInfo(data.data[0]); // No need for .attributes if data is flattened
        } else {
          console.warn("No contact info found.");
        }
      })
      .catch((error) => {
        console.error("Error fetching contact info:", error);
      });
  }, [serverUrl]);

  return (
    <footer className="bg-sky-900 py-10 px-4 md:px-10 lg:px-20">
      <div className="flex flex-col md:flex-row md:justify-between flex-wrap gap-8 text-white">
        {/* Resources */}
        <div className="md:w-1/3 lg:w-1/4">
          <h1 className="text-2xl font-bold capitalize mb-4">Resource</h1>
          <ul className="space-y-2 capitalize text-sm">
            <li>
              <a href="#">What is autism?</a>
            </li>
            <li>
              <a href="#">Understanding your child</a>
            </li>
            <li>
              <a href="#">It's okay to ask for help</a>
            </li>
            <li>
              <a href="#">How can I help?</a>
            </li>
            <li>
              <a href="#">How can I educate someone about autism?</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="md:w-1/3 lg:w-1/4">
          <h1 className="text-2xl font-bold capitalize mb-4">Contact Us</h1>
          <ul className="space-y-4 text-sm">
            {info?.address && (
              <li>
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                {info.address}
              </li>
            )}
            {info?.email && (
              <li>
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                <a href={`mailto:${info.email}`}>{info.email}</a>
              </li>
            )}
            {info?.phone && (
              <li>
                <FontAwesomeIcon icon={faMobileAlt} className="mr-2" />
                <a href={`tel:${info.phone}`}>{info.phone}</a>
              </li>
            )}
          </ul>
        </div>

        {/* Follow Us + Subscription */}
        <div className="md:w-1/3 lg:w-1/4">
          <h1 className="text-2xl font-bold capitalize mb-4">Follow Us</h1>

          <div className="mb-6">
            <SubscriptionForm />
          </div>

          {/* Social Media */}
          <div className="flex space-x-6 [&_a]:hover:text-sky-200 [&_a]:hover:scale-[1.4]">
            <a
              href="https://www.facebook.com/share/1F7uYhVoHN/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} className="text-2xl" />
            </a>
            <a
              href="https://whatsapp.com/channel/0029VbBDbP82kNFlGTRLl81X"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="text-2xl" />
            </a>
            <a
              href="https://www.instagram.com/raphaellalewisfoundation?igsh=MWc4MjV6OTZxMDF2eg%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
            </a>
            <a
              href="https://www.tiktok.com/@raphaellalewisfoundation"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTiktok} className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
