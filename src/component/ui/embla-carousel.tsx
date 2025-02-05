'use client';
import {
  EmblaCarouselType,
  EmblaOptionsType,
} from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import ClassNames from "embla-carousel-class-names";
import { useCallback, useEffect, useState } from "react";
import "./embla-css/index.css"
// const OPTIONS: EmblaOptionsType = { dragFree: true, containScroll: 'trimSnaps' }
import useEmblaCarousel from "embla-carousel-react";
import {
  EmblaPluginType,
} from "embla-carousel";
import { Icons } from "../icons";
import { IconNames } from "../icons/interface";
interface Props {
  items: any[];
  options: EmblaOptionsType;
  autoPlay?: boolean;
  arrow?: boolean;
  arrowPosition?:
    | "BOTTOM LEFT"
    | "BOTTOM RIGHT"
    | "BOTTOM CENTER"
    | "BOTTOM BEETWEEN"
    | "CENTER"
    | "CENTER BETWEEN"
    | "TOP LEFT"
    | "TOP RIGHT"
    | "TOP CENTER"
    | "TOP BEETWEEN";
  dot?: boolean;
  colNumber?: number;
  thumb?: boolean;
  openGallery?: (index: number) => any;
  noMarginTop?: boolean;
}

export const EmblaCarousel = ({
  items,
  autoPlay,
  arrow,
  dot,
  colNumber,
  arrowPosition,
  thumb,
  openGallery,
  noMarginTop,
}: Props) => {
  const plugins: EmblaPluginType[] = [ClassNames()];
  if (autoPlay) {
    plugins.push(Autoplay());
  }
  const [options, setOptions] = useState({ loop: true })
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: autoPlay, delay: 3000 })
  ])
  
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );
  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  const arrowClass =
    arrowPosition === "CENTER"
      ? {
          back: "btn btn-circle absolute z-10 left-10 top-1/2",
          next: "btn btn-circle absolute z-10 right-10 top-1/2",
        }
      : arrowPosition === "BOTTOM BEETWEEN"
      ? {
          back: "absolute left-0 bottom-0 bg-transparent text-white hover:scale-125",
          next: "absolute right-0 bottom-0 bg-transparent text-white hover:scale-125",
        }
      : arrowPosition === "CENTER BETWEEN"
      ? {
          back: "btn btn-circle absolute z-10 left-10 lg:-left-6 top-1/2",
          next: "btn btn-circle absolute z-10 right-10 lg:-right-6 top-1/2",
        }
      : {
          back: "btn btn-circle",
          next: "btn btn-circle",
        };

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaApi || !emblaThumbsApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi, emblaThumbsApi]
  );

  return (
    <div className="relative">
      <div className={`embla embla_${colNumber ? colNumber : 2}_col`}>
        <div
          className={`embla__viewport relative ${noMarginTop ? "" : "py-4"}`}
          ref={emblaRef}
        >
          <div className="embla__container">
            {items.map((item, i) => (
              <div
                onClick={() => setSelectedIndex(i)}
                className={`embla__slide z-20 ${
                  selectedIndex === i
                    ? null
                    : "embla__class-names cursor-pointer"
                }`}
                key={i}
              >
                <div
                  className="cursor-pointer"
                  onClick={() => openGallery && openGallery(i)}
                >
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>
        {arrow ? (
          <div className={`flex `}>
            <PrevButton
              onClick={scrollPrev}
              enabled={prevBtnEnabled}
              className={arrowClass.back}
            />

            <NextButton
              onClick={scrollNext}
              enabled={nextBtnEnabled}
              className={arrowClass.next}
            />
          </div>
        ) : null}
      </div>
      {dot ? (
        <div className="embla__dots pt-2">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              selected={index === selectedIndex}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      ) : null}

      {thumb ? (
        <div>
          <div className="embla-thumbs">
            <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
              <div className="embla-thumbs__container">
                {items.map((d, i) => (
                  <EmblaThumb
                    onClick={() => onThumbClick(i)}
                    selected={i === selectedIndex}
                    index={i}
                    imgSrc={d}
                    key={i}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

type PropType = {
  selected: boolean;
  imgSrc: string;
  index: number;
  onClick: () => void;
};

export const EmblaThumb: React.FC<PropType> = (props) => {
  const { selected, imgSrc, index, onClick } = props;

  return (
    <div
      className={"embla-thumbs__slide".concat(
        selected ? " embla-thumbs__slide--selected" : ""
      )}
    >
      <button
        onClick={onClick}
        className="embla-thumbs__slide__button  "
        type="button"
      >
        {imgSrc}
      </button>
    </div>
  );
};

type DotButtonPropType = {
  selected: boolean;
  onClick: () => void;
};

export const DotButton: React.FC<DotButtonPropType> = (props) => {
  const { selected, onClick } = props;

  return (
    <button
      className={
        "embla__dot".concat(selected ? " embla__dot--selected" : "") +
        " duration-500"
      }
      type="button"
      onClick={onClick}
    />
  );
};

type PrevNextButtonPropType = {
  enabled: boolean;
  onClick: () => void;
  className?: string;
};

export const PrevButton: React.FC<PrevNextButtonPropType> = (props) => {
  const { enabled, onClick } = props;

  return (
    <button
      className={`${props.className}`}
      onClick={onClick}
      disabled={!enabled}
    >
      <Icons name={IconNames["arrow-left"]} size={24} className="text-blue" />
    </button>
  );
};

export const NextButton: React.FC<PrevNextButtonPropType> = (props) => {
  const { enabled, onClick } = props;

  return (
    <button
      className={`${props.className}`}
      onClick={onClick}
      disabled={!enabled}
    >
      <Icons name={IconNames["arrow-right"]} className="" size={24} />
    </button>
  );
};
