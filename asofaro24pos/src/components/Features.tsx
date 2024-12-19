import React from 'react';
import { Smartphone, BarChart2, Users, CreditCard, Cloud, Lock } from 'lucide-react';

const features = [
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: "User-Friendly Interface",
    description: "Intuitive design that requires minimal training for your staff"
  },
  {
    icon: <BarChart2 className="h-8 w-8" />,
    title: "Real-Time Analytics",
    description: "Track sales, inventory, and performance metrics instantly"
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Customer Management",
    description: "Build customer loyalty with integrated CRM features"
  },
  {
    icon: <CreditCard className="h-8 w-8" />,
    title: "Multiple Payment Options",
    description: "Accept all payment types including contactless and mobile"
  },
  {
    icon: <Cloud className="h-8 w-8" />,
    title: "Cloud-Based System",
    description: "Access your data anywhere, anytime with cloud backup"
  },
  {
    icon: <Lock className="h-8 w-8" />,
    title: "Secure Transactions",
    description: "Enterprise-grade security for all your transactions"
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Powerful Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-blue-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}