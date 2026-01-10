'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, Linkedin, ThumbsUp, Heart, MessageCircle } from 'lucide-react'

// Testimonial Data
const testimonials = [
    {
        name: "Kshitij Singh",
        role: "at Snabbit | Ex-Blinkit",
        content: "My man ate and left no crumbs! So cool!",
        platform: "linkedin",
        reactions: { type: "heart", count: 1 },
        time: "4mo"
    },
    {
        name: "Baibhav Parida",
        role: "Communication Design Lead @Plivo",
        content: "This visual storytelling approach brilliantly captures how instant gratification has become the new currency in consumer experience design.",
        platform: "linkedin",
        reactions: { type: "like", count: 1 },
        time: "5mo"
    },
    {
        name: "Chandan Mendiratta",
        role: "Chief Brand Officer, Zepto",
        content: "Delivered in a flash :) Purple flash :)",
        platform: "linkedin",
        reactions: { type: "love", count: 11 },
        time: "5mo"
    },
    {
        name: "Aditya Singh",
        role: "Product Design @Browserstack",
        content: "Love it when the Zepto rider enters my Kitchen with their scooter",
        platform: "linkedin",
        reactions: { type: "laugh", count: 7 },
        time: "5mo"
    }
]

// Duplicate for infinite scroll
const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials]

const TestimonialCard = ({ data }: { data: typeof testimonials[0] }) => {
    return (
        <div className="bg-[#0F0F0F] border border-white/5 rounded-2xl p-6 w-[85vw] max-w-[350px] md:w-[400px] md:max-w-none flex-shrink-0 mx-4 relative overflow-hidden group hover:border-purple-500/30 transition-colors duration-300">
            {/* Glass gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                    {/* Avatar Placeholder */}
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-sm">
                        {data.name.charAt(0)}
                    </div>
                    <div>
                        <div className="flex items-center gap-1">
                            <h4 className="font-bold text-white text-sm">{data.name}</h4>
                            <span className="text-muted-foreground"><Linkedin size={12} /></span>
                        </div>
                        <p className="text-xs text-muted-foreground truncate max-w-[200px]">{data.role}</p>
                    </div>
                </div>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                    {data.time}
                </span>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed mb-6 font-medium">
                {data.content}
            </p>

            {/* Social Actions */}
            <div className="flex items-center gap-4 border-t border-white/5 pt-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-1.5 group/btn cursor-pointer hover:text-purple-400 transition-colors">
                    {data.reactions.type === 'love' ? <Heart size={14} className="fill-red-500 text-red-500" /> : <ThumbsUp size={14} />}
                    <span>{data.reactions.type === 'love' ? 'Love' : 'Like'}</span>
                    {data.reactions.count > 0 && <span className="bg-white/10 px-1.5 py-0.5 rounded-full text-[10px] ml-1">{data.reactions.count}</span>}
                </div>
                <div className="flex items-center gap-1.5 cursor-pointer hover:text-white transition-colors">
                    <MessageCircle size={14} />
                    <span>Reply</span>
                </div>
            </div>
        </div>
    )
}

export function Testimonials() {
    return (
        <section className="py-24 bg-background overflow-hidden relative border-t border-white/5">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-50" />

            <div className="container mx-auto px-4 mb-12 text-center">
                <h2 className="text-3xl md:text-5xl font-black text-black mb-4">
                    How Industry Experts <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Review Us</span>
                </h2>
            </div>

            <div className="relative w-full overflow-hidden mask-gradient-x">
                {/* Left/Right Fade Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

                {/* Marquee Track */}
                <motion.div
                    className="flex"
                    animate={{
                        x: ["0%", "-50%"],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 40,
                            ease: "linear",
                        },
                    }}
                >
                    {extendedTestimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} data={testimonial} />
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
