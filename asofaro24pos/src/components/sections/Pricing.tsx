import React from 'react';
import { Check } from 'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { plans } from '../../constants/pricing';

export function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <Container>
        <h2 className="text-4xl font-bold text-center mb-12">Precios Transparentes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">COP ${plan.price}</span>
                  <span className="text-gray-600">/mes</span>
                </div>
                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button fullWidth className="mt-8">
                  Comenzar
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}