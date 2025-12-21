import { Link } from "@tanstack/react-router";
import { ArrowRightIcon } from "lucide-react";
import ProductCard from "./ProductCard";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'


interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  rating: number;
}

interface RecommendedSectionProps {
  products: Array<Product>;
}

export default function RecommendedSection({ products }: RecommendedSectionProps) {
  return (
    <section>
      <Card className="bg-white/80 p-6 shadow-md dark:bg-slate-950/80">

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <CardHeader className="px-0">
              <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600 dark:text-indigo-400">
                Recommended
              </p>
              <CardTitle className="text-2xl font-semibold text-slate-900 dark:text-white">
                Starter picks from the catalog
              </CardTitle>
            </CardHeader>
            <CardDescription className="mt-1 text-sm text-slate-600 dark:text-slate-300">
              Curated items to try the cart and detail pages quickly.
            </CardDescription>
          </div>

          <Link
            to="/products"
            className="hidden sm:inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 dark:border-slate-700 dark:text-slate-200 transition hover:-translate-y-0.5 hover:shadow-xl"
          >
            View All <ArrowRightIcon size={14} />
          </Link>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Card>
    </section>
  );
}
