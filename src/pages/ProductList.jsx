import { useEffect } from "react";
import { useProductsStore } from "../store/products-store";

function ProductList() {
  const { products, loading, error, getProducts } = useProductsStore();

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
      {products.map((product) => (
        <div key={product.id} style={{ border: "1px solid #ccc", padding: "10px", width: "200px" }}>
          <img src={product.thumbnail} alt={product.title} style={{ width: "100%" }} />
          <h4>{product.title}</h4>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
