'use client';
import Image, { StaticImageData } from "next/image";
import { EmblaOptionsType } from "embla-carousel";
import LightGallery from "lightgallery/react";
import { useCallback, useMemo, useRef } from "react";
import lgThumbnail from 'lightgallery/plugins/thumbnail'

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import { EmblaCarousel } from "./embla-carousel";
import Link from "next/link";
import { ICardSkills } from "./card-skill";

interface IGaleryCarousel {
    title: string;
    bodyDesc: string;
    headerDesc: string;
    icon: string | StaticImageData;
}

interface Props {
    title?: string;
    images: ICardSkills[];
    facility?: IGaleryCarousel[];
    style?: string;
    noMarginTop?: boolean;
    arrow?: boolean;
}

const OPTIONS: EmblaOptionsType = {
    loop: true,
    inViewThreshold: 1,
};

export const GaleryCarousel = (props: Props) => {
    const lightGallery = useRef<any>(null);
    const photos = props.images?.map((item) => item?.image?.src).filter((src): src is string => src !== undefined);
    const isifoto = (photos: string[]) => {
        const its: any[] = [];
        let lop = 1;
        for (const e of photos) {
            lop++;
            its.push({
                id: lop,
                src: e,
                thumb: e,
                size: "1600-933",
            });
        }
        return its;
    };

    const items = useMemo(() => isifoto(photos), [photos]);

    const onInit = useCallback((detail: any) => {
        if (detail) {
            lightGallery.current = detail.instance;
        }
    }, []);

    const openGallery = useCallback((i: number) => {
        if (lightGallery.current) {
            lightGallery.current.openGallery(i);
        }
    }, []);


    return (
        <section className={`${props?.style}`}>
            {props?.title ? (
                <h2 className="text-center font-bold md:text-4xl text-2xl">
                    {props?.title}
                </h2>
            ) : null}
            {props.images && props.images.length > 0 ? (
                <EmblaCarousel
                    options={OPTIONS}
                    autoPlay={false}
                    openGallery={(idx) => {
                        openGallery(idx);
                    }}
                    arrow={props?.arrow}
                    noMarginTop={props?.noMarginTop}
                    arrowPosition={props?.arrow ? "CENTER" : undefined}
                    items={props.images?.map((d, i) => {
                        return (
                            <div key={i} className="flex flex-col gap-2 relative h-auto pb-8">
                                <div className="w-full h-full bg-transparent">
                                    <div className="relative h-[400px] md:h-[600px] lg:h-[800px]">
                                        <Image alt={d?.title!} src={d?.image?.src!} fill className="object-cover object-top opacity-80 shadow-md shadow-amber-600" />
                                    </div >
                                </div>
                                {d?.href && (
                                    <Link href={d?.href} className="text-xs md:text-lg text-center absolute left-1/2 transform bottom-16 -translate-x-1/2 w-fit px-3 md:px-5 py-2 md:py-4 bg-sixth text-black font-semibold rounded-lg hover:scale-105 hover:border hover:border-black">
                                        <p>{'Explore'}</p>
                                    </Link>
                                )}
                                {d?.title && (
                                    <div className="text-md md:text-xl text-center absolute transform bottom-0 md:-bottom-2 w-fit font-semibold z-20 px-4">
                                        <p>{d?.title}</p>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                />
            ) : null}
            <LightGallery
                dynamic
                elementClassNames="custom-class-name hidden"
                onInit={onInit}
                dynamicEl={items}
                plugins={[lgThumbnail]}
                download={false}
            ></LightGallery>
            {/* {props.facility ? <div className="" /> : null} */}
        </section >
    );
};

const Card = (props: IGaleryCarousel) => {
    return (
        <div className="rounded-sm shadow bg-slate-50 w-full h-full grid grid-cols-3 place-items-center p-3 gap-x-2">
            <Image
                width={300}
                height={300}
                src={props.icon}
                alt={props?.title}
                className="col-span-1"
            />
            <div className="flex flex-col col-span-2">
                <h5 className="md:text-2xl text-xl font-bold text-[--seventh]">
                    {props?.title}
                </h5>
                <h6 className="text-lg font-semibold">{props?.headerDesc}</h6>
                <p className="text-sm leading-relaxed">{props?.bodyDesc}</p>
            </div>
        </div>
    );
};
