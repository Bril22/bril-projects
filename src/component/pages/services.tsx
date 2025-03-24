'use client'
import React from 'react'
import { ButtonBorderOnlyAngle } from '../ui/button'
import { CardWithBackground } from '../ui/card-skill'
import { MyServices, OtherSkills } from '@/constants/home'
import * as motion from "motion/react-client"
import { useInView } from "react-intersection-observer";

export function ServicesPage() {
    const { ref: servicesRef, inView: serviceView } = useInView({
        threshold: 0.1,
        triggerOnce: true
    });
    return (
        <div className='md:py-16 py-8 relative'>
            <motion.div
                ref={servicesRef}
                initial={{ y: -50, opacity: 0 }}
                animate={serviceView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="container mx-auto px-4 relative flex flex-col gap-8 md:gap-16 items-center justify-center"
            >
                <div className='flex flex-col md:gap-8 gap-4 items-center text-center justify-center w-full'>
                    <ButtonBorderOnlyAngle label='My Specialization Services' textColor='text-sixth' />
                    <h2 className="md:text-6xl text-4xl font-bold">{`What I Do`}</h2>
                    <p className='max-w-xl'>{`Develop comprehensive content strategies tailored to your unique goals and target audience, ensuring that every piece of content.`}</p>
                </div>
                <div className='flex flex-col gap-8 w-full'>
                    <div
                        className='grid grid-cols-1 lg:grid-cols-3 gap-6 justify-items-center items-center'
                    >
                        <CardWithBackground skills={MyServices} />
                    </div>
                    {/* <SkillsSection skills={OtherSkills} /> */}
                </div>
            </motion.div>
        </div>
    )
}
