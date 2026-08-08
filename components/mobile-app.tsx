"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Wallet, Send, Search, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";
import appStoreBadge from "@/public/badges/app-store.svg";
import googlePlayBadge from "@/public/badges/google-play.svg";

export function MobileApp() {
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
      id="mobile-app"
      className="relative py-16 sm:py-24 px-4 sm:px-6 w-full max-w-7xl mx-auto overflow-hidden"
    >
      <div className="flex flex-col items-center text-center">
        <motion.div variants={FADE_UP_ANIMATION_VARIANTS}>
          <Badge variant="secondary" className="gap-2 px-3 py-1 mb-4 border">
            <Smartphone className="size-3.5 text-primary" />
            <span>Mobile App Live</span>
          </Badge>
        </motion.div>

        <motion.h2
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="text-3xl sm:text-5xl font-bold tracking-tight max-w-3xl"
        >
          Browse. Submit. Get paid <br className="hidden sm:inline" />
          <span className="text-primary">directly from your phone.</span>
        </motion.h2>

        <motion.p
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="mt-4 text-muted-foreground text-base sm:text-lg max-w-2xl leading-relaxed"
        >
          Get the full Gibwork experience on iOS and Android. Discover bounties, submit proof of work,
          and track payouts on the go.
        </motion.p>
      </div>

      {/* Feature Grid / UI Mockup Showcases */}
      <motion.div
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-6xl mx-auto"
      >
        {/* Card 1: Browse Bounties */}
        <div className="rounded-2xl border bg-card/60 p-6 flex flex-col justify-between shadow-lg backdrop-blur hover:border-primary/40 transition-all">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Search className="size-5" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Browse & Discover</h3>
                <p className="text-xs text-muted-foreground">Find tasks on the go</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Filter bounties by category, reward size, or required skills straight from your smartphone.
            </p>
          </div>

          {/* Code-rendered phone frame UI mockup */}
          <div className="rounded-2xl border bg-background p-4 shadow-inner">
            <div className="flex items-center justify-between pb-3 border-b text-xs font-semibold">
              <span>Mobile Feed</span>
              <span className="text-primary text-[11px]">Solana Bounties</span>
            </div>
            <div className="mt-3 space-y-2">
              <div className="p-2.5 rounded-lg border bg-muted/30 flex items-center justify-between text-xs">
                <div>
                  <p className="font-medium truncate max-w-[140px]">Landing Page UX Audit</p>
                  <p className="text-[10px] text-muted-foreground">Design / 4d left</p>
                </div>
                <span className="font-bold text-primary">$350 USDC</span>
              </div>
              <div className="p-2.5 rounded-lg border bg-muted/30 flex items-center justify-between text-xs">
                <div>
                  <p className="font-medium truncate max-w-[140px]">Solana Rust Contract</p>
                  <p className="text-[10px] text-muted-foreground">Dev / 2d left</p>
                </div>
                <span className="font-bold text-primary">$500 USDC</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Submit Proof */}
        <div className="rounded-2xl border bg-card/60 p-6 flex flex-col justify-between shadow-lg backdrop-blur hover:border-primary/40 transition-all">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Send className="size-5" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Submit Deliverables</h3>
                <p className="text-xs text-muted-foreground">One-tap work submissions</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Attach pull requests, design links, or proof of completion directly from your device.
            </p>
          </div>

          {/* Code-rendered phone frame UI mockup */}
          <div className="rounded-2xl border bg-background p-4 shadow-inner">
            <div className="flex items-center justify-between pb-3 border-b text-xs font-semibold">
              <span>Submission Form</span>
              <span className="text-emerald-500 text-[11px]">Ready</span>
            </div>
            <div className="mt-3 space-y-2 text-xs">
              <div className="p-2 rounded-lg border bg-muted/40 text-[11px] text-muted-foreground truncate">
                https://github.com/gibwork/pull/12
              </div>
              <div className="p-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-center text-xs shadow">
                Submit Work for Review
              </div>
            </div>
          </div>
        </div>

        {/* Card 3: Wallet Payouts */}
        <div className="rounded-2xl border bg-card/60 p-6 flex flex-col justify-between shadow-lg backdrop-blur hover:border-primary/40 transition-all">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Wallet className="size-5" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Wallet Payouts</h3>
                <p className="text-xs text-muted-foreground">Non-custodial Solana wallet</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Receive USDC and SPL token rewards directly into your connected wallet after your work is approved.
            </p>
          </div>

          {/* Code-rendered phone frame UI mockup */}
          <div className="rounded-2xl border bg-background p-4 shadow-inner">
            <div className="flex items-center justify-between pb-3 border-b text-xs font-semibold">
              <span>Wallet Balance</span>
              <ShieldCheck className="size-4 text-primary" />
            </div>
            <div className="mt-3 text-center p-2">
              <p className="text-xs text-muted-foreground">Total Earned</p>
              <p className="text-xl font-bold text-primary mt-0.5">$1,450.00 USDC</p>
              <div className="mt-2 text-[10px] text-emerald-500 bg-emerald-500/10 py-0.5 rounded font-medium">
                Payout Verified on Solana
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* App Store + Google Play Badges */}
      <motion.div
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <Link
          href={siteConfig.appStoreUrl}
          target="_blank"
          className="hover:scale-105 transition-transform"
        >
          <Image
            src={appStoreBadge}
            alt="Download on the App Store"
            width={160}
            height={48}
            className="h-12 w-auto"
          />
        </Link>
        <Link
          href={siteConfig.playStoreUrl}
          target="_blank"
          className="hover:scale-105 transition-transform"
        >
          <Image
            src={googlePlayBadge}
            alt="Get it on Google Play"
            width={160}
            height={48}
            className="h-12 w-auto"
          />
        </Link>
      </motion.div>
    </motion.section>
  );
}
