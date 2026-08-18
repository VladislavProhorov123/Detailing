"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { ArrowUpRight, Check } from "lucide-react";

import { services } from "@/data/services";

type FormData = {
  name: string;
  phone: string;
  service: string;
  message: string;
};

export function CTA() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);

    setSubmitted(true);
    reset();
  };

  return (
    <section
      id="booking"
      className="relative overflow-hidden bg-[var(--background)] py-24 md:py-32"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-white/[0.025] blur-3xl" />

      <div className="container relative z-10">
        <div className="grid gap-14 lg:grid-cols-[1fr_0.8fr] lg:gap-24">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <p className="mb-5 text-xs uppercase tracking-[0.25em] text-white/40">
              Запис на дітейлінг
            </p>

            <h2 className="max-w-3xl text-5xl font-medium leading-[0.92] tracking-[-0.055em] text-white sm:text-6xl md:text-7xl lg:text-8xl">
              ГОТОВІ ДАТИ
              <br />
              АВТО НОВЕ
              <br />
              ЖИТТЯ?
            </h2>

            <p className="mt-8 max-w-md text-sm leading-6 text-white/40 md:text-base md:leading-7">
              Залиште заявку — ми зв'яжемося з вами та підберемо
              оптимальний формат догляду для вашого автомобіля.
            </p>

            {/* Contact */}
            <div className="mt-10 border-t border-white/10 pt-6">
              <p className="text-xs uppercase tracking-[0.18em] text-white/30">
                Або зв'яжіться з нами
              </p>

              <a
                href="tel:+380000000000"
                className="mt-3 inline-flex items-center gap-2 text-lg text-white transition-colors hover:text-white/60"
              >
                +38 (098) 213 32 27
                <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="lg:pt-4"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex min-h-[420px] flex-col items-center justify-center rounded-[var(--radius-lg)] border border-white/10 bg-white/[0.02] p-8 text-center"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-black">
                    <Check size={22} />
                  </div>

                  <h3 className="mt-6 text-2xl font-medium tracking-[-0.04em] text-white">
                    Заявку отримано
                  </h3>

                  <p className="mt-3 max-w-sm text-sm leading-6 text-white/40">
                    Дякуємо! Ми зв'яжемося з вами найближчим часом.
                  </p>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-sm text-white/50 underline underline-offset-4 transition-colors hover:text-white"
                  >
                    Надіслати ще одну заявку
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit(onSubmit)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-3"
                >
                  {/* Name */}
                  <div>
                    <input
                      {...register("name", {
                        required: "Вкажіть ваше ім'я",
                      })}
                      placeholder="Ваше ім'я"
                      className="h-14 w-full rounded-[var(--radius-md)] border border-white/10 bg-white/[0.03] px-5 text-sm text-white outline-none transition-colors placeholder:text-white/30 focus:border-white/30"
                    />

                    {errors.name && (
                      <p className="mt-2 px-1 text-xs text-red-400">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <input
                      {...register("phone", {
                        required: "Вкажіть номер телефону",
                        minLength: {
                          value: 10,
                          message: "Перевірте номер телефону",
                        },
                      })}
                      placeholder="Номер телефону"
                      type="tel"
                      className="h-14 w-full rounded-[var(--radius-md)] border border-white/10 bg-white/[0.03] px-5 text-sm text-white outline-none transition-colors placeholder:text-white/30 focus:border-white/30"
                    />

                    {errors.phone && (
                      <p className="mt-2 px-1 text-xs text-red-400">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  {/* Service */}
                  <div>
                    <select
                      {...register("service", {
                        required: "Оберіть послугу",
                      })}
                      defaultValue=""
                      className="h-14 w-full appearance-none rounded-[var(--radius-md)] border border-white/10 bg-white/[0.03] px-5 text-sm text-white outline-none transition-colors focus:border-white/30"
                    >
                      <option
                        value=""
                        disabled
                        className="bg-[#111]"
                      >
                        Оберіть послугу
                      </option>

                      {services.map((service) => (
                        <option
                          key={service.id}
                          value={service.title}
                          className="bg-[#111]"
                        >
                          {service.title}
                        </option>
                      ))}
                    </select>

                    {errors.service && (
                      <p className="mt-2 px-1 text-xs text-red-400">
                        {errors.service.message}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <textarea
                    {...register("message")}
                    placeholder="Додаткова інформація (необов'язково)"
                    rows={5}
                    className="w-full resize-none rounded-[var(--radius-md)] border border-white/10 bg-white/[0.03] p-5 text-sm text-white outline-none transition-colors placeholder:text-white/30 focus:border-white/30"
                  />

                  {/* Submit */}
                  <button
                    type="submit"
                    className="group flex h-14 w-full items-center justify-center gap-2 rounded-full bg-white text-sm font-medium text-black transition-transform duration-300 hover:scale-[1.01]"
                  >
                    Надіслати заявку

                    <ArrowUpRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </button>

                  <p className="pt-2 text-center text-[10px] leading-4 text-white/25">
                    Натискаючи кнопку, ви погоджуєтесь на обробку
                    персональних даних.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}