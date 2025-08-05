import { useState } from "react";

export default function VisaForm({ onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    amount: "",
    cardNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, amount, cardNumber } = formData;

    if (!name || !email || !amount || !cardNumber) {
      alert("All fields are required");
      return;
    }

    if (!/^\d+(\.\d{1,2})?$/.test(amount)) {
      alert("Enter a valid amount (e.g. 10.00)");
      return;
    }

    if (!/^\d{16}$/.test(cardNumber)) {
      alert("Card number must be 16 digits");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Invalid email format");
      return;
    }

    // POST to server here
    console.log("Visa donation data submitted:", formData);

    // Optionally show confirmation here

    onClose(); // Close modal
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Full Name"
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email Address"
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="number"
        name="amount"
        value={formData.amount}
        onChange={handleChange}
        placeholder="Amount (USD)"
        className="w-full p-2 border rounded"
        step="0.01"
        min="1"
        required
      />
      <input
        type="text"
        name="cardNumber"
        value={formData.cardNumber}
        onChange={handleChange}
        placeholder="Card Number (16 digits)"
        className="w-full p-2 border rounded"
        maxLength={16}
        required
      />
      <div className="flex justify-center space-x-2">
        {/* <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
        >
          Cancel
        </button> */}
        <button
          type="submit"
          className="px-4 py-2 w-full rounded bg-blue-600 text-white hover:bg-blue-700"
        >
          Donate
        </button>
      </div>
    </form>
  );
}
