import { createFileRoute } from '@tanstack/react-router'
import { ProductCard } from '@/components/ProductCard'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { products } from '@/data/products';

export const Route = createFileRoute('/products/')({
  component: RouteComponent,
  loader: () => {
    return { products };
  }
})

function RouteComponent() {
  return (
    <>
      <div className="space-y-6 max-w-6xl mx-auto p-4">
        <div className="space-y-6">
          <section className="space-y-4 max-w-6xl mx-auto">
            <Card className="p-6 shadow-md bg-white/80">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <CardHeader className="px-0">
                    <p className="text-sm uppercase tracking-wide text-slate-500">
                     MD28 Store
                    </p>
                    <CardTitle className="text-2xl font-semibold">
                      Products built for makers
                    </CardTitle>
                  </CardHeader>
                  <CardDescription className="text-sm text-slate-600">
                    Browse a minimal, production-flavoured catalog with TanStack
                    Start server functions and typed routes.
                  </CardDescription>
                </div>
              </div>
            </Card>
          </section>
          <section>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
