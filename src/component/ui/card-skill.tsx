'use client'
import React from 'react'
import { Icons } from '../icons'
import { IconNames } from '../icons/interface'
import Image, { StaticImageData } from 'next/image';
import Ellipse from "@public/ellipse-card.png";
import { motion } from "framer-motion";
import Link from 'next/link';
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
        <div className="flex flex-col gap-8 justify-center items-center text-center relative w-fit p-8 border border-dashed border-sixth hover:border-none hover:scale-105 hover:shadow-2xl bg-sixth/5">
            <Icons name={IconNames["angle-border"]} size={24} className={`absolute -top-1 left-0 rotate-90 text-sixth`} />
            <Icons name={IconNames["angle-border"]} size={24} className={`absolute -bottom-1 left-0 -rotate-90 rotate-x-180 text-sixth`} />
            <Icons name={IconNames["angle-border"]} size={24} className={`absolute -top-1 right-0 rotate-90 rotate-x-180 text-sixth`} />
            <Icons name={IconNames["angle-border"]} size={24} className={`absolute -bottom-1 right-0 -rotate-90 text-sixth`} />
            <div className='rounded-full p-2'>
                {image && (
                    <Image alt='skills' src={image} width={400} height={400} className='w-16' />
                )}
            </div>
            <p className={`text-2xl font-semibold`}>{title}</p>
            <p className={`text-lg`}>{description}</p>
            <Image alt='ellipse' src={Ellipse} fill className='w-full absolute' />
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
        <div className="flex flex-col gap-4 justify-center items-center text-center relative w-full p-8 border border-dashed border-sixth">
            <Icons name={IconNames["angle-border"]} size={24} className={`absolute -top-1 left-0 rotate-90 text-sixth`} />
            <Icons name={IconNames["angle-border"]} size={24} className={`absolute -bottom-1 left-0 -rotate-90 rotate-x-180 text-sixth`} />
            <Icons name={IconNames["angle-border"]} size={24} className={`absolute -top-1 right-0 rotate-90 rotate-x-180 text-sixth`} />
            <Icons name={IconNames["angle-border"]} size={24} className={`absolute -bottom-1 right-0 -rotate-90 text-sixth`} />
            <div className='relative overflow-x-hidden w-full flex'>
                <div className="whitespace-nowrap flex gap-8 animate-[runText_20s_linear_infinite]">
                    {skills.concat(skills).map((item, i) => (
                        <div key={i} className="flex flex-col items-center min-w-32 gap-4 h-full justify-end">
                            <Image alt={item.title!} src={item.image!} width={400} height={400} className={`${item.title?.includes('Mongo') ? 'w-8' : 'w-16'}`} />
                            <p className="text-xl font-semibold">{item.title}</p>
                        </div>
                    ))}
                </div>
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
                <Link href={'#'} key={i} className="group relative h-[400px] w-full perspective bg-black">
                    {/* Flip Container */}
                    <motion.div className="relative w-full h-full transition-transform duration-700 transform-style preserve-3d group-hover:rotate-y-180">
                        {/* Front Side - Image */}
                        <div className="absolute inset-0">
                            <Image
                                src={item.image!}
                                alt={item.title!}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg opacity-60"
                                loading='lazy'
                            />
                        </div>
                    </motion.div>

                    {/* Title (Front) */}
                    <div className='absolute inset-0 flex w-full h-full items-end justify-center'>
                        <h3 className="max-w-xs p-4 h-fit text-center flex items-end justify-center text-2xl font-bold transition-opacity duration-500 group-hover:opacity-0 shadow-2xl">
                            {item.title}
                        </h3>
                    </div>

                    {/* Description (Back) */}
                    <p className="absolute inset-0 flex items-center justify-center text-lg font-medium bg-black/80 rounded-lg opacity-0 transition-opacity duration-500 group-hover:opacity-100 text-center px-2">
                        {item.description}
                    </p>
                </Link>
            ))}
        </>
    )
}
