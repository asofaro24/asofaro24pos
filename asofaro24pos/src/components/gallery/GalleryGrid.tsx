import React, { useState } from 'react';
import { GalleryItem } from './GalleryItem';
import { GalleryModal } from './GalleryModal';
import { galleryItems } from '../../constants/gallery';

export function GalleryGrid() {
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[number] | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {galleryItems.map((item) => (
        <GalleryItem
          key={item.id}
          {...item}
          onClick={() => setSelectedItem(item)}
        />
      ))}
      <GalleryModal
        isOpen={!!selectedItem}
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </div>
  );
}