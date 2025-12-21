import { Star } from 'lucide-react';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
    description: string;
    rating: number;
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  const fullStars = Math.floor(product.rating);
  const halfStar = product.rating - fullStars >= 0.5;

  return (
    <div className="bg-white/80 dark:bg-slate-950/80 p-4 rounded-xl shadow hover:shadow-lg transition">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{product.name}</h3>
      <p className="text-indigo-600 font-bold mt-1">${product.price.toFixed(2)}</p>
      <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">{product.description}</p>
      <div className="flex items-center mt-3 gap-1">
        {Array.from({ length: fullStars }).map((_, i) => (
          <Star key={i} size={16} className="text-indigo-500" fill="currentColor" />
        ))}
        {halfStar && <Star size={16} className="text-indigo-500/50" fill="currentColor" />}
        <span className="text-xs text-slate-500 dark:text-slate-400 ml-2">{product.rating.toFixed(1)}</span>
      </div>
    </div>
  );
}
