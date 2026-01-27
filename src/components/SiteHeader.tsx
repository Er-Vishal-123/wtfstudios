'use client'

import { motion } from 'framer-motion'
import { Volume2, VolumeX, Menu, X, Briefcase, Info, Wrench, Users, Mail, Home } from 'lucide-react'
import { useState, useEffect } from 'react'
import { AnimeNavBar } from './ui/anime-navbar'
import { useNavigate, useLocation } from 'react-router-dom'

interface SiteHeaderProps {
    isMuted?: boolean
    toggleMute?: () => void
    showSoundToggle?: boolean
}

export function SiteHeader({ isMuted = true, toggleMute, showSoundToggle = false }: SiteHeaderProps) {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()

    // Scroll detection
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY
            setIsScrolled(scrollTop > 50)
        }

        const checkScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }

        // Check initial scroll
        checkScroll()

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Handle body scroll lock when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isMobileMenuOpen])

    // Close mobile menu on scroll
    useEffect(() => {
        const handleScroll = () => {
            if (isMobileMenuOpen) {
                setIsMobileMenuOpen(false)
            }
        }
        if (isMobileMenuOpen) {
            window.addEventListener('scroll', handleScroll)
        }
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [isMobileMenuOpen])

    const handleLogoClick = () => {
        if (location.pathname === '/' || location.pathname === '/index.html') {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        } else {
            navigate('/')
        }
    }

    const handleBookCallClick = () => {
        // If on homepage, scroll to contact. Else navigate to contact page.
        if (location.pathname === '/' || location.pathname === '/index.html') {
            const contactSection = document.getElementById('contact')
            contactSection?.scrollIntoView({ behavior: 'smooth' })
        } else {
            navigate('/contact')
        }
        setIsMobileMenuOpen(false)
    }

    const navbarItems = [
        { name: "Home", url: "/#", icon: Home },
        { name: "Work", url: "/#portfolio", icon: Briefcase },
        { name: "Process", url: "/#about", icon: Info },
        { name: "Services", url: "/#services", icon: Wrench },
        { name: "About Us", url: "/about", icon: Users },
        { name: "Contact", url: "/contact", icon: Mail },
    ]

    return (
        <>
            {/* AnimeNavBar - Desktop Only */}
            <div className="hidden md:block">
                <AnimeNavBar
                    items={navbarItems}
                    defaultActive="Home"
                />
            </div>

            {/* Logo - Left Side (Desktop) */}
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="hidden md:flex fixed top-11 left-8 z-[9999] items-center cursor-pointer"
                onClick={handleLogoClick}
            >
                <span className="text-2xl font-black tracking-tight text-white drop-shadow-md">
                    <span className="text-[#CCFF00]">WTF</span>.STUDIOS
                </span>
            </motion.div>

            {/* Floating Controls - Right Side (Desktop) */}
            <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="hidden md:flex fixed top-11 right-8 z-[9999] items-center space-x-3"
            >
                {/* Sound Toggle */}
                {showSoundToggle && toggleMute && (
                    <div className="relative">
                        <button
                            onClick={toggleMute}
                            className="glass-effect p-3 rounded-full text-white hover:bg-white/20 gentle-animation cursor-pointer"
                        >
                            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                        </button>

                        {isMuted && (
                            <div className="absolute -bottom-10 right-0 flex items-center text-white/80">
                                <span className="whitespace-nowrap font-medium text-sm mr-2">Sound On</span>
                                <span className="text-lg">↗</span>
                            </div>
                        )}
                    </div>
                )}

                {/* CTA Button */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleBookCallClick}
                    className="bg-red-600 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-md hover:bg-red-700 gentle-animation cursor-pointer"
                >
                    Book a Call
                </motion.button>
            </motion.div>

            {/* Mobile Header - Logo + Controls */}
            <motion.nav
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="md:hidden fixed top-0 left-0 right-0 w-full z-[110]"
            >
                <div
                    className={`w-full px-6 py-4 transition-all duration-300 ease-out ${isScrolled
                        ? 'bg-black/80 backdrop-blur-xl border-b border-white/10'
                        : 'bg-transparent'
                        }`}
                >
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center cursor-pointer"
                            onClick={handleLogoClick}
                        >
                            <span className="text-2xl font-black tracking-tight text-white">
                                <span className="text-[#CCFF00]">WTF</span>.STUDIOS
                            </span>
                        </motion.div>

                        {/* Right Side - Sound Toggle + Hamburger */}
                        <div className="flex items-center space-x-3">
                            {/* Sound Toggle */}
                            {showSoundToggle && toggleMute && (
                                <button
                                    onClick={toggleMute}
                                    className="glass-effect p-3 rounded-full text-white hover:bg-white/20 gentle-animation cursor-pointer"
                                >
                                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                                </button>
                            )}

                            {/* Hamburger Menu */}
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="glass-effect p-3 rounded-full text-white hover:bg-white/20 active:bg-white/30 gentle-animation cursor-pointer z-[120] relative"
                            >
                                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                            </button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-md z-[80] cursor-pointer"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}

            {/* Mobile Menu Panel */}
            <motion.div
                initial={{ x: '100%' }}
                animate={{ x: isMobileMenuOpen ? '0%' : '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="md:hidden fixed top-0 right-0 h-full w-72 max-w-[85vw] bg-black/90 backdrop-blur-xl border-l border-white/10 z-[90] mobile-menu-panel pointer-events-auto"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex flex-col h-full">
                    {/* Close Button at the top */}
                    <div className="flex justify-end p-4">
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="glass-effect p-3 rounded-full text-white hover:bg-white/20 active:bg-white/30 gentle-animation cursor-pointer"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="flex flex-col px-6 pb-6 h-full">
                        {/* Mobile Navigation Links */}
                        <div className="flex flex-col space-y-4 text-white">
                            {navbarItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.url} // Our updated AnimeNavBar logic relies on clicks, here we use simple links but should probably match behavior
                                    // Actually regular a tags work fine because the browser handles the navigation, 
                                    // and if it is hash on home we might need scroll.
                                    // But for simplicity in mobile menu, href is usually plenty.
                                    // Let's ensure smooth scroll if strictly on homepage and hash link.
                                    onClick={(e) => {
                                        // Similar logic to AnimeNavBar but simpler for mobile menu
                                        if ((location.pathname === '/' || location.pathname === '/index.html') && item.url.startsWith('/#')) {
                                            // Extract hash
                                            const targetId = item.url.split('#')[1]
                                            const targetEl = document.getElementById(targetId || 'hero')
                                            if (targetEl) {
                                                e.preventDefault()
                                                targetEl.scrollIntoView({ behavior: 'smooth' })
                                            }
                                        }
                                        setIsMobileMenuOpen(false)
                                    }}
                                    className="mobile-menu-link px-4 py-3 hover:text-white/80 hover:bg-white/10 rounded-lg gentle-animation font-medium text-lg active:bg-white/20"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>

                        {/* Mobile CTA Button */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleBookCallClick}
                            className="bg-red-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-red-700 active:bg-red-800 gentle-animation mt-8 cursor-pointer"
                        >
                            Book a Call
                        </motion.button>
                    </div>
                </div>
            </motion.div>
        </>
    )
}
