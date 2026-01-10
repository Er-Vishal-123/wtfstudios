'use client'

import { motion } from 'framer-motion'

export function Footer() {
    return (
        <footer className="w-full bg-black text-white relative z-50 overflow-hidden">
            {/* 
        CTA Section - EXACT "Meet Glob" Layout Reconstruction
        We composite separate assets: Stars BG, Planet Ground, Characters, and Center Text.
      */}
            <div className="relative w-full h-[600px] sm:h-[700px] lg:h-[800px] bg-black overflow-hidden">

                {/* 1. Space Background - Simple stars/gradient */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-[#0a0a0a] to-black">
                    {/* CSS Stars */}
                    <div className="absolute top-10 left-10 w-1 h-1 bg-white rounded-full opacity-70 animate-pulse" />
                    <div className="absolute top-20 right-20 w-2 h-2 bg-purple-400 rounded-full opacity-60 animate-pulse" style={{ animationDelay: '1s' }} />
                    <div className="absolute bottom-40 left-1/4 w-1 h-1 bg-blue-400 rounded-full opacity-80" />
                    <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-white rounded-full opacity-50" />
                </div>

                {/* 2. Center Content - Text & Button */}
                <div className="absolute inset-0 flex flex-col items-center justify-center z-20 pb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center px-4"
                    >
                        <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-6">
                            Meet <span className="text-[#CCFF00]">WTF</span>.STUDIOS
                        </h2>
                        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10 font-light tracking-wide">
                            The unstoppable AI video factory that eats traditional production.
                        </p>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => {
                                const contactSection = document.getElementById('contact')
                                contactSection?.scrollIntoView({ behavior: 'smooth' })
                            }}
                            className="bg-white text-black font-bold text-lg px-10 py-4 rounded-full hover:bg-gray-100 transition-all shadow-[0_0_25px_rgba(255,255,255,0.4)]"
                        >
                            Start Creating
                        </motion.button>
                    </motion.div>
                </div>

                {/* 3. Characters - Positioned relative to the viewport */}

                {/* Left Character: Astronaut */}
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="absolute bottom-[10%] left-[5%] md:left-[10%] z-10 w-[180px] sm:w-[250px] md:w-[350px]"
                >
                    <img
                        src="/footer-astronaut.png"
                        alt="Astronaut"
                        className="w-full h-auto drop-shadow-2xl mix-blend-screen" // Simple blend to remove black bg edges if visible
                        style={{ mixBlendMode: 'screen' }}
                    />
                </motion.div>

                {/* Right Character: Monster */}
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="absolute bottom-[10%] right-[5%] md:right-[10%] z-10 w-[200px] sm:w-[280px] md:w-[380px]"
                >
                    <img
                        src="/footer-monster.png"
                        alt="Monster"
                        className="w-full h-auto drop-shadow-2xl mix-blend-screen"
                        style={{ mixBlendMode: 'screen' }}
                    />
                </motion.div>

                {/* 4. Green Planet Surface Ground */}
                <div
                    className="absolute bottom-0 left-0 right-0 h-[200px] sm:h-[250px] z-0"
                    style={{
                        backgroundImage: "url('/footer-ground.png')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'top center',
                        maskImage: 'linear-gradient(to bottom, transparent, black 20%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 20%)'
                    }}
                />
                {/* Overlay gradient to fade ground into black content */}
                <div className="absolute bottom-0 left-0 right-0 h-[100px] bg-gradient-to-t from-black to-transparent z-10" />

            </div>

            {/* 
        Bottom Information Section
      */}
            <div className="border-t border-white/10 bg-black pt-20 pb-10 px-6 sm:px-12 lg:px-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">

                    {/* Left Column: Brand & Description */}
                    <div className="lg:col-span-5 space-y-8">
                        <h3 className="text-4xl font-black tracking-tight">
                            <span className="text-[#CCFF00]">WTF</span>.STUDIOS
                        </h3>
                        <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                            Revolutionizing video production with intelligent AI that understands creativity, storytelling, and human emotion.
                        </p>

                        {/* Social Icons */}
                        <div className="flex gap-6">
                            <a href="https://x.com/wtfstudios_ai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                {/* X / Twitter */}
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                            </a>
                            <a href="https://www.tiktok.com/@wtfstudios28" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                {/* TikTok */}
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.65-1.58-1.02v10.95c-.06 1.48-.52 2.93-1.34 4.17-1.1 1.67-2.9 2.87-4.9 3.25-2.27.43-4.73.06-6.67-1.1-1.92-1.15-3.08-3.23-3.04-5.46.03-1.29.35-2.58.96-3.73.96-1.81 2.68-3.06 4.67-3.41.6-.1 1.22-.12 1.83-.07v4.08c-.76-.11-1.55.08-2.21.52-.98.66-1.39 1.9-1.04 3.03.35 1.13 1.34 1.89 2.52 1.93 1.23.04 2.37-.76 2.69-1.94.1-.38.15-.78.14-1.18V6.65c0-2.12-.01-4.25 0-6.37.58-.06 1.16-.16 1.74-.26z" /></svg>
                            </a>
                            <a href="https://www.instagram.com/wtfstudio.ai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                {/* Instagram */}
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.451 4.635c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                            </a>
                            <a href="https://www.linkedin.com/company/wtf-studios28/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                {/* LinkedIn */}
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Tools */}
                    <div className="lg:col-span-7 space-y-8">
                        <h3 className="text-2xl font-black uppercase">Tools We Use</h3>
                        <p className="text-gray-400 max-w-2xl leading-relaxed">
                            We leverage the latest AI technology to deliver cutting-edge video production. Our toolkit combines the best generative AI models for video, audio, and visual content creation.
                        </p>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-4 gap-x-8 text-sm sm:text-base text-gray-300 font-medium">
                            <div>Runway Gen-4</div>
                            <div>Kling 2</div>
                            <div>Veo 3</div>
                            <div>Higgsfield AI</div>

                            <div>Hailuo Minimax 2</div>
                            <div>Midjourney</div>
                            <div>Leonardo AI</div>
                            <div>Krea AI</div>

                            <div>Runway</div>
                            <div>Suno AI</div>
                            <div>ElevenLabs</div>
                        </div>
                    </div>

                </div>

                {/* Divider */}
                <div className="w-full h-px bg-white/10 mb-8" />

                {/* Tagline */}
                <div className="w-full text-center mb-12">
                    <h4 className="text-2xl md:text-3xl font-black tracking-wider uppercase">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 animate-pulse">
                            We Don&apos;t Make Ads, We Make People Say &apos;WTF&apos;
                        </span>
                    </h4>
                </div>

                {/* Bottom Row */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end text-sm text-gray-500 gap-6">
                    <div className="space-y-2">
                        <div>&copy; 2025 WTF.studios. All rights reserved.</div>
                    </div>
                    <div className="text-right md:text-left">
                        📍 Mumbai-Based | 🌍 Creating for Global Brands | 🎥 Ads Reimagined with AI
                    </div>
                </div>
            </div>
        </footer>
    )
}
