import { getCategoriesWithProducts } from "@/actions/categories";
import React from "react";
import CategoryPageComponent from "./page_component";

const Categories = async () => {
  const categories = await getCategoriesWithProducts();

  // console.log(categories);

  return <CategoryPageComponent categories={categories} />;
};

export default Categories;
