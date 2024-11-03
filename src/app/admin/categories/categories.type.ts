export type Product = {
  category: number;
  created_at: string;
  hero_image: string;
  id: number;
  image_url: string[];
  max_quantity: number;
  price: number | null;
  slug: string;
  title: string;
};

export type CategoryWithProducts = {
  id: number;
  imageUrl: string;
  name: string;
  products: Product[];
  slug: string;
  created_at: string;
};

export type CategoriesWithProductsResponse = CategoryWithProducts[];
