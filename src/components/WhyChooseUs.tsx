import './ui/why-choose-us.css';

interface BenefitCardProps {
    title: string;
    description: string;
    items: string[];
}

const BenefitCard = ({ title, description, items }: BenefitCardProps) => {
    return (
        <div className="why-choose-card">
            <div className="card__border" />
            <div className="card_title__container">
                <span className="card_title">{title}</span>
                <p className="card_paragraph">
                    {description}
                </p>
            </div>
            <hr className="line" />
            <ul className="card__list">
                {items.map((item, index) => (
                    <li key={index} className="card__list_item">
                        <span className="check">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="check_svg">
                                <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                            </svg>
                        </span>
                        <span className="list_text">{item}</span>
                    </li>
                ))}
            </ul>
            <button
                className="button"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
                Book a Call
            </button>
        </div>
    );
};

export function WhyChooseUs() {
    const cards = [
        {
            title: "AI-Powered. Human-Designed",
            description: "We combine the speed of AI with the sensibilities of human storytellers for studio-grade visuals.",
            items: [
                "Cinematic & Professional",
                "Sharper than Generic AI",
                "No Camera Crews Needed",
                "Future-Ready Creativity",
                "Creating Culture, Not Just Ads"
            ]
        },
        {
            title: "Engineered for Engagement",
            description: "Every video is designed with view-through, watch time, and conversions in mind.",
            items: [
                "Hook in 3 Seconds",
                "Retention Curve Optimization",
                "Platform-Specific Formats",
                "CTR & Watch Time Focus",
                "Guaranteed Impact"
            ]
        },
        {
            title: "Speed & Smart Scale",
            description: "Traditional production quality, delivered in days. Better ROI, smarter spend.",
            items: [
                "72-Hour Turnaround",
                "Rapid Revision Cycles",
                "Predictable Pricing",
                "Fast Go-To-Market",
                "No Hidden Location Costs"
            ]
        }
    ];

    return (
        <section className="py-24 relative overflow-hidden bg-background">
            {/* Ambient glow effect specific to this section */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-black mb-6 tracking-tight">
                        Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">WTF.Studios</span>?
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        We create studio-quality AI videos that launch attention, fuel engagement, and accelerate brand growth — all delivered faster and smarter.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-8 lg:gap-12 mb-24">
                    {cards.map((card, index) => (
                        <BenefitCard
                            key={index}
                            title={card.title}
                            description={card.description}
                            items={card.items}
                        />
                    ))}
                </div>

                {/* Supporting Visuals */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
                    {/* Visual 1: Traditional vs AI Ads */}
                    <div className="group relative rounded-2xl overflow-hidden bg-[#0F0F0F] border border-white/10 hover:border-purple-500/50 transition-colors duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="p-1">
                            <img
                                src="/vs-table.jpg"
                                alt="Traditional Ads vs AI Ads Comparison"
                                className="w-full h-auto rounded-xl shadow-2xl opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                            />
                        </div>
                    </div>

                    {/* Visual 2: AI Ads Diagram */}
                    <div className="group relative rounded-2xl overflow-hidden bg-[#0F0F0F] border border-white/10 hover:border-pink-500/50 transition-colors duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="p-1">
                            <img
                                src="/ai-diagram.jpg"
                                alt="AI Ads Capabilities Diagram"
                                className="w-full h-auto rounded-xl shadow-2xl opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
