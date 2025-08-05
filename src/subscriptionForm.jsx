import React, { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

function SubscriptionForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false); // New loading state

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    try {
      const res = await fetch("http://localhost:1337/api/subscribers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: { email } }),
      });

      if (res.status === 409) {
        await MySwal.fire({
          icon: "info",
          title: "Already Subscribed",
          text: "You're already subscribed. 😊",
          confirmButtonColor: "#0ea5e9",
        });
      } else if (res.ok) {
        await MySwal.fire({
          icon: "success",
          title: "Subscribed!",
          text: "🎉 Thank you for joining our community!",
          confirmButtonColor: "#0ea5e9",
        });
        setEmail("");
      } else {
        await MySwal.fire({
          icon: "error",
          title: "Subscription Failed",
          text: "Something went wrong. Please try again.",
          confirmButtonColor: "#ef4444",
        });
      }
    } catch {
      await MySwal.fire({
        icon: "error",
        title: "Network Error",
        text: "Network issue. Please try again later.",
        confirmButtonColor: "#ef4444",
      });
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="w-full">
      <form
        onSubmit={handleSubscribe}
        className="flex flex-col md:flex-row gap-3 items-center justify-center"
      >
        <input
          className="bg-white py-2 px-4 w-72 md:w-80 rounded-lg text-gray-800 shadow-md focus:outline-none focus:ring-2 focus:ring-sky-500"
          type="email"
          placeholder="e.g. you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={loading}
        />
        <button
          type="submit"
          disabled={loading}
          className={`flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-semibold px-5 py-2 rounded-lg shadow-md transition duration-200 cursor-pointer ${
            loading ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          {loading ? (
            <>
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4l3.5-3.5L12 0v4a8 8 0 00-8 8h4z"
                ></path>
              </svg>
              Subscribing...
            </>
          ) : (
            "Subscribe"
          )}
        </button>
      </form>
    </div>
  );
}

export default SubscriptionForm;
