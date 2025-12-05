import React from "react";
import { motion } from "framer-motion";

const pastEvents = [
  {
    id: 1,
    title:
      "Inauguration + Guest Lecture on Vision LLMs And Their Real-World Use Cases by Mr. Vijaya Bhasker Adusumalli",
    image: "/event1.jpg",
    short:
      "A grand inauguration followed by an insightful session on Vision LLMs, their evolution, and real-world applications.",
    link: "/events/event-1",
  },
  {
    id: 2,
    title: "Workshop on Design Thinking Using AI by DBS Tech",
    image: "/event2.jpg",
    short:
      "A practical hands-on workshop on applying AI-powered design thinking to real industry challenges.",
    link: "/events/event-2",
  },
  {
    id: 3,
    title:
      "Exploring the World of Technology — School Outreach Event for Kendriya Vidyalaya Students",
    image: "/about-bg.jpg",
    short:
      "A special outreach program aiming to spark curiosity in young minds through tech demos, mentorship, and interactive sessions.",
    link: "/events/event-3",
  },
];

const Events: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">

      {/* ------------------ HERO ------------------ */}
      {/* <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-royal-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <SectionTitle
            title="Events"
            subtitle="Explore what we've done and what's coming next"
          />
        </div>
      </section> */}

      {/* ------------------ UPCOMING EVENTS ------------------ */}
      {/* ------------------ UPCOMING EVENTS (Improved) ------------------ */}
<section className="py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">

  {/* Background Gradient + Floating Elements */}
  <div className="absolute inset-0 bg-gradient-to-b from-royal-50 via-white to-royal-100"></div>

  {/* Floating circles */}
  <motion.div
    className="absolute w-40 h-40 rounded-full bg-royal-200/30 blur-3xl -top-10 -left-10"
    animate={{ x: [0, 20, 0], y: [0, 10, 0] }}
    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
  />
  <motion.div
    className="absolute w-56 h-56 rounded-full bg-royal-300/20 blur-3xl bottom-0 right-0"
    animate={{ x: [0, -20, 0], y: [0, -15, 0] }}
    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
  />

  {/* Main Content */}
  <div className="relative max-w-3xl mx-auto text-center">

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="backdrop-blur-xl bg-white/50 p-10 rounded-3xl shadow-xl border border-white/40"
    >
      <h2 className="text-4xl font-bold text-royal-900 mb-4">
        Upcoming Events
      </h2>

      <p className="text-royal-700 text-lg leading-relaxed">
        🚀 We’re working on something exciting!  
        <br />
        Stay tuned for announcements about our next event.
      </p>
    </motion.div>
  </div>



        {/* ---------- DUMMY UPCOMING EVENT: COMMENTED OUT --------- */}

        {/*
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto bg-white rounded-2xl overflow-hidden shadow-xl"
        >
          <img src="/dummy-event.jpg" className="w-full h-72 object-cover" />

          <div className="p-8">
            <h3 className="text-2xl font-bold text-royal-900 mb-3">
              Dummy Upcoming Event Title Here
            </h3>
            <p className="text-royal-700 mb-6">
              Short description of the upcoming event. You can replace this
              anytime with the real event.
            </p>

            <a
              href="https://google.com"
              target="_blank"
              className="inline-flex items-center gap-2 bg-gradient-royal text-white px-5 py-3 rounded-lg"
            >
              Register Now <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
        */}
      </section>
{/* ------------------ PAST EVENTS ------------------ */}
<section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
  <div className="max-w-4xl mx-auto text-center mb-16">
    <h2 className="text-6xl font-bold text-royal-900">Past Events</h2>
    <p className="text-royal-700 mt-4 text-lg"> 
      A look back at the impactful events we've successfully conducted.
    </p>
  </div>

  <div className="max-w-6xl mx-auto space-y-16">

    {([...pastEvents].reverse()).map((event, idx) => (
      <motion.div
        key={event.id}
        onClick={() => (window.location.href = event.link)}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: idx * 0.15 }}
        viewport={{ once: true }}
        className="
          relative group rounded-2xl overflow-hidden shadow-xl cursor-pointer
          hover:shadow-2xl transition-all duration-300
        "
      >

        {/* FULL BACKGROUND IMAGE */}
        <motion.img
          src={event.image}
          alt={event.title}
          className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* DARK OVERLAY */}
        <div className="
          absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent
          opacity-90
        " />

        {/* TEXT OVERLAY */}
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <h3 className="text-2xl font-bold text-white leading-snug mb-3">
            {event.title}
          </h3>
          <p className="text-white/80 mb-4 text-sm max-w-2xl">
            {event.short}
          </p>

          {/* Small View Details CTA */}
          <motion.div
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md
                       text-white px-4 py-2 rounded-lg font-medium"
            whileHover={{ scale: 1.05 }}
          >
            View Details →
          </motion.div>
        </div>
      </motion.div>
    ))}

  </div>
</section>

    </div>
  );
};

export default Events;
