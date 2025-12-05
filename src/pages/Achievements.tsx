import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Trophy, Medal, Star } from "lucide-react";
import { SectionTitle } from "../components/Card";

/**
 * Simple CountUp component (no external libs).
 * - `end` number to count to (integer)
 * - `suffix` optional string, e.g. '+' or 'k+'
 * - `duration` animation duration in ms
 * - starts only when component is in viewport (once)
 */
const CountUp: React.FC<{ end: number; suffix?: string; duration?: number }> = ({
  end,
  suffix = "",
  duration = 1200,
}) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    let rafId: number;
    const step = (timestampStart: number | null, lastTimeRef: { last: number | null }) => {
      if (start === 0) start = performance.now();
      const now = performance.now();
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const next = Math.floor(progress * end);
      setValue(next);
      if (progress < 1) {
        rafId = requestAnimationFrame((t) => step(t, lastTimeRef));
      } else {
        setValue(end);
      }
    };

    rafId = requestAnimationFrame((t) => step(t, { last: null }));
    return () => cancelAnimationFrame(rafId);
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className="font-extrabold">
      {value}
      {suffix}
    </span>
  );
};

const achievementsData = [
  {
    id: 1,
    icon: Trophy,
    title: "Special Mention — Hacktoberfest 2025",
    description:
      "Our team(TEAM-266) received a Special Mention at Hacktoberfest 2025 — two of our members contributed to the recognized project.",
    year: 2025,
  },
  {
    id: 2,
    icon: Medal,
    title: "Datanyx Datathon (MJCET) — Finalist 2025",
    description:
      "Our team reached the finalist stage at Datanyx Datathon held at MJCET, demonstrating strong problem-solving and prototyping skills.",
    year: 2025,
  },
];

const stats = [
  { value: 5, label: "Projects Completed", suffix: "+" , icon: Star},
  { value: 2, label: "Awards Won", suffix: "+" , icon: Trophy},
  { value: 200, label: "Members Trained", suffix: "+" , icon: Medal},
  { value: 400, label: "Lives Impacted", suffix: "+" , icon: Star},
];

const Achievements: React.FC = () => {
  return (
    <div className="min-h-screen pt-20 relative overflow-hidden">
      {/* Floating decorative emojis / shapes (animated) */}
      <motion.div
        className="absolute -left-16 -top-10 text-6xl opacity-30 pointer-events-none"
        animate={{ y: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      >
        🚀
      </motion.div>

      <motion.div
        className="absolute right-8 top-16 text-5xl opacity-25 pointer-events-none"
        animate={{ x: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
      >
        ✨
      </motion.div>

      <motion.div
        className="absolute left-1/2 -translate-x-1/2 bottom-6 text-5xl opacity-20 pointer-events-none"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
      >
        🌐
      </motion.div>

      {/* Hero */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <SectionTitle
            title="Our Achievements"
            // subtitle="Small beginnings — steady progress. A couple of early wins to show."
          />
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-gradient-to-r from-white/30 to-white/10 backdrop-blur-md border border-white/30 rounded-2xl p-6 text-center shadow-md"
              >
                <div className="mx-auto w-14 h-14 rounded-lg bg-white/10 flex items-center justify-center mb-3">
                  <s.icon className="w-6 h-6 text-royal-700" />
                </div>
                <div className="text-3xl md:text-4xl font-extrabold text-royal-900 mb-1">
                  <CountUp end={s.value} suffix={s.suffix} duration={1200} />
                </div>
                <div className="text-sm text-royal-700">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements list */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-royal-900 mb-4 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Recent Recognitions
          </motion.h2>

          <p className="text-center text-royal-700 mb-10 max-w-2xl mx-auto">
            {/* We’re a new club — early wins matter. Here are two recognitions we’re proud of. */}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            {achievementsData.map((a, idx) => {
              const Icon = a.icon;
              return (
                <motion.div
                  key={a.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.08 }}
                  className="rounded-2xl p-6 glass border border-white/30 shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-royal flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-royal-900">{a.title}</h3>
                      <p className="text-royal-700 mt-2 text-sm">{a.description}</p>
                      <div className="mt-4 text-xs text-royal-600 font-semibold">{a.year}</div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects / showcase */}
      {/* <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white/60">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="w-full h-64 bg-gradient-royal flex items-center justify-center text-6xl">
                📁
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-royal-900 mb-4">Projects</h3>
              <p className="text-royal-700 mb-4 leading-relaxed">
                We’ve delivered several student-led projects and prototypes focused on social impact and campus improvements. These early projects fuel learning and help newer members build real systems.
              </p>

              <ul className="space-y-2 text-royal-700">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-royal-600 rounded-full mt-2" /> <span>5+ small-to-medium projects completed</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-royal-600 rounded-full mt-2" /> <span>Hands-on mentorship programs for juniors</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-royal-600 rounded-full mt-2" /> <span>Active collaborations with local NGOs and student teams</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section> */}

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-royal-900 to-royal-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Join the Journey
          </motion.h2>
          <motion.p
            className="text-white/80 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Be a part of early-stage innovation — build projects, win recognition, and make social impact.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
            <a
              href="#get-involved"
              className="inline-block bg-white text-royal-900 px-6 py-3 rounded-lg font-semibold shadow-md hover:scale-105 transition-transform"
            >
              Get Involved
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Achievements;
