import { Link } from '@tanstack/react-router';

export function NotFoundPage() {
  return (
    <div className="text-center py-20">
      <p className="text-2xl font-bold text-red-600">404 - Page Not Found</p>
      <Link
        to="/"
        className="mt-4 inline-block text-indigo-600 hover:text-indigo-500"
      >
        Go Home
      </Link>
    </div>
  );
}
