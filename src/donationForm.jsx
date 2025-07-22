import React from 'react'
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaypal } from '@fortawesome/free-brands-svg-icons';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';

class DonationForm extends React.Component {

  componentDidMount() {
    $(document).ready(function () {
      $('#close').click(() => {
        $('#donateform').fadeOut(3000);
      });
    });
  }

  render() {
    return (
      <>
        <form action="/home" className="ml-5 pt-8" method="POST">
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
      </>
    )
  }
}

export default DonationForm;