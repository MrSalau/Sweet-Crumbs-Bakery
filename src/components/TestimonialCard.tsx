import type { Testimonial } from "../data/data";
import { useState } from "react";

interface Props {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: Props) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleToggle = () => {
    setIsFlipped(!isFlipped);
  };

  const containerStyle: React.CSSProperties = {
    perspective: "1000px",
  };

  const cardStyle: React.CSSProperties = {
    transition: "transform 0.7s",
    transformStyle: "preserve-3d",
    transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
  };

  const sideStyle: React.CSSProperties = {
    backfaceVisibility: "hidden",
    WebkitBackfaceVisibility: "hidden",
  };

  const backStyle: React.CSSProperties = {
    ...sideStyle,
    transform: "rotateY(180deg)",
  };

  return (
    <div
      className="w-80 h-80 mx-auto cursor-pointer"
      style={containerStyle}
      onClick={handleToggle}
      onMouseEnter={() => window.innerWidth >= 768 && setIsFlipped(true)}
      onMouseLeave={() => window.innerWidth >= 768 && setIsFlipped(false)}
    >
      <div className="relative w-full h-full rounded-lg" style={cardStyle}>
        {/* Front Side */}
        <div
          className="absolute inset-0 bg-cream-100 rounded-lg p-6 shadow-md flex flex-col items-center text-center transition duration-300 ease-in-out hover:shadow-xl hover:scale-105"
          style={sideStyle}
        >
          <img
            src={testimonial.avatarUrl}
            alt={testimonial.name}
            className="w-20 h-20 rounded-full mb-4 object-cover"
            loading="lazy"
          />
          <p className="italic text-brown-800 mb-4 text-base font-medium">
            "{testimonial.comment}"
          </p>
          <p className="font-bold text-lg text-brown-900">{testimonial.name}</p>
        </div>

        {/* Back Side */}
        <div
          className="absolute inset-0 bg-white rounded-lg p-6 shadow-lg flex flex-col items-center justify-center text-center"
          style={backStyle}
        >
          <p className="text-brown-800 text-base font-semibold">
            {testimonial.experience}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
