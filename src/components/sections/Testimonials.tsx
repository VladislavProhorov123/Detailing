"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  const [active, setActive] = useState(0);

  const testimonial = testimonials[active];

  const next = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setActive(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section
      id="testimonials"
      className="bg-[var(--background)] py-24 md:py-32"
    >
      <div className="container">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mb-14 md:mb-20"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-white/40">
            Відгуки клієнтів
          </p>

          <h2 className="text-4xl font-medium leading-[0.95] tracking-[-0.05em] text-white sm:text-5xl md:text-7xl">
            НАША РОБОТА —
            <br />
            ВАША ДОВІРА.
          </h2>
        </motion.div>

        {/* Main testimonial */}
        <div className="grid border-t border-white/10 pt-10 md:grid-cols-[1fr_2fr] md:gap-16 md:pt-14">
          {/* Left */}
          <div className="mb-10 md:mb-0">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10">
              <Quote
                size={18}
                strokeWidth={1.5}
                className="text-white/60"
              />
            </div>

            <div className="mt-8">
              <p className="text-sm uppercase tracking-[0.18em] text-white/30">
                Середня оцінка
              </p>

              <p className="mt-2 text-4xl font-medium tracking-[-0.04em] text-white">
                4.9<span className="text-white/30">/5</span>
              </p>
            </div>

            <p className="mt-8 max-w-xs text-sm leading-6 text-white/40">
              Понад 200 автомобілів отримали професійний догляд у нашій
              студії.
            </p>
          </div>

          {/* Right */}
          <div className="relative md:min-h-[360px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonial.id}
                initial={{
                  opacity: 0,
                  x: 30,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: -30,
                }}
                transition={{
                  duration: 0.45,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex flex-col md:h-full md:justify-between"
              >
                <blockquote className="max-w-4xl text-2xl font-medium leading-[1.2] tracking-[-0.04em] text-white sm:text-3xl md:text-5xl lg:text-6xl">
                  «{testimonial.text}»
                </blockquote>

                <div className="mt-12 flex items-end justify-between">
                  <div>
                    <p className="text-sm font-medium text-white">
                      {testimonial.name}
                    </p>

                    <p className="mt-1 text-xs uppercase tracking-[0.15em] text-white/30">
                      {testimonial.car}
                    </p>
                  </div>

                  {/* Controls */}
                  <div className="flex gap-2">
                    <button
                      onClick={previous}
                      aria-label="Попередній відгук"
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/60 transition-all duration-300 hover:border-white/30 hover:bg-white/10 hover:text-white"
                    >
                      <ArrowLeft size={17} />
                    </button>

                    <button
                      onClick={next}
                      aria-label="Наступний відгук"
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/60 transition-all duration-300 hover:border-white/30 hover:bg-white/10 hover:text-white"
                    >
                      <ArrowRight size={17} />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Pagination */}
        <div className="mt-10 flex gap-2 border-t border-white/10 pt-6">
          {testimonials.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setActive(index)}
              aria-label={`Відгук ${index + 1}`}
              className="group flex items-center gap-2"
            >
              <span
                className={`h-[2px] transition-all duration-300 ${
                  active === index
                    ? "w-10 bg-white"
                    : "w-5 bg-white/20 group-hover:bg-white/50"
                }`}
              />

              <span
                className={`text-[10px] transition-colors ${
                  active === index
                    ? "text-white"
                    : "text-white/20"
                }`}
              >
                0{index + 1}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}