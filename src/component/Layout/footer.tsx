import Link from 'next/link'
import React from 'react'
import Logo from "@public/icon/logo.png"
import Image from 'next/image'
import { IMainMenu } from '@/constants/layout'
import { Icons } from '../icons'

interface IFooter {
    menu?: IMainMenu[]
    socialMedia?: IMainMenu[]
}

export function Footer({
    menu,
    socialMedia
}: IFooter) {
    return (
        <div className='bg-black/25 p-4'>
            <div className='flex flex-col justify-start items-center border border-font-primary rounded-lg p-12 md:p-24 text-center relative'>
                <div className='container mx-auto flex md:flex-row flex-col gap-8 w-full justify-between items-center'>
                    {/* <div
                        className={`md:flex justify-end items-center`}
                    > */}
                    <ul className={`grid ${menu && menu?.length == 3 ? "grid-cols-3" : "grid-cols-2"} md:items-center md:justify-center md:flex gap-6`}>
                        {menu?.map((item, i) => {
                            return (
                                <li key={i} className="text-xl text-font-primary text-center hover:bg-sixth border-sixth md:hover:text-sixth md:hover:bg-transparent">
                                    <Link href={item?.href!}>
                                        {item.label}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                    {/* </div> */}
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
                <Link href="/">
                    <Image alt="logo" src={Logo} width={400} height={400} className="w-44" />
                </Link>
                <p className='italic relative -top-5'>
                    {`Got a vision? I’ve got the skills to make it a reality. Let’s build your next big thing!`}
                </p>
                <p className='text-sixth text-xs'>
                    <span className='font-bold'>Handcrafted by me </span>&copy;{` 2025`} All Rights Reserved
                </p>
                <div className='bg-sixth w-32 h-32 blur-3xl absolute bottom-0 right-0' />
                <div className='bg-white/40 w-24 h-24 blur-xl absolute bottom-0 right-0' />
            </div>
        </div>
    )
}
