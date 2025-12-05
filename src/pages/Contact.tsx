import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Instagram,
  ChevronDown,
} from "lucide-react";
import { SectionTitle } from "../components/Card";

const Contact = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      q: "How can I join V Medha?",
      a: "We open recruitment during the academic year. Follow our Instagram & LinkedIn for announcements or contact us anytime.",
    },
    {
      q: "Do I need technical experience to join?",
      a: "No! Whether beginner or experienced, we have learning tracks, workshops, and mentorship for everyone.",
    },
    {
      q: "Can organizations collaborate with V Medha?",
      a: "Absolutely! We welcome technical, academic, and outreach collaborations. Use the contact form, and we’ll get back within 24 hours.",
    },
    {
      q: "How quickly do you respond to messages?",
      a: "Usually within a few hours, and always within 24 hours.",
    },
  ];

  return (
    <div className="min-h-screen pt-20">

      {/* -------------------------------------------------- */}
      {/* HERO SECTION WITH FLOATING ICONS */}
      {/* -------------------------------------------------- */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-royal-50 to-white opacity-70"></div>

        {/* Floating tech icons */}
        {[
          { Icon: Mail, x: "10%", y: "20%" },
          { Icon: Phone, x: "85%", y: "35%" },
          { Icon: Instagram, x: "15%", y: "70%" },
          { Icon: Linkedin, x: "75%", y: "60%" },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="absolute text-royal-400 opacity-20"
            style={{ left: item.x, top: item.y }}
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4 + i, repeat: Infinity }}
          >
            <item.Icon className="w-16 h-16" />
          </motion.div>
        ))}

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <SectionTitle
            title="Get In Touch"
            subtitle="We'd love to hear from you!"
          />
        </div>
      </section>

      {/* -------------------------------------------------- */}
      {/* CONTACT INFO CARDS */}
      {/* -------------------------------------------------- */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { Icon: Mail, title: "Email", text: "vmedhaofficial@vmedha.com", link: "mailto:contact@vmedha.com" },
            { Icon: Phone, title: "Phone", text: "+91 7981203465", link: "tel:+91XXXXXXXXXX" },
            { Icon: MapPin, title: "Location", text: "CBIT Campus, Gandipet Hyderabad", link: "#" },
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              whileHover={{ y: -6 }}
              className="glass rounded-2xl p-8 text-center shadow-lg hover:shadow-royal-300/40 transition-all"
            >
              <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-royal flex items-center justify-center mb-4 shadow-md">
                <item.Icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-royal-900">{item.title}</h3>
              <p className="text-royal-700 mt-1">{item.text}</p>
            </motion.a>
          ))}
        </div>
      </section>

      {/* -------------------------------------------------- */}
      {/* CONTACT FORM WITH FORMSPREE */}
      {/* -------------------------------------------------- */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto glass rounded-3xl p-10 shadow-xl backdrop-blur-md border border-royal-200">

          <h2 className="text-3xl font-bold text-royal-900 mb-2 text-center">
            Send Us a Message
          </h2>
          {/* <p className="text-center text-royal-700 mb-10">
            We usually respond within a few hours.
          </p> */}

          <form
            action="https://formspree.io/f/mvgeqvgz"
            method="POST"
            className="space-y-6"
          >
            {["name", "email", "subject"].map((field, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <label className="block text-sm font-semibold text-royal-900 mb-2">
                  {field.charAt(0).toUpperCase() + field.slice(1)} *
                </label>
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/80 border border-royal-300 text-royal-900 placeholder-royal-400 focus:ring-2 focus:ring-royal-400 focus:border-royal-500 transition-all"
                  placeholder={`Enter your ${field}`}
                />
              </motion.div>
            ))}

            {/* MESSAGE FIELD */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <label className="block text-sm font-semibold text-royal-900 mb-2">
                Message *
              </label>
              <textarea
                name="message"
                required
                rows={6}
                className="w-full px-4 py-3 rounded-xl bg-white/80 border border-royal-300 text-royal-900 placeholder-royal-400 focus:ring-2 focus:ring-royal-400 focus:border-royal-500 transition-all resize-none"
                placeholder="Tell us how we can help..."
              />
            </motion.div>

            {/* SUBMIT BUTTON */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-gradient-royal text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-royal-400/40 transition-all"
            >
              <Send className="w-5 h-5" /> Send Message
            </motion.button>
          </form>
        </div>
      </section>

      {/* -------------------------------------------------- */}
      {/* SOCIAL MEDIA */}
      {/* -------------------------------------------------- */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <SectionTitle title="Connect With Us" />

          <div className="flex justify-center gap-12 mt-10">
            {[{ Icon: Linkedin, link: "https://www.linkedin.com/company/vmedha-cbit/?viewAsMember=true" }, { Icon: Instagram, link: "https://www.instagram.com/cbit.vmedha/" }].map(
              (item, i) => (
                <motion.a
                  key={i}
                  href={item.link}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="p-6 rounded-2xl glass shadow-xl"
                >
                  <item.Icon className="w-14 h-14 text-royal-800" />
                </motion.a>
              )
            )}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------- */}
      {/* FAQ ACCORDION */}
      {/* -------------------------------------------------- */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/60">
        <div className="max-w-4xl mx-auto">
          <SectionTitle title="FAQs" subtitle="Quick answers to common questions" />

          <div className="mt-12 space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                className="glass rounded-2xl p-6 cursor-pointer"
                onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-bold text-royal-900">{faq.q}</h3>
                  <ChevronDown
                    className={`w-6 h-6 text-royal-700 transition-transform ${
                      openFAQ === i ? "rotate-180" : ""
                    }`}
                  />
                </div>

                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={
                    openFAQ === i
                      ? { height: "auto", opacity: 1 }
                      : { height: 0, opacity: 0 }
                  }
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden text-royal-700 mt-2"
                >
                  <p>{faq.a}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
