import { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FaCheckCircle } from "react-icons/fa";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setSubmitted(true);
    setEmail("");
  };

  return (
    <div className="bg-cream-200 rounded-lg p-8 max-w-lg mx-auto text-center">
      <h3 className="text-3xl  bg-gradient-to-r from-amber-700 via-amber-500 to-amber-700 bg-clip-text text-transparent  font-semibold mb-3 text-brown-900">
        Join Our Newsletter
      </h3>
      <p className="mb-6 text-brown-800 font-semibold text-lg">
        Get the latest updates, exclusive offers, and delicious recipes straight
        to your inbox!
      </p>

      {!submitted ? (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-grow px-4 py-2 rounded border border-cream-300 focus:outline-none focus:ring-2 focus:ring-brown-600 text-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button
            type="submit"
            className="px-6 py-3 rounded border border-black bg-white text-black font-bold transition-colors duration-300 hover:bg-amber-600 hover:text-white flex items-center gap-2 text-lg"
          >
            <HiOutlineMail className="text-xl" />
            Subscribe
          </button>
        </form>
      ) : (
        <div className="flex flex-col items-center justify-center gap-2 text-green-700 font-semibold">
          <FaCheckCircle className="text-4xl" />
          <p className="text-xl">Thank you for subscribing!</p>
        </div>
      )}
    </div>
  );
};

export default NewsletterSignup;
