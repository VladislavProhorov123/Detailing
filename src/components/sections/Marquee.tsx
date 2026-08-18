"use client";

import { motion } from "framer-motion";

const items = [
  "ДІТЕЙЛІНГ",
  "КЕРАМІЧНЕ ПОКРИТТЯ",
  "ПОЛІРУВАННЯ",
  "ДОГЛЯД ЗА САЛОНОМ",
  "ЗАХИСТ КУЗОВА",
  "ПРЕМІАЛЬНА МИЙКА",
];

export function Marquee() {
  const content = [...items, ...items];

  return (
    <section className="overflow-hidden border-y border-white/10 bg-[var(--background)] py-5 md:py-7">
      <motion.div
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex w-max items-center"
      >
        {content.map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="flex shrink-0 items-center gap-6 px-3 md:gap-10 md:px-5"
          >
            <span className="whitespace-nowrap text-xl font-medium tracking-[-0.04em] text-white/90 md:text-3xl lg:text-4xl">
              {item}
            </span>

            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white/40 md:h-2 md:w-2" />
          </div>
        ))}
      </motion.div>
    </section>
  );
}