"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@components/components/ui/carousel";
import { CardProject } from "./CardProject";
import type { Project } from "src/interface/iProjects";

export const MyCarousel = (props: any) => {
  const { elements } = props;
  return (
    <Carousel
      opts={{
        align: "center",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent className="">
        {elements.map((element: Project, index: number) => (
          <CarouselItem key={index} className="basis-auto ">
            <CardProject project={element} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-4" />
      <CarouselNext className="right-4" />
    </Carousel>
  );
};
