"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const navigation = [
  {
    label: "Послуги",
    href: "#services",
  },
  {
    label: "Галерея",
    href: "#gallery",
  },
  {
    label: "Відгуки",
    href: "#testimonials",
  },
  {
    label: "Записатися",
    href: "#booking",
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[var(--background)]">
      <div className="container">
        {/* Main */}
        <div className="grid gap-12 py-16 md:grid-cols-2 md:py-20 lg:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/"
              className="text-2xl font-semibold tracking-[-0.05em] text-white"
            >
              OBSIDIAN
              <span className="text-white/40">®</span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-6 text-white/35">
              Професійний автомобільний дітейлінг.
              <br />
              Досконалість у кожній деталі.
            </p>
          </motion.div>

          {/* Navigation */}
          <div>
            <p className="mb-5 text-[10px] uppercase tracking-[0.2em] text-white/30">
              Навігація
            </p>

            <nav className="flex flex-col items-start gap-3">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-center gap-1 text-sm text-white/60 transition-colors hover:text-white"
                >
                  {item.label}

                  <ArrowUpRight
                    size={12}
                    className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </Link>
              ))}
            </nav>
          </div>

          {/* Contacts */}
          <div>
            <p className="mb-5 text-[10px] uppercase tracking-[0.2em] text-white/30">
              Контакти
            </p>

            <div className="flex flex-col gap-3">
              <a
                href="tel:+380000000000"
                className="text-sm text-white/60 transition-colors hover:text-white"
              >
                +38 (098) 213 32 27
              </a>

              <a
                href="mailto:hello@obsidian.ua"
                className="text-sm text-white/60 transition-colors hover:text-white"
              >
                vladivlavprohorov105@gmail.com
              </a>

              <p className="mt-2 text-sm leading-5 text-white/35">
                Одеса, Україна
                <br />
                вул. Прикладна, 10
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[10px] uppercase tracking-[0.12em] text-white/25">
            © {new Date().getFullYear()} OBSIDIAN. Усі права захищені.
          </p>

          <div className="flex gap-5">
            <a
              href="#"
              className="text-[10px] uppercase tracking-[0.12em] text-white/25 transition-colors hover:text-white"
            >
              Instagram
            </a>

            <a
              href="#"
              className="text-[10px] uppercase tracking-[0.12em] text-white/25 transition-colors hover:text-white"
            >
              Telegram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}