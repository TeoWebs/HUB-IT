import {
  Monitor,
  Laptop,
  Printer,
  Cpu,
  Headphones,
  Wrench,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

import { Link } from "react-router-dom";

function Home() {
  const categories = [
    {
      icon: Monitor,
      name: "Computadoras",
      description: "Equipos para oficina, hogar y empresa.",
    },
    {
      icon: Laptop,
      name: "Laptops",
      description: "Laptops para trabajo, estudio y productividad.",
    },
    {
      icon: Printer,
      name: "Impresoras",
      description: "Soluciones de impresión para diferentes necesidades.",
    },
    {
      icon: Cpu,
      name: "Componentes",
      description: "Componentes para actualizar y mejorar tus equipos.",
    },
    {
      icon: Headphones,
      name: "Accesorios",
      description: "Accesorios tecnológicos para complementar tus equipos.",
    },
  ];

  return (
    <main>

      {/* HERO */}

      <section className="home-hero">

        <div className="container home-hero-content">

          <div className="home-hero-text">

            <span className="hero-label">
              INVERSIONES TECNOLÓGICAS S.A.C.
            </span>

            <h1>
              Tecnología que impulsa
              <span> tu negocio.</span>
            </h1>

            <p>
              Soluciones tecnológicas para empresas,
              negocios y clientes particulares.
              Encuentra equipos, componentes,
              accesorios y servicio técnico.
            </p>

            <div className="home-hero-buttons">

              <Link
                to="/productos"
                className="btn-primary"
              >
                Ver productos
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/servicio-tecnico"
                className="btn-secondary"
              >
                Servicio técnico
              </Link>

            </div>

          </div>


          <div className="home-hero-visual">

            <div className="hero-circle">

              <div className="hero-logo-text">

                <strong>HUB</strong>
                <span>IT</span>

                <small>
                  TECNOLOGÍA
                </small>

              </div>

            </div>


            <div className="hero-floating-card hero-card-one">

              <Monitor size={20} />

              <span>
                Computadoras
              </span>

            </div>


            <div className="hero-floating-card hero-card-two">

              <Laptop size={20} />

              <span>
                Laptops
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* PRESENTACIÓN */}

      <section className="about-section">

        <div className="container about-grid">

          <div>

            <span className="section-label">
              SOBRE HUB-IT
            </span>

            <h2>
              Tecnología pensada para
              las necesidades de tu negocio.
            </h2>

          </div>


          <div>

            <p>
              En HUB-IT trabajamos para brindar
              soluciones tecnológicas orientadas
              a empresas, negocios y clientes
              particulares.
            </p>

            <p>
              Ofrecemos equipos tecnológicos,
              componentes, accesorios y servicios
              de soporte técnico para ayudarte a
              mantener tu tecnología funcionando.
            </p>

          </div>

        </div>

      </section>


      {/* UBICACIÓN / PRESENCIA */}

      <section className="location-intro">

        <div className="container location-intro-content">

          <div>

            <span className="section-label">
              NOS ENCONTRAMOS EN
            </span>

            <h2>
              Tu aliado tecnológico
              más cerca de ti.
            </h2>

            <p>
              Atendemos a nuestros clientes desde
              nuestra sede de HUB-IT.
            </p>

            <p className="location-address">
  📍 Calle La Libertad 236-A
  <br />
  Ica, Ica, Perú
</p>

<p className="location-phone">
  📞 964 097 821
</p>
          </div>


          <div className="location-card">

  <div className="location-card-icon">
    📍
  </div>

  <span className="location-card-label">
    NUESTRA TIENDA
  </span>

  <h3>
    HUB-IT
  </h3>

  <p>
    Inversiones Tecnológicas S.A.C.
  </p>

  <strong>
    Calle La Libertad 236-A
  </strong>

  <span>
    Ica, Ica, Perú
  </span>

  <a
    href="https://www.google.com/maps/search/?api=1&query=Calle+La+Libertad+236-A+Ica+Peru"
    target="_blank"
    rel="noreferrer"
    className="location-map-link"
  >
    Ver ubicación
    <ArrowRight size={16} />
  </a>

</div>

        </div>

      </section>


      {/* CATEGORÍAS */}

      <section className="home-categories">

        <div className="container">

          <div className="section-heading">

            <span>
              PRODUCTOS
            </span>

            <h2>
              Encuentra lo que necesitas
            </h2>

            <p>
              Explora nuestras principales categorías.
            </p>

          </div>


          <div className="home-categories-grid">

            {categories.map((category) => {

              const Icon = category.icon;

              const categorySlug =
                category.name
                  .toLowerCase()
                  .normalize("NFD")
                  .replace(/[\u0300-\u036f]/g, "")
                  .replace(/\s+/g, "-");

              return (
                <Link
                  key={category.name}
                  to={`/productos?categoria=${categorySlug}`}
                  className="home-category-card"
                >

                  <div className="home-category-icon">

                    <Icon size={25} />

                  </div>

                  <h3>
                    {category.name}
                  </h3>

                  <p>
                    {category.description}
                  </p>

                  <span>
                    Explorar
                    <ArrowRight size={16} />
                  </span>

                </Link>
              );

            })}

          </div>


          <div className="home-products-button">

            <Link
              to="/productos"
              className="btn-primary"
            >
              Ver catálogo completo
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

      </section>


      {/* SERVICIO TÉCNICO */}

      <section className="home-service">

        <div className="container home-service-content">

          <div>

            <span className="section-label">
              SERVICIO TÉCNICO
            </span>

            <h2>
              Soluciones para que tu
              tecnología siga funcionando.
            </h2>

            <p>
              Conoce nuestros servicios de
              mantenimiento, diagnóstico,
              reparación y soporte técnico.
            </p>

            <Link
              to="/servicio-tecnico"
              className="btn-primary"
            >
              Conocer servicio técnico
              <ArrowRight size={18} />
            </Link>

          </div>


          <div className="service-icon-large">

            <Wrench size={65} />

          </div>

        </div>

      </section>


      {/* WHATSAPP */}

      <section className="home-contact">

        <div className="container home-contact-content">

          <div>

            <span>
              ¿NECESITAS AYUDA?
            </span>

            <h2>
              Estamos para ayudarte.
            </h2>

          </div>


          <a
            href="https://wa.me/51964097821"
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >

            <MessageCircle size={19} />

            Consultar por WhatsApp

          </a>

        </div>

      </section>

    </main>
  );
}

export default Home;