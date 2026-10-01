import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/nuevo_logo.png.asset.json";
import mujer from "@/assets/mujer-cohete.png";
import astronauta from "@/assets/astronauta.png";
import aliadoBinapps from "@/assets/aliado-binapps.png.asset.json";
import aliadoBuk from "@/assets/aliado-buk.png.asset.json";
import aliadoMedifolios from "@/assets/aliado-medifolios.png.asset.json";
import fondo from "@/assets/fondo.jpg.asset.json";
import logoEstelar from "@/assets/LogoLineaSoftware.png.asset.json";
import logoGenesis from "@/assets/LogoLineaProducto.png.asset.json";
import logoOrbita from "@/assets/LogoLineaDlloOrganizacional.png.asset.json";
import logoSupernova from "@/assets/LogoLineaIA.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PivoK | Estelar, Génesis, Órbita y Supernova" },
      {
        name: "description",
        content:
          "Soluciones Integrales de Software ahora es PivoK: software a la medida, lanzamiento de productos, consultoría y transformación digital con IA.",
      },
      { property: "og:title", content: "PivoK | Impulsamos tu negocio más lejos" },
      {
        property: "og:description",
        content:
          "Cuatro líneas para llevar tu negocio a otra órbita: PivoK Estelar, Génesis, Órbita y Supernova.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type Bloque = { titulo: string; desc?: string; etiqueta?: string; items: string[] };
type Paso = { t: string; d: string; items?: string[] };
type Publico = { t: string; d: string };

type Linea = {
  id: string;
  nombre: string;
  logo: string;
  titular: React.ReactNode;
  intro: string[];
  destacados?: { t: string; d: string }[];
  bloques?: Bloque[];
  procesoTitulo: string;
  proceso: Paso[];
  extra?: { t: string; d: string };
  beneficios: string[];
  publicoTitulo: string;
  publico: Publico[];
  cierre: React.ReactNode;
  llamado: string;
};

const G = ({ children }: { children: React.ReactNode }) => (
  <span className="text-gradient">{children}</span>
);

const lineas: Linea[] = [
  {
    id: "estelar",
    nombre: "PivoK Estelar",
    logo: logoEstelar.url,
    titular: (
      <>
        Impulsamos tu visión con <G>tecnología hecha a la medida.</G>
      </>
    ),
    intro: [
      "Desarrollamos soluciones de software personalizadas, implementamos plataformas SaaS y brindamos soporte técnico experto para que tu negocio siempre avance.",
    ],
    destacados: [
      { t: "Desarrollo a medida", d: "Soluciones únicas para retos únicos." },
      { t: "Software SaaS", d: "Plataformas escalables, accesibles y siempre actualizadas." },
      { t: "Soporte técnico", d: "Acompañamiento experto para que todo funcione siempre." },
    ],
    bloques: [
      {
        titulo: "Desarrollo de software a medida",
        desc: "Creamos soluciones robustas, escalables y alineadas a tus procesos y objetivos de negocio.",
        etiqueta: "Incluye",
        items: [
          "Análisis y levantamiento de requerimientos",
          "Diseño de soluciones personalizadas",
          "Desarrollo ágil y seguro",
          "Integraciones con sistemas existentes",
          "Pruebas de calidad y despliegue",
          "Capacitación y documentación",
        ],
      },
      {
        titulo: "Implementación de software SaaS",
        desc: "Implementamos plataformas SaaS que optimizan tu operación, reducen costos y te permiten escalar sin complicaciones.",
        etiqueta: "Beneficios",
        items: [
          "Acceso desde cualquier lugar y dispositivo",
          "Actualizaciones automáticas",
          "Infraestructura segura y confiable",
          "Pagos flexibles por suscripción",
          "Escalabilidad inmediata",
          "Reducción de costos operativos",
        ],
      },
      {
        titulo: "Soporte técnico experto",
        desc: "Estamos contigo para asegurar la continuidad y el rendimiento de tus sistemas.",
        etiqueta: "Cubrimos",
        items: [
          "Mesa de ayuda y atención a usuarios",
          "Monitoreo y mantenimiento preventivo",
          "Resolución de incidencias",
          "Soporte remoto y en sitio",
          "Mejoras y actualizaciones",
          "Acuerdos de nivel de servicio (SLA)",
        ],
      },
    ],
    procesoTitulo: "Nuestro proceso",
    proceso: [
      { t: "Entendimiento", d: "Conocemos tu negocio y sus desafíos." },
      { t: "Diseño", d: "Proponemos la mejor solución tecnológica." },
      { t: "Desarrollo / Implementación", d: "Construimos e implementamos con metodologías ágiles." },
      { t: "Pruebas", d: "Validamos calidad, seguridad y rendimiento." },
      { t: "Despliegue", d: "Puesta en producción exitosa." },
      { t: "Soporte y mejora", d: "Acompañamiento continuo para seguir evolucionando." },
    ],
    beneficios: [
      "Soluciones 100% alineadas a tus necesidades",
      "Mayor eficiencia y productividad",
      "Escalabilidad para crecer sin límites",
      "Seguridad, estabilidad y confiabilidad",
      "Acompañamiento experto en cada etapa",
      "Innovación constante con tecnología de vanguardia",
    ],
    publicoTitulo: "¿Para quién es Estelar?",
    publico: [
      { t: "Empresas", d: "que necesitan soluciones robustas y escalables." },
      { t: "Emprendimientos", d: "que buscan lanzar y validar sus ideas con tecnología." },
      { t: "Organizaciones", d: "que quieren modernizar sus sistemas y optimizar su operación." },
    ],
    cierre: (
      <>
        Tu idea. Nuestra tecnología. <G>Resultados estelares.</G>
      </>
    ),
    llamado: "Hagamos despegar tu proyecto y llevemos tu negocio más lejos.",
  },
  {
    id: "genesis",
    nombre: "PivoK Génesis",
    logo: logoGenesis.url,
    titular: (
      <>
        De una gran idea <G>al éxito en el mercado.</G>
      </>
    ),
    intro: [
      "Somos tu aliado estratégico en cada etapa del nacimiento y lanzamiento de nuevos productos.",
      "Combinamos diseño de producto, pricing y estrategia de lanzamiento para convertir ideas en negocios que conquistan el mercado.",
    ],
    destacados: [
      {
        t: "Aliados estratégicos",
        d: "Trabajamos contigo como un solo equipo, alineados a tus objetivos, para llevar tu producto más lejos, en menos tiempo y con mayor impacto.",
      },
    ],
    procesoTitulo: "Nuestro viaje: del origen al mercado",
    proceso: [
      {
        t: "Nacimiento",
        d: "Exploramos tu idea y el problema que quieres resolver.",
        items: ["Investigación de mercado", "Descubrimiento de necesidades", "Validación de la oportunidad"],
      },
      {
        t: "Trayectoria",
        d: "Diseñamos la mejor solución y definimos su valor diferencial.",
        items: ["Diseño de producto", "Propuesta de valor", "Roadmap de desarrollo"],
      },
      {
        t: "Descubrimiento",
        d: "Definimos el precio ideal y el modelo de negocio ganador.",
        items: ["Estrategia de pricing", "Análisis de rentabilidad", "Modelos de monetización"],
      },
      {
        t: "Lanzamiento",
        d: "Creamos la estrategia para introducir tu producto y conectar con tu mercado.",
        items: ["Go to Market", "Estrategia de comunicación", "Plan de lanzamiento"],
      },
      {
        t: "Entrada al mercado",
        d: "Acompañamos tus primeros pasos y aceleramos tu crecimiento.",
        items: ["Monitoreo y optimización", "Adopción y feedback", "Escalamiento"],
      },
    ],
    bloques: [
      {
        titulo: "Diseño de producto",
        desc: "Creamos productos deseables, útiles y viables.",
        items: ["Diseño centrado en el usuario", "Prototipado y validación", "Funcionalidades que generan valor"],
      },
      {
        titulo: "Estrategia de pricing",
        desc: "Definimos el precio correcto para el cliente y para tu negocio.",
        items: ["Investigación y análisis de mercado", "Estrategias de precio ganadoras", "Maximización de rentabilidad"],
      },
      {
        titulo: "Estrategia de lanzamiento",
        desc: "Llevamos tu producto al mercado con el mayor impacto.",
        items: ["Segmentación y posicionamiento", "Plan de lanzamiento 360°", "Generación de tracción inicial"],
      },
    ],
    extra: { t: "Idea + Estrategia + Ejecución = Éxito", d: "¡Ese es nuestro compromiso!" },
    beneficios: [
      "Menor riesgo, mayor probabilidad de éxito",
      "Decisiones basadas en datos y evidencia",
      "Aceleramos el tiempo de salida al mercado",
      "Mayor retorno de inversión",
      "Crecimiento sostenible y escalable",
    ],
    publicoTitulo: "¿Para quién es Génesis?",
    publico: [
      { t: "Empresas", d: "que buscan innovar y lanzar nuevos productos con éxito." },
      { t: "Emprendedores", d: "que quieren validar, posicionar y crecer con sus ideas." },
      { t: "Organizaciones", d: "que desean expandirse a nuevos mercados y categorías." },
    ],
    cierre: (
      <>
        Tu idea es el punto de partida. <G>El éxito, nuestro destino.</G>
      </>
    ),
    llamado: "Despeguemos juntos hacia el futuro de tu negocio.",
  },
  {
    id: "orbita",
    nombre: "PivoK Órbita",
    logo: logoOrbita.url,
    titular: (
      <>
        Tu negocio también puede <G>llegar más lejos</G>
      </>
    ),
    intro: [
      "Consultoría que impulsa tu negocio más lejos.",
      "En PivoK Órbita acompañamos a pymes, emprendimientos y nuevos negocios a comunicar mejor, vender más y crecer de forma sostenible.",
    ],
    destacados: [
      { t: "Más visibilidad", d: "" },
      { t: "Más clientes", d: "" },
      { t: "Más crecimiento", d: "" },
    ],
    procesoTitulo: "Nuestra consultoría",
    proceso: [
      { t: "Comunicación", d: "Conecta con las personas correctas." },
      { t: "Marketing", d: "Atrae, posiciona y genera demanda." },
      { t: "Ventas", d: "Convierte oportunidades en clientes." },
      { t: "Crecimiento", d: "Estrategias para escalar tu negocio." },
      { t: "Estrategia", d: "Del diagnóstico a la acción, contigo en cada paso." },
    ],
    beneficios: [
      "Mayor visibilidad de tu marca",
      "Más clientes y ventas",
      "Procesos más eficientes",
      "Crecimiento sostenible",
      "Acompañamiento experto y cercano",
    ],
    publicoTitulo: "¿Para quiénes es PivoK Órbita?",
    publico: [
      { t: "Pymes", d: "que quieren crecer y ser más competitivas." },
      { t: "Emprendimientos", d: "que buscan validar, posicionarse y vender." },
      { t: "Nuevos negocios", d: "que necesitan una guía estratégica para despegar." },
    ],
    cierre: (
      <>
        Resultados que te llevan a <G>otra órbita</G>
      </>
    ),
    llamado: "Hablemos de tu próxima etapa de crecimiento.",
  },
  {
    id: "supernova",
    nombre: "PivoK Supernova",
    logo: logoSupernova.url,
    titular: (
      <>
        Impulsamos negocios que <G>evolucionan, trascienden y brillan.</G>
      </>
    ),
    intro: [
      "Consultoría experta y transformación digital con IA para PYMES, emprendimientos y nuevos negocios.",
      "Nuestra propuesta de valor: combinamos estrategia de negocio, innovación y el poder de la Inteligencia Artificial para desarrollar negocios más competitivos, eficientes y sostenibles.",
    ],
    destacados: [
      { t: "Enfoque estratégico", d: "Entendemos tu negocio y diseñamos el camino hacia el crecimiento." },
      { t: "IA aplicada", d: "Implementamos soluciones de IA que generan valor desde el día 1." },
      { t: "Resultados medibles", d: "Metodologías y KPIs para asegurar impacto real y escalable." },
      { t: "Acompañamiento cercano", d: "Somos tu partner estratégico en cada etapa del viaje." },
    ],
    bloques: [
      {
        titulo: "¿Qué hacemos?",
        items: [
          "Estrategia y Diagnóstico — Analizamos tu modelo de negocio, mercado, procesos y capacidades para identificar oportunidades de alto impacto.",
          "Diseño de Soluciones con IA — Diseñamos soluciones personalizadas aplicando IA, automatización y analítica avanzada a tus desafíos clave.",
          "Transformación Digital — Modernizamos procesos, herramientas y cultura organizacional para que tu negocio esté listo para el futuro.",
          "Implementación Ágil — Ejecutamos en ciclos iterativos, asegurando adopción rápida y resultados tempranos.",
          "Medición y Escalamiento — Medimos, aprendemos y escalamos lo que funciona para multiplicar tu crecimiento.",
        ],
      },
    ],
    procesoTitulo: "Nuestra metodología Supernova",
    proceso: [
      { t: "Descubrir", d: "Entendemos tu universo: retos, objetivos y oportunidades." },
      { t: "Diseñar", d: "Trazamos la estrategia y el roadmap de soluciones con IA." },
      { t: "Desplegar", d: "Implementamos rápido, con foco en valor y adopción." },
      { t: "Brillar", d: "Generamos resultados medibles que impulsan tu negocio." },
      { t: "Escalar", d: "Optimizamos y escalamos para crecer sin límites." },
    ],
    extra: {
      t: "La IA no es el futuro, es el motor de tu crecimiento hoy.",
      d: "Desde automatizar tareas hasta predecir comportamientos y tomar mejores decisiones, integramos IA donde realmente transforma tu negocio.",
    },
    beneficios: [
      "Mayor productividad y eficiencia",
      "Decisiones basadas en datos",
      "Mejores experiencias para tus clientes",
      "Ahorro de tiempo y costos operativos",
      "Innovación continua y ventaja competitiva",
      "Escalabilidad sostenible",
    ],
    publicoTitulo: "¿Con quién trabajamos?",
    publico: [
      { t: "PYMES", d: "que quieren optimizar y crecer con tecnología." },
      { t: "Emprendimientos", d: "que necesitan validar, automatizar y escalar." },
      { t: "Nuevos negocios", d: "que buscan lanzar rápido y con ventaja competitiva." },
    ],
    cierre: (
      <>
        Tu negocio puede ser la próxima <G>supernova.</G>
      </>
    ),
    llamado: "¡Despeguemos juntos! Escríbenos y hagamos que tu negocio brille sin límites.",
  },
];

function Check() {
  return <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand" />;
}

function LineaSection({ l, i }: { l: Linea; i: number }) {
  return (
    <section id={l.id} className="relative border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className={`grid items-center gap-10 lg:grid-cols-2 ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
          <div className="p-4">
            <img src={l.logo} alt={l.nombre} loading="lazy" className="mx-auto w-full max-w-md drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]" />
          </div>
          <div>
            <h2 className="text-4xl leading-tight font-bold sm:text-5xl">{l.titular}</h2>
            {l.intro.map((p) => (
              <p key={p} className="mt-5 text-lg text-muted-foreground">{p}</p>
            ))}
          </div>
        </div>

        {l.destacados && (
          <div className={`mt-14 grid gap-4 sm:grid-cols-2 ${l.destacados.length === 4 ? "lg:grid-cols-4" : l.destacados.length === 3 ? "lg:grid-cols-3" : ""}`}>
            {l.destacados.map((d) => (
              <div key={d.t} className="card-soft rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-primary">{d.t}</h3>
                {d.d && <p className="mt-2 text-sm text-muted-foreground">{d.d}</p>}
              </div>
            ))}
          </div>
        )}

        {l.id === "estelar" && (
          <div className="mt-16 text-center">
            <p className="mx-auto max-w-3xl text-xl font-medium sm:text-2xl">
              Pero esta constelación no trabaja sola, tenemos unos aliados estratégicos que también están en órbita
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-16 gap-y-10">
              {[
                { src: aliadoBinapps.url, alt: "Binapps" },
                { src: aliadoBuk.url, alt: "Buk" },
                { src: aliadoMedifolios.url, alt: "Medifolios" },
              ].map((a) => (
                <img key={a.alt} src={a.src} alt={a.alt} loading="lazy" className="h-14 w-auto object-contain opacity-90 transition hover:scale-105 hover:opacity-100 sm:h-16" />
              ))}
            </div>
          </div>
        )}

        {l.bloques && l.id !== "genesis" && <Bloques bloques={l.bloques} />}

        <h3 className="mt-20 text-2xl font-bold uppercase tracking-wide sm:text-3xl">{l.procesoTitulo}</h3>
        <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {l.proceso.map((p, k) => (
            <li key={p.t} className="card-soft rounded-2xl p-6">
              <span className="font-display text-4xl font-bold text-gradient">{k + 1}</span>
              <h4 className="mt-3 text-lg font-semibold">{p.t}</h4>
              <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
              {p.items && (
                <ul className="mt-4 space-y-2 text-sm">
                  {p.items.map((it) => (
                    <li key={it} className="flex gap-2"><Check />{it}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>

        {l.bloques && l.id === "genesis" && (
          <>
            <h3 className="mt-20 text-2xl font-bold uppercase tracking-wide sm:text-3xl">Nuestro enfoque integrado</h3>
            <Bloques bloques={l.bloques} />
          </>
        )}

        {l.extra && (
          <div className="mt-12 rounded-3xl border border-primary/40 bg-card p-8 text-center">
            <p className="text-2xl font-bold text-gradient sm:text-3xl">{l.extra.t}</p>
            <p className="mt-3 text-muted-foreground">{l.extra.d}</p>
          </div>
        )}

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="card-soft rounded-3xl p-8">
            <h3 className="text-xl font-bold uppercase">
              {l.id === "orbita" ? "Resultados que te llevan a otra órbita" : "Beneficios para tu negocio"}
            </h3>
            <ul className="mt-6 space-y-3">
              {l.beneficios.map((b) => (
                <li key={b} className="flex gap-3"><Check />{b}</li>
              ))}
            </ul>
          </div>
          <div className="card-soft rounded-3xl p-8">
            <h3 className="text-xl font-bold uppercase">{l.publicoTitulo}</h3>
            <ul className="mt-6 space-y-5">
              {l.publico.map((p) => (
                <li key={p.t}>
                  <p className="font-semibold text-primary uppercase">{p.t}</p>
                  <p className="text-sm text-muted-foreground">{p.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <p className="text-2xl font-bold sm:text-3xl">{l.cierre}</p>
          <a
            href="#contacto"
            className="glow inline-flex rounded-full bg-brand px-7 py-3 font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            {l.llamado}
          </a>
        </div>
      </div>
    </section>
  );
}

function Bloques({ bloques }: { bloques: Bloque[] }) {
  return (
    <div className={`mt-10 grid gap-6 ${bloques.length > 1 ? "lg:grid-cols-3" : ""}`}>
      {bloques.map((b) => (
        <article key={b.titulo} className="card-soft rounded-3xl p-8">
          <h3 className="text-xl font-bold uppercase">{b.titulo}</h3>
          {b.desc && <p className="mt-3 text-muted-foreground">{b.desc}</p>}
          {b.etiqueta && <p className="mt-5 text-sm font-semibold uppercase text-primary">{b.etiqueta}:</p>}
          <ul className="mt-4 space-y-3 text-sm">
            {b.items.map((it) => (
              <li key={it} className="flex gap-3"><Check />{it}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

function Index() {
  return (
    <main className="relative overflow-hidden">
      <header className="absolute inset-x-0 top-0 z-20">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <img src={logo.url} alt="PivoK" className="h-20 sm:h-24 w-auto" />
          <div className="hidden items-center gap-6 rounded-full bg-primary px-8 py-3 text-sm font-semibold shadow-lg md:flex">
            {lineas.map((l) => (
              <a key={l.id} href={`#${l.id}`} className="hover:text-background">{l.nombre.replace("PivoK ", "")}</a>
            ))}
          </div>
          <a href="#contacto" className="rounded-full bg-background px-5 py-2 text-sm font-semibold hover:opacity-90">
            Hablemos
          </a>
        </nav>
      </header>

      <section className="relative flex min-h-screen items-center">
        <img src={fondo.url} alt="" className="absolute inset-0 h-full w-full object-cover opacity-70" />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, transparent 40%, var(--background))" }}
        />
        <div className="relative mx-auto w-full max-w-6xl px-6 pt-32 pb-20">
          <div className="flex items-center gap-4">
            <h1 className="mt-8 max-w-4xl text-5xl leading-[0.95] font-bold sm:text-7xl lg:text-8xl">
              Evoluciona.<br />Conecta. Crece.
            </h1>
            <img src={mujer} alt="Mujer volando sobre un cohete" className="hidden w-64 animate-[float_6s_ease-in-out_infinite] drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] sm:block lg:w-96" />
          </div>
          <p className="mt-8 max-w-xl text-lg">
            Soluciones Integrales de Software ahora es <strong>PivoK</strong>. Cuatro líneas para llevar tu negocio más lejos.
          </p>
          <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-6 sm:grid-cols-4">
            {lineas.map((l) => (
              <a key={l.id} href={`#${l.id}`} className="rounded-2xl p-2 transition-transform hover:scale-105">
                <img src={l.logo} alt={l.nombre} className="w-full" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {lineas.map((l, i) => (
        <LineaSection key={l.id} l={l} i={i} />
      ))}

      <section id="contacto" className="mx-auto max-w-6xl px-6 py-24">
        <div className="card-soft relative overflow-hidden rounded-[2rem] p-10 text-center sm:p-20">
          <div className="absolute inset-0 bg-[var(--gradient-glow)] opacity-70" />
          <div className="relative">
            <img src={astronauta} alt="Astronauta con diadema y micrófono listo para atenderte" loading="lazy" width={1024} height={1024} className="mx-auto mb-6 w-48 animate-[float_6s_ease-in-out_infinite] drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] sm:w-64" />
            <h2 className="text-4xl font-bold sm:text-6xl">Cuéntanos qué necesitas</h2>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a href="https://wa.me/573016245133" className="glow inline-flex rounded-full bg-brand px-8 py-4 font-semibold text-primary-foreground">
                Escribir por WhatsApp
              </a>
              <a href="mailto:info@pivok.com.co" className="inline-flex rounded-full border border-border px-8 py-4 font-semibold hover:bg-muted">
                info@pivok.com.co
              </a>
            </div>
            <p className="mt-8 text-sm text-muted-foreground">
              www.pivok.com · Tel. 301 624 5133
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-10 sm:flex-row sm:justify-between">
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-4">
            <img src={logo.url} alt="PivoK" loading="lazy" className="h-10 w-auto" />
            <p className="text-sm">
              No nos olvides:{" "}
              <a href="https://www.solucionesintegralesdesoftware.com" target="_blank" rel="noreferrer" className="font-semibold text-primary hover:underline">
                www.solucionesintegralesdesoftware.com
              </a>
            </p>
          </div>
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} PivoK · Evoluciona. Conecta. Crece.</p>
        </div>
      </footer>
    </main>
  );
}
