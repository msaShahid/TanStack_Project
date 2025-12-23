import { createFileRoute, notFound } from '@tanstack/react-router';
import { ShoppingBag, Star } from 'lucide-react';
import { products } from '@/data/products';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const inventoryTone = {
  'in-stock': 'border-green-500 text-green-700',
  'low-stock': 'border-yellow-500 text-yellow-700',
  'out-of-stock': 'border-red-500 text-red-700',
} as const;

export const Route = createFileRoute('/products/$id')({
  component: ProductPage,
  loader: ({ params }) => {
    const product = products.find(p => p.id === Number(params.id));
    if (!product) throw notFound();
    return product;
  },
});

function ProductPage() {
  const product = Route.useLoaderData();

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <Card className="flex flex-col lg:flex-row gap-12 shadow-xl bg-white dark:bg-slate-900 transition-all duration-300">
        
        <div className="flex-1 h-96 lg:h-auto overflow-hidden rounded-lg">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        <CardContent className="flex-1 flex flex-col justify-between gap-6 pt-3">
          <div className="space-y-6">
            <CardHeader className="px-0 flex-col items-start gap-2">
              {product.badge && (
                <span className="w-28 text-center rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white shadow-md">
                  {product.badge.toUpperCase()}
                </span>
              )}
              <CardTitle className="text-3xl font-bold text-slate-900 dark:text-white">{product.name}</CardTitle>
              <CardDescription className="text-gray-600 dark:text-slate-300">{product.description}</CardDescription>
            </CardHeader>

            <div className="flex items-center gap-2">
              {Array.from({ length: Math.floor(product.rating) }).map((_, i) => (
                <Star key={i} size={18} className="text-yellow-400" fill="currentColor" />
              ))}
              {product.rating % 1 >= 0.5 && (
                <Star size={18} className="text-yellow-400/50" fill="currentColor" />
              )}
              <span className="text-sm text-slate-500 dark:text-slate-400">
                ({product.reviews} reviews)
              </span>
            </div>

            <span
              className={cn(
                'rounded-full border px-3 py-1 text-xs font-semibold',
                inventoryTone[product.inventory]
              )}
            >
              {product.inventory === 'in-stock'
                ? 'In Stock'
                : product.inventory === 'low-stock'
                ? 'Low Stock'
                : 'Out of Stock'}
            </span>

            <p className="text-3xl font-bold">${product.price.toFixed(2)}</p>
          </div>

          <CardFooter className="pt-2 border-t-0 bg-transparent">
            <Button
              size="lg"
              className="w-full lg:w-auto bg-indigo-600 text-white hover:bg-indigo-500 transition-all flex items-center justify-center gap-2"
              onClick={() => console.log('Add to cart:', product.name)}
            >
              <ShoppingBag size={20} /> Add to Cart
            </Button>
          </CardFooter>
        </CardContent>
      </Card>
    </div>
  );
}
