export type GalleryItem = {
  id: string;
  title: string;
  category: string;
  image: string;
  thumbnail: string;
  description: string;
  material: string;
  dimensions: string;
  finish: string;
  origin: string;
  shipping: string;
};

export const galleryItems: GalleryItem[] = [
  {
    id: 'ancestor',
    title: 'Ancestor',
    category: 'Olive Wood Sculpture',
    image: '/assets/gallery/ancestor-main.webp',
    thumbnail: '/assets/gallery/ancestor-thumb.webp',
    description: 'Carved from ancient olive wood. Placeholder copy for the featured object story.',
    material: 'Ancient Olive Wood',
    dimensions: 'Approx. 45 cm (H)',
    finish: 'Natural / hand polished',
    origin: 'Crete, Greece',
    shipping: 'Worldwide inquiry',
  },
  {
    id: 'mask',
    title: 'Mask',
    category: 'Carved Expression',
    image: '/assets/gallery/product-02-main.webp',
    thumbnail: '/assets/gallery/product-02-thumb.webp',
    description: 'Placeholder for another product. Replace this image and copy in galleryItems.ts.',
    material: 'Olive Wood',
    dimensions: 'Approx. 32 cm (H)',
    finish: 'Natural / hand polished',
    origin: 'Crete, Greece',
    shipping: 'Worldwide inquiry',
  },
  {
    id: 'bowl',
    title: 'Bowl',
    category: 'Natural Shape',
    image: '/assets/gallery/product-03-main.webp',
    thumbnail: '/assets/gallery/product-03-thumb.webp',
    description: 'Placeholder for a bowl object. Keep all real product data in this file.',
    material: 'Olive Wood',
    dimensions: 'Variable',
    finish: 'Food-safe finish',
    origin: 'Crete, Greece',
    shipping: 'Worldwide inquiry',
  },
  {
    id: 'root-piece',
    title: 'Root Piece',
    category: 'One-of-a-kind Object',
    image: '/assets/gallery/product-04-main.webp',
    thumbnail: '/assets/gallery/product-04-thumb.webp',
    description: 'Placeholder for a root sculpture or decorative one-off item.',
    material: 'Olive Root',
    dimensions: 'Variable',
    finish: 'Natural',
    origin: 'Crete, Greece',
    shipping: 'Worldwide inquiry',
  },
  {
    id: 'figure',
    title: 'Figure',
    category: 'Wood Figure',
    image: '/assets/gallery/product-05-main.webp',
    thumbnail: '/assets/gallery/product-05-thumb.webp',
    description: 'Placeholder for a carved figure. Replace with real product text later.',
    material: 'Olive Wood',
    dimensions: 'Variable',
    finish: 'Hand finished',
    origin: 'Crete, Greece',
    shipping: 'Worldwide inquiry',
  },
];
