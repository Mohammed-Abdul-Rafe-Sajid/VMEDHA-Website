import React from 'react'
import { motion } from 'framer-motion'
import { Trophy, Users, Zap, Heart } from 'lucide-react'
import { Rocket} from "lucide-react";
import {  Globe} from "lucide-react";
import { useEffect } from "react";
import { useInView, useAnimation } from "framer-motion";
import { useState, useRef } from "react";

import { FadeIn, SlideIn } from '../components/MotionWrapper'
import { SectionTitle} from '../components/Card'
import { Counter } from '../components/Counter';
const About: React.FC = () => {
  // const timeline = [
  //   { year: 'July 2025', title: 'Foundation', description: 'Core Committee Formed' },
  //   { year: '  Aug 2025 ', title: 'Inaugration', description: 'V Medha was established as a student-led initiative' },
  //   { year: 'Sept 2025', title: '1st EB', description: '18 Executive Board members are now part of team' },
  // ]
const controls = useAnimation();
  const values = [
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Pushing boundaries and embracing cutting-edge technology'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building a collaborative and inclusive ecosystem'
    },
    {
      icon: Heart,
      title: 'Social Impact',
      description: 'Creating technology solutions that serve humanity'
    },
    {
      icon: Trophy,
      title: 'Excellence',
      description: 'Striving for the highest standards in everything we do'
    },
  ]
interface StatItem {
  number: number;
  label: string;
  delay: number;
}

const stats: StatItem[] = [
  { number: 25, label: 'Active Members', delay: 0 },
  { number: 3, label: 'Workshops Done', delay: 0.1 },
  { number: 2, label: 'Expert Talks', delay: 0.2 },
  { number: 2, label: 'Outreach Events', delay: 0.3 },
];

const leaders = [
  {
    name: "Mohammed Abdul Rafe Sajid",
    role: "President",
    image: "/rafe.jpg",
    linkedin: "https://linkedin.com/in/member1"
  },
  {
    name: "Shashidhar Nagunuri",
    role: "Vice President",
    image: "/shashi.jpg",
    linkedin: "https://www.linkedin.com/in/shashidhar-nagunuri-23845b324/"
  },
  {
    name: "Sai Prakash Avula",
    role: "General Secretary",
    image: "/sai prakash.jpg",
    linkedin: "https://www.linkedin.com/in/saiprakash001/"
  },
  {
    name: "Hajra Saba",
    role: "Joint Secretary",
    image: "/hajra.jpg",
    linkedin: "https://www.linkedin.com/in/hajra-saba-84343533a/"
  },
  {
    name: "Abdul Raheem",
    role: "Chief Advisor",
    image: "/raheem.jpg",
    linkedin: "https://www.linkedin.com/in/abdul-raheem-6a6b6c6/"
  },
  {
    name: "Sai Manoj Kurra",
    role: "Tech Head",
    image: "/manoj.jpg",
    linkedin: "https://www.linkedin.com/in/sai-manoj-kura-021928295/"
  },
  {
    name: "Keerthi kavali",
    role: "Design Head",
    image: "/keerthi.jpg",
    linkedin: "https://www.linkedin.com/in/keerthi-kavali-848ab622a/"
  },
  {
    name: "Vaishnavi",
    role: "Events and PR head",
    image: "/vaishnavi.jpg",
    linkedin: "https://linkedin.com/in/"
  },
];
// in-view detection: start auto-scroll only when viewport is visible
const inViewRef = useRef<HTMLDivElement | null>(null);
const isInView = useInView(inViewRef, { amount: 0.3 }); // 30% visible
// When section becomes visible, start animation
useEffect(() => {
  if (isInView) {
    controls.start({
      x: ["0%", "-50%", "0%"],
      transition: {
        duration: 20,
        ease: "linear",
        repeat: Infinity,
      },
    });
  } else {
    controls.stop();
  }
}, [isInView, controls]);
// Refs & state for the carousel control
const viewportRef = useRef<HTMLDivElement | null>(null);
const trackRef = useRef<HTMLDivElement | null>(null);



// runtime controls
const [paused, setPaused] = useState(false);          // paused by hover
const [userInteracting, setUserInteracting] = useState(false); // user scroll/touch
const speed = 1.8; // pixels per frame — increase to go faster (tweakable)
const [direction, setDirection] = useState<1 | -1>(-1); // -1: move left (scrollRight increases), 1: move right

