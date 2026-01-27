'use client'

import { motion } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import { SiteHeader } from './SiteHeader'

export function Hero() {
  const [isMuted, setIsMuted] = useState(true)
  const [isVideoReady, setIsVideoReady] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  const toggleMute = () => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      const player = iframeRef.current.contentWindow

      if (isMuted) {
        // Unmute: set volume to 100% and unmute
        player.postMessage(JSON.stringify({ method: 'setVolume', value: 1 }), '*')
        player.postMessage(JSON.stringify({ method: 'setMuted', value: false }), '*')
        console.log('Unmuting video')
      } else {
        // Mute: set volume to 0 and mute
        player.postMessage(JSON.stringify({ method: 'setVolume', value: 0 }), '*')
        player.postMessage(JSON.stringify({ method: 'setMuted', value: true }), '*')
        console.log('Muting video')
      }
      setIsMuted(!isMuted)
    } else {
      console.error('Iframe or contentWindow not available')
    }
  }

  // Handle Vimeo Messages to detect playback start
  useEffect(() => {
    const handleVimeoMessage = (event: MessageEvent) => {
      if (!event.origin.includes('vimeo')) return

      try {
        const data = JSON.parse(event.data)

        // When video is ready, we ask it to play (just in case)
        if (data.event === 'ready') {
          if (iframeRef.current?.contentWindow) {
            iframeRef.current.contentWindow.postMessage(JSON.stringify({ method: 'addEventListener', value: 'play' }), '*')
            iframeRef.current.contentWindow.postMessage(JSON.stringify({ method: 'addEventListener', value: 'timeupdate' }), '*')
          }
        }

        // When video actually starts playing or progressing
        if (data.event === 'play' || data.event === 'timeupdate') {
          if (!isVideoReady) {
            setIsVideoReady(true)
          }
        }
      } catch (e) {
        // ignore non-JSON messages
      }
    }

    window.addEventListener('message', handleVimeoMessage)
    return () => window.removeEventListener('message', handleVimeoMessage)
  }, [isVideoReady])





  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* Instant Local Video (Motion Poster) - Z-20 (On Top) - Fades OUT when Vimeo is ready */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className={`absolute inset-0 w-full h-full object-cover z-20 transition-opacity duration-1000 ease-out pointer-events-none ${isVideoReady ? 'opacity-0' : 'opacity-100'}`}
        style={{
          transform: 'scale(1.1)',
          transformOrigin: 'center center'
        }}
      >
        <source src="/website-intro-video.mp4" type="video/mp4" />
      </video>

      {/* MASSIVE VIDEO - Z-10 (Behind Poster) - Always Visible (but covered) */}
      <iframe
        ref={iframeRef}
        src="https://player.vimeo.com/video/1151965251?api=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1&playsinline=1&autopause=0&dnt=1"
        className="absolute inset-0 w-full h-full z-10"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        loading="eager"
        style={{
          pointerEvents: 'none',
          width: '100%',
          height: '100%',
          transform: 'scale(1.5)',
          transformOrigin: 'center center'
        }}
      ></iframe>

      <SiteHeader isMuted={isMuted} toggleMute={toggleMute} showSoundToggle={true} />

      {/* Big Studio Title - Lower Left */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-12 left-6 sm:left-8 lg:left-12 z-40"
      >
        <div className="max-w-2xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight text-[#CCFF00] drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
            <span className="block">WTF STUDIOS</span>
            <span className="block text-white">AI POWERED</span>
            <span className="block text-white">CREATIVE & MEDIA</span>
            <span className="block">AGENCY</span>
          </h1>
        </div>
      </motion.div>


    </div>
  )
}