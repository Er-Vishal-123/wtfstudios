'use client'

import { useRef } from 'react'
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame
} from 'framer-motion'

// Utility to wrap value within a range
const wrap = (min: number, max: number, v: number) => {
    const rangeSize = max - min
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min
}

interface ParallaxProps {
    children: string
    baseVelocity: number
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
    const baseX = useMotionValue(0)
    const { scrollY } = useScroll()
    const scrollVelocity = useVelocity(scrollY)
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    })
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false
    })

    // Magic wrapping for infinite loop
    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`)

    const directionFactor = useRef<number>(1)
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000)

        // Change direction if needed based on scroll
        if (velocityFactor.get() < 0) {
            directionFactor.current = -1
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get()

        baseX.set(baseX.get() + moveBy)
    })

    return (
        <div className="parallax overflow-hidden m-0 whitespace-nowrap flex flex-nowrap py-2">
            <motion.div
                className="scroller font-black uppercase text-5xl sm:text-7xl md:text-8xl lg:text-9xl flex whitespace-nowrap flex-nowrap"
                style={{ x }}
            >
                <span className="block mr-12 sm:mr-24 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 filter brightness-110 drop-shadow-lg">
                    {children}
                </span>
                <span className="block mr-12 sm:mr-24 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 filter brightness-110 drop-shadow-lg">
                    {children}
                </span>
                <span className="block mr-12 sm:mr-24 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 filter brightness-110 drop-shadow-lg">
                    {children}
                </span>
                <span className="block mr-12 sm:mr-24 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 filter brightness-110 drop-shadow-lg">
                    {children}
                </span>
            </motion.div>
        </div>
    )
}

export function VelocityScroll() {
    return (
        <section className="py-12 bg-black overflow-hidden border-y border-white/10">
            {/* Right to Left */}
            <ParallaxText baseVelocity={-2}>
                We Don&apos;t Make Ads, We Make People Say &apos;WTF&apos;
            </ParallaxText>

            {/* Left to Right */}
            <ParallaxText baseVelocity={2}>
                We Don&apos;t Make Ads, We Make People Say &apos;WTF&apos;
            </ParallaxText>
        </section>
    )
}
