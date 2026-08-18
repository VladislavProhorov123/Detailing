"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative h-[100svh] overflow-hidden bg-[var(--background)]">
      {/* Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/det.mov" type="video/mp4" />
      </video>

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/65" />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-black/20 to-black/40" />

      {/* Content */}
      <div
        className="container relative z-10 flex h-full items-center pt-[140px] pb-20 lg:pt-[76px] lg:pb-0
        "
      >
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="max-w-4xl"
        >
          <p className="mb-3 text-[10px] uppercase tracking-[0.18em] text-white/60 sm:text-[10px] md:mb-4 md:text-xs md:tracking-[0.22em]">
            Преміальний автомобільний дітейлінг
          </p>

          <h1 className="text-[clamp(2.5rem,10vw,6rem)] font-medium leading-[1] tracking-[-0.055em] text-white">
            ДОСКОНАЛІСТЬ
            <br />
            У КОЖНІЙ
            <br />
            ДЕТАЛІ.
          </h1>

          <p className="mt-5 max-w-md text-base leading-5 text-white/60 sm:text-sm sm:leading-6 md:mt-6 md:max-w-lg md:text-base md:leading-7">
            Професійний догляд та захист автомобіля для тих, хто цінує
            бездоганний результат.
          </p>

          <div className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:gap-3 md:mt-7">
            <Link
              href="#services"
              className="flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition-transform duration-300 hover:scale-[1.03] sm:px-6 sm:text-sm md:px-7 md:py-4"
            >
              Переглянути послуги
            </Link>

            <Link
              href="#booking"
              className="flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-white/40 hover:bg-white/10 sm:px-6 sm:text-sm md:px-7 md:py-4"
            >
              Записатися →
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-5 left-1/2 z-10 -translate-x-1/2 md:bottom-8"
      >
        <motion.p
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-[9px] uppercase tracking-[0.2em] text-white/40 md:text-xs"
        >
          Гортайте ↓
        </motion.p>
      </motion.div>
    </section>
  );
}
