import {
  Wrench,
  Settings,
  Search,
  ShieldCheck,
  MessageCircle,
} from "lucide-react";

function Support() {
  const services = [
    {
      icon: Search,
      title: "Diagnóstico",
      description:
        "Evaluamos el estado del equipo para identificar posibles problemas.",
    },
    {
      icon: Wrench,
      title: "Reparación",
      description:
        "Solucionamos problemas de hardware y software.",
    },
    {
      icon: Settings,
      title: "Mantenimiento",
      description:
        "Mantenimiento preventivo y correctivo para tus equipos.",
    },
    {
      icon: ShieldCheck,
      title: "Soporte técnico",
      description:
        "Te ayudamos a mantener tus equipos funcionando correctamente.",
    },
  ];

  return (
    <main className="support-page">

      {/* =========================
          HERO
      ========================= */}

      <section className="support-hero">

        <div className="container support-hero-content">

          <div className="support-hero-text">

            <span className="hero-label">
              SERVICIO TÉCNICO HUB-IT
            </span>

            <h1>
              Soluciones para que
              <span> tu tecnología funcione.</span>
            </h1>

            <p>
              Diagnóstico, mantenimiento, reparación y
              soporte técnico para tus equipos tecnológicos.
            </p>

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


          <div className="support-hero-visual">

            <div className="support-hero-circle">

              <Wrench size={95} />

              <span>
                SOPORTE
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          SERVICIOS
      ========================= */}

      <section className="support-services">

        <div className="container">

          <div className="section-heading">

            <span>
              NUESTROS SERVICIOS
            </span>

            <h2>
              Soporte técnico especializado
            </h2>

            <p>
              Servicios orientados a mantener tus equipos
              en buenas condiciones.
            </p>

          </div>


          <div className="support-services-grid">

            {services.map((service) => {

              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="support-service-card"
                >

                  <div className="support-service-icon">
                    <Icon size={25} />
                  </div>

                  <h3>
                    {service.title}
                  </h3>

                  <p>
                    {service.description}
                  </p>

                </article>
              );

            })}

          </div>

        </div>

      </section>


      {/* TRABAJOS REALIZADOS */}

<section className="completed-work">

  <div className="container">

    <div className="section-heading">

      <span>
        NUESTROS TRABAJOS
      </span>

      <h2>
        Trabajos realizados
      </h2>

      <p>
        Conoce algunos de los trabajos realizados
        por nuestro equipo técnico.
      </p>

    </div>


    <div className="completed-work-grid">

      <article className="work-card">

        <div className="work-image">
          <Wrench size={45} />
        </div>

        <div className="work-content">

          <span className="work-category">
            Mantenimiento
          </span>

          <h3>
            Mantenimiento preventivo
          </h3>

          <p>
            Limpieza y revisión general de equipos
            para mantener un buen funcionamiento.
          </p>

        </div>

      </article>


      <article className="work-card">

        <div className="work-image">
          <Settings size={45} />
        </div>

        <div className="work-content">

          <span className="work-category">
            Reparación
          </span>

          <h3>
            Reparación de equipos
          </h3>

          <p>
            Diagnóstico y solución de problemas
            de hardware y software.
          </p>

        </div>

      </article>


      <article className="work-card">

        <div className="work-image">
  <img
    src="/images/soporte1.jpg"
    alt="Mantenimiento de equipo realizado por HUB-IT"
  />
</div>

        <div className="work-content">

          <span className="work-category">
            Soporte técnico
          </span>

          <h3>
            Optimización de equipos
          </h3>

          <p>
            Configuración y optimización para mejorar
            el rendimiento de los equipos.
          </p>

        </div>

      </article>

    </div>

  </div>

</section>


      {/* =========================
          CONTACTO
      ========================= */}

      <section className="support-contact">

        <div className="container support-contact-content">

          <div>

            <span>
              ¿NECESITAS AYUDA?
            </span>

            <h2>
              ¿Necesitas soporte técnico?
            </h2>

            <p>
              Escríbenos y cuéntanos qué problema
              presenta tu equipo.
            </p>

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

export default Support;