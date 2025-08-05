import { useEffect, useRef } from "react";

const PaypalDonationButton = ({ amount = "10.00" }) => {
  const paypalRef = useRef();

  useEffect(() => {
    if (!window.paypal) return;

    window.paypal.Buttons({
      style: {
        shape: 'pill',
        color: 'blue',
        layout: 'vertical',
        label: 'donate',
      },
      createOrder: (data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: amount, // Donation amount
              },
              description: "Donation to Raphaella Foundation",
            },
          ],
        });
      },
      onApprove: (data, actions) => {
        return actions.order.capture().then((details) => {
          alert(`Thanks ${details.payer.name.given_name} for your donation!`);
          console.log("Donation Details:", details);
          // Post this to the server or Strapi CMS to store.
        });
      },
      onError: (err) => {
        console.error("PayPal error", err);
      }
    }).render(paypalRef.current);
  }, [amount]);

  return <div ref={paypalRef}></div>;
};

export default PaypalDonationButton;
