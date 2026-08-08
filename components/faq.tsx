"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";
import { siteConfig } from "@/lib/site-config";
import Link from "next/link";

export function Faq() {
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
      id="faq"
      className="relative py-16 sm:py-24 justify-between lg:flex-row flex-col gap-y-8 gap-x-16 px-4 sm:px-6 flex w-full max-w-7xl mx-auto"
    >
      <div className="shrink-0 lg:text-left text-center">
        <motion.h2
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="font-semibold text-3xl sm:text-4xl"
        >
          Frequently Asked <br className="hidden lg:inline" />
          Questions
        </motion.h2>
        <motion.p
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="text-sm text-muted-foreground mt-2 max-w-xs mx-auto lg:mx-0"
        >
          Everything you need to know about posting work, earning crypto rewards, and using the mobile apps.
        </motion.p>
      </div>

      <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="grow lg:max-w-3xl">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-left font-medium text-base sm:text-lg">
              How do I create work on Gibwork?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
              Open the web app or mobile app, connect your Solana wallet, choose the type of work you want to fund (open source bounty, simple task, or service), define the scope and reward amount, and publish it for global contributors to discover.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left font-medium text-base sm:text-lg">
              What&apos;s the difference between a bounty, a task, and a service?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
              <strong className="text-foreground">Open Source Bounties</strong> are tied to GitHub issues or pull requests to incentivize code fixes and features.<br className="mb-1" />
              <strong className="text-foreground">Simple Tasks</strong> are focused micro-jobs for QA testing, content creation, research, and community growth.<br className="mb-1" />
              <strong className="text-foreground">Services</strong> allow specialists to offer custom scopes and repeatable professional work.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-left font-medium text-base sm:text-lg">
              How do I get paid for completed work?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
              Once you complete a task or bounty, submit your deliverable link or proof of work through Gibwork. After the task creator reviews and approves your submission, the funded reward is instantly transferred to your connected non-custodial wallet.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-left font-medium text-base sm:text-lg">
              What payment methods does Gibwork support?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
              Gibwork supports on-chain payments powered by Solana, including stablecoins like <strong className="text-foreground">USDC</strong> as well as popular <strong className="text-foreground">SPL tokens</strong>.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="text-left font-medium text-base sm:text-lg">
              Is there a mobile app?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
              Yes! Gibwork has official mobile apps for both <Link href={siteConfig.appStoreUrl} target="_blank" className="text-primary font-medium underline">iOS (App Store)</Link> and <Link href={siteConfig.playStoreUrl} target="_blank" className="text-primary font-medium underline">Android (Google Play)</Link>. You can browse bounties, review task details, submit work, and track earnings anywhere.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger className="text-left font-medium text-base sm:text-lg">
              How do I get started on mobile?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
              Simply download the Gibwork app from the Apple App Store or Google Play Store, connect your mobile wallet (such as Phantom or Solflare), and immediately start exploring available work opportunities or posting new bounties.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </motion.div>
    </motion.section>
  );
}
