import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="flex flex-col items-center justify-center h-[70vh] text-brown-900 px-6">
      <h1 className="text-6xl font-extrabold mb-6">404</h1>
      <p className="text-xl mb-8">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="bg-cream-200 px-6 py-3 rounded-lg font-semibold hover:bg-cream-300 transition"
      >
        Back to Home
      </Link>
    </main>
  );
};

export default NotFound;
