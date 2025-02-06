'use client'
import { IMainMenu } from '@/constants/layout';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Logo from "@public/icon/logo.png"
import { Icons } from '../icons';
import { IconNames } from '../icons/interface';
import { motion, AnimatePresence } from "framer-motion";
interface INavbar {
    menu?: IMainMenu[];
}

function NavBar({
    menu
}: INavbar) {
    const [navbar, setNavbar] = useState(false);
    return (
        <nav className="relative w-full bg-transparent top-0 left-0 right-0 z-50 h-32">
            <div className="md:flex justify-between px-4 container mx-auto md:items-center">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        {/* LOGO */}
                        <Link href="/">
                            <Image alt="logo" src={Logo} width={100} height={100} className="w-32" />
                        </Link>
                        {/* HAMBURGER BUTTON FOR MOBILE */}
                        <div className="md:hidden">
                            <button
                                className="p-2 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <Icons name={IconNames.close} size={30} className="text-font-primary" />
                                ) : (
                                    <Icons name={IconNames["3-line-menu"]} size={30} className="text-font-primary" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div
                    className={`md:flex justify-end items-center hidden`}
                >
                    <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                        {menu?.map((item, i) => {
                            return (
                                <li key={i} className="text-xl text-font-primary py-2 px-6 text-center border-b-2 md:border-b-0 hover:bg-sixth  border-sixth  md:hover:text-sixth md:hover:bg-transparent">
                                    <Link href={item?.href!}>
                                        {item.label}
                                    </Link>
                                </li>
                            );

                        })}
                    </ul>
                </div>

                {/* Animated Menu */}
            </div>
            <AnimatePresence>
                {navbar && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.4 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 bg-black backdrop-blur-3xl z-10"
                            onClick={() => setNavbar(false)} // Close menu when backdrop is clicked
                        />
                        <motion.div
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                            transition={{ duration: 0.5 }}
                            className="fixed w-full pb-3 bg-fifth z-50"
                        >
                            <ul className="h-fit w-full flex flex-col items-center justify-start py-8">
                                {menu?.map((item, i) => (
                                    <li
                                        key={i}
                                        className="text-xl text-font-primary py-2 px-6 text-center border-b-2 md:border-b-0 hover:bg-sixth border-sixth md:hover:text-sixth md:hover:bg-transparent"
                                    >
                                        <Link href={item?.href!} onClick={() => setNavbar(!navbar)}>
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
}

export default NavBar;
