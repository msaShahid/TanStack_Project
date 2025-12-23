export type Badge = "new" | "popular" | "sale";
export type Inventory = "in-stock" | "low-stock" | "out-of-stock";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  badge: Badge | null;
  rating: number;
  reviews: number;
  image: string;
  inventory: Inventory;
}
