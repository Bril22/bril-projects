'use client'
import React from 'react'
import { ButtonBorderOnlyAngle } from '../ui/button'
import * as motion from "motion/react-client"
import { useInView } from "react-intersection-observer";
import ContactForm from '../ui/contact-form'

interface IContactPage {
    withPadding?: boolean;
}

export function ContactPage({
    withPadding = true
}: IContactPage) {
    const { ref: servicesRef, inView: serviceView } = useInView({
        threshold: 0.1,
        triggerOnce: true
    });
    const { ref: contactRef, inView: contactView } = useInView({
        threshold: 0.1,
        triggerOnce: true
    });
    return (
        <div className={`${withPadding ? "md:py-16 py-8" : ""}`}>
            <div
                className="container mx-auto px-4 relative flex flex-col gap-8 md:gap-16 items-center justify-center"
            >
                <motion.div
                    className='flex flex-col md:gap-8 gap-4 items-center text-center justify-center'
                    ref={servicesRef}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={serviceView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <ButtonBorderOnlyAngle label='Contact With Me' textColor='text-sixth' />
                    <h2 className="md:text-6xl text-4xl font-bold">{`Let's Collaborate!`}</h2>
                    <p className='max-w-4xl'>{`If you have an idea, project, or challenge you'd like to discuss, I would love to hear from you! Together, we can turn visions into reality and create outstanding digital experiences. Let's talk about how we can work together!`}</p>
                </motion.div>
                <motion.div
                    ref={contactRef}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={contactView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.8 }}
                    className='w-full'
                >
                    <ContactForm />
                </motion.div>
            </div>
        </div>
    )
}
