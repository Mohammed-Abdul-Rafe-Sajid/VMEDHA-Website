import React from "react";
import { motion } from "framer-motion";
import { SectionTitle } from "../../components/Card";
import { Calendar, Clock, MapPin } from "lucide-react";

const Event3: React.FC = () => {
  return (
    <div className="pt-20 bg-gradient-to-b from-royal-50 via-white to-royal-100">

      {/* -------------------------------------------------- */}
      {/* HERO HEADING + POSTER */}
      {/* -------------------------------------------------- */}
      <section className="pt-10 pb-6 px-6 text-center max-w-5xl mx-auto">

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold text-royal-900 mb-4"
        >
          Exploring the World of Technology
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-xl text-royal-700 max-w-3xl mx-auto leading-relaxed mb-10"
        >
          School Outreach Program for Kendriya Vidyalaya Students  
          <br />
          <span className="font-semibold">VMedha x IDEA LAB </span>
        </motion.p>

        {/* POSTER */}
        <motion.img
          src="/3-poster.jpg"
          alt="Outreach Poster"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="
            w-full 
            max-w-4xl 
            mx-auto 
            rounded-xl 
            shadow-xl 
            object-contain 
            border border-royal-200
          "
        />
      </section>


      {/* -------------------------------------------------- */}
      {/* EVENT DETAILS */}
      {/* -------------------------------------------------- */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-royal-700">

          <div className="flex items-center gap-3">
            <Calendar className="w-6 h-6 text-royal-800" />
            <span>17th September 2025</span>
          </div>

          <div className="flex items-center gap-3">
            <Clock className="w-6 h-6 text-royal-800" />
            <span>10:00 AM – 3:00 PM</span>
          </div>

          <div className="flex items-center gap-3">
            <MapPin className="w-6 h-6 text-royal-800" />
            <span>Kendriya Vidyalaya School, Begumpet</span>
          </div>

        </div>

        {/* INTRO PARAGRAPH */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-10 text-lg text-royal-800 leading-relaxed"
        >
          VMedha in association with AICTE IDEA lab CBIT conducted a School Outreach Program at Kendriya Vidyalaya,
          introducing young students to modern technology, artificial intelligence,
          and the fascinating digital world around them.  
          <br /><br />
          The event aimed to inspire curiosity, encourage early exposure to
          innovation, and provide an engaging environment where students could
          learn foundational concepts through simple explanations, demonstrations,
          and hands-on experiences.
        </motion.p>
      </section>


      {/* -------------------------------------------------- */}
      {/* EVENT FLOW / TIMELINE */}
      {/* -------------------------------------------------- */}
      <section className="py-20 px-6 bg-white/60 backdrop-blur-sm">
        <SectionTitle
          title="Event Flow"
          subtitle="How the school outreach session unfolded"
        />

        <div className="max-w-5xl mx-auto mt-16 space-y-12">

          {[  
            {
              title: "Welcome & Introduction",
              desc: "The session began by introducing VMedha, its purpose, and how technology can empower students from a young age."
            },
            {
              title: "Fundamentals of Computers & Internet",
              desc: "Students learned about how computers work, the basics of the internet, and how information flows in the digital world."
            },
            {
              title: "Introduction to Artificial Intelligence",
              desc: "A simplified and engaging explanation of AI, real-life examples, and how AI helps in daily life."
            },
            {
              title: "Interactive Q&A with Students",
              desc: "Students actively asked questions about cybersecurity, AI, careers in tech, and how to start learning programming."
            },
            {
              title: "Hands-on Demonstrations",
              desc: "Basic demos helped students relate abstract concepts to the real world, strengthening their understanding."
            },
            {
              title: "Group Photo & Closing",
              desc: "The event concluded with encouraging remarks, motivating students to explore technology responsibly and creatively."
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex gap-6"
            >
              <div className="w-3 h-3 bg-royal-700 rounded-full mt-2" />

              <div>
                <h3 className="text-xl font-bold text-royal-900">{item.title}</h3>
                <p className="text-royal-700 mt-2 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>


      {/* -------------------------------------------------- */}
      {/* IMAGE GALLERY (same layout as Event2) */}
      {/* -------------------------------------------------- */}
      <section className="py-20 px-6">
        <SectionTitle
          title="Event Moments"
          subtitle="Snapshots from our outreach program"
        />

        <div className="max-w-6xl mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* FEATURED NEWSPAPER IMAGE (rowspan + colspan) */}
          <motion.div
            key="main"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-xl overflow-hidden shadow-lg 
                       sm:col-span-2 lg:col-span-2 lg:row-span-2"
          >
            <img
              src="/3-1.jpg"
              className="w-full h-full object-cover object-top"
            />
          </motion.div>

          {/* OTHER 5 IMAGES */}
          {[2, 3, 4, 5, 6].map((i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={`/3-${i}.jpg`}
                className="w-full h-64 object-cover object-top"
              />
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Event3;
