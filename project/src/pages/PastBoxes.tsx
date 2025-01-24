import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface PastBox {
  id: string;
  title: string;
  description: string;
  image: string;
  items: string[];
  price: number;
  month: string;
}

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
  },
  {
    id: "box-2023-12",
    title: "Holiday Magic Box",
    description: "Celebrate the season with festive treats and cozy delights.",
    image: "https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&w=800&q=80",
    items: ["Holiday Ornament", "Gourmet Chocolates", "Festive Candle", "Plush Throw"],
    price: 49.99,
    month: "December 2023"
  }
];

const PastBoxes = () => {
  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your First Box
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Start your journey with any of our past boxes. After subscribing, you'll receive our newest curated box every month.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pastBoxes.map((box) => (
            <div 
              key={box.id} 
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative">
                <img
                  src={box.image}
                  alt={box.title}
                  className="w-full h-56 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-600">
                  {box.month}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{box.title}</h3>
                <p className="text-gray-600 mb-4">{box.description}</p>
                
                <div className="space-y-2 mb-6">
                  {box.items.map((item, index) => (
                    <div key={index} className="flex items-center text-gray-600">
                      <ChevronRight className="h-4 w-4 text-blue-500 mr-2" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-gray-900">
                    ${box.price}
                  </span>
                  <span className="text-sm text-gray-500">per box</span>
                </div>

                <Link
                  to={`/subscribe?box=${box.id}`}
                  className="block w-full text-center bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
                >
                  Select This Box
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PastBoxes;