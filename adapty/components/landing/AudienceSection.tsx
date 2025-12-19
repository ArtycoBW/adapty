"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { withBasePath } from "@/lib/publicPath";

const easeOut = [0.16, 1, 0.3, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.9, ease: easeOut },
  }),
};

export function AudienceSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          custom={0}
          className="text-center text-[34px] leading-[1.2] font-semibold text-neutral-900"
        >
          Управляйте своим подписочным бизнесом.
          <br />
          Быстрее и дешевле.
        </motion.h2>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            custom={1}
            className="rounded-2xl bg-neutral-50/70 border border-black/5 px-8 pt-8 pb-9"
          >
            <div className="relative mx-auto h-32.5 w-full max-w-120">
              <Image
                src={withBasePath("/audience-dev.webp")}
                alt="Для разработчиков"
                fill
                className="object-contain"
              />
            </div>

            <Link
              href="#"
              className="mt-7 inline-flex w-full items-center justify-center gap-2 text-[18px] font-semibold text-neutral-900 hover:text-[#6D5BFF] ease-linear duration-200"
            >
              Для разработчиков <ChevronRight className="h-5 w-5" />
            </Link>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <span className="rounded-full bg-white border border-black/5 px-4 py-2 text-sm text-neutral-500 font-semibold">
                Подписки SDK
              </span>
              <span className="rounded-full bg-white border border-black/5 px-4 py-2 text-sm text-neutral-500 font-semibold">
                Сбережение на возвратах
              </span>
              <span className="rounded-full bg-white border border-black/5 px-4 py-2 text-sm text-neutral-500 font-semibold">
                Удалённая конфигурация
              </span>
              <span className="rounded-full bg-white border border-black/5 px-4 py-2 text-sm text-neutral-500 font-semibold">
                Резервные пейволлы
              </span>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            custom={2}
            className="rounded-2xl bg-neutral-50/70 border border-black/5 px-8 pt-8 pb-9"
          >
            <div className="relative mx-auto h-32.5 w-full max-w-100">
              <Image
                src={withBasePath("/audience-owners.webp")}
                alt="Для владельцев"
                fill
                className="object-contain"
              />
            </div>

            <Link
              href="#"
              className="mt-7 inline-flex w-full items-center justify-center gap-2 text-[18px] font-semibold text-neutral-900 hover:text-[#6D5BFF] ease-linear duration-200"
            >
              Для владельцев <ChevronRight className="h-5 w-5" />
            </Link>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <span className="rounded-full bg-white border border-black/5 px-4 py-2 text-sm text-neutral-500 font-semibold">
                Аналитика доходов
              </span>
              <span className="rounded-full bg-white border border-black/5 px-4 py-2 text-sm text-neutral-500 font-semibold">
                Аналитика LTV
              </span>
              <span className="rounded-full bg-white border border-black/5 px-4 py-2 text-sm text-neutral-500 font-semibold">
                Прогнозы ИИ для LTV и доходов
              </span>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            custom={3}
            className="rounded-2xl bg-neutral-50/70 border border-black/5 px-8 pt-8 pb-9"
          >
            <div className="relative mx-auto h-32.5 w-full max-w-100">
              <Image
                src={withBasePath("/audience-marketing.webp")}
                alt="Для маркетологов"
                fill
                className="object-contain"
              />
            </div>

            <Link
              href="#"
              className="mt-7 inline-flex w-full items-center justify-center gap-2 text-[18px] font-semibold text-neutral-900 hover:text-[#6D5BFF] ease-linear duration-200"
            >
              Для маркетологов <ChevronRight className="h-5 w-5" />
            </Link>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <span className="rounded-full bg-white border border-black/5 px-4 py-2 text-sm text-neutral-500 font-semibold">
                A/B тестирование
              </span>
              <span className="rounded-full bg-white border border-black/5 px-4 py-2 text-sm text-neutral-500 font-semibold">
                Конструктор без кода
              </span>
              <span className="rounded-full bg-white border border-black/5 px-4 py-2 text-sm text-neutral-500 font-semibold">
                Локализации
              </span>
              <span className="rounded-full bg-white border border-black/5 px-4 py-2 text-sm text-neutral-500 font-semibold">
                Ориентирование
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
