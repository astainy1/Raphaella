import React, { useState } from "react";
import Swal from "sweetalert2";
import ReCAPTCHA from "react-google-recaptcha";

const VolunteerForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    reason: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [captchaValue, setCaptchaValue] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const validateEmail = (email) => /^\S+@\S+\.\S+$/.test(email);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
    setErrors((prev) => ({ ...prev, captcha: "" }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";

    if (!validateEmail(formData.email))
      newErrors.email = "Enter a valid email.";

    if (!formData.reason) newErrors.reason = "Please select a reason.";

    if (formData.message.length < 10)
      newErrors.message = "Message must be at least 10 characters.";

    if (!captchaValue) newErrors.captcha = "Please complete the CAPTCHA.";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setSubmitting(true);

    const payload = { data: formData };
    console.log(payload);

    try {
      const res = await fetch("http://localhost:1337/api/volunteer-forms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: formData }),
      });

      const data = await res.json();

      if (!res.ok) {
        const errorsArray = data?.error?.details?.errors;
        let message = "Form submission failed.";

        if (Array.isArray(errorsArray)) {
          message = errorsArray.map((err) => err.message).join("\n");
        } else if (data?.error?.message) {
          message = data.error.message;
        }

        throw new Error(message);
      }

      await Swal.fire(
        "Success!",
        "Thank you for volunteering. We'll get back to you soon.",
        "success"
      );

      setFormData({ name: "", email: "", phone: "", reason: "", message: "" });
      setCaptchaValue(null);
      setErrors({});
    } catch (err) {
      Swal.fire("Error", err.message, "error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      data-aos="fade-up"
      data-aos-delay="200"
      className="min-h-screen flex items-center justify-start p-4"
    >
      <div className="w-full max-w-3xl bg-white p-8 rounded">
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label
              for="name"
              className="block text-sky-900 font-medium"
              htmlFor="name"
            >
              Name:
            </label>
            <input
              id="name"
              className="mt-1 py-3 px-4 border border-sky-800 bg-white w-full rounded"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label
              for="email"
              className="block text-sky-900 font-medium"
              htmlFor="email"
            >
              Email:
            </label>
            <input
              id="email"
              className="mt-1 py-3 px-4 border border-sky-800 bg-white w-full rounded"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label
              for="phone"
              className="block text-sky-900 font-medium"
              htmlFor="phone"
            >
              Phone Number:
            </label>
            <input
              id="phone"
              className="mt-1 py-3 px-4 border border-sky-800 bg-white w-full rounded"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Optional"
            />
          </div>

          {/* Reason */}
          <div>
            <label
              for="reason"
              className="block text-sky-900 font-medium"
              htmlFor="reason"
            >
              Reason for Volunteering:
            </label>
            <select
              id="reason"
              name="reason"
              className="mt-1 py-3 px-4 border border-sky-800 bg-white w-full rounded"
              value={formData.reason}
              onChange={handleChange}
            >
              <option value="">Select a reason</option>
              <option value="Community Service">Community Service</option>
              <option value="Skills Development">Skills Development</option>
              <option value="Personal Interest">Personal Interest</option>
              <option value="Other">Other</option>
            </select>
            {errors.reason && (
              <p className="text-red-500 text-sm mt-1">{errors.reason}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label
              for="message"
              className="block text-sky-900 font-medium"
              htmlFor="message"
            >
              Message:
            </label>
            <textarea
              id="message"
              className="mt-1 py-3 px-4 border border-sky-800 bg-white w-full rounded h-32"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          {/* Captcha */}
          <ReCAPTCHA
            sitekey="6LeeZZkrAAAAAFkwvm1jWo_Xat5ZKEWLUnola7Qr"
            onChange={handleCaptchaChange}
            className="mt-4"
          />
          {errors.captcha && (
            <p className="text-red-500 text-sm mt-1">{errors.captcha}</p>
          )}

          {/* Submit */}
          <button
            className={`w-full py-3 mt-6 bg-sky-900 text-white font-semibold rounded hover:cursor-pointer ${
              submitting ? "opacity-50 cursor-not-allowed" : "hover:bg-sky-800"
            }`}
            type="submit"
            disabled={submitting}
          >
            {submitting ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default VolunteerForm;
