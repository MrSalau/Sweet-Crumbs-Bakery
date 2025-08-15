import { useState } from "react";
import type { Product } from "../data/data";
import { HiShoppingCart } from "react-icons/hi";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleAddToCart = () => {
    setIsLoading(true);
    setTimeout(() => {
      alert(`Added ${product.name} to cart!`);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="bg-cream-100 rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-48 object-cover"
        loading="lazy"
      />
      <div className="p-4">
        <h3 className="font-semibold text-xl mb-1 text-brown-900">
          {product.name}
        </h3>
        <p className="text-brown-800 mb-2 text-sm">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="font-bold text-brown-900">{product.price}</span>

          <button
            type="button"
            disabled={isLoading}
            onClick={handleAddToCart}
            className={`
              group flex items-center gap-2 px-3 py-1 rounded font-semibold border border-black transition duration-300 active:scale-95
              bg-white text-black
              hover:bg-amber-600 hover:text-white
              ${isLoading ? "bg-amber-600 text-white cursor-not-allowed" : ""}
            `}
          >
            {isLoading ? (
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
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                />
              </svg>
            ) : (
              <>
                <HiShoppingCart className="text-black group-hover:text-white transition-colors duration-300" />
                Add to Cart
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
