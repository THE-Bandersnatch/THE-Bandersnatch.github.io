import React, { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Box, Gift, Package, Sparkles, ChevronRight, Heart, 
  Truck, Users, ShoppingBag, Menu, X, ArrowRight,
  Calendar, CreditCard, Mail
} from 'lucide-react';
import PastBoxes from './pages/PastBoxes';
import SignIn from './pages/SignIn';

// Types
interface PastBox {
  id: string;
  title: string;
  description: string;
  image: string;
  items: string[];
  price: number;
  month: string;
}

interface TestimonialType {
  id: number;
  name: string;
  avatar: string;
  quote: string;
  rating: number;
}

// Sample Data
const pastBoxes: PastBox[] = [
  {
    id: "box-2024-03",
    title: "Spring Awakening Box",
    description: "A curated selection of spring-themed items to refresh your space and spirit.",
    image: "https://images.unsplash.com/photo-1584305574647-0cc949a2bb9f?auto=format&fit=crop&w=800&q=80",
    items: ["Artisanal Tea Set", "Handmade Soap", "Spring Journal", "Scented Candle"],
    price: 49.99,
    month: "March 2024"
  },
  {
    id: "box-2024-02",
    title: "Cozy Winter Box",
    description: "Everything you need for the perfect winter evening at home.",
    image: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?auto=format&fit=crop&w=800&q=80",
    items: ["Wool Blanket", "Hot Chocolate Mix", "Book", "Fuzzy Socks"],
    price: 49.99,
    month: "February 2024"
  },
  {
    id: "box-2024-01",
    title: "New Year Wellness Box",
    description: "Start your year right with our carefully selected wellness items.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
    items: ["Yoga Mat", "Essential Oils", "Journal", "Tea Selection"],
    price: 49.99,
    month: "January 2024"
  }
];

const testimonials: TestimonialType[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    quote: "Every month feels like my birthday! The quality of items is amazing.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    quote: "Perfect gift for my wife. She loves the surprise every month!",
    rating: 5
  },
  {
    id: 3,
    name: "Emma Davis",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
    quote: "The curation is spot on. Each box tells a beautiful story.",
    rating: 5
  }
];

// Components
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'Past Boxes', path: '/past-boxes' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'About', path: '/about' },
    { name: 'FAQ', path: '/faq' }
  ];

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Gift className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">BoxJoy</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`${
                  location.pathname === item.path
                    ? 'text-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                } transition-colors duration-200`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/signin"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Sign In
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`${
                  location.pathname === item.path
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-50'
                } block px-3 py-2 rounded-md text-base font-medium`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/signin"
              className="block w-full text-center bg-blue-600 text-white px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700"
              onClick={() => setIsOpen(false)}
            >
              Sign In
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

const HomePage = () => {
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Your Monthly Box of
              <span className="relative">
                <span className="relative z-10 text-blue-600"> Joy</span>
                <svg className="absolute -bottom-2 w-full h-3 text-blue-200" viewBox="0 0 100 12" preserveAspectRatio="none">
                  <path d="M0,0 Q50,12 100,0" fill="currentColor"/>
                </svg>
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Start with any past box of your choice, then receive our latest curated surprise every month.
              Each box is filled with premium items worth discovering.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Link
                to="/signin"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors duration-200"
              >
                Get Started
              </Link>
              <Link
                to="/past-boxes"
                className="bg-gray-100 text-gray-900 px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-200 transition-colors duration-200"
              >
                Explore Past Boxes
              </Link>
            </div>
            <div className="flex justify-center space-x-8 text-gray-600">
              <div className="flex items-center">
                <Truck className="h-5 w-5 text-blue-600 mr-2" />
                <span>Free Shipping</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                <span>Monthly Delivery</span>
              </div>
              <div className="flex items-center">
                <CreditCard className="h-5 w-5 text-blue-600 mr-2" />
                <span>Cancel Anytime</span>
              </div>
            </div>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 transform">
          <div className="h-64 w-64 bg-blue-50 rounded-full opacity-50 blur-3xl"></div>
        </div>
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 transform">
          <div className="h-64 w-64 bg-purple-50 rounded-full opacity-50 blur-3xl"></div>
        </div>
      </div>

      {/* Featured Past Boxes */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Choose Your First Box
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Start your journey with any of our past boxes. After that, you'll receive our newest curated box every month.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {pastBoxes.map((box) => (
            <div key={box.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src={box.image}
                alt={box.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{box.title}</h3>
                  <span className="text-sm text-gray-500">{box.month}</span>
                </div>
                <p className="text-gray-600 mb-4">{box.description}</p>
                <ul className="space-y-2 mb-6">
                  {box.items.map((item, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <ChevronRight className="h-4 w-4 text-blue-500 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  to={`/signin?box=${box.id}`}
                  className="block w-full text-center bg-gray-100 text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-200"
                >
                  Select This Box
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            to="/past-boxes"
            className="inline-flex items-center text-blue-600 hover:text-blue-700"
          >
            View All Past Boxes
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join our subscription box service in three simple steps
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-6 inline-flex mb-6">
                <ShoppingBag className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                1. Choose Your First Box
              </h3>
              <p className="text-gray-600">
                Browse our collection of past boxes and select your favorite to start with.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-6 inline-flex mb-6">
                <Calendar className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                2. Get Monthly Surprises
              </h3>
              <p className="text-gray-600">
                Receive our newest curated box every month, filled with premium items.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-6 inline-flex mb-6">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                3. Join the Community
              </h3>
              <p className="text-gray-600">
                Share your unboxing experience and connect with other subscribers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What Our Members Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of happy subscribers who love their monthly surprise
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h4 className="font-medium text-gray-900">{testimonial.name}</h4>
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Heart key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join now and get 15% off your first box!
          </p>
          <Link
            to="/signin"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors duration-200"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gray-50 rounded-2xl p-12">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Stay Updated
            </h2>
            <p className="text-gray-600 mb-6">
              Subscribe to our newsletter for exclusive previews and special offers
            </p>
            <form className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Gift className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">BoxJoy</span>
            </div>
            <p className="text-gray-400">
              Delivering joy to your doorstep, one box at a time.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/past-boxes" className="text-gray-400 hover:text-white">Past Boxes</Link></li>
              <li><Link to="/how-it-works" className="text-gray-400 hover:text-white">How It Works</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-white">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                support@boxjoy.com
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {/* Add social media icons/links here */}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 BoxJoy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/past-boxes" element={<PastBoxes />} />
          <Route path="/signin" element={<SignIn />} />
          {/* Add other routes here */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;