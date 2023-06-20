import { useEffect, useState } from "react";
import { ProductFilter } from "../components/productFilter";
import { SmallList } from "../components/product/ProductBig";
import { get } from "../api";

export function ProductList() {
  const [articles, setArticles] = useState();

  useEffect(() => {
    get(`/Category`).then((articles) => {
      setArticles(articles);
    });
  }, []);

  function handleFilterClick(category) {
    get(`/Category/${category}`).then((articles) => {
      setArticles(articles);
    });
  }

  return (
    <>
      <ProductFilter onFilterChange={handleFilterClick} />
      <SmallList articles={articles} />
    </>
  );
}
