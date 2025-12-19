/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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

const fadeInLogos: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.95, ease: easeOut, delay: 0.35 },
  },
};

export function HeroSection() {
  return (
    <section className="bg-[#f7f3f1] h-[calc(100vh-80px)]">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 pt-12 lg:pt-16 pb-10">
        <div className="grid items-center gap-14 lg:grid-cols-[520px_1fr]">
          <div>
            <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}>
              <Badge className="rounded-full bg-white/70 border border-black/10 hover:bg-white font-semibold p-1 text-[#6D5BFF] text-[14px]">
                <span
                  className="mr-2 rounded-full px-2 py-1"
                  style={{ backgroundColor: "rgba(109,91,255,0.10)" }}
                >
                  Гайд
                </span>
                Как вырасти до $100K | Скачать
                <ChevronRight className="ml-1 h-4 w-4" />
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={1}
              className="mt-6 text-[48px] leading-[1.03] sm:text-[60px] lg:text-[64px] font-semibold tracking-tight text-[#6D5BFF]"
            >
              Платформа
              <br />
              для роста
              <br />
              мобильных
              <br />
              приложений
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={2}
              className="mt-5 max-w-115 text-[18px] leading-relaxed text-neutral-500 font-semibold"
            >
              Сэкономьте месяцы на внедрении подписок и удвойте доход от приложения благодаря
              эффективному управлению пейволлами.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={3}
              className="mt-6 flex items-center gap-3"
            >
              <div className="flex w-full max-w-105 items-center rounded-md border border-black/10 bg-white/70 p-1">
                <Input
                  placeholder="Email адрес"
                  className="h-10 border-0 bg-transparent shadow-none focus-visible:ring-0 text-sm"
                />
                <Button className="h-10 rounded-md px-6 text-white hover:opacity-95 bg-[#6D5BFF]">
                  Начать
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>

              <Button
                variant="ghost"
                className="h-10 rounded-full px-0 text-[14px] font-medium hover:bg-transparent text-[#6D5BFF]"
              >
                Запись на демо
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </motion.div>
          </div>

          <div>
            <div className="rounded-md bg-white/55 border border-black/5 shadow-[0_28px_70px_-50px_rgba(0,0,0,0.55)] p-6 sm:p-7 absolute right-20 top-27">
              <div className="rounded-md bg-white relative">
                <Image
                  src={withBasePath("/adapty-overview@2x.webp")}
                  alt="Overview dashboard"
                  width={1220}
                  height={1060}
                  className="h-[55vh] w-[35vw]"
                  priority
                />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.1, ease: easeOut, delay: 0.32 }}
                className="pointer-events-none absolute right-175 top-20 w-52.5 sm:w-57.5 lg:w-50"
              >
                <div className="relative overflow-hidden rounded-[34px]">
                  <Image
                    src={withBasePath("/adapty-paywall-demo-preview@2x.webp")}
                    alt="Paywall preview"
                    width={650}
                    height={600}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <motion.div variants={fadeInLogos} initial="hidden" animate="show" className="mt-40">
          <p className="text-center text-xl text-neutral-400 font-semibold">
            Доверяют более 15,000+ приложений и крупнейших мировых издателей приложений
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-80">
            <img
              src={withBasePath("/logo-feeld-gray.svg")}
              alt="FEELD"
              className="h-6 w-auto grayscale brightness-75 contrast-125 opacity-70"
            />
            <img
              src={withBasePath("/logo-bumble-gray.svg")}
              alt="bumble"
              className="h-6 w-auto grayscale brightness-75 contrast-125 opacity-70"
            />
            <img
              src={withBasePath("/weewoo.svg")}
              alt="weewoo"
              className="h-6 w-auto grayscale brightness-75 contrast-125 opacity-70"
            />
            <img
              src={withBasePath("/AppNation.webp")}
              alt="AppNation"
              className="h-6 w-auto grayscale brightness-75 contrast-125 opacity-70"
            />
            <img
              src={withBasePath("/almus.svg")}
              alt="almus"
              className="h-6 w-auto grayscale brightness-75 contrast-125 opacity-70"
            />
            <img
              src={withBasePath("/logo-text-impala-studios-gray.svg")}
              alt="impala studios"
              className="h-6 w-auto grayscale brightness-75 contrast-125 opacity-70"
            />
            <img
              src={withBasePath("/logo-hubx-gray.svg")}
              alt="HUBX"
              className="h-6 w-auto grayscale brightness-75 contrast-125 opacity-70"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
