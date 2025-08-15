import { useState } from "react";

const bakeryItems = [
  {
    id: 1,
    name: "Pizza Peperoni With Pineapple",
    description: "Crispy crust with a soft, airy crumb.",
    price: "₦7500",
    imgUrl:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "Chocolate Tea",
    description: "Flaky chocklate tea with the smoothest filling.",
    price: "₦1700",
    imgUrl:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "Pork and Gizzard Stir fry",
    description: "Well seasoned stir fry.",
    price: "₦4350",
    imgUrl:
      "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    name: "Vanilla Ice Cream ",
    description: "Vanilla cupcake topped with creamy frosting.",
    price: "₦1000",
    imgUrl:
      "data:image/jpeg;base64,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",
  },
  {
    id: 5,
    name: "Straberry Jam Donughut",
    description: "Full wheat donughut with straberry icing filling.",
    price: "₦1300",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTesRxWSxlQY8x6H7J2iduO8dCpbzTpxsXI_Q&s",
  },
  {
    id: 6,
    name: "Chocolate Sardine Bread",
    description: "Full wheat bread filled with chocolate and sardine fillings.",
    price: "₦2790",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHIu_VNJPBMgy37C28SMZsidtnBzbF-YgcxQ&s",
  },
];

const Menu = () => {
  const [loading, setLoading] = useState<number | null>(null);
  const [orderedItem, setOrderedItem] = useState<string>("");
  const [modalOpen, setModalOpen] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);

  const handleOrder = (name: string, id: number) => {
    setLoading(id);

    setTimeout(() => {
      setLoading(null);
      setOrderedItem(name);
      setModalOpen(true);
      setToastVisible(true);

      setTimeout(() => {
        setModalOpen(false);
        setToastVisible(false);
      }, 3000);
    }, 1500);
  };

  return (
    <main className="max-w-7xl mx-auto p-6 md:p-12">
      <h1 className="text-4xl bg-gradient-to-r from-amber-700 via-amber-500 to-amber-700 bg-clip-text text-transparent  font-extrabold text-brown-900 mb-8 text-center">
        Our Delicious Menu
      </h1>
      {/* Decorative underline */}
      <div className="w-24 h-1 bg-amber-600 rounded mx-auto mb-10 shadow-md"></div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {bakeryItems.map(({ id, name, description, price, imgUrl }) => (
          <div
            key={id}
            className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={imgUrl}
              alt={name}
              className="w-full h-48 object-cover rounded-t-lg"
              loading="lazy"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-brown-800 mb-2">
                {name}
              </h2>
              <p className="text-brown-700 mb-4">{description}</p>
              <p className="font-bold text-brown-900 mb-4">{price}</p>
              <button
                disabled={loading === id}
                onClick={() => handleOrder(name, id)}
                className={`border border-black rounded px-4 py-2 font-semibold transition-colors
                  text-black bg-white
                  hover:bg-amber-800 hover:text-white
                  disabled:opacity-50 disabled:cursor-not-allowed
                  md:hover:bg-amber-800 md:hover:text-white
                `}
              >
                {loading === id ? (
                  <svg
                    className="animate-spin h-5 w-5 text-black mx-auto"
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
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    />
                  </svg>
                ) : (
                  "Order Now"
                )}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50"
          aria-modal="true"
          role="dialog"
        >
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full text-center">
            <h3 className="text-2xl font-bold mb-4 text-brown-900">
              Thank you!
            </h3>
            <p className="mb-6 text-brown-800">
              Your order for{" "}
              <span className="font-semibold">{orderedItem}</span> has been
              placed.
            </p>
            <button
              onClick={() => setModalOpen(false)}
              className="mt-2 inline-block border border-black text-black font-semibold rounded px-4 py-2 hover:bg-amber-800 hover:text-white transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Toast */}
      {toastVisible && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
          <div className="bg-amber-600 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-3 animate-[slide-in_0.3s_ease-out_forwards]">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>
              Order for <strong>{orderedItem}</strong> was placed!
            </span>
          </div>
        </div>
      )}
    </main>
  );
};

export default Menu;
