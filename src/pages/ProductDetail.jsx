
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";
import ProductCard from "../components/ProductCard";

import {
  MessageCircle,
  ArrowLeft,
  CheckCircle,
} from "lucide-react";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    const fetchProduct = async () => {
      setLoading(true);
      setError("");
      setProduct(null);
      setRelatedProducts([]);

      try {
        // 1. Consultar el producto por su ID
        const { data, error } = await supabase
          .from("products")
          .select("*")
          .eq("id", id)
          .maybeSingle();

        if (error) {
          throw error;
        }

        if (!isMounted) return;

        if (!data) {
          setError("Producto no encontrado.");
          setLoading(false);
          return;
        }

        setProduct(data);

        // 2. Consultar otros productos
        const { data: related, error: relatedError } =
          await supabase
            .from("products")
            .select("*")
            .neq("id", data.id)
            .limit(3);

        if (!isMounted) return;

        if (relatedError) {
          console.error(
            "Error al cargar productos relacionados:",
            relatedError
          );
        } else {
          setRelatedProducts(related || []);
        }
      } catch (err) {
        console.error(
          "Error al consultar el producto:",
          err
        );

        if (isMounted) {
          setError(
            err.message || "No se pudo cargar el producto."
          );
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchProduct();

    return () => {
      isMounted = false;
    };
  }, [id]);

  const goToCatalog = () => {
    navigate("/productos");
  };

  // Estado de carga
  if (loading) {
    return (
      <section className="product-detail-section">
        <div className="container">
          <p>Cargando información del producto...</p>
        </div>
      </section>
    );
  }

  // Producto no encontrado o error
  if (error || !product) {
    return (
      <section className="product-detail-section">
        <div className="container">
          <h2>
            {error || "Producto no encontrado"}
          </h2>

          <button
            className="btn-secondary"
            onClick={goToCatalog}
          >
            <ArrowLeft size={18} />
            Volver al catálogo
          </button>
        </div>
      </section>
    );
  }

  const whatsappNumber = "51964097821";

  const message =
    `Hola HUB-IT, quisiera consultar por el producto ` +
    `${product.name}, marca ${product.brand || "No especificada"}, ` +
    `modelo ${product.model || "No especificado"}. ` +
    `¿Sigue disponible?`;

  const whatsappUrl =
    `https://wa.me/${whatsappNumber}?text=` +
    encodeURIComponent(message);

  const specifications = Array.isArray(
    product.specifications
  )
    ? product.specifications
    : [];

  return (
    <section className="product-detail-section">
      <div className="container">

        {/* VOLVER AL CATÁLOGO */}

        <button
          className="btn-secondary detail-back"
          onClick={goToCatalog}
        >
          <ArrowLeft size={18} />
          Volver al catálogo
        </button>

        {/* DETALLE DEL PRODUCTO */}

        <article className="product-detail-card">

          <div className="product-detail-image">
            <img
              src={product.image}
              alt={product.name}
            />
          </div>

          <div className="product-detail-content">

            <span className="product-category">
              {product.category}
            </span>

            <h1>{product.name}</h1>

            <p className="product-detail-description">
              {product.description}
            </p>

            <div className="product-detail-price">
              <small>Precio referencial</small>

              <strong>
                S/{" "}
                {Number(product.price).toLocaleString(
                  "es-PE"
                )}
              </strong>
            </div>

            {/* ESPECIFICACIONES */}

            <div className="product-detail-specs">

              <h3>Especificaciones técnicas</h3>

              {specifications.length > 0 ? (
                specifications.map(
                  (spec, index) => (
                    <div
                      className="detail-spec-row"
                      key={spec.label || index}
                    >
                      <span>{spec.label}</span>
                      <strong>{spec.value}</strong>
                    </div>
                  )
                )
              ) : (
                <p>
                  Consulta las especificaciones
                  técnicas por WhatsApp.
                </p>
              )}

            </div>

            {/* NOTA */}

            <div className="product-detail-note">
              <CheckCircle size={18} />

              <span>
                Consulta disponibilidad y precio
                actualizado.
              </span>
            </div>

            {/* WHATSAPP */}

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-primary detail-whatsapp"
            >
              <MessageCircle size={19} />
              Consultar por WhatsApp
            </a>

          </div>
        </article>

        {/* PRODUCTOS RELACIONADOS */}

        {relatedProducts.length > 0 && (
          <section className="related-products">

            <div className="related-heading">
              <span>DESCUBRE MÁS</span>

              <h2>Productos relacionados</h2>

              <p>
                Explora otros equipos y accesorios
                de HUB-IT.
              </p>
            </div>

            <div className="related-products-grid">

              {relatedProducts.map((item) => (
                <ProductCard
                  key={item.id}
                  product={item}
                />
              ))}

            </div>

          </section>
        )}

      </div>
    </section>
  );
}

export default ProductDetail;