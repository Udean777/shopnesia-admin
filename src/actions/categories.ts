"user server";

import { CategoriesWithProductsResponse } from "@/app/admin/categories/categories.type";
import { createClient } from "@/supabase/server";

const supabase = createClient();

export const getCategoriesWithProducts =
  async (): Promise<CategoriesWithProductsResponse> => {
    const supabase = createClient();
    const { data, error } = await (await supabase)
      .from("category")
      .select("* , products:product(*)")
      .returns<CategoriesWithProductsResponse>();

    if (error) throw new Error(`Error fetching categories: ${error.message}`);

    return data || [];
  };
