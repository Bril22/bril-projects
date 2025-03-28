'use client'
import React from 'react'
import { ButtonBorderOnlyAngle } from '../ui/button'
import { IMainMenu } from '@/constants/layout'
import Link from 'next/link';
import { Icons } from '../icons';
import Image from 'next/image';
import { IconNames } from '../icons/interface';
import * as motion from "motion/react-client"
import Aurora from '../ui/background/aurora-background';
import { LinkPreview } from '../ui/cursor/link-preview';
import DownloadCV from '@public/download-cv.jpeg'

interface IAbout {
    socialMedia?: IMainMenu[];
}

export function AboutPage({
    socialMedia
}: IAbout) {
    const handleClickCV = () => {
        window.open('/pdf/my-cv.pdf', '_blank');
    }
    return (
        <>
            <Aurora
                colorStops={["#FF9A50", "#4a5e4c", "#D4AF37"]}
                blend={0.7}
                amplitude={0.5}
                speed={1}
            />
            <motion.div
                className="container mx-auto px-4 relative md:pb-16 pb-8"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: [0, -20, 0], x: [0], opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
            >
                <div className="w-full h-full relative border border-font-primary rounded-tl-3xl rounded-br-3xl py-8 md:py-32 flex items-center">
                    <div className="relative flex items-center justify-start md:px-16 px-4 z-10">
                        <div className="flex flex-col gap-8 items-center md:items-start">
                            <div className="flex md:flex-row flex-col gap-12 items-center">
                                <ButtonBorderOnlyAngle label="Welcome to my page" textColor="text-sixth" />
                                <div className="flex items-center gap-3">
                                    {socialMedia?.map((item, i) => (
                                        <Link key={i} href={item.href!} target="_blank" aria-label={`Link to ${item.icon}`}>
                                            <div className="border rounded-full p-2 hover:border-sixth hover:text-sixth" aria-hidden="true">
                                                <Icons name={item.icon!} size={24} />
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            <div className='flex flex-col gap-4 md:text-start text-center'>
                                <p className="text-2xl">{`Hi, I am`}</p>
                                <h1 className="md:text-6xl text-4xl font-bold text-sixth">{`Brilian Natanael Zega`}</h1>
                                <h2 className="md:text-6xl text-4xl font-bold">{`Software Engineer`}</h2>
                                <p className="max-w-4xl">{`Over the years, I have gained extensive experience in developing software solutions for various industries, including marketing, finance, and e-commerce. My skills include working with modern frameworks like Next.js and Nest.js, automating testing processes, and building robust APIs`}</p>
                            </div>
                            <div className='w-fit'>
                                <LinkPreview imageSrc={DownloadCV} url="#" isStatic className='text-font-primary'>
                                    <button
                                        onClick={handleClickCV}
                                        className={`py-3 px-5 w-fit flex items-center gap-2 bg-transparent border-2 border-font-primary text-font-primary hover:text-sixth rounded-4xl cursor-pointer`}
                                    >
                                        {`Download CV`}
                                        <Icons name={IconNames.download} size={24} />
                                    </button>
                                </LinkPreview>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                    {/* <div className="bg-sixth w-22 h-22 blur-3xl absolute top-0 left-0" />
                    <div className="bg-sixth w-44 h-32 blur-3xl absolute bottom-0 right-0" /> */}
                </div>
            </motion.div>
        </>
    )
}
