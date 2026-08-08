"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";
import { Smartphone } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const workDetails = [
  {
    image: "/tasks/image-01.png",
    title: "Design gibwork's new landing page",
    amount: 500,
    token: "usdc",
  },
  {
    image: "/tasks/image-02.png",
    title: "Create developer challenges for Zircon",
    amount: 500,
    token: "usdc",
  },
  {
    image: "/tasks/image-03.png",
    title: "Use slug- to share a set of links on X or Reddit",
    amount: 100,
    token: "usdc",
  },
];

export function LookingFor() {
  return (
    <section id="about" className="relative max-w-5xl mx-auto w-full py-16 sm:py-24 px-4 sm:px-6">
      <Tabs defaultValue="1" className="w-full flex flex-col items-center">
        <motion.div
          variants={FADE_UP_ANIMATION_VARIANTS}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <TabsList className="mx-auto rounded-full">
            <TabsTrigger className="rounded-full px-4" value="1">
              Looking for Help
            </TabsTrigger>
            <TabsTrigger className="rounded-full px-4" value="2">
              Looking for Work
            </TabsTrigger>
          </TabsList>
        </motion.div>

        <TabsContent value="1" className="mt-8 w-full max-w-7xl">
          <motion.div
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
            className="flex flex-col items-center"
          >
            <motion.h2
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="text-3xl sm:text-4xl text-center font-semibold"
            >
              Turn project needs into funded work
            </motion.h2>

            <motion.p
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="text-center mt-2 text-muted-foreground"
            >
              Create clear opportunities for builders, creatives, operators, and
              researchers, then review the work in one place.
            </motion.p>

            <motion.div
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="grid lg:grid-cols-3 gap-4 mt-8 lg:max-w-full max-w-3xl mx-auto"
            >
              <Card className="overflow-hidden border bg-card/80 hover:border-primary/40 transition-all">
                <Image
                  src="https://cdn.gib.work/misc/open_source_bounty.png"
                  alt="Open Source Bounty"
                  className="h-40 w-full object-cover"
                  width={400}
                  height={160}
                />
                <CardHeader className="border-t">
                  <CardTitle className="text-lg">Open Source Bounty</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    Incentivize code contributions and pull requests from global developers by funding GitHub issues directly.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="overflow-hidden border bg-card/80 hover:border-primary/40 transition-all">
                <Image
                  src="https://cdn.gib.work/misc/simple_task.png"
                  alt="Simple Task"
                  className="h-40 w-full object-cover"
                  width={400}
                  height={160}
                />
                <CardHeader className="border-t">
                  <CardTitle className="text-lg">Simple Task</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    Outsource QA testing, content creation, community engagement, and research with clear, actionable deliverables.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="overflow-hidden border bg-card/80 hover:border-primary/40 transition-all">
                <Image
                  src="https://cdn.gib.work/misc/services.png"
                  alt="Services"
                  className="h-40 w-full object-cover"
                  width={400}
                  height={160}
                />
                <CardHeader className="border-t">
                  <CardTitle className="text-lg">Services</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    Hire proven specialists for custom deliverables and repeatable support without turning every need into a long hiring process.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          </motion.div>
        </TabsContent>

        <TabsContent value="2" className="mt-8 w-full max-w-3xl">
          <motion.div
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
            className="flex flex-col items-center"
          >
            <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="gap-1.5 py-0.5 text-xs">
                <Smartphone className="size-3 text-primary" />
                Also available on the mobile app
              </Badge>
            </motion.div>

            <motion.h2
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="text-3xl sm:text-4xl text-center font-semibold"
            >
              Complete work from web or mobile
            </motion.h2>

            <motion.p
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="text-center mt-2 text-muted-foreground"
            >
              Browse paid bounties, understand the requirements, submit your
              deliverable, and follow progress from review to payout.
            </motion.p>

            <motion.div
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="flex flex-col gap-2 mt-8 w-full"
            >
              {workDetails.map((_detail) => (
                <Card
                  key={_detail.title}
                  className="p-4 flex items-center gap-4 hover:border-primary/40 transition-all"
                >
                  <div className="relative aspect-square rounded-full shrink-0 w-12 bg-muted overflow-hidden">
                    <Image
                      alt={_detail.title}
                      fill
                      src={_detail.image}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <p className="font-semibold grow truncate text-sm sm:text-base">{_detail.title}</p>

                  <div className="font-semibold flex items-center justify-end gap-2 shrink-0">
                    <p className="text-sm sm:text-base">{_detail.amount}</p>
                    <div className="relative aspect-square rounded-full w-7 bg-muted overflow-hidden">
                      <Image
                        alt={_detail.token}
                        fill
                        src={`/token-${_detail.token}.png`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </Card>
              ))}
            </motion.div>
          </motion.div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
