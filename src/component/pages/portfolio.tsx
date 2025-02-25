'use client'
import React, { useEffect, useState } from 'react'
import { ButtonBorderOnlyAngle } from '../ui/button'
import { CardSkills, CardWithBackground, SkillsSection } from '../ui/card-skill'
import { MyServices, OtherSkills } from '@/constants/home'
import * as motion from "motion/react-client"
import { useInView } from "react-intersection-observer";

export function PortfolioPage() {
    const { ref: servicesRef, inView: serviceView } = useInView({
        threshold: 0.1,
        triggerOnce: true
    });
    const [repo, setRepo] = useState<any[]>()

    const getRepositories = async () => {
        const repositories = await fetch('https://api.github.com/user/repos?per_page=6&page=1&sort=created', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${process.env.NEXT_PUBLIC_GIT_ACCESS_TOKEN}`,
                Accept: 'application/vnd.github+json',
            },
        });
        const res = await repositories.json();
        setRepo(res);
    }

    useEffect(() => {
        getRepositories();
    }, []);
    return (
        <div className='md:py-16 py-8'>
            <motion.div
                ref={servicesRef}
                initial={{ y: -50, opacity: 0 }}
                animate={serviceView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="container mx-auto px-4 relative flex flex-col gap-8 md:gap-16 items-center justify-center"
            >
                <div className='flex flex-col md:gap-8 gap-4 items-center text-center justify-center'>
                    <ButtonBorderOnlyAngle label='My Specialization Services' textColor='text-sixth' />
                    <h2 className="md:text-6xl text-4xl font-bold">{`What I Do`}</h2>
                    <p className='max-w-xl'>{`Develop comprehensive content strategies tailored to your unique goals and target audience, ensuring that every piece of content.`}</p>
                </div>

                <div className='grid md:grid-cols-3 grid-cols-1 gap-8 w-full'>
                    {repo?.map((item, i) => (
                        <div key={i} className="p-4 rounded-md shadow-md bg-third flex flex-col items-start">
                            <div className="flex items-center mb-2">
                                <div className="w-4 h-4 bg-yellow-300 rounded-md mr-2"></div>
                                <h3 className="font-bold text-lg">{item.name}</h3>
                            </div>
                            <p className="text-sm">Language: {item.language || 'Not specified'}</p>
                            <a href={item.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline mt-2">View Repository</a>
                        </div>
                    ))}
                </div>
                {/* <pre>{JSON.stringify(repo, null, 2)}</pre>
                    <SkillsSection skills={OtherSkills} /> */}
            </motion.div>
        </div>
    )
}
