import "./styles.css";
import { useEffect, useState } from "react";
import useApiCall from "./utils/useApiCall";
import Cart from "./components/Cart";

export default function App() {
  const { data, error, loading } = useApiCall({
    url: "https://fakestoreapi.com/carts/2",
  });
  console.log("cart data", data);
  if (error) return <span>{error}</span>;
  if (loading) return <span>...Loading</span>;

  return (
    <div className="App">{data.length && <Cart cartDetails={data} />}</div>
  );
}
