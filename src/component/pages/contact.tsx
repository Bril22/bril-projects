'use client'
import React, { useState } from 'react'
import { ButtonBorderOnlyAngle } from '../ui/button'
import { CardSkills, SkillsSection } from '../ui/card-skill'
import { MySkills, OtherSkills } from '@/constants/home'
import * as motion from "motion/react-client"
import { useInView } from "react-intersection-observer";
import ContactForm from '../ui/contact-form'

export function ContactPage() {
    const { ref: servicesRef, inView: serviceView } = useInView({
        threshold: 0.1,
        triggerOnce: true
    });
    return (
        <div className='md:py-16 py-8'>
            <motion.div
                ref={servicesRef}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={serviceView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8 }}
                className="container mx-auto px-4 relative flex flex-col gap-8 md:gap-16 items-center justify-center"
            >
                <div className='flex flex-col md:gap-8 gap-4 items-center text-center justify-center'>
                    <ButtonBorderOnlyAngle label='Contact With Me' textColor='text-sixth' />
                    <h2 className="md:text-6xl text-4xl font-bold">{`Let's Collaborate!`}</h2>
                    <p className='max-w-4xl'>{`If you have an idea, project, or challenge you'd like to discuss, I would love to hear from you! Together, we can turn visions into reality and create outstanding digital experiences. Let's talk about how we can work together!`}</p>
                </div>
                <ContactForm />
            </motion.div>
        </div>
    )
}
