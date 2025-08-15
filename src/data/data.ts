export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
}

export interface Testimonial {
  id: number;
  name: string;
  comment: string;
  avatarUrl: string;
  experience: string;
}

// Sample featured bakery products with image URLs from Unsplash/Pexels
export const featuredProducts: Product[] = [
  {
    id: 1,
    name: "Classic Chocolate Cake",
    description: "Rich and moist chocolate cake with fudge frosting.",
    price: "₦9000",
    imageUrl:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "Blueberry Muffins",
    description: "Freshly baked muffins bursting with juicy blueberries.",
    price: "₦3000",
    imageUrl:
      "https://www.allrecipes.com/thmb/BEsWZ8dsZWsmw2GKkDdQgS3it1A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/6865-to-die-for-blueberry-muffins-VAT-024-4x3-8596a2806f32400ea75520c3baa1664e.jpg",
  },
  {
    id: 3,
    name: "Cinnamon Rolls",
    description: "Soft rolls with cinnamon sugar and cream cheese icing.",
    price: "₦1700",
    imageUrl: "https://horizon.com/wp-content/uploads/recipe-cin-roll-hero.jpg",
  },
];

// Sample testimonials with avatars
export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Jessica R.",
    comment: "Best bakery in town! Every bite is heavenly.",
    avatarUrl: "https://randomuser.me/api/portraits/women/68.jpg",
    experience:
      "I love the variety of treats they offer, especially the cakes!",
  },
  {
    id: 2,
    name: "Mark D.",
    comment: "Amazing customer service and delicious treats.",
    avatarUrl: "https://randomuser.me/api/portraits/men/45.jpg",
    experience: "The chocolate cake is my favorite, always moist and rich.",
  },
  {
    id: 3,
    name: "Sophie L.",
    comment: "I keep coming back for the cinnamon rolls. So good!",
    avatarUrl: "https://randomuser.me/api/portraits/women/44.jpg",
    experience: "Their cinnamon rolls are the best I've ever had!",
  },
];
