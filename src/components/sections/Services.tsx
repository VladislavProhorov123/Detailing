"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { services } from "@/data/services";
import { ServiceModal } from "./ServiceModal";

export function Services() {
  const [selectedService, setSelectedService] = useState<
    (typeof services)[number] | null
  >(null);

  return (
    <>
      <section
        id="services"
        className="bg-[var(--background)] py-24 md:py-32"
      >
        <div className="container">
          {/* Heading */}
          <div className="mb-12 max-w-3xl md:mb-16">
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-white/40">
              Наші послуги
            </p>

            <h2 className="text-4xl font-medium leading-[0.95] tracking-[-0.05em] text-white sm:text-5xl md:text-7xl">
              ДОГЛЯД,
              <br />
              ЯКИЙ ВИДНО.
            </h2>
          </div>

          {/* Cards */}
          <div className="grid max-w-8xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.button
                key={service.id}
                type="button"
                onClick={() => setSelectedService(service)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative aspect-[1.25/1] overflow-hidden rounded-[var(--radius-lg)] bg-[var(--background-secondary)] text-left"
              >
                {/* Image */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                {/* Number */}
                <span className="absolute left-5 top-5 text-xs text-white/50">
                  {service.number}
                </span>

                {/* Arrow */}
                <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-md transition-all duration-300 group-hover:bg-white group-hover:text-black">
                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.5}
                  />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7">
                  <h3 className="text-2xl font-medium tracking-[-0.04em] text-white md:text-3xl">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-sm text-white/50">
                    {service.shortDescription}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </>
  );
}