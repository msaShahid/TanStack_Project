import { Link } from '@tanstack/react-router'
import { ShoppingBag } from "lucide-react";
import type { Product } from '@/types/product'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const inventoryTone = {
  'in-stock': 'border-green-500 text-green-700',
  'low-stock': 'border-yellow-500 text-yellow-700',
  'out-of-stock': 'border-red-500 text-red-700',
} as const

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      to="/products/$id"
      params={{ id: product.id.toString() }}
      className="cursor-pointer group h-full"
    >
      <Card className="flex flex-col h-full shadow hover:shadow-xl transition-transform duration-300 group-hover:-translate-y-1">

        <div className="relative w-full h-56 overflow-hidden rounded-t-lg">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {product.badge && (
            <span className="absolute top-3 left-3 rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white shadow-md">
              {product.badge.toUpperCase()}
            </span>
          )}
        </div>

        <CardContent className="flex flex-col flex-1 px-4 py-3 gap-2">
          <CardTitle className="text-lg font-semibold text-slate-900 line-clamp-2">{product.name}</CardTitle>
          <CardDescription className="text-sm text-slate-600 line-clamp-3">{product.description}</CardDescription>

          <div className="flex items-center justify-between mt-2">
            <p className="flex items-center gap-1 text-sm text-slate-600">
              <span className="font-semibold">{product.rating.toFixed(1)}</span>
              <span className="text-slate-400">({product.reviews})</span>
            </p>

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
          </div>
        </CardContent>

        <CardFooter className="flex items-center justify-between border-t px-4 py-3 bg-gray-50 dark:bg-slate-900 rounded-b-lg">
          <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
          <Button
            size="sm"
            variant="secondary"
            className="bg-indigo-600 text-white hover:bg-indigo-500 focus:ring-indigo-300"
            onClick={(e) => {
              e.preventDefault();
              console.log('Add to cart:', product.name);
            }}
          >
            <ShoppingBag size={16} /> Add
          </Button>
        </CardFooter>
      </Card>
    </Link>
  )
}
