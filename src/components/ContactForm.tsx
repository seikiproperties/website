"use client";

import { useState } from "react";

export default function ContactForm({
  variant = "light",
  extended = false,
}: {
  variant?: "light" | "dark";
  extended?: boolean;
}) {
  const [status, setStatus] = useState<"idle" | "submitting" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)?.value || "",
      budget: extended ? (form.elements.namedItem("budget") as HTMLSelectElement)?.value : "",
      timeline: extended ? (form.elements.namedItem("timeline") as HTMLSelectElement)?.value : "",
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const isDark = variant === "dark";

  const inputClasses = isDark
    ? "w-full bg-white/5 border border-white/15 rounded-full px-5 py-3 text-cream placeholder:text-cream/40 focus:border-gold outline-none transition-colors text-sm"
    : "w-full bg-white border border-navy/15 rounded-full px-5 py-3 text-navy placeholder:text-navy/40 focus:border-gold outline-none transition-colors text-sm";

  const labelClasses = isDark
    ? "text-cream/70 text-xs mb-1.5 block pl-2"
    : "text-navy/60 text-xs mb-1.5 block pl-2";

  if (status === "sent") {
    return (
      <div className={`rounded-2xl border ${isDark ? "border-gold/30 bg-white/5" : "border-gold/30 bg-cream-light"} px-6 py-8 text-center`}>
        <p className={`text-lg font-medium mb-1 ${isDark ? "text-cream" : "text-navy"}`}>
          Thank you — your message is on its way.
        </p>
        <p className={`text-sm ${isDark ? "text-cream/70" : "text-navy/60"}`}>
          A member of our team will reach out within one business day.
        </p>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className={`rounded-2xl border border-red-300/40 bg-red-50/10 px-6 py-8 text-center`}>
        <p className={`text-base font-medium mb-2 ${isDark ? "text-cream" : "text-navy"}`}>
          Something went wrong sending your message.
        </p>
        <p className={`text-sm ${isDark ? "text-cream/60" : "text-navy/50"}`}>
          Please WhatsApp or call us directly — we&apos;ll get back to you right away.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-gold text-sm underline"
        >
          Try again
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className={labelClasses}>Full name</label>
          <input id="name" name="name" type="text" required placeholder="Your name" className={inputClasses} />
        </div>
        <div>
          <label htmlFor="phone" className={labelClasses}>Phone (with country code)</label>
          <input id="phone" name="phone" type="tel" required placeholder="+91 / +971" className={inputClasses} />
        </div>
      </div>

      <div>
        <label htmlFor="email" className={labelClasses}>Email</label>
        <input id="email" name="email" type="email" required placeholder="you@email.com" className={inputClasses} />
      </div>

      {extended && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="budget" className={labelClasses}>Investment budget (AED)</label>
            <select id="budget" name="budget" className={inputClasses}>
              <option>Under 2M</option>
              <option>2M – 5M</option>
              <option>5M – 10M</option>
              <option>10M+</option>
            </select>
          </div>
          <div>
            <label htmlFor="timeline" className={labelClasses}>Investment timeline</label>
            <select id="timeline" name="timeline" className={inputClasses}>
              <option>Ready now</option>
              <option>Within 3 months</option>
              <option>3–6 months</option>
              <option>Just exploring</option>
            </select>
          </div>
        </div>
      )}

      <div>
        <label htmlFor="message" className={labelClasses}>Message</label>
        <textarea
          id="message"
          name="message"
          rows={extended ? 4 : 3}
          placeholder="Tell us what you're looking for"
          className={isDark
            ? "w-full bg-white/5 border border-white/15 rounded-2xl px-5 py-3 text-cream placeholder:text-cream/40 focus:border-gold outline-none transition-colors text-sm"
            : "w-full bg-white border border-navy/15 rounded-2xl px-5 py-3 text-navy placeholder:text-navy/40 focus:border-gold outline-none transition-colors text-sm"
          }
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-capsule bg-gold hover:bg-gold-light disabled:opacity-60 text-navy font-medium text-sm px-10 py-3.5 w-full sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
