"use client";

import { useState, FormEvent } from "react";
import { Mail, Phone, MessageCircle, MapPin, Send } from "lucide-react";
import { personalInfo } from "../data";

export default function ContactFooter() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <footer id="contact" className="py-20 bg-white border-t border-neutral-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-neutral-950 text-white p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
         
          <div>
            <span className="inline-block px-3.5 py-1 rounded-full bg-white/10 text-xs font-semibold text-neutral-200 mb-4">
              Get in Touch
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
              Let&apos;s build something meaningful.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-300 leading-relaxed max-w-md">
              I&apos;m always interested in connecting with developers, organizations, businesses, and people with innovative ideas.
            </p>

            <div className="mt-7 space-y-3 text-sm text-neutral-200">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 hover:text-white transition"
              >
                <Mail className="w-4 h-4 text-neutral-400" />
                <span>{personalInfo.email}</span>
              </a>
              <a
                href="https://wa.me"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-white transition"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp: {personalInfo.whatsapp}</span>
              </a>
              <a
                href="tel:+263780601391"
                className="flex items-center gap-3 hover:text-white transition"
              >
                <Phone className="w-4 h-4 text-neutral-400" />
                <span>Tel: {personalInfo.phone}</span>
              </a>
              <div className="flex items-center gap-3 text-neutral-400">
                <MapPin className="w-4 h-4" />
                <span>{personalInfo.location}</span>
              </div>
            </div>
          </div>

        
          <form
            onSubmit={handleSubmit}
            className="bg-white text-neutral-900 rounded-2xl p-6 sm:p-7 space-y-4"
          >
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1.5">
                Full Name
              </label>
              <input
                type="text"
                required
                placeholder="Your full name"
                className="w-full px-4 py-2.5 rounded-xl bg-neutral-100 border border-neutral-200 text-sm focus:outline-none focus:border-neutral-950"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                required
                placeholder="you@example.com"
                className="w-full px-4 py-2.5 rounded-xl bg-neutral-100 border border-neutral-200 text-sm focus:outline-none focus:border-neutral-950"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1.5">
                Message
              </label>
              <textarea
                rows={3}
                required
                placeholder="Tell me about your project or idea..."
                className="w-full px-4 py-2.5 rounded-xl bg-neutral-100 border border-neutral-200 text-sm focus:outline-none focus:border-neutral-950"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-full bg-neutral-950 hover:bg-neutral-800 text-white text-sm font-semibold flex items-center justify-center gap-2 transition cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>{submitted ? "Message Sent!" : "Send Message"}</span>
            </button>
          </form>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-2">
          <p>©  All rights reserved.</p>
          <p>Software Developer • UI/UX Designer • Digital Creator</p>
        </div>
      </div>
    </footer>
  );
}
