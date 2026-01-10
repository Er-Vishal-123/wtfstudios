'use client'

import { useState } from 'react'
import { Play } from 'lucide-react'

interface VideoProject {
  id: string
  youtubeId: string
  title: string
  description: string
  category: string
}

const videoProjects: VideoProject[] = [
  {
    id: '1',
    youtubeId: 'u64uw6ad-ss',
    title: 'Made this AI Ad in 30 Min — Zepto Cafe Ad',
    description: 'This ad reimagines Zepto Café through a fast-paced, visually rich storytelling lens — where speed meets satisfaction and cravings don\'t wait. This campaign uses AI-generated visuals and hyper-real transitions to showcase how modern consumers experience food today.',
    category: 'AI Advertising - Brand Film',
  },
  {
    id: '2',
    youtubeId: 'HR3fV3ccr-c',
    title: 'Fata Poster, Nikli Maid — Snabbit Road Banner Ad',
    description: 'In this AI-powered cinematic ad for snabbit a woman From poster-to-real-world transitions to fast-paced kitchen sequences, this ad blends AI video generation + creative direction to make speed feel visual, fun, and memorable.',
    category: 'Creative Ads',
  },
  {
    id: '3',
    youtubeId: '0c2ojiW6kgs',
    title: 'Kuch Meetha Ho Jaaye… with AI — Cadbury Ad',
    description: 'Using AI video generation, cinematic camera movements, and soft transitions, this ad explores how technology can recreate emotions, not just visuals. Every frame is designed to feel comforting, nostalgic, and joyful—just like a Cadbury chocolate.',
    category: 'Brand Storytelling',
  },
  {
    id: '4',
    youtubeId: 'KMvX1xQWLnQ',
    title: 'AI-Generated Sports Ad for COSCO Ball',
    description: 'Using AI video generation, cinematic transitions, and dynamic camera movement, this ad reimagines how sports brands can tell stories in a bold, modern way. Every kick, every bounce, every moment is designed to feel powerful and immersive.',
    category: 'Sports AI Ad',
  },
]

export function Portfolio() {
  const [featuredVideo, setFeaturedVideo] = useState(videoProjects[0])
  const secondaryVideos = videoProjects.filter(v => v.id !== featuredVideo.id)

  return (
    <section id="portfolio" className="relative py-32 bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-accent-emerald rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-muted-foreground">
              Featured Work
            </span>
            <div className="w-3 h-3 bg-accent-blue rounded-full animate-pulse" />
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-8">
            <span className="block mb-2">AI Creative Productions</span>
          </h2>

          <p className="text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Explore our portfolio of Cinematic AI Storytelling and AI Creative Productions.
          </p>
        </div>

        {/* Featured Video */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="relative bg-card clean-border rounded-3xl overflow-hidden elevated-shadow">
            {/* Video Embed */}
            <div className="relative">
              <div className="aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${featuredVideo.youtubeId}?rel=0&showinfo=0&modestbranding=1`}
                  title={featuredVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full rounded-t-3xl"
                />
              </div>

              {/* Floating Status Badge */}
              <div className="absolute top-6 right-6">
                <span className="glass-effect rounded-xl px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
                  Featured Project
                </span>
              </div>
            </div>

            {/* Project Details */}
            <div className="p-8 lg:p-12">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-accent-purple/10 text-accent-purple px-3 py-1 rounded-full text-sm font-medium">
                    {featuredVideo.category}
                  </span>
                </div>

                <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  {featuredVideo.title}
                </h3>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  {featuredVideo.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Video Thumbnails Grid */}
        <div className="max-w-6xl mx-auto">
          <h4 className="text-xl font-semibold text-foreground mb-6">More Projects</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {secondaryVideos.map((video) => (
              <button
                key={video.id}
                onClick={() => setFeaturedVideo(video)}
                className="group text-left bg-card clean-border rounded-2xl overflow-hidden elevated-shadow transition-all duration-300 hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-accent-purple/50"
              >
                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`
                    }}
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center">
                      <Play className="w-6 h-6 text-foreground fill-current ml-1" />
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-accent-purple/10 text-accent-purple px-2 py-0.5 rounded-full text-xs font-medium">
                      {video.category}
                    </span>
                  </div>
                  <h5 className="font-semibold text-foreground mb-1 group-hover:text-accent-purple transition-colors">
                    {video.title}
                  </h5>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {video.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
