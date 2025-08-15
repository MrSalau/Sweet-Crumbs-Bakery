import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-amber-50 text-brown-900 text-center py-6 mt-10 border-t-2 border-amber-300">
      <p className="mb-4 font-semibold text-lg tracking-wide">
        © {new Date().getFullYear()} Sweet Crumbs Bakery. All rights reserved.
      </p>

      <div className="flex justify-center space-x-8 text-brown-700">
        <a
          href="https://twitter.com/sweetcrumbsbakery"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="hover:text-amber-700 transition-colors duration-300"
        >
          <FaTwitter size={26} />
        </a>
        <a
          href="https://facebook.com/sweetcrumbsbakery"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="hover:text-amber-700 transition-colors duration-300"
        >
          <FaFacebookF size={26} />
        </a>
        <a
          href="https://instagram.com/sweetcrumbsbakery"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:text-amber-700 transition-colors duration-300"
        >
          <FaInstagram size={26} />
        </a>
      </div>

      <p className="mt-5 italic text-amber-800 font-medium tracking-wide">
        Bringing sweet smiles, one crumb at a time!
      </p>
    </footer>
  );
};

export default Footer;
