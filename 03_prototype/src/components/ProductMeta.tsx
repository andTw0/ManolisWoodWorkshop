import type { GalleryItem } from '@/content/galleryItems';

export function ProductMeta({ item }: { item: GalleryItem }) {
  const rows = [
    ['Material', item.material],
    ['Dimensions', item.dimensions],
    ['Finish', item.finish],
    ['Origin', item.origin],
    ['Shipping', item.shipping],
  ];

  return (
    <dl className="grid gap-3 border-l border-white/20 pl-5 text-sm text-mutedBone md:text-base">
      {rows.map(([label, value]) => (
        <div key={label} className="grid grid-cols-[120px_1fr] gap-4">
          <dt className="font-bold uppercase text-bone">{label}:</dt>
          <dd>{value}</dd>
        </div>
      ))}
    </dl>
  );
}
