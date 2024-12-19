import React from 'react';
import { Container } from '../ui/Container';
import { Card } from '../ui/Card';
import { features } from '../../constants/features';

export function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <Container>
        <h2 className="text-4xl font-bold text-center mb-12">Características Poderosas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index}>
                <Icon className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}