import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Starter",
    price: "49",
    features: [
      "1 POS Terminal",
      "Basic Reporting",
      "Payment Processing",
      "Cloud Backup",
      "Email Support"
    ]
  },
  {
    name: "Professional",
    price: "99",
    features: [
      "3 POS Terminals",
      "Advanced Analytics",
      "Inventory Management",
      "Customer Loyalty Program",
      "24/7 Support"
    ]
  },
  {
    name: "Enterprise",
    price: "199",
    features: [
      "Unlimited Terminals",
      "Custom Reporting",
      "API Access",
      "Multi-location Support",
      "Dedicated Account Manager"
    ]
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Simple, Transparent Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-8 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}