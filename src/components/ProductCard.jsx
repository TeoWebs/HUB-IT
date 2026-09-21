
import { useNavigate } from "react-router-dom";
import { MessageCircle, ChevronRight } from "lucide-react";

function ProductCard({ product, featured = false }) {
  const navigate = useNavigate();

  const whatsappNumber = "51964097821";

  const message = `Hola HUB-IT, quisiera consultar por el producto ${product.name}, marca ${product.brand}, modelo ${product.model}. ¿Sigue disponible?`;

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  const goToDetails = () => {
    navigate(`/productos/${product.id}`);
  };

  if (featured) {
    return (
      <article className="featured-product">

        <div
          className="product-image"
          onClick={goToDetails}
          style={{ cursor: "pointer" }}
        >
          <img
            src={product.image}
            alt={product.name}
          />
        </div>

        <div className="product-details">

          <span className="product-category">
            {product.category}
          </span>

          <h2>{product.name}</h2>

          <p className="product-description">
            {product.description}
          </p>
       
<div className="specifications">
  {(Array.isArray(product.specifications)
    ? product.specifications
    : []
  ).map((specification, index) => (
    <div key={specification.label || index}>
      <strong>{specification.label}</strong>
      <span>{specification.value}</span>
    </div>
  ))}
</div>

          <div className="product-bottom">

            <div className="price">
              <small>Precio referencial</small>
              <strong>
                S/ {product.price.toLocaleString("es-PE")}
              </strong>
            </div>

            <div className="product-actions">

              <button
                className="btn-secondary"
                onClick={goToDetails}
              >
                Ver detalles
                <ChevronRight size={18} />
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                <MessageCircle size={19} />
                Consultar
              </a>

            </div>

          </div>

        </div>

      </article>
    );
  }

  return (
    <article className="product-card">

      <div className="product-card-image">
        <img
          src={product.image}
          alt={product.name}
        />
      </div>

      <div className="product-card-content">

        <span className="product-card-brand">
          {product.brand}
        </span>

        <h3>{product.name}</h3>

        <p>{product.model}</p>

        <div className="product-card-footer">

          <strong>
            S/ {product.price.toLocaleString("es-PE")}
          </strong>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`Consultar ${product.name}`}
          >
            <MessageCircle size={18} />
          </a>

        </div>

        <button
          className="btn-secondary"
          onClick={goToDetails}
        >
          Ver detalles
          <ChevronRight size={18} />
        </button>

      </div>

    </article>
  );
}

export default ProductCard;