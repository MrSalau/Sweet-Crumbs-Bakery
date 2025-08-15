const About = () => {
  return (
    <main className="max-w-5xl mx-auto p-6 md:p-12 text-brown-900">
      <h1 className="text-4xl font-extrabold mb-6 text-center bg-gradient-to-r from-amber-700 via-amber-500 to-amber-700 bg-clip-text text-transparent">
        About Sweet Crumbs
      </h1>
      {/* Decorative underline */}
      <div className="w-24 h-1 bg-amber-600 rounded mx-auto mb-10 shadow-md"></div>

      <p className="mb-8 leading-relaxed text-brown-700 text-lg max-w-prose mx-auto">
        At Sweet Crumbs, we believe baking is both an art and a heartfelt way to
        bring joy to your day. Founded in 2010, our bakery has been dedicated to
        delivering the freshest, most delicious baked goods crafted with love
        and care for our community.
      </p>

      <p className="mb-8 leading-relaxed text-brown-700 text-lg max-w-prose mx-auto">
        From traditional sourdough breads to decadent pastries and cakes, each
        item is handmade daily using only premium ingredients and cherished
        recipes passed down through generations.
      </p>

      <p className="mb-10 leading-relaxed text-brown-700 text-lg max-w-prose mx-auto">
        We warmly invite you to visit us in-store or order online and experience
        the comforting warmth and happiness that only fresh bakery treats can
        bring.
      </p>

      <div className="relative max-w-md mx-auto rounded-lg overflow-hidden shadow-2xl">
        <img
          src="https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=800&q=80"
          alt="Bakery interior"
          className="w-full h-auto object-cover"
          loading="lazy"
        />
        {/* Soft gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
      </div>
    </main>
  );
};

export default About;
