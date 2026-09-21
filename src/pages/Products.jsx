import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";
import ProductCard from "../components/ProductCard";

import {
  Monitor,
  Laptop,
  Printer,
  Cpu,
  Headphones,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const categories = [
  { id: "todos", name: "Todos", icon: null },
  { id: "computadoras", name: "Computadoras", icon: Monitor },
  { id: "laptops", name: "Laptops", icon: Laptop },
  { id: "impresoras", name: "Impresoras", icon: Printer },
  { id: "componentes", name: "Componentes", icon: Cpu },
  { id: "accesorios", name: "Accesorios", icon: Headphones },
];

function Products({ selectedCategory }) {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [activeProduct, setActiveProduct] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // CONSULTAR PRODUCTOS EN SUPABASE
  useEffect(() => {
    let isMounted = true;

    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError("");

        console.log("Consultando productos en Supabase...");

        const { data, error } = await supabase
          .from("products")
          .select("*")
          .order("id", { ascending: true });

        if (error) {
          throw error;
        }

        if (!isMounted) return;

        console.log("Productos recibidos:", data);

        setProducts(data || []);
      } catch (err) {
        console.error("Error de Supabase:", err);

        if (isMounted) {
          setProducts([]);
          setError(
            err.message || "No se pudieron cargar los productos."
          );
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchProducts();

    return () => {
      isMounted = false;
    };
  }, []);

  // FILTRAR PRODUCTOS POR CATEGORÍA
  const filteredProducts =
    selectedCategory === "todos"
      ? products
      : products.filter(
          (product) =>
            product.category?.toLowerCase() ===
            selectedCategory.toLowerCase()
        );

  // PRODUCTO DESTACADO
  const currentProduct = filteredProducts[activeProduct];

  // CAMBIAR CATEGORÍA
  const changeCategory = (category) => {
  const params = new URLSearchParams();

  if (category !== "todos") {
    params.set("categoria", category);
  }

  const query = params.toString();

  navigate(query ? `/productos?${query}` : "/productos");

  setActiveProduct(0);
};

  // PRODUCTO ANTERIOR
  const previousProduct = () => {
    if (filteredProducts.length <= 1) return;

    setActiveProduct((current) =>
      current <= 0
        ? filteredProducts.length - 1
        : current - 1
    );
  };

  // PRODUCTO SIGUIENTE
  const nextProduct = () => {
    if (filteredProducts.length <= 1) return;

    setActiveProduct((current) =>
      current >= filteredProducts.length - 1
        ? 0
        : current + 1
    );
  };

  return (
    <section className="products-section" id="catalogo">
      <div className="container">

        {/* ENCABEZADO */}
        <div className="section-heading">
          <span>CATÁLOGO HUB-IT</span>

          <h2>Productos tecnológicos</h2>

          <p>
            Encuentra equipos y accesorios para tu hogar o empresa.
          </p>
        </div>

        {/* CATEGORÍAS */}
        <div className="category-filters">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <button
                key={category.id}
                className={`category-filter ${
                  selectedCategory === category.id
                    ? "active"
                    : ""
                }`}
                onClick={() => changeCategory(category.id)}
              >
                {Icon && <Icon size={17} />}

                <span>{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* CARGANDO */}
        {loading && (
          <div className="empty-products">
            <h3>Cargando productos...</h3>
            <p>Conectando con el catálogo HUB-IT.</p>
          </div>
        )}

        {/* ERROR */}
        {!loading && error && (
          <div className="empty-products">
            <h3>No se pudieron cargar los productos.</h3>
            <p>{error}</p>
          </div>
        )}

        {/* CATÁLOGO */}
        {!loading &&
          !error &&
          filteredProducts.length > 0 && (
            <>
              {/* SLIDER */}
              <div className="product-slider">

                <button
                  className="slider-button slider-button-left"
                  onClick={previousProduct}
                  disabled={filteredProducts.length <= 1}
                  aria-label="Producto anterior"
                >
                  <ChevronLeft size={22} />
                </button>

                {currentProduct && (
                  <ProductCard
                    product={currentProduct}
                    featured
                  />
                )}

                <button
                  className="slider-button slider-button-right"
                  onClick={nextProduct}
                  disabled={filteredProducts.length <= 1}
                  aria-label="Producto siguiente"
                >
                  <ChevronRight size={22} />
                </button>

              </div>

              {/* MINI PRODUCTOS */}
              <div className="product-thumbnails">
                {filteredProducts.map((product, index) => (
                  <button
                    key={product.id}
                    className={`product-thumbnail ${
                      index === activeProduct ? "active" : ""
                    }`}
                    onClick={() => setActiveProduct(index)}
                  >
                    <div className="thumbnail-image">
                      <img
                        src={product.image}
                        alt={product.name}
                      />
                    </div>

                    <div className="thumbnail-info">
                      <span>{product.brand}</span>

                      <strong>{product.name}</strong>

                      <small>
                        S/{" "}
                        {Number(product.price).toLocaleString(
                          "es-PE"
                        )}
                      </small>
                    </div>
                  </button>
                ))}
              </div>

              {/* INDICADORES */}
              <div className="slider-dots">
                {filteredProducts.map((product, index) => (
                  <button
                    key={product.id}
                    className={
                      index === activeProduct ? "active" : ""
                    }
                    onClick={() => setActiveProduct(index)}
                    aria-label={`Ver ${product.name}`}
                  />
                ))}
              </div>
            </>
          )}

        {/* CATÁLOGO VACÍO */}
        {!loading &&
          !error &&
          filteredProducts.length === 0 && (
            <div className="empty-products">
              <h3>No hay productos disponibles.</h3>

              <p>
                Prueba seleccionando otra categoría.
              </p>
            </div>
          )}

      </div>
    </section>
  );
}

export default Products;