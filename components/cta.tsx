"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone } from "lucide-react";
import Ripple from "./ui/ripple";
import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function CTA() {
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
      className="relative py-24 sm:py-32 border-y px-4 sm:px-6 flex items-center w-full max-w-7xl mx-auto justify-center flex-col overflow-hidden"
    >
      <motion.h2
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="font-semibold text-3xl sm:text-4xl text-center"
      >
        Ready to start earning or posting work?
      </motion.h2>
      <motion.p
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="text-center mt-2 text-muted-foreground max-w-xl text-base sm:text-lg"
      >
        Open Gibwork on the web or download the mobile app on iOS and Android to post work, discover bounties, and get paid in crypto.
      </motion.p>

      <motion.div
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-md sm:max-w-none relative z-10"
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

      <Ripple mainCircleSize={320} numCircles={8} mainCircleOpacity={0.2} />
    </motion.section>
  );
}
