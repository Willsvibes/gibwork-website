"use client";

import { DiscordLogoMark } from "@/components/logo/discord";
import { TwitterLogoMark } from "@/components/logo/twitter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Menu, Smartphone, X, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/work-logo.png";
import { YoutubeLogoMark } from "./logo/youtube";
import { siteConfig } from "@/lib/site-config";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FADE_IN, FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="z-10 border-b bg-background/80 backdrop-blur-sm sticky top-0">
        <motion.div
          variants={FADE_UP_ANIMATION_VARIANTS}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto max-w-7xl px-4 sm:px-6 h-16 w-full flex justify-between items-center gap-2"
        >
          <div className="flex items-center gap-2">
            <Link href={"/"} className="flex items-center gap-2">
              <Image alt="Gibwork logo" src={logo} className="size-10 rounded-md" />
              <p className="font-bold text-3xl min-[420px]:block hidden">gibwork</p>
            </Link>

            <div className="lg:absolute lg:top-1/2 uppercase lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 md:flex hidden">
              <Button asChild variant={"ghost"} className="text-muted-foreground text-xs">
                <Link href={"/#about"}>About</Link>
              </Button>
              <Button asChild variant={"ghost"} className="text-muted-foreground text-xs">
                <Link href={"/#product"}>Product</Link>
              </Button>
              <Button asChild variant={"ghost"} className="text-muted-foreground text-xs">
                <Link href={"/#testimonial"}>Testimonial</Link>
              </Button>
              <Button asChild variant={"ghost"} className="text-muted-foreground text-xs">
                <Link href={"/#faq"}>FAQ</Link>
              </Button>
              <Button asChild variant={"ghost"} className="text-muted-foreground text-xs">
                <Link href={"https://docs.gib.work/"} target="_blank">DOCS</Link>
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center gap-1">
              <Button size={"icon"} variant={"ghost"} asChild>
                <Link href={siteConfig.youtubeUrl} target="_blank">
                  <YoutubeLogoMark className="size-5" />
                </Link>
              </Button>
              <Button size={"icon"} variant={"ghost"} asChild>
                <Link href={siteConfig.discordUrl} target="_blank">
                  <DiscordLogoMark className="size-5" />
                </Link>
              </Button>
              <Button size={"icon"} variant={"ghost"} asChild>
                <Link href={siteConfig.xUrl} target="_blank">
                  <TwitterLogoMark className="size-5" />
                </Link>
              </Button>
            </div>

            <div className="hidden lg:flex items-center gap-1.5 ml-1">
              <Button size={"sm"} variant={"outline"} asChild className="gap-1.5 text-xs">
                <Link href={siteConfig.appStoreUrl} target="_blank">
                  <Smartphone className="size-3.5" />
                  iOS
                </Link>
              </Button>
              <Button size={"sm"} variant={"outline"} asChild className="gap-1.5 text-xs">
                <Link href={siteConfig.playStoreUrl} target="_blank">
                  <Smartphone className="size-3.5" />
                  Android
                </Link>
              </Button>
            </div>

            <Button asChild className="group">
              <Link href={siteConfig.appUrl} target="_blank">
                Open App
                <ArrowRight className="size-0 group-hover:size-5 transition-all -ml-2 group-hover:ml-0" />
              </Link>
            </Button>

            <Button
              size={"icon"}
              variant={"secondary"}
              className="md:hidden"
              onClick={() => setIsOpen(true)}
            >
              <Menu className="size-5" />
            </Button>
          </div>
        </motion.div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={FADE_IN}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="fixed inset-0 bg-background/95 backdrop-blur-md z-50 overflow-y-auto"
          >
            <div className="flex flex-col min-h-screen">
              {/* Header */}
              <div className="px-4 h-16 flex justify-between items-center border-b">
                <Link href={"/"} onClick={() => setIsOpen(false)} className="flex items-center gap-2">
                  <Image alt="Gibwork logo" src={logo} className="size-9 rounded-md" />
                  <p className="font-bold text-xl">gibwork</p>
                </Link>

                <Button size={"icon"} variant={"ghost"} onClick={() => setIsOpen(false)}>
                  <X className="size-6" />
                </Button>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col p-6 space-y-4">
                <p className="text-xs font-bold uppercase tracking-wider text-primary">Navigation</p>
                <div className="flex flex-col space-y-2 text-lg font-medium">
                  <Link
                    href={"/#about"}
                    onClick={() => setIsOpen(false)}
                    className="py-2 border-b border-border/40 text-foreground/90 hover:text-primary transition-colors flex items-center justify-between"
                  >
                    <span>About</span>
                    <ArrowRight className="size-4 text-muted-foreground" />
                  </Link>
                  <Link
                    href={"/#product"}
                    onClick={() => setIsOpen(false)}
                    className="py-2 border-b border-border/40 text-foreground/90 hover:text-primary transition-colors flex items-center justify-between"
                  >
                    <span>Product</span>
                    <ArrowRight className="size-4 text-muted-foreground" />
                  </Link>
                  <Link
                    href={"/#testimonial"}
                    onClick={() => setIsOpen(false)}
                    className="py-2 border-b border-border/40 text-foreground/90 hover:text-primary transition-colors flex items-center justify-between"
                  >
                    <span>Testimonial</span>
                    <ArrowRight className="size-4 text-muted-foreground" />
                  </Link>
                  <Link
                    href={"/#faq"}
                    onClick={() => setIsOpen(false)}
                    className="py-2 border-b border-border/40 text-foreground/90 hover:text-primary transition-colors flex items-center justify-between"
                  >
                    <span>FAQ</span>
                    <ArrowRight className="size-4 text-muted-foreground" />
                  </Link>
                  <Link
                    href={"https://docs.gib.work/"}
                    target="_blank"
                    onClick={() => setIsOpen(false)}
                    className="py-2 border-b border-border/40 text-foreground/90 hover:text-primary transition-colors flex items-center justify-between"
                  >
                    <span>Docs</span>
                    <ExternalLink className="size-4 text-muted-foreground" />
                  </Link>
                </div>
              </div>

              {/* App Downloads & Action Buttons */}
              <div className="px-6 py-4 flex flex-col space-y-3">
                <p className="text-xs font-bold uppercase tracking-wider text-primary">Get Gibwork</p>
                
                <Button asChild size="lg" className="w-full justify-center font-semibold">
                  <Link href={siteConfig.appUrl} target="_blank">
                    Open Web App
                    <ArrowRight className="size-4 ml-2" />
                  </Link>
                </Button>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <Button variant="outline" size="sm" asChild className="w-full justify-center gap-1.5 text-xs h-10">
                    <Link href={siteConfig.appStoreUrl} target="_blank">
                      <Smartphone className="size-4 text-primary" />
                      App Store (iOS)
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild className="w-full justify-center gap-1.5 text-xs h-10">
                    <Link href={siteConfig.playStoreUrl} target="_blank">
                      <Smartphone className="size-4 text-primary" />
                      Google Play
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Footer Socials */}
              <div className="mt-auto p-6 border-t flex items-center justify-between">
                <p className="text-xs text-muted-foreground">(c) gibwork</p>
                <div className="flex items-center gap-3">
                  <Link href={siteConfig.youtubeUrl} target="_blank" className="p-2 text-muted-foreground hover:text-foreground">
                    <YoutubeLogoMark className="size-5" />
                  </Link>
                  <Link href={siteConfig.discordUrl} target="_blank" className="p-2 text-muted-foreground hover:text-foreground">
                    <DiscordLogoMark className="size-5" />
                  </Link>
                  <Link href={siteConfig.xUrl} target="_blank" className="p-2 text-muted-foreground hover:text-foreground">
                    <TwitterLogoMark className="size-5" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
