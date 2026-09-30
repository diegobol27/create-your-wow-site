import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/pivok-logo.png";
import heroBg from "@/assets/hero-bg.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PivoK | Evoluciona. Conecta. Crece." },
      {
        name: "description",
        content:
          "Soluciones Integrales de Software ahora es PivoK. Software a la medida, nube, datos y soporte para empresas que quieren crecer.",
      },
      { property: "og:title", content: "PivoK | Evoluciona. Conecta. Crece." },
      {
        property: "og:description",
        content:
          "Nueva marca, el mismo equipo. Tecnología a la medida para que tu empresa evolucione, conecte y crezca.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const lineas = [
  {
    nombre: "Software a la medida",
    desc: "Aplicaciones web y móviles diseñadas alrededor de tu operación, no al revés.",
  },
  {
    nombre: "Integración y conectividad",
    desc: "Conectamos tus sistemas, tu ERP y tus servicios para que la información fluya sin reprocesos.",
  },
  {
    nombre: "Datos e inteligencia",
    desc: "Tableros, reportes y automatización para decidir con información real y oportuna.",
  },
  {
    nombre: "Nube y soporte",
    desc: "Migración, mantenimiento y acompañamiento continuo para que todo siga funcionando.",
  },
];

const pasos = [
  { n: "01", t: "Escuchamos", d: "Entendemos tu proceso y dónde se pierde el tiempo." },
  { n: "02", t: "Diseñamos", d: "Proponemos una solución clara, con alcance y tiempos." },
  { n: "03", t: "Construimos", d: "Entregas por etapas, con avances visibles desde el inicio." },
  { n: "04", t: "Acompañamos", d: "Seguimos contigo después de la entrega." },
];

function Index() {
  return (
    <main className="relative overflow-hidden">
      {/* Nav */}
      <header className="absolute inset-x-0 top-0 z-20">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <img src={logo} alt="PivoK" width={160} height={40} className="h-9 w-auto" />
          <a
            href="#contacto"
            className="rounded-full border border-border px-5 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            Hablemos
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative flex min-h-screen items-center">
        <img
          src={heroBg}
          alt=""
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-[var(--gradient-glow)]" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, color-mix(in oklab, var(--ink) 55%, transparent), var(--background))",
          }}
        />

        <div className="relative mx-auto w-full max-w-6xl px-6 pt-32 pb-20">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs tracking-[0.2em] uppercase text-muted-foreground backdrop-blur">
            Nueva marca
          </span>
          <h1 className="mt-8 max-w-4xl text-5xl leading-[0.95] font-bold sm:text-7xl lg:text-8xl">
            Evoluciona.
            <br />
            <span className="text-gradient">Conecta. Crece.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground">
            Soluciones Integrales de Software ahora es <strong className="text-foreground">PivoK</strong>.
            El mismo equipo, una forma más ágil de llevar tecnología a tu empresa.
          </p>
          <div className="mt-10">
            <a
              href="#contacto"
              className="glow inline-flex items-center rounded-full bg-brand px-8 py-4 text-base font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              Quiero contactarlos
            </a>
          </div>
        </div>
      </section>

      {/* Rebrand */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="card-soft rounded-3xl p-10 sm:p-14">
          <h2 className="text-3xl font-bold sm:text-4xl">Cambiamos de nombre, no de compromiso</h2>
          <div className="mt-8 flex flex-wrap items-center gap-5 text-lg">
            <span className="text-muted-foreground line-through decoration-primary/60">
              solucionesintegralesdesoftware.com
            </span>
            <span className="text-primary">→</span>
            <span className="font-semibold text-foreground">PivoK</span>
          </div>
          <p className="mt-8 max-w-2xl text-muted-foreground">
            Un nombre corto, claro y fácil de recordar para lo que siempre hemos hecho: ayudar a las
            empresas a girar hacia mejores procesos con tecnología bien hecha. Los mismos contactos, los
            mismos proyectos, la misma gente.
          </p>
        </div>
      </section>

      {/* Líneas */}
      <section id="servicios" className="mx-auto max-w-6xl px-6 pb-24">
        <h2 className="text-3xl font-bold sm:text-5xl">Nuestras líneas</h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {lineas.map((l) => (
            <article
              key={l.nombre}
              className="card-soft group rounded-3xl p-8 transition-colors hover:border-primary/50"
            >
              <div className="h-1 w-12 rounded-full bg-brand" />
              <h3 className="mt-6 text-2xl font-semibold">{l.nombre}</h3>
              <p className="mt-3 text-muted-foreground">{l.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Proceso */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <h2 className="text-3xl font-bold sm:text-5xl">Cómo trabajamos</h2>
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {pasos.map((p) => (
            <div key={p.n}>
              <span className="font-display text-5xl font-bold text-gradient">{p.n}</span>
              <h3 className="mt-4 text-xl font-semibold">{p.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="relative mx-auto max-w-6xl px-6 pb-24">
        <div className="card-soft relative overflow-hidden rounded-[2rem] p-10 text-center sm:p-20">
          <div className="absolute inset-0 bg-[var(--gradient-glow)] opacity-70" />
          <div className="relative">
            <h2 className="text-4xl font-bold sm:text-6xl">
              Cuéntanos qué necesitas
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-muted-foreground">
              Respondemos rápido y sin tecnicismos. Trabajamos 100% en línea, con clientes en cualquier
              ciudad.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://wa.me/573016245133"
                className="glow inline-flex rounded-full bg-brand px-8 py-4 font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
              >
                Escribir por WhatsApp
              </a>
              <a
                href="mailto:info@pivok.com.co"
                className="inline-flex rounded-full border border-border px-8 py-4 font-semibold text-foreground transition-colors hover:bg-muted"
              >
                info@pivok.com.co
              </a>
            </div>
            <p className="mt-8 text-sm text-muted-foreground">Tel. 301 624 5133</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-10 sm:flex-row sm:justify-between">
          <img src={logo} alt="PivoK" loading="lazy" width={140} height={35} className="h-8 w-auto" />
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} PivoK · Evoluciona. Conecta. Crece.
          </p>
        </div>
      </footer>
    </main>
  );
}
