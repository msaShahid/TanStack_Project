import { Link } from "@tanstack/react-router";
import { ShoppingBag } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">

        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-sm dark:bg-indigo-500">
              <ShoppingBag size={20} />
            </div>

            <span className="text-sm font-semibold text-slate-900 dark:text-white">
              TanStack
            </span>
          </Link>

          <nav className="hidden items-center gap-2 text-sm font-medium sm:flex">
            <Link
              to="/"
              className="rounded-lg px-3 py-1 text-slate-700 transition hover:bg-indigo-50 hover:text-indigo-600 dark:text-slate-200 dark:hover:bg-indigo-500/10 dark:hover:text-indigo-400"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="rounded-lg px-3 py-1 text-slate-700 transition hover:bg-indigo-50 hover:text-indigo-600 dark:text-slate-200 dark:hover:bg-indigo-500/10 dark:hover:text-indigo-400"
            >
              Products
            </Link>
            <Link
              to="/"
              className="rounded-lg px-3 py-1 text-slate-700 transition hover:bg-indigo-50 hover:text-indigo-600 dark:text-slate-200 dark:hover:bg-indigo-500/10 dark:hover:text-indigo-400"
            >
              Create Product
            </Link>
          </nav>
        </div>

        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
        >
          <span>Cart</span>

          <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-indigo-600 px-2 text-[11px] font-bold text-white">
            0
          </span>

          <span className="hidden text-[11px] font-medium text-slate-500 dark:text-slate-400 sm:inline">
            $12
          </span>
        </Link>
      </div>
    </header>
  );
}
