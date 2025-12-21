import { Link } from "@tanstack/react-router";

export default function Footer() {
  return (
    <footer className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 py-10 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between gap-8">

        <div className="flex flex-col gap-3">
          <Link to="/" className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
            MD28
          </Link>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-sm">
            Your one-stop e-commerce store. Find the best products and deals in one place.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-8">
          <div className="flex flex-col gap-2">
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wide">
              Shop
            </h4>
            <Link to="/" className="text-sm text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition">
              Products
            </Link>
            <Link to="/" className="text-sm text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition">
              Categories
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wide">
              Company
            </h4>
            <Link to="/" className="text-sm text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition">
              About Us
            </Link>
            <Link to="/" className="text-sm text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition">
              Contact
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wide">
              Legal
            </h4>
            <Link to="/" className="text-sm text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition">
              Privacy Policy
            </Link>
            <Link to="/" className="text-sm text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200 dark:border-slate-800 mt-6 py-4 text-center text-sm text-slate-500 dark:text-slate-400">
        &copy; {new Date().getFullYear()} MD28. All rights reserved.
      </div>
    </footer>
  );
}
