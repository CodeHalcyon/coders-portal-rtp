import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const featuredEvents = [
  {
    name: 'AI & Machine Learning Workshop',
    date: '2024-07-20',
    venue: 'IIIT Hyderabad',
    fee: '200',
    description: 'A hands-on workshop on Artificial Intelligence and Machine Learning.',
  },
  {
    name: 'Blockchain Summit',
    date: '2024-09-12',
    venue: 'Hyderabad Marriott Hotel',
    fee: '600',
    description: 'Discussing the latest trends and applications of blockchain technology.',
  },
  {
    name: 'Data Science Conference',
    date: '2024-07-30',
    venue: 'Taj Krishna, Hyderabad',
    fee: '500',
    description: 'Advancements in data science and analytics.',
  },
]

const features = [
  {
    title: 'Discover Events',
    description: 'Browse and register for the latest tech conferences, workshops, and expos in your area.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Read Blogs',
    description: 'Stay updated with the latest in AI, web development, and emerging technologies.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: 'Join Communities',
    description: 'Connect with like-minded developers, share knowledge, and grow together.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
]

const stats = [
  { value: '500+', label: 'Active Members' },
  { value: '50+', label: 'Events Hosted' },
  { value: '200+', label: 'Blog Posts' },
  { value: '10+', label: 'Communities' },
]

const Home = () => {
  const heroRef = useRef(null)
  const heroTitleRef = useRef(null)
  const heroSubtitleRef = useRef(null)
  const heroBtnsRef = useRef(null)
  const statsRef = useRef(null)
  const featuresRef = useRef(null)
  const eventsRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      heroTl
        .fromTo(heroTitleRef.current, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1 })
        .fromTo(heroSubtitleRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.5')
        .fromTo(heroBtnsRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, '-=0.4')

      if (statsRef.current?.children) {
        gsap.fromTo(
          statsRef.current.children,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: { trigger: statsRef.current, start: 'top 85%' },
          }
        )
      }

      if (featuresRef.current?.children) {
        gsap.fromTo(
          featuresRef.current.children,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.2,
            ease: 'power2.out',
            scrollTrigger: { trigger: featuresRef.current, start: 'top 80%' },
          }
        )
      }

      if (eventsRef.current?.children) {
        gsap.fromTo(
          eventsRef.current.children,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.2,
            ease: 'power2.out',
            scrollTrigger: { trigger: eventsRef.current, start: 'top 80%' },
          }
        )
      }

      gsap.fromTo(
        ctaRef.current,
        { scale: 0.95, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: { trigger: ctaRef.current, start: 'top 85%' },
        }
      )
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={heroRef} className="min-h-screen bg-light text-dark">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-28 md:py-36 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-b from-skin/10 to-white pointer-events-none" />
        <h1
          ref={heroTitleRef}
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-4xl opacity-0 text-dark"
        >
          Welcome to <span className="text-skin">Coders Portal</span>
        </h1>
        <p
          ref={heroSubtitleRef}
          className="mt-6 text-lg md:text-xl text-primary max-w-2xl opacity-0"
        >
          Your one-stop platform to discover tech events, read the latest blogs, and connect with developer communities.
        </p>
        <div ref={heroBtnsRef} className="mt-10 flex flex-wrap gap-4 justify-center opacity-0">
          <Link
            to="/events"
            className="px-8 py-3 bg-skin text-dark font-semibold rounded-lg hover:opacity-90 transition-opacity duration-300 shadow-sm"
          >
            Explore Events
          </Link>
          <Link
            to="/blogs"
            className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors duration-300"
          >
            Read Blogs
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-gray-200 bg-white">
        <div ref={statsRef} className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i}>
              <p className="text-3xl md:text-4xl font-bold text-skin">{stat.value}</p>
              <p className="mt-2 text-sm text-primary uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-dark">
          Everything You Need in <span className="text-skin">One Place</span>
        </h2>
        <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-skin hover:shadow-lg transition-all duration-300"
            >
              <div className="text-skin mb-5">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-dark">{feature.title}</h3>
              <p className="text-primary leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="bg-white border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="flex items-center justify-between mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-dark">
              Upcoming <span className="text-skin">Events</span>
            </h2>
            <Link
              to="/events"
              className="text-skin hover:text-dark font-semibold transition-colors duration-300"
            >
              View All &rarr;
            </Link>
          </div>
          <div ref={eventsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredEvents.map((event, i) => (
              <div
                key={i}
                className="bg-light border border-gray-200 rounded-2xl p-6 flex flex-col hover:border-skin hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-2 text-sm text-skin font-medium mb-3">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {event.date}
                </div>
                <h3 className="text-lg font-bold mb-2 text-dark">{event.name}</h3>
                <p className="text-primary text-sm mb-4 flex-1">{event.description}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">{event.venue}</span>
                  <span className="text-skin font-bold">&#8377;{event.fee}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community / Join Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div ref={ctaRef} className="relative bg-gradient-to-r from-skin/20 to-skin/5 border border-skin/30 rounded-3xl p-10 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
            Ready to Join the <span className="text-skin">Community</span>?
          </h2>
          <p className="text-primary max-w-xl mx-auto mb-8">
            Connect with hundreds of developers, attend exclusive events, and stay ahead with the latest tech insights.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/communities"
              className="px-8 py-3 bg-skin text-dark font-semibold rounded-lg hover:opacity-90 transition-opacity duration-300 shadow-sm"
            >
              Join a Community
            </Link>
            <Link
              to="/authorize"
              className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors duration-300"
            >
              Sign Up Free
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
