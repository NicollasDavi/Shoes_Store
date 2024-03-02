"use client"

import Nav from "./Navigation/Nav";
import ProductPage from "./pages/ProductPage";

export default function Home() {
  return (
    <main className="p-0 m-0 box-border font-sans">
      <Nav />
      <ProductPage />
    </main>
  );
}
