import serviceWebPage from "@assets/service-WebPage.svg";
import serviceLandingPage from "@assets/service-Landing.svg";
import serviceInvitations from "@assets/service-Invite.svg";
import serviceApi from "@assets/service-ApiIntegration.svg";
import serviceOptimization from "@assets/service-Optimization.svg";
export const myServices = [
  {
    emoji: "💻",
    title: "Páginas web modernas",
    description:
      "Desarrollo de sitios web profesionales, responsivos y optimizados para todos los dispositivos.",
    alt: "Ilustración representando el desarrollo de páginas web modernas y responsivas en múltiples dispositivos",
    classCard: "bg-[#fef3f1] hover:bg-red-100 transition laptop:col-span-6",
    urlImg: serviceWebPage,
    delay: "100",
  },
  {
    emoji: "🚀",
    title: "Landing pages que convierten",
    description:
      "Diseño estratégico enfocado en captar la atención, comunicar valor y generar acción.",
    alt: "Diseño de landing page atractiva enfocada en captar la atención y generar conversiones",
    classCard: "bg-[#f2f9ff] hover:bg-blue-100 transition laptop:col-span-6",
    classImage: "",
    urlImg: serviceLandingPage,
    delay: "0",
  },
  {
    emoji: "⚙️",
    title: "Integraciones con APIs",
    description:
      "Conecta tu web con servicios externos: pagos, bases de datos, CMS o herramientas de terceros.",
    alt: "Icono que simboliza integraciones con APIs y conexión entre sistemas",
    classCard:
      "bg-[#fff5e0] laptop:min-h-[0] laptop:h-[18rem] hover:bg-yellow-100 transition laptop:flex-row laptop:col-span-12",
    classHeader: "laptop:w-[40%]",
    classContainerImage: "laptop:w-[60%]",
    classImage: "",
    urlImg: serviceApi,
    delay: "200",
  },
  {
    emoji: "💌",
    title: "Invitaciones digitales",
    description:
      "Diseño de invitaciones web animadas y personalizadas para eventos especiales: bodas, XV años, bautizos y más.",
    alt: "Ilustración de invitaciones digitales animadas y personalizadas para eventos especiales",
    classCard: "bg-pink-50  hover:bg-pink-100 transition  laptop:col-span-6",
    classImage: "",
    urlImg: serviceInvitations,
    delay: "300",
  },
  {
    emoji: "🚦",
    title: "Optimización y rendimiento",
    description:
      "Código limpio, carga rápida, SEO técnico y Lighthouse en verde.",
    alt: "Gráfico que representa optimización web, alto rendimiento y buen puntaje en Lighthouse",
    classCard: "bg-[#f2fafa] hover:bg-sky-100 transition laptop:col-span-6",
    classImage: "object-top",
    urlImg: serviceOptimization,
    delay: "400",
  },
];
