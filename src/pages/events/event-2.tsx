import React from "react";
import { motion } from "framer-motion";
import { SectionTitle } from "../../components/Card";
import { Calendar, Clock, MapPin } from "lucide-react";

const Event2: React.FC = () => {
  return (
    <div className="pt-20 bg-gradient-to-b from-royal-50 via-white to-royal-100">

      {/* -------------------- HERO (poster above with heading) -------------------- */}
      <section className="pt-10 pb-6 px-6 text-center max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold text-royal-900 mb-4"
        >
          Workshop on Design Thinking using AI
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-xl text-royal-700 max-w-3xl mx-auto leading-relaxed mb-10"
        >
          A hands-on workshop by Vice President and Executive Director of <span className="font-semibold">DBS Tech</span> - exploring
          design thinking frameworks enhanced with AI tools and practical exercises.
        </motion.p>

        <motion.img
          src="/2-poster.jpg"
          alt="Event 2 Poster"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full max-w-4xl mx-auto rounded-xl shadow-xl object-contain border border-royal-200"
        />
      </section>

      {/* -------------------- DETAILS -------------------- */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-royal-700">
          <div className="flex items-center gap-3">
            <Calendar className="w-6 h-6 text-royal-800" />
            <span>10th October 2025</span>
          </div>

          <div className="flex items-center gap-3">
            <Clock className="w-6 h-6 text-royal-800" />
            <span>9:30 AM – 4:30 PM</span>
          </div>

          <div className="flex items-center gap-3">
            <MapPin className="w-6 h-6 text-royal-800" />
            <span>Innovation Lab, CBIT</span>
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-10 text-lg text-royal-800 leading-relaxed"
        >
          The <strong>Design Thinking using AI</strong> workshop by <em>DBS Tech</em> blended
          practical design-thinking exercises with AI tool demonstrations to help students
          prototype human-centered solutions quickly. Participants worked in small teams,
          iterated on ideas using generative and assisted tools, and presented early-stage
          prototypes to industry mentors.
        </motion.p>
      </section>

      {/* -------------------- TIMELINE / EVENT FLOW -------------------- */}
      <section className="py-20 px-6 bg-white/60 backdrop-blur-sm">
        <SectionTitle
          title="Event Flow"
        //   subtitle="How the workshop was structured (high level)"
        />

        <div className="max-w-5xl mx-auto mt-16 space-y-12">
          {[
            {
              title: "Welcome & Introduction",
              desc: "Opening remarks and outline of the workshop goals by the faculty and DBS Tech coordinators."
            },
            {
              title: "Principles of Design Thinking",
              desc: "A short interactive lecture introducing empathy, problem definition, ideation, prototyping, and testing."
            },
            {
              title: "AI Tool Demos",
              desc: "Hands-on demos showing how generative and vision-enabled AI accelerates ideation and prototyping."
            },
            {
              title: "Hands-on Group Activity",
              desc: "Teams applied design thinking to a challenge; mentors assisted with rapid prototyping using AI tools."
            },
            {
              title: "Presentations & Feedback",
              desc: "Each team presented their prototype and received constructive feedback from mentors and peers."
            },
            {
              title: "Closing & Next Steps",
              desc: "Certificates, resources for continued learning, and opportunities to join follow-up projects."
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

      {/* -------------------- GALLERY (featured first image tall) -------------------- */}
<section className="py-20 px-6">
  <SectionTitle
    title="Workshop Moments"
    subtitle="Snapshots from the hands-on sessions and mentor interactions"
  />

  <div className="max-w-6xl mx-auto mt-16 
                  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
                  auto-rows-[250px] gap-6">

    {/* FEATURED NEWSPAPER IMAGE — 2x2 GRID AREA */}
    <motion.div
      key="main-2"
      whileHover={{ scale: 1.03 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="
        rounded-xl overflow-hidden shadow-lg
        sm:col-span-2 sm:row-span-2
        lg:col-span-2 lg:row-span-2
      "
    >
      <img
        src="/2-1.jpg"
        className="w-full h-full object-cover object-top"
        alt="Featured workshop image"
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
          src={`/2-${i}.jpg`}
          className="w-full h-full object-cover object-top"
          alt={`Workshop ${i}`}
        />
      </motion.div>
    ))}

  </div>
</section>


    </div>
  );
};

export default Event2;
