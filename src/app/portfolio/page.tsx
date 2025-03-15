'use client'
import { ContactPage } from "@/component/pages/contact";
import { BackgroundBeamsWithCollision } from "@/component/ui/background-beams-with-collision";
import SplashCursor from "@/component/ui/cursor/splash-cursor";
import ScrollReveal from "@/component/ui/scroll/scroll-reveal";
export default function Contact() {
    return (
        <>
            <BackgroundBeamsWithCollision>
                <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
                    What&apos;s cooler than Beams?{" "}
                    <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
                        <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                            <span className="">Exploding beams.</span>
                        </div>
                        <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                            <span className="">Exploding beams.</span>
                        </div>
                    </div>
                    {/* <SplashCursor /> */}
                </h2>
            </BackgroundBeamsWithCollision>
            <ScrollReveal
                baseOpacity={0.1}
                enableBlur={true}
                baseRotation={3}
                blurStrength={10}
                containerClassName="container mx-auto"
            >
                When does a man die? When he is hit by a bullet? No! When he suffers a disease?
                No! When he ate a soup made out of a poisonous mushroom?
                No! A man dies when he is forgotten!
            </ScrollReveal>
        </>
    )
}