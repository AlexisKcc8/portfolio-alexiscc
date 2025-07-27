import type { CardProjectProps } from "src/interface/iProjects";

export const CardProject: React.FC<CardProjectProps> = ({ project }) => {
  const { nameProject, description, urlImg, urlLive, urlRepo } = project;

  return (
    <article
      className="
        relative flex-shrink-0 snap-center
        w-[75vw] sm:w-[34vw] tablet:w-[26rem] laptop:w-[28rem]
        flex flex-col h-full cursor-pointer will-change-transform
        rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-alx-500
      "
      aria-labelledby={`project-title-${nameProject}`}
    >
      <picture
        className="
          relative w-full bg-alx-100 rounded-2xl p-4 pb-0
          h-[26rem] phone-lg:h-[28rem] tablet:h-[32rem] tablet:p-8 tablet:pb-0 laptop:h-[33rem]
          mb-4 flex-shrink-0 overflow-hidden
        "
      >
        <img
          src={urlImg}
          alt={`Vista previa del proyecto ${nameProject}`}
          className="w-full h-full object-cover object-top rounded-lg"
          loading="lazy"
          decoding="async"
        />
      </picture>

      <div className="flex flex-col h-full text-center px-2">
        <header>
          <h3
            id={`project-title-${nameProject}`}
            className="font-bold text-gray-900 text-2xl mb-3"
          >
            {nameProject}
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
        </header>

        <footer className="flex justify-center items-center gap-3 mt-auto pt-4">
          <a
            href={urlLive}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Ver proyecto ${nameProject} en vivo`}
            className="flex items-center gap-2 px-4 py-2 font-semibold rounded-xl text-white bg-alx-800 hover:bg-alx-600 transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-alx-500"
          >
            <div className="p-2 rounded-lg bg-alx-400" aria-hidden="true">
              <img
                src="/icons/live.svg"
                alt=""
                className="w-6 h-6"
                loading="lazy"
                decoding="async"
              />
            </div>
            Live
          </a>
          <a
            href={urlRepo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Ver repositorio de código para ${nameProject}`}
            className="flex items-center gap-2 px-4 py-2 font-semibold rounded-xl bg-alx-200 text-gray-900 hover:bg-alx-100 transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-alx-500"
          >
            <div className="p-2 rounded-lg bg-alx-100" aria-hidden="true">
              <img
                src="/icons/github.svg"
                alt=""
                className="w-6 h-6"
                loading="lazy"
                decoding="async"
              />
            </div>
            Code
          </a>
        </footer>
      </div>
    </article>
  );
};
