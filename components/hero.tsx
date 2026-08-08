"use client";

import { SolanaLogoType } from "@/components/logo/solana";
import { Button } from "@/components/ui/button";
import { ArrowRight, BadgeDollarSign, CheckCircle2, Smartphone } from "lucide-react";
import Image from "next/image";
import dashboard from "@/public/dashboard-2.png";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";

export function Hero() {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
      className="relative flex pt-12 sm:pt-24 pb-16 sm:pb-28 text-center flex-col justify-center items-center px-4 sm:px-6 w-full mx-auto max-w-7xl overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_top,hsl(var(--primary)/0.18),transparent_58%)]" />

      <motion.div variants={FADE_UP_ANIMATION_VARIANTS}>
        <Badge variant={"secondary"} className="gap-2 px-3.5 py-1 text-xs sm:text-sm border">
          <Smartphone className="size-3.5 text-primary" />
          <span>Gibwork for Web, iOS, and Android</span>
        </Badge>
      </motion.div>

      <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="relative z-0 max-w-3xl mt-6">
        <h1 className="font-bold text-3xl min-[390px]:text-4xl sm:text-6xl md:text-7xl tracking-tight">
          <span className="block">Create & Complete Bounties.</span>
          <span className="mt-1 block text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-indigo-500">
            Get paid in crypto.
          </span>
        </h1>
      </motion.div>

      <motion.p
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="max-w-3xl mt-5 w-full text-base sm:text-xl text-muted-foreground leading-relaxed"
      >
        The on-chain work marketplace for bounties, tasks, and services.
        Create work or contribute to earn crypto payouts on web and mobile.
      </motion.p>

      <motion.div
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-md sm:max-w-none"
      >
        <Button className="group w-full sm:w-auto px-6 h-12 text-base font-medium" size="lg" asChild>
          <Link href={siteConfig.appUrl} target="_blank">
            Open Web App
            <ArrowRight className="size-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
        <Button className="w-full sm:w-auto px-5 h-12 text-base font-medium" size="lg" variant="outline" asChild>
          <Link href={siteConfig.appStoreUrl} target="_blank">
            <Smartphone className="size-4 mr-2" />
            Download for iOS
          </Link>
        </Button>
        <Button className="w-full sm:w-auto px-5 h-12 text-base font-medium" size="lg" variant="outline" asChild>
          <Link href={siteConfig.playStoreUrl} target="_blank">
            <Smartphone className="size-4 mr-2" />
            Download for Android
          </Link>
        </Button>
      </motion.div>

      <motion.div
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="mt-10 grid w-full max-w-3xl grid-cols-1 gap-3 text-left sm:grid-cols-3"
      >
        {[
          { icon: BadgeDollarSign, label: "Stablecoin payouts", detail: "USDC and SPL token rewards" },
          { icon: CheckCircle2, label: "Submission tracking", detail: "Review, approve, and release" },
          { icon: Smartphone, label: "Mobile app live", detail: "Find and submit work on iOS and Android" },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-lg border bg-background/80 p-4 shadow-sm backdrop-blur transition-all hover:border-primary/40"
          >
            <item.icon className="size-5 text-primary" />
            <p className="mt-3 font-semibold text-sm sm:text-base">{item.label}</p>
            <p className="mt-1 text-xs sm:text-sm text-muted-foreground">{item.detail}</p>
          </div>
        ))}
      </motion.div>

      <motion.div
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="flex items-center gap-2 text-sm mt-8"
      >
        <span className="opacity-80">powered by</span>
        <Link
          href={"https://solana.com/"}
          target="_blank"
          className="hover:scale-105 transition-all"
        >
          <SolanaLogoType className="w-20 fill-foreground" />
        </Link>
      </motion.div>

      <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="mt-12 sm:mt-20 relative z-0 w-full max-w-5xl">
        <div className="rounded-t-lg bg-foreground/5 h-3 mx-12" />
        <div className="rounded-t-lg bg-foreground/10 h-3 mx-6" />
        <div className="rounded-lg overflow-hidden border bg-muted w-full shadow-2xl shadow-primary/10">
          <Image alt="Gibwork Web Dashboard" src={dashboard} priority className="w-full h-auto object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

        {/* Mobile Device Overlay */}
        <div className="absolute -right-2 bottom-6 hidden w-64 rounded-[2rem] border bg-background p-3 text-left shadow-2xl shadow-primary/20 md:block">
          <div className="rounded-[1.5rem] border bg-muted/40 p-4 relative overflow-hidden">
            <div className="mx-auto mb-3 h-1.5 w-12 rounded-full bg-foreground/20" />
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded-full">Mobile App</span>
              <span className="text-[10px] text-muted-foreground">iOS and Android</span>
            </div>
            <div className="rounded-xl border bg-background p-3 shadow-sm">
              <p className="text-[11px] font-medium text-primary">Active Bounty</p>
              <p className="mt-1 text-xs font-semibold line-clamp-2">Gibwork Landing Page Enhancement</p>
              <div className="mt-2.5 flex items-center justify-between pt-2 border-t text-xs">
                <span className="text-muted-foreground text-[11px]">Reward</span>
                <span className="font-bold text-primary">$350.00 USDC</span>
              </div>
            </div>
            <div className="mt-2.5 rounded-xl bg-primary p-2.5 text-primary-foreground text-center">
              <p className="text-xs font-semibold">Submit Proof of Work</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
