import React from "react";
import { motion } from "framer-motion";
import { SectionTitle } from "../../components/Card";
import { Calendar, Clock, MapPin } from "lucide-react";

const Event1: React.FC = () => {
    return (
        <div className="pt-20 bg-gradient-to-b from-royal-50 via-white to-royal-100">
            {/* -------------------------------------------------- */}
            {/* HERO SECTION (Poster + Heading Outside) */}
            {/* -------------------------------------------------- */}

            <section className="pt-10 pb-6 px-6 text-center max-w-5xl mx-auto">

                {/* Heading ABOVE the poster */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-6xl font-extrabold text-royal-900 mb-4"
                >
                    Inauguration & Guest Lecture
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="text-xl text-royal-700 max-w-3xl mx-auto leading-relaxed mb-10"
                >
                    Vision LLMs & Their Real-World Use Cases
                    <br />
                    by <span className="font-semibold">Mr. Vijaya Bhasker Adusumalli</span>
                </motion.p>

                {/* POSTER IMAGE (FULLY VISIBLE) */}
                <motion.img
                    src="/1-poster.jpg"  // ← You rename your poster file to this
                    alt="Event Poster"
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
                        <span>28th August 2025</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <Clock className="w-6 h-6 text-royal-800" />
                        <span>10:00 AM – 1:00 PM</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <MapPin className="w-6 h-6 text-royal-800" />
                        <span>CBIT Auditorium</span>
                    </div>

                </div>

                {/* Refined Intro Paragraph */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mt-10 text-lg text-royal-800 leading-relaxed"
                >
                    On 28th August 2025, VMedha was formally inaugurated in the presence of our
                    faculty coordinators and student community. The event featured a distinguished
                    guest lecture by
                    <span className="font-semibold">
                        {" "}Mr. Vijaya Bhasker Adusumalli
                    </span>,
                    who delivered an insightful session on Vision LLMs, their evolution, and
                    their real-world applications across modern transport systems.
                    <br /><br />
                    The inauguration marked a significant milestone for VMedha, reinforcing
                    its mission of promoting innovation, research, and responsible AI under
                    the guiding theme —
                    <span className="italic"> “Technology for Social Good.”</span>
                </motion.p>
            </section>

            {/* -------------------------------------------------- */}
            {/* EVENT TIMELINE */}
            {/* -------------------------------------------------- */}
            <section className="py-20 px-6 bg-white/60 backdrop-blur-sm">
                <SectionTitle
                    title="Event Flow"
                />

                <div className="max-w-5xl mx-auto mt-16 space-y-12">

                    {[
                        {
                            title: "Opening Ceremony",
                            desc: "The event began with a warm welcome and formal inauguration led by our faculty coordinator Dr. Ramakrishna Kolikipogu."
                        },
                        {
                            title: "Introducing VMedha",
                            desc: "Dr. Ramakrishna presented the vision, mission, and motivation behind establishing VMedha — a platform for innovation and social impact."
                        },
                        {
                            title: "Appointment of Core Committee",
                            desc: "Newly elected core members received their appointment letters, officially beginning their leadership journey."
                        },
                        {
                            title: "President’s Address",
                            desc: "Abdul Rafe -The President outlined the club’s goals, emphasizing innovation, research, and ethical AI for social good."
                        },
                        {
                            title: "Guest Lecture: Vision LLMs",
                            desc: "Mr. Adusumalli explained how Vision LLMs and Generative AI are shaping real-world applications including predictive maintenance, safety, automation, and more."
                        },
                        {
                            title: "Interactive Q&A Session",
                            desc: "Students actively engaged with questions on AI ethics, real-world deployment, and career-building in emerging technologies."
                        },
                        {
                            title: "Closing Note",
                            desc: "The session concluded with gratitude and a call for students to pursue purposeful, impactful innovation."
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
            {/* IMAGE GALLERY */}
            {/* -------------------------------------------------- */}
<section className="py-20 px-6">
  <SectionTitle
    title="Event Moments"
    subtitle="A few glimpses from the Inauguration & Guest Lecture"
  />

  <div className="max-w-6xl mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

    {/* FIRST IMAGE — TALL FEATURED IMAGE */}
    <motion.div
      key="main"
      whileHover={{ scale: 1.03 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="rounded-xl overflow-hidden shadow-lg sm:col-span-2 lg:col-span-1 lg:row-span-2"
    >
      <img
        src="/1-1.jpg"
        className="w-full h-full object-cover object-top"
      />
    </motion.div>

    {/* OTHER IMAGES */}
    {[2, 3, 4, 6].map((i) => (
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
          src={`/1-${i}.jpg`}
          className="w-full h-64 object-cover object-top"
        />
      </motion.div>
    ))}

  </div>
</section>


        </div>
    );
};

export default Event1;
