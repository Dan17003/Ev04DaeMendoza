export const fetchProducts = async () => {
  const res = await fetch("https://dummyjson.com/products");
  if (!res.ok) {
    throw new Error("Error al cargar productos");
  }
  const data = await res.json();
  return data.products;
};
