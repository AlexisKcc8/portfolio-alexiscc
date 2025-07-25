import diledLogo from "@assets/brands/logo-diled.webp";
import gabyLogo from "@assets/brands/logo-foto-y-video-gaby.webp";
import servitecLogo from "@assets/brands/logo-servitec.webp";

export const experience = [
  {
    title: "Landing Page • Diled Smart Home",
    role: "Diseñador y Desarrollador",
    description:
      "Transformamos una idea en una experiencia web moderna y eficaz.",
    logo: {
      src: diledLogo,
      alt: "Logo de Diled Smart Home",
    },
    steps: [
      "Estructura validada con el cliente para objetivos claros",
      "Diseño en Figma enfocado en usabilidad y conversión",
      "Desarrollo responsivo con Astro, Tailwind CSS y TypeScript",
      "Optimización SEO, accesibilidad y rendimiento",
      "Integración de WhatsApp y microinteracciones elegantes",
    ],
  },
  {
    title: "Landing Page • Foto y Video Gaby",
    role: "Diseñador y Desarrollador",
    description:
      "Desarrollo de experiencias web integrales que combinan diseño moderno, velocidad y funcionalidad para cualquier tipo de negocio.",
    logo: {
      src: gabyLogo,
      alt: "Logo de Foto y Video Gaby",
    },
    steps: [
      "Diseño y desarrollo frontend con enfoque mobile-first",
      "Integración de APIs REST para contenido dinámico",
      "Backends ligeros con Node.js y despliegues automatizados",
      "Experiencias rápidas y optimizadas con métricas reales",
      "Uso de animaciones y transiciones suaves que elevan el diseño",
    ],
  },
  {
    title: "Landing Page • Servitec Halachó",
    role: "Diseñador y Desarrollador",
    description:
      "Diseñé una landing profesional enfocada en destacar servicios tecnológicos y facilitar el contacto con clientes potenciales.",
    logo: {
      src: servitecLogo,
      alt: "Logo de Servitec Halachó",
    },
    steps: [
      "Definición de objetivos con enfoque comercial",
      "Interfaz intuitiva con llamados a la acción visibles",
      "SEO local para destacar en buscadores regionales",
      "Catálogo de productos con pasarela de servicios",
      "Proceso ágil, enfocado en entregas efectivas y feedback continuo",
    ],
  },
];
