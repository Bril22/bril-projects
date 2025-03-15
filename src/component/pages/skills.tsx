'use client'
import React, { useState } from 'react'
import { ButtonBorderOnlyAngle } from '../ui/button'
import { CardSkills, SkillsSection } from '../ui/card-skill'
import { MySkills, OtherSkills } from '@/constants/home'
import * as motion from "motion/react-client"
import { useInView } from "react-intersection-observer";

export function SkillsPage() {
    const { ref: servicesRef, inView: serviceView } = useInView({
        threshold: 0.1,
        triggerOnce: true
    });
    const { ref: skillRef, inView: skillView } = useInView({
        threshold: 0.1,
        triggerOnce: true
    });
    return (
        <div className='bg-gradient-to-b from-fourth from-30% to-fifth md:py-16 py-8'>
            <div
                className="container mx-auto px-4 relative flex flex-col gap-8 md:gap-16 items-center justify-center"
            >
                <motion.div
                    ref={servicesRef}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={serviceView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.8 }}
                    className='flex flex-col md:gap-8 gap-4 items-center text-center justify-center'>
                    <ButtonBorderOnlyAngle label='My Awesome Skills' textColor='text-sixth' />
                    <h2 className="md:text-6xl text-4xl font-bold">{`Elevating Ideas with Code & Creativity`}</h2>
                    <p className='max-w-4xl'>{`Every pixel, every line of code, and every solution I craft is driven by a passion for innovation and problem-solving. My expertise spans across frontend magic, backend logic, and cloud scalability—transforming ideas into seamless digital experiences.`}</p>
                </motion.div>
                <div className='flex flex-col gap-8 w-full'>
                    <motion.div
                        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                        ref={skillRef}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={skillView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        {MySkills?.map((item, i) => (
                            <CardSkills key={i} title={item.title} description={item.description} image={item.image} />
                        ))}
                    </motion.div>
                    <SkillsSection skills={OtherSkills} />
                </div>
            </div>
        </div>
    )
}
