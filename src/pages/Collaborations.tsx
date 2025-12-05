import React from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  Code,
  Globe,
  Sparkles,
  Atom,
  Orbit,
} from "lucide-react";

import { SectionTitle } from "../components/Card";

// ---------------------------------------------------------
// FLOATING ICONS CONFIG
// ---------------------------------------------------------
const floatingIcons = [
  { Icon: Cpu, x: "10%", y: "20%", delay: 0 },
  { Icon: Code, x: "80%", y: "25%", delay: 0.3 },
  { Icon: Globe, x: "15%", y: "70%", delay: 0.6 },
  { Icon: Atom, x: "75%", y: "60%", delay: 0.9 },
  { Icon: Sparkles, x: "50%", y: "10%", delay: 1.2 },
  { Icon: Orbit, x: "88%", y: "80%", delay: 1.5 },
];

// ---------------------------------------------------------
// SUCCESSFUL COLLABORATION DATA
// ---------------------------------------------------------
const collabs = [
  {
    title: "School Outreach Program",
    partner: "AICTE IDEA Lab",
    desc:
      "Conducted an interactive AI awareness and technology fundamentals program for Kendriya Vidyalaya students, inspiring young learners through hands-on demos.",
    impactLabel: "Students Impacted",
    impactValue: "150+",
    barWidth: "95%",
    icon: "🎓",
  },
  {
    title: "Design Thinking Using AI Workshop",
    partner: "Department of IT, CBIT",
    desc:
      "Collaborated with CBIT IT Department to deliver a hands-on workshop covering structured innovation, product thinking, and AI-assisted prototyping.",
    impactLabel: "Participants Benefitted",
    impactValue: "60+",
    barWidth: "80%",
    icon: "💡",
  },
];


// ---------------------------------------------------------
// MAIN COMPONENT
// ---------------------------------------------------------

const Collaborations: React.FC = () => {
  return (
    <div className="min-h-screen pt-20 relative overflow-hidden">

      {/* BACKGROUND GRADIENTS */}
      <div className="absolute inset-0 bg-gradient-to-br from-royal-50 via-white to-royal-100 opacity-80" />

      {/* FLOATING TECH ICONS */}
      {floatingIcons.map((item, idx) => (
        <motion.div
          key={idx}
          className="absolute text-royal-400 opacity-20"
          style={{ left: item.x, top: item.y }}
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 5,
            delay: item.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <item.Icon className="w-16 h-16 md:w-24 md:h-24" />
        </motion.div>
      ))}

      {/* -------------------------------------------------- */}
      {/* HERO SECTION */}
      {/* -------------------------------------------------- */}
      <section className="relative text-center py-28 px-6 z-10">
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold text-royal-900"
        >
          Collaborations & Partnerships
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-royal-700 text-lg max-w-2xl mx-auto mt-4 leading-relaxed"
        >
          Working together with institutions, departments, and innovators  
          to create meaningful real-world impact through technology.
        </motion.p>
      </section>

      {/* -------------------------------------------------- */}
      {/* WHY WE COLLABORATE */}
      {/* -------------------------------------------------- */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto glass rounded-2xl p-10 border border-royal-200/40 shadow-xl">
          <SectionTitle
            title="Why We Collaborate"
            subtitle=""
          />

          <p className="text-lg text-royal-700 leading-relaxed mt-6">
            Collaborations fuel innovation. By partnering with institutes, industry,  
            and government bodies, we amplify our ability to create scalable,  
            responsible and socially impactful technology solutions.
          </p>

          <ul className="mt-8 space-y-4 text-royal-700 text-lg">
            {[
              "Access real-world challenges to build meaningful tech solutions",
              "Enable mentorship, expert guidance and applied learning",
              "Bring innovation-driven initiatives to students and communities",
              "Build long-term networks across academia and industry",
            ].map((point, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.15 }}
                className="flex items-start gap-3"
              >
                <span className="w-3 h-3 bg-royal-600 rounded-full mt-2" />
                {point}
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* -------------------------------------------------- */}
      {/* COLLABORATION FORM */}
      {/* -------------------------------------------------- */}
      <section className="py-24 px-6 relative z-10">
        <SectionTitle title="Collaborate With Us" subtitle="Let’s build impact together" />

        <div className="max-w-xl mx-auto mt-14 relative">
          {/* Background glow */}
          <div className="absolute -inset-4 bg-royal-400/20 blur-2xl rounded-3xl"></div>

          <form
            action="https://formspree.io/f/mldqlpqz"
            method="POST"
            className="relative bg-white/70 backdrop-blur-lg border border-royal-200/50 shadow-2xl rounded-2xl p-8 space-y-6"
          >
            <div>
              <label className="text-sm text-royal-700 font-semibold">Club / Organization</label>
              <input
                type="text"
                name="organization"
                required
                className="input w-full"
                placeholder="Club or Organization Name"
              />
            </div>

            <div>
              <label className="text-sm text-royal-700 font-semibold">Email</label>
              <input
                type="email"
                name="email"
                required
                className="input w-full"
                placeholder="example@email.com"
              />
            </div>

            <div>
              <label className="text-sm text-royal-700 font-semibold">Phone Number</label>
              <input
                type="text"
                name="phone"
                className="input w-full"
                placeholder="+91 XXXXX XXXXX"
              />
            </div>

            <div>
              <label className="text-sm text-royal-700 font-semibold">Purpose</label>
              <input
                type="text"
                name="purpose"
                className="input w-full"
                placeholder="Workshop / Event / Outreach / Partnership/ Other"
              />
            </div>

            <div>
              <label className="text-sm text-royal-700 font-semibold">Message</label>
              <textarea
                name="message"
                required
                className="input w-full h-32"
                placeholder="Describe the event or collaboration idea"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="btn-primary w-full py-3 text-lg font-semibold"
            >
              Submit Collaboration Request
            </motion.button>
          </form>
        </div>
      </section>

      {/* -------------------------------------------------- */}
      {/* SUCCESSFUL COLLABORATIONS */}
      {/* -------------------------------------------------- */}
      <section className="py-20 px-6">
        <SectionTitle
          title="Successful Collaborations"
          subtitle="Partnerships that created real impact"
        />

        <div className="max-w-6xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          {collabs.map((c, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-8 shadow-xl"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-royal rounded-xl flex items-center justify-center text-3xl">
                  {c.icon}
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-royal-900">{c.title}</h3>
                  <p className="text-sm text-royal-600">With {c.partner}</p>
                </div>
              </div>

              <p className="text-royal-700 mb-4">{c.desc}</p>

              <div className="flex justify-between text-sm font-semibold text-royal-900 mb-2">
                <span>{c.impactLabel}</span>
                <span>{c.impactValue}</span>
              </div>

              <div className="w-full h-2 bg-royal-200 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: "0%" }}
                  whileInView={{ width: c.barWidth }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  className="h-full bg-gradient-royal rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Collaborations;
