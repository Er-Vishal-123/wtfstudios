'use client'

import footerMonster from '/footer-monster.png'
import footerAstronaut from '/footer-astronaut.png'
import footerCharacters from '/footer-characters.png'

export function AboutAgency() {
    return (
        <section className="relative py-24 bg-background overflow-hidden border-t border-white/5">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-accent-purple/5 to-background pointer-events-none" />
            <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(124, 58, 237, 0.1) 0%, transparent 50%)',
                }}
            />

            <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
                {/* Standard Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-3 mb-6">
                        <div className="w-3 h-3 bg-accent-purple rounded-full animate-pulse" />
                        <span className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">
                            Who We Are
                        </span>
                        <div className="w-3 h-3 bg-accent-blue rounded-full animate-pulse" />
                    </div>

                    <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6 text-foreground">
                        About Us
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Visuals (Stacked Cards) */}
                    <div className="relative h-[500px] w-full max-w-md mx-auto lg:max-w-none perspective-1000 group">

                        {/* Card 1: Back */}
                        <div className="absolute top-0 left-0 w-64 h-80 rounded-2xl border-2 border-accent-purple/30 bg-card/80 backdrop-blur-md shadow-2xl transform rotate-[-12deg] translate-x-12 translate-y-12 transition-transform duration-500 group-hover:rotate-[-16deg] group-hover:translate-x-4 z-10">
                            <div className="w-full h-full rounded-xl overflow-hidden relative">
                                <div className="absolute inset-0 bg-accent-purple/20 mix-blend-overlay" />
                                <img src={footerCharacters} alt="Team Characters" className="w-full h-full object-cover opacity-80" />
                            </div>
                        </div>

                        {/* Card 2: Middle */}
                        <div className="absolute top-8 right-12 w-64 h-80 rounded-2xl border-2 border-accent-emerald/30 bg-card/80 backdrop-blur-md shadow-2xl transform rotate-[6deg] translate-x-4 transition-transform duration-500 group-hover:rotate-[12deg] group-hover:translate-x-12 z-20">
                            <div className="w-full h-full rounded-xl overflow-hidden relative">
                                <div className="absolute inset-0 bg-accent-emerald/20 mix-blend-overlay" />
                                <img src={footerAstronaut} alt="Astronaut" className="w-full h-full object-cover opacity-90" />
                            </div>
                        </div>

                        {/* Card 3: Front (Main) */}
                        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-72 h-96 rounded-2xl border-4 border-accent-blue/50 bg-gray-900 shadow-[0_0_50px_rgba(59,130,246,0.2)] transform rotate-[-3deg] transition-transform duration-500 group-hover:rotate-0 z-30 overflow-hidden">
                            <div className="w-full h-full relative">
                                <div className="absolute inset-0 bg-gradient-to-tr from-accent-blue/10 to-transparent pointer-events-none z-10" />
                                <img src={footerMonster} alt="Monster Mascot" className="w-full h-full object-cover scale-110" />

                                {/* Neon Glow Overlay */}
                                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent z-20" />
                                <div className="absolute bottom-6 left-6 z-30">
                                    <p className="text-white font-black text-2xl tracking-tighter uppercase">
                                        Unleash<br />The<br /><span className="text-accent-blue">Beast</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Content */}
                    <div className="space-y-8">

                        {/* Header Block */}
                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-5xl font-black text-foreground leading-tight">
                                WTF.Studios – The <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue via-accent-purple to-accent-emerald">AI-Powered</span> Creative & Media Agency
                            </h2>

                            <div className="p-6 rounded-2xl bg-accent-blue/5 border border-accent-blue/10 backdrop-blur-sm relative overflow-hidden">
                                <div className="absolute left-0 top-0 w-1 h-full bg-accent-emerald" />
                                <p className="text-2xl font-bold text-foreground italic relative z-10">
                                    “We don’t run ads. We launch internet-breaking moments.”
                                </p>
                            </div>

                            <div className="flex flex-wrap items-center gap-4 text-sm font-semibold tracking-wide text-muted-foreground uppercase">
                                <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-accent-purple" /> Mumbai-Based</span>
                                <span className="hidden sm:inline text-border">|</span>
                                <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-accent-blue" /> Creating for Global Brands</span>
                                <span className="hidden sm:inline text-border">|</span>
                                <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-accent-emerald" /> Ads Reimagined with AI</span>
                            </div>
                        </div>

                        {/* Main Text */}
                        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                            <p>
                                <strong className="text-foreground">WTF.Studios</strong> is a full-stack creative and media agency that sits at the intersection of artificial intelligence, brand storytelling, and viral culture.
                            </p>
                            <p>
                                Founded by <strong className="text-foreground">Vishal Yadav</strong>, we specialize in crafting high-impact ad campaigns that are fast, intelligent, trend-sensitive, and tailor-made for Gen Z, digital natives, and internet-first consumers.
                            </p>
                            <p>
                                We blend the <span className="text-accent-blue font-bold">speed of AI tools</span> with the <span className="text-accent-purple font-bold">intuition of real creators</span> to engineer campaigns that are not just creative — they’re culturally contagious.
                            </p>
                        </div>

                        {/* Why We Exist */}
                        <div className="pt-6 border-t border-border">
                            <h3 className="text-2xl font-black text-foreground mb-4 flex items-center gap-3">
                                <span>🚀</span> Why We Exist
                            </h3>
                            <p className="text-muted-foreground mb-6 text-lg">
                                In a world where attention is currency, we help brands own the scroll. We’ve redefined ad creation for the age of algorithms — fast, fluid, funny, and futuristic.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    "Stand out in a sea of sameness",
                                    "Go viral without selling out",
                                    "Speak the Gen Z language fluently",
                                    "Leverage AI without losing the human touch"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className="w-5 h-5 rounded-full bg-accent-blue/20 flex items-center justify-center shrink-0 mt-0.5">
                                            <div className="w-2 h-2 rounded-full bg-accent-blue" />
                                        </div>
                                        <span className="text-base font-bold text-foreground">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
