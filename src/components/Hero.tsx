import { useState, useEffect } from "react";

const typewriterTexts = ["Where dough meets delight.", "Every bite a delight."];

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const fullText = typewriterTexts[textIndex];

    if (!isDeleting && displayedText.length < fullText.length) {
      timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length + 1));
      }, 150);
    } else if (isDeleting && displayedText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length - 1));
      }, 75);
    } else if (!isDeleting && displayedText.length === fullText.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % typewriterTexts.length);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, textIndex]);

  return (
    <section className="relative rounded-lg overflow-hidden shadow-lg bg-cream-100">
      <div className="md:flex md:items-center md:justify-between">
        <div className="p-8 max-w-xl">
          <h1 className="text-6xl font-extrabold mb-4 text-brown-900">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-amber-700 via-amber-500 to-amber-700 bg-clip-text text-transparent">
              Sweet Crumbs Bakery
            </span>
          </h1>
          <p className="text-amber-800 mb-6 min-h-[1.5rem] font-mono text-3xl">
            {displayedText}
            <span className="blinking-cursor">|</span>
          </p>
          <a
            href="/menu"
            className="inline-block bg-brown-900 text-cream-50 font-bold border-1 px-8 py-3 rounded shadow hover:bg-amber-700 hover:text-white transition-colors duration-300"
          >
            Explore Our Menu
          </a>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
            alt="Bakery treats"
            className="w-full h-64 md:h-80 object-cover rounded-lg"
          />
        </div>
      </div>

      <style>{`
        .blinking-cursor {
          font-weight: 700;
          font-size: 24px;
          color: #d97706;
          animation: blink 1s step-start infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
