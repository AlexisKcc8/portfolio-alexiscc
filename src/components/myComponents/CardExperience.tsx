import clsx from "clsx";
import React, { useRef, useState, useEffect } from "react";

interface Experience {
  title: string;
  role: string;
  description: string;
  steps?: string[];
}

interface CardExperienceProps {
  exp: Experience;
  numberProject: number;
}

export const CardExperience: React.FC<CardExperienceProps> = React.memo(
  ({ exp, numberProject }) => {
    const cardRef = useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => setIsVisible(entry.isIntersecting),
        { threshold: 0.3 }
      );

      if (cardRef.current) observer.observe(cardRef.current);

      return () => {
        if (cardRef.current) observer.unobserve(cardRef.current);
      };
    }, []);

    return (
      <article
        ref={cardRef}
        className={clsx(
          "sticky top-4 snap-center bg-gradient-to-tr from-alx-50 to-alx-100 rounded-2xl px-6 py-8 mx-auto overflow-hidden flex flex-col tablet:flex-row tablet:items-center tablet:text-start gap-6 transition-all duration-700 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
          numberProject === 1 ? "mt-0" : "mt-20"
          // isDisabled && "opacity-50"
        )}
        style={{ zIndex: 10 + numberProject }}
      >
        {/* Número enumerado */}
        <div className="w-full flex justify-center items-center tablet:w-[20%]">
          <div className="z-20 aspect-square bg-alx-200 border-2 border-alx-600 rounded-full flex-none flex justify-center items-center w-16 relative">
            <span className="font-poppins text-[1.75rem] font-bold">
              {numberProject}
            </span>

            {/* Líneas decorativas */}
            <div
              className="bg-alx-600 absolute w-[15rem] h-[2px] left-[115%] 
              tablet:w-[2px] tablet:h-[10rem] tablet:bottom-[115%] tablet:left-auto"
              aria-hidden="true"
            />
            <div
              className="bg-alx-600 absolute w-[15rem] h-[2px] right-[115%] 
              tablet:w-[2px] tablet:h-[10rem] tablet:top-[115%] tablet:right-auto"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Contenido principal */}
        <div className="w-full flex flex-col justify-center items-center laptop:items-start">
          {/* Badge con animación */}
          <header
            data-slot="badge"
            className="bg-alx-200 inline-flex items-center justify-center font-medium w-fit 
              whitespace-nowrap shrink-0 py-1 px-3 rounded-full uppercase gap-2 sm:px-4 
              text-xs sm:text-sm transition-all duration-300 text-alx-500 hover:bg-white/90"
          >
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-alx-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-alx-500" />
            </span>
            <span className="font-medium">{exp.role}</span>
            <img
              src="/icons/lightning.svg"
              alt="Icono representando energía y dinamismo"
              className="h-3 w-3"
              loading="lazy"
            />
          </header>

          <h3 className="text-2xl font-medium text-gray-900 mb-2 leading-snug">
            {exp.title}
          </h3>

          <p className="text-gray-900 leading-snug">{exp.description}</p>

          {/* Lista de logros */}
          {Array.isArray(exp.steps) && exp.steps.length > 0 && (
            <ul className="mt-4 list-disc list-inside text-gray-800 space-y-1">
              {exp.steps.map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ul>
          )}
        </div>
      </article>
    );
  }
);

CardExperience.displayName = "CardExperience";
