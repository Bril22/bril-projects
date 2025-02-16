'use client'
import React from 'react'
import { ButtonBorderOnlyAngle } from '../ui/button'
import { CardSkills, SkillsSection } from '../ui/card-skill'
import { MyExperiences, MySkills, OtherSkills } from '@/constants/home'
import * as motion from "motion/react-client"
import { useInView } from 'react-intersection-observer'
import { Carousel } from '../ui/carousel'
import { GaleryCarousel } from '../ui/gallery-carousel'

export function ExperiencesPage() {
    const { ref: experiencesRef, inView: experiencesView } = useInView({
        threshold: 0.1,
        triggerOnce: true
    });
    return (
        <div className='bg-gradient-to-b from-fifth from-30% to-fourth md:py-16 py-8 flex flex-col gap-8'>
            <motion.div
                ref={experiencesRef}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={experiencesView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8 }}
                className="container mx-auto px-4 relative flex flex-col gap-8 md:gap-16 items-center justify-center"
            >
                <div className='flex flex-col md:gap-8 gap-4 items-center text-center justify-center'>
                    <ButtonBorderOnlyAngle label="My Experiences" textColor="text-sixth" />
                    <h2 className="md:text-6xl text-4xl font-bold">{`What I've Done`}</h2>
                    <p className='max-w-xl'>
                        {`Over the years, I have honed my skills in Frontend, Backend, Automation, and Cloud Technologies, working on projects that merge creativity with functionality.`}
                    </p>
                </div>
                {/* <Carousel carouselItems={MyExperiences} /> */}
            </motion.div>
            <GaleryCarousel
                // title={title}
                style='flex flex-col'
                images={MyExperiences}

            />
        </div >
    )
}
