import type { CardProjectProps } from "src/interface/iProjects";

export const CardProject: React.FC<CardProjectProps> = ({ project }) => {
  const { nameProject, description, urlImg, urlLive, urlRepo } = project;

  return (
    <div
      className="
        relative
        flex-shrink-0
        snap-center
        w-[75vw]
        sm:w-[33.33vw]
        cursor-pointer
        will-change-transform
        tablet:w-[26rem]
        laptop:w-[28rem]
        flex flex-col
        h-full
      "
    >
      <picture
        className="
          relative
          w-full
          bg-alx-50
          rounded-2xl
          pt-4
          px-4
          h-[26rem] phone-lg:h-[28rem] tablet:h-[32rem] laptop:h-[33rem]
          pb-0 mb-4 tablet:pb-0
          flex-shrink-0
        "
      >
        <img
          src={urlImg}
          alt={`image of ${nameProject}`}
          className="w-full h-full object-cover object-top rounded-lg"
          loading="lazy"
          decoding="async"
        />
      </picture>

      <div className="flex flex-col  h-full text-center tablet:text-left px-4">
        <div className="flex flex-col ">
          <h5 className="font-bold text-gray-800 text-3xl mb-1">
            {nameProject}
          </h5>
          <p className="text-gray-500 prose-sm ">{description}</p>
        </div>

        <footer className="flex justify-center tablet:justify-start items-center gap-3 mt-auto pt-4">
          <a
            href={urlLive}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3  font-medium rounded-full border border-gray-300 text-white bg-alx-500 hover:bg-alx-600 transition-colors duration-200"
          >
            <img src="/icons/live.svg" alt="" className="w-4 h-4" />
            Live
          </a>
          <a
            href={urlRepo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 font-medium rounded-full border border-gray-300 text-gray-700 hover:bg-alx-100 transition-colors duration-200"
          >
            <img src="/icons/github.svg" alt="" className="w-4 h-4" />
            Code
          </a>
        </footer>
      </div>
    </div>
  );
};
