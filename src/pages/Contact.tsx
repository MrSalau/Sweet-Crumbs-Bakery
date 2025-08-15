import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});
  const [sending, setSending] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email address is required";
    else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email.trim())
    )
      newErrors.email = "Email address is invalid";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSending(true);

    setTimeout(() => {
      setSending(false);
      setShowPopup(true);
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
      setTimeout(() => setShowPopup(false), 3000);
    }, 1500);
  };

  return (
    <main className="max-w-5xl mx-auto p-6 md:p-12 text-brown-900">
      <h1 className="text-4xl bg-gradient-to-r from-amber-700 via-amber-500 to-amber-700 bg-clip-text text-transparent   font-extrabold mb-10 text-center">
        Contact Us
      </h1>
      {/* Decorative underline */}
      <div className="w-24 h-1 bg-amber-600 rounded  mx-auto mb-10 shadow-md"></div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Social Section */}
        <section className="bg-white rounded-lg p-8 flex flex-col gap-6">
          <h2 className="text-3xl bg-gradient-to-r from-amber-700 via-amber-500 to-amber-700 bg-clip-text text-transparent font-semibold mb-6 text-brown-900">
            Get in Touch
          </h2>
          <div className="space-y-4 text-brown-800">
            <p className="flex items-center gap-2">
              {/* Phone Icon - nicer */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 010 1.414l-1.293 1.293a11.042 11.042 0 005.292 5.292l1.293-1.293a1 1 0 011.414 0l2.414 2.414a1 1 0 01.293.707V19a2 2 0 01-2 2h-1C7.373 21 3 16.627 3 11V5z"
                />
              </svg>
              <strong>Phone:</strong>{" "}
              <a
                href="tel:+1234567890"
                className="underline hover:text-amber-800"
              >
                +1 (234) 567-890
              </a>
            </p>

            <p className="flex items-center gap-2">
              {/* Email Icon - nicer */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 12l-4 4m0 0l-4-4m4 4V8"
                />
                <rect
                  x="2"
                  y="4"
                  width="20"
                  height="16"
                  rx="2"
                  ry="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:info@sweetcrumbs.com"
                className="underline hover:text-amber-800"
              >
                info@sweetcrumbs.com
              </a>
            </p>

            <p className="flex items-center gap-2">
              {/* Office Icon - nicer */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 21V8a2 2 0 012-2h14a2 2 0 012 2v13M3 21h18M16 21v-4a2 2 0 012-2h2M8 21v-8a2 2 0 012-2h4a2 2 0 012 2v8"
                />
              </svg>
              <strong>Office:</strong> 123 Bakery Lane, Sweet City, CA 90210
            </p>
          </div>

          <div className="flex gap-6 mt-4 text-brown-900">
            {/* Instagram */}
            <a
              href="https://instagram.com/sweetcrumbs"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-amber-800 transition"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zM12 7.25a4.75 4.75 0 110 9.5 4.75 4.75 0 010-9.5zm5.25-.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM12 9a3 3 0 100 6 3 3 0 000-6z" />
              </svg>
            </a>
            {/* Twitter */}
            <a
              href="https://twitter.com/sweetcrumbs"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-amber-800 transition"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 19c7.732 0 11.953-6.405 11.953-11.952 0-.182 0-.364-.012-.544A8.548 8.548 0 0022 4.5a8.19 8.19 0 01-2.357.646 4.115 4.115 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.104 4.104 0 00-6.993 3.742 11.653 11.653 0 01-8.458-4.287 4.104 4.104 0 001.27 5.479A4.07 4.07 0 012 8.988v.052a4.103 4.103 0 003.292 4.022 4.1 4.1 0 01-1.852.07 4.105 4.105 0 003.832 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            {/* Facebook */}
            <a
              href="https://facebook.com/sweetcrumbs"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-amber-800 transition"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12a10 10 0 10-11.63 9.87v-6.99H8.077v-2.88h2.293V9.845c0-2.27 1.34-3.525 3.393-3.525.984 0 2.015.175 2.015.175v2.22h-1.137c-1.12 0-1.47.696-1.47 1.41v1.693h2.5l-.4 2.88h-2.1v6.99A10 10 0 0022 12z" />
              </svg>
            </a>
          </div>
        </section>

        {/* Form Section */}
        <section>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <label className="flex flex-col text-brown-700 font-semibold">
              Name
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`mt-2 p-3 rounded border focus:outline-none focus:ring-2 focus:ring-amber-600 ${
                  errors.name ? "border-red-500" : "border-cream-300"
                }`}
                placeholder="Your full name"
              />
              {errors.name && (
                <p className="text-red-600 mt-1 text-sm">{errors.name}</p>
              )}
            </label>

            <label className="flex flex-col text-brown-700 font-semibold">
              Email
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`mt-2 p-3 rounded border focus:outline-none focus:ring-2 focus:ring-amber-600 ${
                  errors.email ? "border-red-500" : "border-cream-300"
                }`}
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <p className="text-red-600 mt-1 text-sm">{errors.email}</p>
              )}
            </label>

            <label className="flex flex-col text-brown-700 font-semibold">
              Message
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className={`mt-2 p-3 rounded border focus:outline-none focus:ring-2 focus:ring-amber-600 ${
                  errors.message ? "border-red-500" : "border-cream-300"
                }`}
                placeholder="Write your message here..."
              />
              {errors.message && (
                <p className="text-red-600 mt-1 text-sm">{errors.message}</p>
              )}
            </label>

            <button
              type="submit"
              disabled={sending}
              className={`flex items-center justify-center gap-2 border border-black font-bold py-3 rounded-lg transition-colors
                ${
                  sending
                    ? "bg-amber-800 text-white"
                    : "bg-white text-black hover:bg-amber-800 hover:text-white"
                }`}
            >
              Send Message
              {/* Paper Plane SVG icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill={sending ? "white" : "black"}
                viewBox="0 0 24 24"
                stroke="none"
              >
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </button>
          </form>
        </section>
      </div>

      {/* Popup message */}
      {showPopup && (
        <div className="fixed top-5 right-5 bg-white border border-green-500 text-green-600 px-6 py-4 rounded shadow-lg flex items-center gap-2 animate-fadeInOut z-50">
          <span className="text-2xl">🎉</span>
          <p>Your message has been sent successfully!</p>
        </div>
      )}

      {/* Animation for fadeInOut */}
      <style>{`
        @keyframes fadeInOut {
          0% {opacity: 0; transform: translateY(-10px);}
          10%, 90% {opacity: 1; transform: translateY(0);}
          100% {opacity: 0; transform: translateY(-10px);}
        }
        .animate-fadeInOut {
          animation: fadeInOut 5s ease forwards;
        }
      `}</style>
    </main>
  );
};

export default Contact;
