import { Link } from "@tanstack/react-router";
import { ArrowRightIcon } from "lucide-react";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

export default function HeroSection() {
  return (
    <section>
      <Card className="bg-white/80 p-8 shadow-md dark:bg-slate-950/80">
        <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600 dark:text-indigo-400">
          Your favourite e-commerce store
        </p>

        <CardTitle className="mt-2 max-w-2xl text-4xl font-bold leading-tight text-slate-900 dark:text-white">
          <h1>MD28 Your one-stop shop for all your needs</h1>
        </CardTitle>

        <CardDescription className="mt-6">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-indigo-500 hover:shadow-xl"
          >
            Browse products
            <ArrowRightIcon size={16} />
          </Link>
        </CardDescription>
      </Card>
    </section>
  );
}