// Place the "in-view" ref on the viewport container so useInView works:
useEffect(() => {
  // attach inView ref to viewport element
  if (viewportRef.current) inViewRef.current = viewportRef.current;
}, []);

// Auto-scroll loop using requestAnimationFrame
useEffect(() => {
  let rafId: number | null = null;
  let lastTimestamp = 0;

  function step(timestamp: number) {
    if (!viewportRef.current || !trackRef.current) {
      rafId = requestAnimationFrame(step);
      return;
    }

    // if not in view, stop animating
    if (!isInView) {
      lastTimestamp = timestamp;
      rafId = requestAnimationFrame(step);
      return;
    }

    // pause when user interacting or hovered pause
    if (paused || userInteracting) {
      lastTimestamp = timestamp;
      rafId = requestAnimationFrame(step);
      return;
    }

    // delta-based movement for smooth speed
    const elapsed = lastTimestamp ? (timestamp - lastTimestamp) : 16;
    lastTimestamp = timestamp;
    const delta = (speed * (elapsed / 16)) * direction; // px per frame-ish

    const vp = viewportRef.current!;
    const track = trackRef.current!;

    // compute bounds
    const maxScrollLeft = track.scrollWidth - vp.clientWidth;
    let newScrollLeft = vp.scrollLeft - delta; // subtract because moving left visually means increasing scrollLeft?
    // We choose sign so direction -1 moves leftwards: let's adjust to intuitive behavior:
    // when direction === -1, we want content to move left -> scrollLeft increases
    // So correct calculation:
    if (direction === -1) {
      newScrollLeft = vp.scrollLeft + Math.abs(delta);
    } else {
      newScrollLeft = vp.scrollLeft - Math.abs(delta);
    }

    // clamp and ping-pong
    if (newScrollLeft >= maxScrollLeft) {
      newScrollLeft = maxScrollLeft;
      setDirection(1); // reverse
    } else if (newScrollLeft <= 0) {
      newScrollLeft = 0;
      setDirection(-1); // reverse
    }

    vp.scrollLeft = newScrollLeft;

    rafId = requestAnimationFrame(step);
  }

  rafId = requestAnimationFrame(step);

  return () => {
    if (rafId) cancelAnimationFrame(rafId);
  };
}, [isInView, paused, userInteracting, direction]);

  return (
    <div className="min-h-screen pt-20">
      
      {/* Hero Section */}
      <section
        className="relative px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: "url('/about-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-royal-50/85 to-white/85 pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <SectionTitle
            title="About V Medha"
            subtitle="Empowering society through technology and social responsibility"
          />
        </div>
      </section>


      {/* Introduction */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="glass rounded-2xl p-8 md:p-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-royal-900 mb-6">Who We Are</h2>
            <p className="text-lg text-royal-700 leading-relaxed mb-4">
              VMedha is a student-led technical club at Chaitanya Bharathi Institute of Technology, Hyderabad,
              founded on the belief that technology can be a force for social good. With the motto “Tech for Social
              Good,” we aim to foster innovation, collaboration, and social responsibility through purposeful
              initiatives.
              At VMedha, we explore the intersection of technology and community. While we host hackathons,
              workshops, and bootcamps, our work goes beyond the usual—we take tech to the grassroots. From
              building impactful projects to conducting outreach in under-resourced schools, we strive to empower
              others with the tools of the future.

            </p>
            <p className="text-lg text-royal-700 leading-relaxed">
              Born from a shared vision among like-minded students, VMedha encourages its members to build
              with purpose—whether it's creating socially-relevant apps, applying AI to local challenges, or helping
              young minds discover the power of the internet.
              We are developers, designers, thinkers, and changemakers—and we’re just getting started.
            </p>
          </motion.div>
        </div>
      </section>

{/* Mission & Vision Section */}
{/* Mission & Vision – Split Modern Layout */}
<section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
  <div className="max-w-7xl mx-auto space-y-32">

    {/* Mission */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      
      {/* Animated Shape */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative w-full h-80 flex items-center justify-center"
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="absolute w-64 h-64 rounded-3xl bg-gradient-to-br from-royal-400 to-royal-600 opacity-80 blur-xl"
        />

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="relative w-44 h-44 rounded-2xl bg-white shadow-xl flex items-center justify-center"
        >
<Rocket className="w-14 h-14 text-royal-700" />
        </motion.div>
      </motion.div>

      {/* Text */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-royal-900 mb-4">Our Mission</h2>
        <p className="text-lg text-royal-700 leading-relaxed">
          To empower students to build impactful technology by fostering creativity, 
          collaboration, and a deep sense of social responsibility.
        </p>
      </motion.div>
    </div>

    {/* Vision */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

      {/* Text first this time */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-royal-900 mb-4">Our Vision</h2>
        <p className="text-lg text-royal-700 leading-relaxed">
          To become a leading innovation community where students leverage emerging technologies 
          to create meaningful, positive change for society.
        </p>
      </motion.div>

      {/* Animated Shape */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative w-full h-80 flex items-center justify-center"
      >
        <motion.div
          animate={{ rotate: [0, -10, 10, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="absolute w-64 h-64 rounded-full bg-gradient-to-br from-royal-500 to-royal-700 opacity-70 blur-xl"
        />

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="relative w-44 h-44 rounded-full bg-white shadow-xl flex items-center justify-center"
        >
<Globe className="w-14 h-14 text-royal-700" />
        </motion.div>
      </motion.div>

    </div>

  </div>
</section>




      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Our Core Values"
            subtitle="The principles that guide everything we do"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
            {values.map((value, idx) => (
              <SlideIn
                key={idx}
                direction={idx % 2 === 0 ? 'left' : 'right'}
                delay={idx * 0.15}
              >
                <motion.div
                  whileHover={{
                    y: -8,
                    scale: 1.03,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="
          relative p-8 rounded-2xl bg-white backdrop-blur-sm
          border border-white/40 shadow-md
          hover:border-royal-300 hover:shadow-royal-200/50
          group 
        "
                >
                  {/* animated gradient border */}
                  <div className="
          absolute inset-0 rounded-2xl
          bg-gradient-to-r from-royal-300/0 via-royal-400/20 to-royal-300/0
          opacity-0 group-hover:opacity-100
          transition-opacity duration-500 pointer-events-none
        " />

                  <motion.div
                    className="w-14 h-14 rounded-xl bg-gradient-royal flex items-center justify-center mb-5 shadow-md"
                    whileHover={{ scale: 1.15, rotate: 6 }}
                  >
                    <value.icon className="w-7 h-7 text-white" />
                  </motion.div>

                  <h3 className="text-xl font-bold text-royal-900 mb-3">{value.title}</h3>

                  <p className="text-royal-700 leading-relaxed">{value.description}</p>
                </motion.div>
              </SlideIn>
            ))}
          </div>

        </div>
      </section>

      {/* Timeline Section */}
      {/* <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            title="Our Journey"
            subtitle="From humble beginnings to community leadership"
          />

          <div className="mt-16 space-y-8">
            {timeline.map((item, idx) => (
              <motion.div
                key={idx}
                className="glass rounded-2xl p-8 flex items-center gap-6"
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="min-w-24 h-24 rounded-lg bg-gradient-royal flex items-center justify-center text-white"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-3xl font-bold">{item.year}</span>
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-royal-900 mb-2">{item.title}</h3>
                  <p className="text-royal-700">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Statistics Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-royal-800 to-royal-900">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-white text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            By The Numbers
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <FadeIn key={idx} delay={stat.delay}>
                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.p
                    className="text-4xl md:text-5xl font-bold text-white mb-2"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: stat.delay }}
                    viewport={{ once: true }}
                  >
                   <Counter targetNumber={stat.number} />

                  </motion.p>
                  <p className="text-white/80">{stat.label}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>




      {/* Team Section */}
{/* Team Section */}
<section className="py-20 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    <SectionTitle
      title="VMEDHA TEAM"
      subtitle="THE CORE COMMITTEE"
    />

    {/* --- Scrollable viewport that we control via scrollLeft --- */}
    <div
      ref={viewportRef}
      id="leaders-viewport"
      className="relative mt-16 overflow-x-auto overflow-y-hidden no-scrollbar touch-pan-x"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setUserInteracting(true)}
      onTouchEnd={() => setUserInteracting(false)}
      onPointerDown={() => setUserInteracting(true)}
      onPointerUp={() => setUserInteracting(false)}
      style={{ WebkitOverflowScrolling: "touch" }}
    >
      {/* The inner flex container — NON-animated transform (pure layout) */}
      <div className="flex gap-12 px-6 py-4" ref={trackRef}>
        {leaders.map((leader, idx) => (
          <motion.div
            key={idx}
            className="group relative w-64 h-80 flex-shrink-0 rounded-2xl overflow-hidden shadow-xl cursor-pointer"
            whileHover={{ scale: 1.18, zIndex: 50 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={() => window.open(leader.linkedin, "_blank")}
          >
            <img
              src={leader.image}
              alt={leader.name}
              className="w-full h-full object-cover"
            />

            {/* Always visible name + role */}
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-black/40 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-white">{leader.name}</h3>
              <p className="text-white/80 text-sm">{leader.role}</p>
            </div>

            {/* Hover CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white"
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(leader.linkedin, "_blank");
                }}
                className="bg-white text-black px-4 py-2 rounded-lg shadow-md font-semibold"
              >
                View LinkedIn →
              </button>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</section>



{/* Executive Board Section */}
<section className="py-24 px-4 sm:px-6 lg:px-8 bg-white/60">
  <div className="max-w-7xl mx-auto">
    <SectionTitle 
      title="Executive Board"
      subtitle="The teams that keep V Medha running strong"
    />

    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">

      {/* Tech Team */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="p-8 rounded-2xl bg-white shadow-md border border-white/40 hover:border-royal-300 hover:shadow-xl transition-all"
      >
        <h3 className="text-2xl font-bold text-royal-900 mb-4 text-center">
          Tech Team
        </h3>

        <ul className="space-y-3 text-center">
          {[
          "Mohammed Abdul Vasil",
            "Anurag Kanukuntla",
            "Swathi Chippa",
            "Golla Narendar",
            "Bandirala Lohitha",
            "Marru Mahathio Rao",
            "Damodara Madhulika",
          ].map((name, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="text-royal-700 font-medium"
            >
              {name}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Events & PR Team */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="p-8 rounded-2xl bg-white shadow-md border border-white/40 hover:border-royal-300 hover:shadow-xl transition-all"
      >
        <h3 className="text-2xl font-bold text-royal-900 mb-4 text-center">
          Events & PR Team
        </h3>

        <ul className="space-y-3 text-center">
          {[
            "Sahas Reddy Billa",
            "Harshita Reddy",
            "Syed Shaz Ahmed",
            "Mohini Jangala",
            "Abdul Quader",
            "Numan Ghori",
          ].map((name, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="text-royal-700 font-medium"
            >
              {name}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Design Team */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="p-8 rounded-2xl bg-white shadow-md border border-white/40 hover:border-royal-300 hover:shadow-xl transition-all"
      >
        <h3 className="text-2xl font-bold text-royal-900 mb-4 text-center">
          Design Team
        </h3>

        <ul className="space-y-3 text-center">
          {[
            "Yashas Muggu",
            "Sameer Shaik",
            "Srivalli Rapaka",
            "Mubasher Shahwez",
            
          ].map((name, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="text-royal-700 font-medium"
            >
              {name}
            </motion.li>
          ))}
        </ul>
      </motion.div>

    </div>
  </div>
</section>





{/* Faculty Coordinator Section */}
{/* Faculty Coordinator Section */}
<section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
  <div className="max-w-6xl mx-auto">

    {/* LEFT-ALIGNED TITLE */}
    <div className="text-left mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-royal-900">
        Our Faculty Coordinator
      </h2>
      <p className="text-royal-700 mt-2 text-lg">
        Guiding, supporting, and inspiring our journey
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

      {/* LEFT — IMAGE WITH BEAUTIFUL EFFECTS */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative w-full h-80 md:h-96 rounded-3xl overflow-hidden shadow-lg"
      >
        {/* Floating glow behind image */}
        <motion.div
          animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute inset-0 bg-gradient-to-br from-royal-400/30 to-royal-600/30 blur-2xl"
        />

        {/* IMAGE */}
        <motion.img
          src="/rk sir.jpg"
          alt="Faculty Coordinator"
          className="relative w-full h-full object-cover rounded-3xl"
          animate={{ scale: [1, 1, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Soft gradient overlay (removes black edges look) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"/>
      </motion.div>

      {/* RIGHT — DETAILS */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl font-bold text-royal-900 mb-3">
          Dr. Ramakrishna Kolikipogu
        </h3>

        <p className="text-royal-700 text-lg mb-6">
           Professor, Department of Information Technology, CBIT
        </p>

        {/* QUOTE */}
        <p className="text-royal-900/90 italic text-xl leading-relaxed">
          “Technology becomes meaningful only when it uplifts people.  
          VMedha embodies this spirit — innovation with purpose.”
        </p>
      </motion.div>

    </div>
  </div>
</section>



    </div>
  )
}

export default About
