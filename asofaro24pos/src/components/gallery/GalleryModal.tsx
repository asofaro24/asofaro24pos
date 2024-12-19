import React from 'react';
import { Modal } from '../ui/Modal';
import { Calendar, MapPin } from 'lucide-react';
import type { galleryItems } from '../../constants/gallery';

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: typeof galleryItems[number] | null;
}

export function GalleryModal({ isOpen, onClose, item }: GalleryModalProps) {
  if (!item) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={item.title}>
      <div className="space-y-4">
        <div className="aspect-video relative">
          {item.type === 'video' ? (
            <video
              src={item.url}
              controls
              className="w-full h-full object-cover rounded-lg"
            />
          ) : (
            <img
              src={item.url}
              alt={item.title}
              className="w-full h-full object-cover rounded-lg"
            />
          )}
        </div>
        <p className="text-gray-600">{item.description}</p>
        <div className="flex items-center text-sm text-gray-500 space-x-4">
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{item.location}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{new Date(item.date).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </Modal>
  );
}