
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Support from "./pages/Support";
import ProductDetail from "./pages/ProductDetail";
import "./App.css";

const validCategories = [
  "todos",
  "computadoras",
  "laptops",
  "impresoras",
  "componentes",
  "accesorios",
];

function App() {
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const category = params.get("categoria");

  const selectedCategory =
    category && validCategories.includes(category)
      ? category
      : "todos";

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/productos"
          element={
            <Products
              selectedCategory={selectedCategory}
            />
          }
        />

        <Route
          path="/productos/:id"
          element={<ProductDetail />}
        />

        <Route
          path="/servicio-tecnico"
          element={<Support />}
        />
      </Routes>
    </>
  );
}

export default App;