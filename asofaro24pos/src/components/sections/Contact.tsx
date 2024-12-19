import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { COMPANY } from '../../constants/company';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <Container>
        <h2 className="text-4xl font-bold text-center mb-12">Contáctenos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Ponte en Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-blue-600 mr-4" />
                <span>{COMPANY.phone}</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-blue-600 mr-4" />
                <span>{COMPANY.email}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-blue-600 mr-4" />
                <span>{COMPANY.address}</span>
              </div>
            </div>
          </div>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Nombre</label>
              <input type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input type="email" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
              <textarea rows={4} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"></textarea>
            </div>
            <Button type="submit" fullWidth>
              Enviar Mensaje
            </Button>
          </form>
        </div>
      </Container>
    </section>
  );
}