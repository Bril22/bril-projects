'use client'
import { IMainMenu } from '@/constants/layout';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Logo from "@public/icon/logo.png"
import { Icons } from '../icons';
import { IconNames } from '../icons/interface';
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
interface INavbar {
    menu?: IMainMenu[];
}

function NavBar({
    menu
}: INavbar) {
    const [navbar, setNavbar] = useState(false);
    const [active, setActive] = useState<string | null>();
    const pathname = usePathname()
    useEffect(() => {
        setActive(pathname);
    }, [pathname])

    const [show, setShow] = useState<boolean>(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [navbarBg, setNavbarBg] = useState('bg-transparent');

    const controlNavbar = () => {
        const currentScroll = window.scrollY;

        if (currentScroll > lastScrollY && currentScroll > 60) {
            setShow(false);
        }
        else if (currentScroll < lastScrollY) {
            setShow(true);
        }

        setLastScrollY(currentScroll);
    };

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar);

        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    }, [lastScrollY]);


    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;
            if (currentScroll === 0) {
                setNavbarBg('bg-transparent');
            } else if (currentScroll > 0 && currentScroll < 60) {
                setNavbarBg('bg-forth');
            } else {
                setNavbarBg('bg-fifth');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {/* <div className='h-32' /> */}
            <nav className={cn(
                `fixed w-full top-0 left-0 right-0 z-50 h-32`,
                 `${show ? `opacity-100 translate-y-0 ${navbarBg}` : 'opacity-0 -translate-y-full'}`,
                 `transition-all duration-600 ease-in-out`
            )}>
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
                                    className="p-2 border rounded-full outline-none focus:border-gray-400 focus:border relative z-50 right-4"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    <AnimatePresence mode="wait">
                                        {navbar ? (
                                            <motion.div
                                                key="close"
                                                initial={{ opacity: 0, rotate: -90 }}
                                                animate={{ opacity: 1, rotate: 0 }}
                                                exit={{ opacity: 0, rotate: 90 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <Icons name={IconNames.close} size={30} className="text-font-primary" />
                                            </motion.div>
                                        ) : (
                                            <motion.div
                                                key="menu"
                                                initial={{ opacity: 0, rotate: 90 }}
                                                animate={{ opacity: 1, rotate: 0 }}
                                                exit={{ opacity: 0, rotate: -90 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <Icons name={IconNames["3-line-menu"]} size={30} className="text-font-primary" />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
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
                                    <li key={i} className={`text-xl text-font-primary py-2 px-6 text-center hover:bg-sixth md:hover:text-sixth md:hover:bg-transparent ${active === item.href ? '!border-sixth !border-b-4' : ''}`}>
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
                                className="fixed inset-0 bg-black backdrop-blur-3xl z-10 h-screen"
                                onClick={() => setNavbar(false)}
                            />
                            <motion.div
                                initial={{ opacity: 0, clipPath: "polygon(100% 0%, 100% 0%, 100% 0%, 100% 0%)" }}
                                animate={{ opacity: 1, clipPath: "polygon(100% 0%, 100% 100%, 0% 100%, 0% 0%)" }}
                                exit={{ opacity: 0, clipPath: "polygon(100% 0%, 100% 0%, 100% 0%, 100% 0%)" }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                                className="fixed w-3/4 right-4 top-4 pb-3 bg-fifth z-40 rounded-2xl"
                            >
                                <ul className="h-fit w-full flex flex-col items-start justify-center py-16 pb-8 gap-4 px-8">
                                    {menu?.map((item, i) => (
                                        <li key={i} className={`text-xl font-bold text-font-primary py-2 md:px-6 text-start hover:bg-sixth md:hover:text-sixth md:hover:bg-transparent ${active === item.href ? '!border-sixth !border-b-4' : ''}`}>
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
        </>
    );
}

export default NavBar;
