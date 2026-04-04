"use client";

import { useState } from "react";
import { motion } from "framer-motion";

/**
 * Contact Form — GoHighLevel Integration Placeholder
 *
 * INTEGRATION PLACEHOLDER
 * ─────────────────────────────────────────────────────────────────────────────
 * To connect to GoHighLevel:
 *
 * Option 1 — Webhook:
 *   Set GHL_WEBHOOK_URL to your GoHighLevel webhook endpoint.
 *   GHL will receive the form data and trigger any automation pipeline you configure.
 *
 * Option 2 — GHL Embedded Form:
 *   Replace this component with the GHL embed snippet from your funnel builder.
 *
 * Option 3 — API route (recommended for custom validation):
 *   POST to /api/contact → server validates → forwards to GHL webhook
 *   See /app/api/contact/route.ts (placeholder exists)
 * ─────────────────────────────────────────────────────────────────────────────
 */

type FormState = "idle" | "submitting" | "success" | "error";

const serviceOptions = [
  "Revenue System",
  "Authority System",
  "System Build",
  "Not sure yet",
];

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setFormState("success");
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  if (formState === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card rounded-2xl p-10 text-center flex flex-col items-center gap-4"
      >
        <div className="w-12 h-12 rounded-full bg-nexus-blue/20 border border-nexus-blue/30 flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M4 10l4 4 8-8" stroke="#4DA3FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="text-white font-bold text-lg">Message received.</h3>
        <p className="text-white/45 text-sm leading-relaxed max-w-xs">
          We&apos;ll review your message and follow up within 1 business day.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs text-white/40 font-medium mb-1.5" htmlFor="name">
            Your Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Jane Smith"
            className="w-full bg-white/[0.04] border border-white/[0.1] rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-glow-blue/40 focus:bg-white/[0.06] transition-all"
          />
        </div>
        <div>
          <label className="block text-xs text-white/40 font-medium mb-1.5" htmlFor="email">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="jane@company.com"
            className="w-full bg-white/[0.04] border border-white/[0.1] rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-glow-blue/40 focus:bg-white/[0.06] transition-all"
          />
        </div>
      </div>

      {/* Business */}
      <div>
        <label className="block text-xs text-white/40 font-medium mb-1.5" htmlFor="business">
          Business / Organization
        </label>
        <input
          id="business"
          name="business"
          type="text"
          value={formData.business}
          onChange={handleChange}
          placeholder="Your company name"
          className="w-full bg-white/[0.04] border border-white/[0.1] rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-glow-blue/40 focus:bg-white/[0.06] transition-all"
        />
      </div>

      {/* Service type */}
      <div>
        <label className="block text-xs text-white/40 font-medium mb-1.5" htmlFor="service">
          What do you need to build?
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full bg-white/[0.04] border border-white/[0.1] rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-glow-blue/40 focus:bg-white/[0.06] transition-all appearance-none"
        >
          <option value="" className="bg-black text-white/40">Select a service type</option>
          {serviceOptions.map((opt) => (
            <option key={opt} value={opt} className="bg-black text-white">
              {opt}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs text-white/40 font-medium mb-1.5" htmlFor="message">
          What are you trying to build or fix?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Describe your current situation, what's not working, and what you want to achieve..."
          className="w-full bg-white/[0.04] border border-white/[0.1] rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-glow-blue/40 focus:bg-white/[0.06] transition-all resize-none"
        />
      </div>

      {formState === "error" && (
        <p className="text-red-400/70 text-xs bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">
          Something went wrong. Please try again or email us directly.
        </p>
      )}

      <motion.button
        type="submit"
        disabled={formState === "submitting"}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        className="w-full bg-nexus-blue hover:bg-glow-blue disabled:opacity-50 text-white font-semibold text-sm py-3.5 rounded-lg transition-colors"
      >
        {formState === "submitting" ? "Sending..." : "Send Message"}
      </motion.button>

      <p className="text-white/20 text-xs text-center">
        We respond within 1 business day. No spam, no lists.
      </p>
    </form>
  );
}
