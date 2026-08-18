"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { gallery } from "@/data/gallery";

export function Gallery() {
  return (
    <section
      id="gallery"
      className="bg-[var(--background)] py-24 md:py-32"
    >
      <div className="container">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mb-12 max-w-3xl md:mb-16"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-white/40">
            Наші роботи
          </p>

          <h2 className="text-4xl font-medium leading-[0.95] tracking-[-0.05em] text-white sm:text-5xl md:text-7xl">
            РЕЗУЛЬТАТ,
            <br />
            ЯКИЙ ВИДНО.
          </h2>
        </motion.div>

        {/* Gallery */}
        <div className="grid auto-rows-[260px] grid-cols-1 gap-3 sm:grid-cols-2 sm:auto-rows-[280px] lg:grid-cols-4 lg:auto-rows-[260px]">
          {gallery.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: "-80px",
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`group relative overflow-hidden rounded-[var(--radius-lg)] bg-[var(--background-secondary)] ${item.className}`}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Number */}
              <span className="absolute left-5 top-5 text-xs tracking-wider text-white/50">
                0{item.id}
              </span>

              {/* Arrow */}
              <div className="absolute right-5 top-5 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white opacity-0 backdrop-blur-md transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <ArrowUpRight size={17} strokeWidth={1.5} />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                <p className="mb-1 translate-y-3 text-[10px] uppercase tracking-[0.18em] text-white/50 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {item.service}
                </p>

                <h3 className="translate-y-2 text-xl font-medium tracking-[-0.03em] text-white transition-transform duration-500 group-hover:translate-y-0 md:text-2xl">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}