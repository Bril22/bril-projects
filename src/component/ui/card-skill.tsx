'use client'
import React from 'react'
import Image, { StaticImageData } from 'next/image';
import Ellipse from "@public/ellipse-card.png";
import Link from 'next/link';
import { DirectionAwareHover } from './card/direction-hover';
import { Marquee } from './marquee';
export interface ICardSkills {
    title?: string;
    description?: string;
    image?: StaticImageData;
    href?: string;
}

export const CardSkills = ({
    description,
    image,
    title
}: ICardSkills) => {

    return (
        <div className="flex flex-col gap-8 justify-center items-center text-center relative w-fit p-8 hover:scale-105 hover:shadow-2xl bg-sixth/5 rounded-lg">
            <div className='rounded-full p-2'>
                {image && (
                    <Image alt='skills' src={image} width={400} height={400} className='w-16' />
                )}
            </div>
            <p className={`text-2xl font-semibold`}>{title}</p>
            <p className={`text-lg`}>{description}</p>
            <div className='bg-sixth/40 w-32 h-32 blur-3xl absolute' />
        </div>
    )
}

export interface ISkillsSection {
    skills: ICardSkills[]
}

export const SkillsSection = ({
    skills
}: ISkillsSection) => {
    return (
        <div className="flex flex-col gap-4 justify-center items-center text-center relative w-full py-8">
            <div className='relative overflow-x-hidden w-full flex'>
                <Marquee pauseOnHover className="[--duration:20s]">
                    {skills.map((review) => (
                        <div key={review.title} className="flex flex-col items-center min-w-32 gap-4 h-full justify-end">
                            <Image alt={review.title!} src={review.image!} width={400} height={400} className={`${review.title?.includes('Mongo') ? 'w-8' : 'w-16'}`} />
                            <p className="text-xl font-semibold">{review.title}</p>
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    )
}

export const CardWithBackground = ({
    skills
}: ISkillsSection) => {
    return (
        <>
            {skills.map((item, i) => (
                <Link href={'#'} key={i} className="w-full relative group bg-black">
                    {/* Flip Container */}
                    <DirectionAwareHover imageUrl={item.image!} className='md:h-[450px] h-96 opacity-80'>
                        <p className="font-bold text-md max-w-md">{item.description}</p>
                    </DirectionAwareHover>
                    <div className='absolute bottom-0 left-0 group-hover:hidden text-white w-full'>
                        <h3 className="max-w-full p-4 h-fit text-center text-2xl font-bold">
                            {item.title}
                        </h3>
                    </div>
                </Link>
            ))}
        </>
    )
}
