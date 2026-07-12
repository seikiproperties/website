"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { siteConfig, waLink } from "@/lib/siteConfig";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy/95 backdrop-blur-md shadow-[0_8px_30px_-12px_rgba(0,0,0,0.4)]"
          : "bg-gradient-to-b from-navy-deep/80 to-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center group shrink-0">
          <Image
            src="/images/seiki-logo.png"
            alt="Seiki Properties"
            width={180}
            height={52}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-cream/85 hover:text-gold transition-colors tracking-wide"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href={waLink("Hi Seiki Properties, I'd like to know more about investing in Dubai real estate.")}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
            className="flex items-center justify-center w-10 h-10 rounded-full border border-gold/40 text-gold hover:bg-gold hover:text-navy transition-colors"
          >
            <WhatsAppIcon className="w-5 h-5" />
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy text-sm font-medium tracking-wide px-6 py-3 rounded-sm transition-colors"
          >
            Book a Consultation
          </Link>
        </div>

        <button
          className="lg:hidden text-cream"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-navy border-t border-white/10 px-6 py-6 flex flex-col gap-5">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-cream/90 text-base tracking-wide"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={waLink("Hi Seiki Properties, I'd like to know more about investing in Dubai real estate.")}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold text-base"
          >
            WhatsApp Us
          </a>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="inline-flex justify-center items-center bg-gold text-navy font-medium px-6 py-3 rounded-sm"
          >
            Book a Consultation
          </Link>
        </div>
      )}
    </header>
  );
}

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16.04 2.667C8.66 2.667 2.667 8.66 2.667 16.04c0 2.69.77 5.2 2.103 7.32L3 29.333l6.157-1.74a13.27 13.27 0 0 0 6.883 1.887c7.38 0 13.373-5.993 13.373-13.373S23.42 2.667 16.04 2.667Zm0 24.36a11 11 0 0 1-5.97-1.747l-.428-.27-3.587 1.013 1.027-3.553-.287-.443a10.957 10.957 0 0 1-1.69-5.987c0-6.073 4.94-11.013 11.013-11.013 6.073 0 11.013 4.94 11.013 11.013 0 6.074-4.967 10.987-11.09 10.987Zm6.03-8.243c-.33-.165-1.95-.96-2.253-1.07-.303-.11-.523-.165-.743.166-.22.33-.853 1.07-1.047 1.29-.193.22-.386.247-.716.083-1.94-.97-3.21-1.733-4.487-3.927-.34-.583.34-.542.97-1.806.107-.22.054-.413-.054-.578-.11-.165-.99-2.387-1.357-3.27-.357-.857-.722-.74-.99-.756-.252-.014-.54-.014-.83-.014-.29 0-.76.11-1.157.523-.397.413-1.517 1.486-1.517 3.62 0 2.135 1.55 4.196 1.766 4.486.22.29 3.05 4.654 7.39 6.34 3.667 1.434 4.4 1.15 5.195 1.077.795-.073 2.566-1.05 2.927-2.06.36-1.01.36-1.876.252-2.06-.107-.183-.39-.29-.72-.456Z" />
    </svg>
  );
}
