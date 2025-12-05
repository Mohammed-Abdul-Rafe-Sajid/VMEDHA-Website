import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Sparkles,
  Zap,
  Users,
  Target,
  ArrowRight,
  Code,
  Lightbulb,
  Globe,
} from 'lucide-react'
import { MotionWrapper, FadeIn, SlideIn } from '../components/MotionWrapper'
import { SectionTitle, GradientButton, Card } from '../components/Card'

const Home: React.FC = () => {
  const icons = [
    { Icon: Code, x: '10%', y: '20%', delay: 0 },
    { Icon: Lightbulb, x: '80%', y: '30%', delay: 0.2 },
    { Icon: Globe, x: '15%', y: '70%', delay: 0.4 },
    { Icon: Sparkles, x: '75%', y: '60%', delay: 0.6 },
  ]

  const features = [
    {
      icon: Zap,
      title: 'Innovation First',
      description:
        'Turning bold ideas into practical technology through hands-on projects, research, and experimentation.',
    },
    {
      icon: Users,
      title: 'Strong Community',
      description:
        'A collaborative ecosystem where students learn, mentor, and build impactful solutions together.',
    },
    {
      icon: Target,
      title: 'Purpose-Driven Impact',
      description:
        'Aligning technology with societal needs to create solutions that genuinely uplift communities.',
    },
  ]

  return (
    <div className="min-h-screen overflow-hidden">
      {/* =========================== */}
      {/* HERO SECTION */}
      {/* =========================== */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">

        {/* Background animations (unchanged) */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-royal opacity-10" />
          <svg className="absolute w-full h-full" viewBox="0 0 1200 600">
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4a74ff" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#2e5aff" stopOpacity="0.05" />
              </linearGradient>
            </defs>
            <circle cx="300" cy="300" r="400" fill="url(#grad1)" />
            <circle cx="900" cy="400" r="350" fill="url(#grad1)" />
          </svg>
        </div>

        {/* Floating background icons */}
        {icons.map((item, idx) => (
          <motion.div
            key={idx}
            className="absolute text-royal-400 opacity-20"
            style={{ left: item.x, top: item.y }}
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4 + item.delay, repeat: Infinity }}
          >
            <item.Icon className="w-16 h-16 md:w-24 md:h-24" />
          </motion.div>
        ))}

        {/* =========================== */}
        {/* EPIC COIN-DROP LOGO ANIMATION */}
        {/* =========================== */}
      {/* EPIC COIN-DROP LOGO ANIMATION (IMPROVED + BIGGER + NO FLOATING) */}
<motion.img
  src="/logo.jpg"
  alt="V Medha Logo"
  className="
    hidden md:block
    absolute left-[6%] top-[28%]
    w-40 h-40 rounded-full shadow-2xl ring-4 ring-royal-300
    bg-white object-cover
  "
  initial={{ y: -400, scale: 0.8, rotate: -25, opacity: 0 }}
  animate={{
    y: [ -400, 20, -10, 0 ],
    scale: [0.8, 1.05, 0.95, 1],
    rotate: [ -25, 0, 4, 0 ],
    opacity: 1,
  }}
  transition={{
    duration: 1.6,
    ease: "easeOut",
  }}
/>


        {/* Floating idle animation after drop */}
        {/* EPIC COIN-DROP LOGO ANIMATION (IMPROVED + BIGGER + NO FLOATING) */}
<motion.img
  src="/logo.jpg"
  alt="V Medha Logo"
  className="
    hidden md:block
    absolute left-[6%] top-[28%]
    w-40 h-40 rounded-full shadow-2xl ring-4 ring-royal-300
    bg-white object-cover
  "
  initial={{ y: -400, scale: 0.8, rotate: -25, opacity: 0 }}
  animate={{
    y: [ -400, 20, -10, 0 ],
    scale: [0.8, 1.05, 0.95, 1],
    rotate: [ -25, 0, 4, 0 ],
    opacity: 1,
  }}
  transition={{
    duration: 1.6,
    ease: "easeOut",
  }}
/>


        {/* HERO CONTENT */}
        <MotionWrapper className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            {/* <div className="inline-block px-4 py-2 rounded-full bg-royal-100/50 border border-royal-300 backdrop-blur-sm mb-6"> */}
              {/* <span className="text-royal-900 font-semibold text-sm"> Welcome to V Medha</span> */}
            {/* </div> */}


          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-black mb-6 gradient-text leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Innovating for <br />
            <span className="animate-glow">Social Good</span>
            <br /> Through Technology
          </motion.h1>

          <motion.p
            className="text-xl text-royal-700 mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            V Medha Tech for Social Good — CBIT's technical community dedicated to building meaningful, scalable, and ethically designed solutions for society.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link to="/events">
              <GradientButton size="lg" variant="primary" className="flex items-center gap-2">
                Explore Events <ArrowRight className="w-5 h-5" />
              </GradientButton>
            </Link>
            <Link to="/about">
              <GradientButton size="lg" variant="secondary">
                Learn More
              </GradientButton>
            </Link>
          </motion.div>
        </MotionWrapper>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-royal-400 rounded-full flex items-center justify-center">
            <div className="w-1 h-2 bg-royal-400 rounded-full animate-pulse" />
          </div>
        </motion.div>
      </section>

      {/* =========================== */}
      {/* WHY V MEDHA */}
      {/* =========================== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Why V Medha?"
            subtitle="Driving innovation, collaboration, and impact at CBIT"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {features.map((feature, idx) => (
              <SlideIn
                key={idx}
                direction={idx === 0 ? 'left' : idx === 1 ? 'up' : 'right'}
                delay={idx * 0.2}
              >
                <Card>
                  <motion.div
                    className="w-12 h-12 rounded-lg bg-gradient-royal flex items-center justify-center mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-royal-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-royal-700">{feature.description}</p>
                </Card>
              </SlideIn>
            ))}
          </div>
        </div>
      </section>

      {/* =========================== */}
      {/* MISSION & VISION */}
      {/* =========================== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* Mission */}
            <FadeIn delay={0}>
              <div className="rounded-2xl p-8 bg-gradient-to-br from-royal-700 to-royal-900 shadow-xl">
                <motion.div
                  className="w-14 h-14 rounded-xl bg-gradient-accent flex items-center justify-center mb-4 shadow-lg"
                  whileHover={{ scale: 1.1 }}
                >
                  <Target className="w-7 h-7 text-white" />
                </motion.div>

                <h3 className="text-3xl font-bold text-white mb-4">Our Mission</h3>

                <p className="text-white/90 leading-relaxed">
                  To empower students with hands-on technical exposure, research orientation, and leadership
                  opportunities — enabling them to build solutions that genuinely uplift society.
                </p>
              </div>
            </FadeIn>

            {/* Vision */}
            <FadeIn delay={0.2}>
              <div className="rounded-2xl p-8 bg-gradient-to-br from-royal-600 to-royal-800 shadow-xl">
                <motion.div
                  className="w-14 h-14 rounded-xl bg-orange-500 flex items-center justify-center mb-4 shadow-lg"
                  whileHover={{ scale: 1.1 }}
                >
                  <Sparkles className="w-7 h-7 text-white" />
                </motion.div>

                <h3 className="text-3xl font-bold text-white mb-4">Our Vision</h3>

                <p className="text-white/90 leading-relaxed">
                  To become CBIT’s most impactful technical community — known not just for innovation,
                  but for empathy, collaboration, and real-world transformation.
                </p>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* =========================== */}
      {/* CTA SECTION */}
      {/* =========================== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-royal opacity-5" />

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-royal-900 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Be Part of Our Journey in Innovation
          </motion.h2>

          <motion.p
            className="text-lg text-royal-700 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Connect with us, stay updated, and explore opportunities to build meaningful impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link to="/contact">
              <GradientButton size="lg" variant="primary" className="inline-flex items-center gap-2">
                Contact Us <ArrowRight className="w-5 h-5" />
              </GradientButton>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
