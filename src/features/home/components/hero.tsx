import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  return (
    <div className="mt-2">
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <Link href={`/#!`}>
              <Image
                src="/images/hero-1.png"
                alt="Hero 1"
                width={1920}
                height={400}
                className="w-full object-cover"
              />
            </Link>
          </CarouselItem>
          <CarouselItem>
            <Link href={`/#!`}>
              <Image
                src="/images/hero-2.png"
                alt="Hero 2"
                width={1920}
                height={400}
                className="w-full object-cover"
              />
            </Link>
          </CarouselItem>
          <CarouselItem>
            <Link href={`/#!`}>
              <Image
                src="/images/hero-3.png"
                alt="Hero 3"
                width={1920}
                height={400}
                className="w-full object-cover"
              />
            </Link>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
