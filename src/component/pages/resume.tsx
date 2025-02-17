'use client'
import React from 'react'
import { ButtonBorderOnlyAngle } from '../ui/button'
import { IMainMenu } from '@/constants/layout'
import Link from 'next/link';
import { Icons } from '../icons';
import Image from 'next/image';
import { IconNames } from '../icons/interface';
import * as motion from "motion/react-client"
import { useInView } from "react-intersection-observer";
import { CustomBorder } from '../ui/custom-border';
import { SkillsSection } from '../ui/card-skill';
import { MySkills, OtherSkills } from '@/constants/home';

interface IAbout {
    socialMedia?: IMainMenu[];
}

export function ResumePage({
    socialMedia
}: IAbout) {
    const handleClickCV = () => {
        window.open('/pdf/my-cv.pdf', '_blank');
    }
    const handleClickJournal = () => {
        window.open('/pdf/my-journal.pdf', '_blank');
    }
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true
    });
    const AllSkills = [...MySkills, ...OtherSkills];
    return (
        <motion.div
            className="container mx-auto px-4 relative flex flex-col md:gap-16 gap-8"
            ref={ref}
            initial={{ y: -50, opacity: 0 }}
            animate={inView ? { y: [0, -20, 0], x: [0], opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeInOut" }}
        >
            <div className='flex flex-col md:gap-8 gap-4 items-center text-center justify-center'>
                <ButtonBorderOnlyAngle label={`${new Date().getFullYear() - 2022}+ Years of Experiences`} textColor='text-sixth' />
                <h2 className="md:text-6xl text-4xl font-bold">{`About Me`}</h2>
                <p className='max-w-4xl'>{`A software engineer with a focus on building smooth, user-friendly web applications. Coming from a background in geophysical engineering, I bring a different perspective to problem-solving—more analytical and hands-on. I love figuring out the best ways to tackle complex challenges and make things work seamlessly for users.`}</p>
            </div>
            <div className='flex flex-col gap-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    <div className='w-full flex flex-col gap-4 items-start justify-center relative p-8 border border-dashed border-sixth'>
                        <p className='text-2xl font-semibold'>{'Education'}</p>
                        <div className='w-full flex justify-between items-center'>
                            <p className='text-xs'>{`2017 - 2022`}</p>
                            <p className='font-semibold'>{`3.02/4`}</p>
                        </div>
                        <p className='md:text-xl text-md font-semibold text-sixth'>{`Bachelor of Geophysical Engineering`}</p>
                        <p>{`Bandung Institute of Technology`}</p>
                        <CustomBorder />
                    </div>
                    <div className='w-full flex flex-col gap-4 items-start justify-center relative p-8 border border-dashed border-sixth'>
                        <p className='text-2xl font-semibold'>{'Publication'}</p>
                        <p className='text-xs'>{`2022`}</p>
                        <p className='md:text-xl text-md font-semibold text-sixth'>{`Seismic Hazard Potential in Yogyakarta Based on HVSR Curve Estimation`}</p>
                        <div onClick={handleClickJournal}  className='w-full flex items-center cursor-pointer hover:scale-x-110 hover:translate-x-1 transition-transform duration-300'>
                            <p>{`International Journal Of Physics`}</p>
                            <Icons name={IconNames['arrow-right']} size={24} className='' />
                        </div>
                        <CustomBorder />
                    </div>
                    <div className='w-full md:col-span-2 lg:col-auto flex flex-col gap-4 items-start justify-between relative p-8 border border-dashed border-sixth'>
                        <div className='flex flex-col gap-4'>
                            <p className='text-2xl font-semibold'>{'Stay With Me'}</p>
                            <div className="flex items-center gap-3">
                                {socialMedia?.map((item, i) => (
                                    <Link key={i} href={item.href!} target="_blank">
                                        <div className="border rounded-full p-2 hover:border-sixth hover:text-sixth">
                                            <Icons name={item.icon!} size={24} />
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <button
                            onClick={handleClickCV}
                            className={`py-3 px-5 w-fit flex items-center gap-2 bg-transparent border-2 border-font-primary text-font-primary hover:text-sixth rounded-4xl cursor-pointer`}
                        >
                            {`Download CV`}
                            <Icons name={IconNames.download} size={24} />
                        </button>
                        <CustomBorder />
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    <div className='col-span-1 w-full grid gap-4 relative p-8 border border-dashed border-sixth'>
                        <p className='text-2xl font-semibold'>{'Software Engineer Experiences'}</p>
                        <div className='grid grid-cols-2 w-full gap-6'>
                            <div className='flex flex-col gap-2'>
                                <p className='text-xs'>{`Oct 2023 - present`}</p>
                                <p className='md:text-xl text-md font-semibold text-sixth'>{`Software Engineer`}</p>
                                <p>{`Geonet Properties`}</p>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <p className='text-xs'>{`Nov 2023 - Oct 2024`}</p>
                                <p className='md:text-xl text-md font-semibold text-sixth'>{`Software Engineer`}</p>
                                <p>{`Freelance`}</p>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <p className='text-xs'>{`Feb 2022 - May 2022 (Project Based)`}</p>
                                <p className='md:text-xl text-md font-semibold text-sixth'>{`Frontend Engineer`}</p>
                                <p>{`Braga Technology`}</p>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <p className='text-xs'>{`Jan 2022 - Mar 2022 (Project Based)`}</p>
                                <p className='md:text-xl text-md font-semibold text-sixth'>{`Web Developer`}</p>
                                <p>{`Hoomix`}</p>
                            </div>
                        </div>
                        <CustomBorder />
                    </div>
                    <div className='col-span-1 w-full grid gap-4 relative p-8 border border-dashed border-sixth'>
                        <p className='text-2xl font-semibold'>{'QA Experiences'}</p>
                        <div className='grid grid-cols-2 w-full gap-6'>
                            <div className='flex flex-col gap-2'>
                                <p className='text-xs'>{`Dec 2022 - Oct 2023`}</p>
                                <p className='md:text-xl text-md font-semibold text-sixth'>{`SIT Middle Officer`}</p>
                                <p>{`Jatis Mobile`}</p>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <p className='text-xs'>{`Feb 2023 - Oct 2023`}</p>
                                <p className='md:text-xl text-md font-semibold text-sixth'>{`Automation Engineer`}</p>
                                <p>{`Simplidots`}</p>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <p className='text-xs'>{`Jun 2022 - Dec 2022`}</p>
                                <p className='md:text-xl text-md font-semibold text-sixth'>{`QA Analyst`}</p>
                                <p>{`Bank Central Asia`}</p>
                            </div>
                        </div>
                        <CustomBorder />
                    </div>
                    <div className='md:col-span-2 lg:col-auto w-full flex flex-col justify-start gap-6 items-start relative p-8 border border-dashed border-sixth'>
                        <p className='text-2xl font-semibold'>{'Skills'}</p>
                        <div className='grid grid-cols-4 w-full gap-6 justify-items-center'>
                            {AllSkills.map((item, i) => (
                                <div key={i} className="flex flex-col items-center min-w-32 gap-4 h-full justify-end">
                                    <Image alt={item.title!} src={item.image!} width={400} height={400}  className={`transition-transform duration-300 ease-in-out transform hover:scale-125 ${item.title?.includes('Mongo') ? 'w-4' : 'w-8'}`}  />
                                    <p className="text-xs font-semibold">{item.title}</p>
                                </div>
                            ))}
                        </div>
                        <CustomBorder />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
