import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

interface GalleryItemProps {
  type: 'image' | 'video';
  thumbnail: string;
  title: string;
  description: string;
  location: string;
  date: string;
  onClick: () => void;
}

export function GalleryItem({ 
  thumbnail, 
  title, 
  description, 
  location, 
  date, 
  onClick 
}: GalleryItemProps) {
  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
      onClick={onClick}
    >
      <div className="aspect-video relative">
        <img 
          src={thumbnail} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-center text-sm text-gray-500 space-x-4">
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{location}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{new Date(date).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}