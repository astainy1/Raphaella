import { useState } from "react";
import VisaForm from "./components/VisaForm";
import PaypalForm from "./components/PaypalForm";

export default function DonationModal({ onClose }) {
  const [paymentMethod, setPaymentMethod] = useState("visa");
  const [isFadingOut, setIsFadingOut] = useState(false);

  const handleClose = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      onClose();
    }, 300); // duration must match the fade-out transition time
  };

  return (
    <div data-aos="zoom-in"
  data-aos-delay="200"
      className={`fixed inset-0 bg-black/70 flex justify-center items-center z-50 transition-opacity duration-300 ${
        isFadingOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="bg-white p-6 rounded-md shadow-md w-[90%] max-w-md transition-all duration-300 transform">
        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-semibold text-sky-900 cursor-pointer">
            {paymentMethod === "visa" ? "Visa Card Payment" : "PayPal Payment"}
          </h2>
          <button
            className="text-red-500 hover:text-red-700 font-bold cursor-pointer"
            onClick={handleClose}
          >
            ✕
          </button>
        </div>

        <div className="mb-4 flex justify-center align-middle items-center space-x-3 *:cursor-pointer">
          <button
            className={`text-xl ${
              paymentMethod === "paypal" ? "text-blue-700" : "text-sky-900"
            }`}
            onClick={() => setPaymentMethod("paypal")}
          >
            🅿️ PayPal
          </button>
          <span>|</span>
          <button
            className={`text-xl ${
              paymentMethod === "visa" ? "text-blue-700" : "text-sky-900"
            }`}
            onClick={() => setPaymentMethod("visa")}
          >
            💳 Visa
          </button>
        </div>

        {paymentMethod === "visa" ? (
          <VisaForm onClose={onClose} />
        ) : (
          <PaypalForm />
        )}
      </div>
    </div>
  );
}
