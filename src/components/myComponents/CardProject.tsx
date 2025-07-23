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
        sm:w-[34vw]
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
          bg-alx-100
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

      <div className="flex flex-col  h-full text-center tablet:text-center px-2">
        <div className="flex flex-col ">
          <h5 className="font-bold text-gray-800 text-2xl mb-3">
            {nameProject}
          </h5>
          <p className="text-gray-500 text-sm ">{description}</p>
        </div>

        <footer className="flex justify-center items-center gap-3 mt-auto pt-4">
          <a
            href={urlLive}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 font-semibold rounded-xl text-white bg-alx-800 hover:bg-alx-600 transition-colors duration-200"
          >
            <div className="p-2 rounded-lg bg-alx-400">
              <img src="/icons/live.svg" alt="" className="w-6 h-6" />
            </div>
            Live
          </a>
          <a
            href={urlRepo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 font-semibold  rounded-xl bg-alx-200  text-gray-700 hover:bg-alx-100 transition-colors duration-200"
          >
            <div className="p-2 rounded-lg bg-alx-100">
              <img src="/icons/github.svg" alt="" className="w-6 h-6" />
            </div>
            Code
          </a>
        </footer>
      </div>
    </div>
  );
};
