import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import TestimonialCard from "../components/TestimonialCard";
import NewsletterSignup from "../components/NewsletterSignup";
import { featuredProducts, testimonials } from "../data/data";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto my-8 space-y-16">
      <Hero />

      {/* Featured Products */}
      <section>
        <h2 className="text-3xl  bg-gradient-to-r from-amber-700 via-amber-500 to-amber-700 bg-clip-text text-transparent  font-semibold mb-6 text-brown-900">
          Featured Treats
        </h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section>
        <h2 className="text-3xl  bg-gradient-to-r from-amber-700 via-amber-500 to-amber-700 bg-clip-text text-transparent  font-semibold mb-6 text-brown-900">
          What Our Customers Say
        </h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          {testimonials.map((testi) => (
            <TestimonialCard key={testi.id} testimonial={testi} />
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section>
        <NewsletterSignup />
      </section>
    </div>
  );
};

export default Home;
