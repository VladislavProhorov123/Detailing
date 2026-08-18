"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

type Service = {
  number: string;
  title: string;
  description: string;
  image: string;
  prices: {
    name: string;
    price: string;
  }[];
};

interface ServiceModalProps {
  service: Service | null;
  onClose: () => void;
}

export function ServiceModal({
  service,
  onClose,
}: ServiceModalProps) {
  return (
    <AnimatePresence>
      {service && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.button
            type="button"
            aria-label="Закрити"
            onClick={onClose}
            className="absolute inset-0 cursor-default bg-black/80 backdrop-blur-md"
          />

          {/* Modal */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
              scale: 0.97,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 30,
              scale: 0.97,
            }}
            transition={{
              duration: 0.45,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative z-10 max-h-[90svh] w-full max-w-5xl overflow-y-auto rounded-[var(--radius-xl)] border border-white/10 bg-[#111111]"
          >
            {/* Close */}
            <button
              type="button"
              onClick={onClose}
              className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white backdrop-blur-md transition-colors hover:bg-white hover:text-black"
            >
              <X size={18} />
            </button>

            <div className="grid md:grid-cols-2">
              {/* Image */}
              <div className="relative min-h-[280px] md:min-h-[600px]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                <span className="absolute bottom-6 left-6 text-sm text-white/50">
                  {service.number}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 md:p-10 lg:p-14">
                <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                  Послуга
                </p>

                <h3 className="mt-3 text-3xl font-medium leading-none tracking-[-0.05em] text-white md:text-5xl">
                  {service.title}
                </h3>

                <p className="mt-6 text-sm leading-6 text-white/50 md:text-base md:leading-7">
                  {service.description}
                </p>

                {/* Prices */}
                <div className="mt-10 border-t border-white/10">
                  {service.prices.map((price) => (
                    <div
                      key={price.name}
                      className="flex items-center justify-between border-b border-white/10 py-4"
                    >
                      <span className="text-sm text-white/60">
                        {price.name}
                      </span>

                      <span className="text-sm font-medium text-white">
                        {price.price}
                      </span>
                    </div>
                  ))}
                </div>

                <a
                  href="#booking"
                  onClick={onClose}
                  className="mt-8 flex w-full items-center justify-center rounded-full bg-white px-6 py-4 text-sm font-medium text-black transition-transform hover:scale-[1.02]"
                >
                  Записатися →
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}