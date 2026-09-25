'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Smartphone,
  Newspaper,
  Music,
  Heart,
  Download,
  Flame,
  ArrowUpRight,
} from 'lucide-react';
import { useScrollAnimation, staggerContainer, fadeInUp } from '@/hooks/use-scroll-animation';

/**
 * Flagship Products section showcasing Flashboard, Flash News, Lyric Library, and Halo
 * in an interactive Bento Grid with live links and accessibility-first animations.
 */
export default function Products() {
  const { ref, isInView } = useScrollAnimation();
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="products" className="py-24 md:py-32 relative overflow-hidden bg-muted/10">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <motion.div
          className="absolute left-1/3 top-1/4 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-sky-500/10 via-indigo-500/10 to-transparent blur-3xl"
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  scale: [1, 1.15, 1],
                  rotate: [0, 90, 0],
                }
          }
          transition={
            shouldReduceMotion
              ? undefined
              : {
                  duration: 22,
                  repeat: Infinity,
                  ease: 'linear',
                }
          }
        />
        <motion.div
          className="absolute right-1/4 bottom-1/4 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-transparent blur-3xl"
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  scale: [1.15, 1, 1.15],
                  rotate: [360, 180, 0],
                }
          }
          transition={
            shouldReduceMotion
              ? undefined
              : {
                  duration: 26,
                  repeat: Infinity,
                  ease: 'linear',
                }
          }
        />
      </div>

      <div className="container mx-auto px-4" ref={ref}>
        {/* Section Heading */}
        <motion.div
          className="mb-16 md:mb-20 text-center"
          variants={shouldReduceMotion ? undefined : staggerContainer}
          initial={shouldReduceMotion ? undefined : 'hidden'}
          animate={shouldReduceMotion ? undefined : isInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={fadeInUp} className="mb-4 flex justify-center">
            <Badge
              variant="outline"
              className="border-primary/50 bg-primary/10 text-primary px-4 py-1.5 text-sm"
            >
              Proprietary Ecosystem
            </Badge>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
          >
            Our Flagship <span className="gradient-text">Products</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="mt-5 max-w-2xl mx-auto text-base text-muted-foreground sm:text-lg lg:text-xl"
          >
            Real software built for massive scale, daily utility, and cultural impact across millions of active devices.
          </motion.p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* 1. Flashboard - Large Marquee Bento Card (Takes 8 cols on LG) */}
          <motion.div
            variants={fadeInUp}
            className="md:col-span-3 lg:col-span-8 group relative rounded-3xl border-2 border-border/60 bg-gradient-to-br from-card/90 via-card/50 to-background/90 p-8 sm:p-10 backdrop-blur-xl transition-all duration-500 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10"
          >
            {/* Ambient accent highlight */}
            <div className="absolute top-0 right-0 h-64 w-64 bg-gradient-to-bl from-primary/15 via-sky-500/10 to-transparent rounded-tr-3xl -z-10 blur-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-60" />

            <div className="flex flex-col h-full justify-between gap-8">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-105 transition-transform duration-300">
                      <Smartphone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold font-display tracking-tight group-hover:text-primary transition-colors">
                        Flashboard
                      </h3>
                      <p className="text-xs text-muted-foreground font-medium">
                        Intelligent Android Keyboard Platform
                      </p>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 text-xs font-semibold">
                    <Download className="h-3.5 w-3.5" />
                    2.3M+ Downloads
                  </span>
                </div>

                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base max-w-2xl mb-6">
                  Our marquee consumer product started in 2019. Now an AI-infused powerhouse featuring generative writing assistance, real-time multilingual translation, an on-demand sticker marketplace, voice typing, custom typography, an in-keyboard calculator, and offline dictionaries.
                </p>

                {/* Feature Pills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {[
                    'AI Writing Assistant',
                    '2.3M+ Google Play Installs',
                    'Sticker Marketplace',
                    'Text-to-Sticker Engine',
                    'Voice Typing',
                    'In-Keyboard Calculator',
                    'Custom Layouts & Fonts',
                    'Offline Dictionaries',
                  ].map((feat) => (
                    <span
                      key={feat}
                      className="px-3 py-1 text-xs rounded-lg bg-muted/70 text-foreground/80 font-medium border border-border/40"
                    >
                      {feat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Link & Store Button */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-border/40">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                  <span
                    aria-hidden="true"
                    className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse motion-reduce:animate-none"
                  />
                  <span>Live on Google Play Store</span>
                </div>

                <Button
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium gap-2 shadow-md hover:shadow-lg transition-all"
                  asChild
                >
                  <a
                    href="https://play.google.com/store/apps/details?id=com.savinduplus.keyboard&hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get on Google Play
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* 2. Flash News - High Engagement Card (Takes 4 cols on LG) */}
          <motion.div
            variants={fadeInUp}
            className="md:col-span-3 lg:col-span-4 group relative rounded-3xl border-2 border-border/60 bg-gradient-to-br from-card/90 via-card/50 to-background/90 p-8 backdrop-blur-xl transition-all duration-500 hover:border-amber-500/40 hover:shadow-2xl hover:shadow-amber-500/10 flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 h-40 w-40 bg-amber-500/10 rounded-tr-3xl -z-10 blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

            <div>
              <div className="flex items-center justify-between gap-3 mb-6">
                <div className="h-12 w-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 group-hover:scale-105 transition-transform duration-300">
                  <Newspaper className="h-6 w-6" />
                </div>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-500 text-xs font-semibold">
                  <Flame className="h-3 w-3" />
                  Revenue Catalyst
                </span>
              </div>

              <h3 className="text-2xl font-bold font-display tracking-tight mb-2 group-hover:text-amber-500 transition-colors">
                Flash News
              </h3>
              <p className="text-xs text-muted-foreground font-medium mb-4">
                Real-Time Streaming News Media
              </p>

              <p className="text-muted-foreground leading-relaxed text-sm">
                Embedded directly into the Flashboard ecosystem, Flash News delivers instant, bite-sized updates. Its release triggered unprecedented daily active retention and a major spike in monthly recurring revenue.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-border/40 flex flex-col gap-3">
              <div className="flex flex-wrap gap-1.5">
                <span className="text-xs px-2.5 py-1 rounded-md bg-muted/70 text-foreground/80 font-medium border border-border/40">
                  Real-Time Feeds
                </span>
                <span className="text-xs px-2.5 py-1 rounded-md bg-muted/70 text-foreground/80 font-medium border border-border/40">
                  Daily Engagement
                </span>
              </div>

              <Button
                variant="outline"
                size="sm"
                className="w-full gap-2 border-border/60 hover:border-amber-500/40 hover:bg-amber-500/10 hover:text-amber-500 transition-all font-medium mt-1"
                asChild
              >
                <a
                  href="https://news.furo.lk/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Furo News
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </Button>
            </div>
          </motion.div>

          {/* 3. Lyric Library - Cultural Media Platform (Takes 6 cols on LG) */}
          <motion.div
            variants={fadeInUp}
            className="md:col-span-3 lg:col-span-6 group relative rounded-3xl border-2 border-border/60 bg-gradient-to-br from-card/90 via-card/50 to-background/90 p-8 backdrop-blur-xl transition-all duration-500 hover:border-violet-500/40 hover:shadow-2xl hover:shadow-violet-500/10 flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 h-48 w-48 bg-violet-500/10 rounded-tr-3xl -z-10 blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

            <div>
              <div className="flex items-center justify-between gap-3 mb-6">
                <div className="h-12 w-12 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-500 group-hover:scale-105 transition-transform duration-300">
                  <Music className="h-6 w-6" />
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-500">
                  Media & Culture
                </span>
              </div>

              <h3 className="text-2xl font-bold font-display tracking-tight mb-2 group-hover:text-violet-500 transition-colors">
                Lyric Library
              </h3>
              <p className="text-xs text-muted-foreground font-medium mb-4">
                Sinhala Song Lyrics & Chords Platform
              </p>

              <p className="text-muted-foreground leading-relaxed text-sm">
                Specially crafted for Sri Lanka's passionate music community, Lyric Library provides an extensive, beautifully indexed archive of Sinhala songs, lyrics, and acoustic chords with instant search and clean typography.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-border/40">
              <div className="flex flex-wrap gap-1.5">
                <span className="text-xs px-2.5 py-1 rounded-md bg-muted/70 text-foreground/80 font-medium border border-border/40">
                  Sinhala Lyrics Database
                </span>
                <span className="text-xs px-2.5 py-1 rounded-md bg-muted/70 text-foreground/80 font-medium border border-border/40">
                  Instant Chords
                </span>
                <span className="text-xs px-2.5 py-1 rounded-md bg-muted/70 text-foreground/80 font-medium border border-border/40">
                  Artist Archive
                </span>
              </div>
            </div>
          </motion.div>

          {/* 4. Halo - Incubating / Future Flagship (Takes 6 cols on LG) */}
          <motion.div
            variants={fadeInUp}
            className="md:col-span-3 lg:col-span-6 group relative rounded-3xl border-2 border-border/60 bg-gradient-to-br from-card/90 via-card/50 to-background/90 p-8 backdrop-blur-xl transition-all duration-500 hover:border-pink-500/40 hover:shadow-2xl hover:shadow-pink-500/10 flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 h-48 w-48 bg-pink-500/10 rounded-tr-3xl -z-10 blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

            <div>
              <div className="flex items-center justify-between gap-3 mb-6">
                <div className="h-12 w-12 rounded-2xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-500 group-hover:scale-105 transition-transform duration-300">
                  <Heart className="h-6 w-6" />
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-500 animate-pulse motion-reduce:animate-none">
                  Incubating | Late 2027
                </span>
              </div>

              <h3 className="text-2xl font-bold font-display tracking-tight mb-2 group-hover:text-pink-500 transition-colors">
                Halo
              </h3>
              <p className="text-xs text-muted-foreground font-medium mb-4">
                Next-Gen Dating & Social Network
              </p>

              <p className="text-muted-foreground leading-relaxed text-sm">
                Our upcoming flagship social discovery application tailored specifically for Sri Lankan youth. Built to unite culture, safety verification, and smart relationship matching into an authentic social experience.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-border/40">
              <div className="flex flex-wrap gap-1.5">
                <span className="text-xs px-2.5 py-1 rounded-md bg-muted/70 text-foreground/80 font-medium border border-border/40">
                  Social Discovery
                </span>
                <span className="text-xs px-2.5 py-1 rounded-md bg-muted/70 text-foreground/80 font-medium border border-border/40">
                  Verified Safety
                </span>
                <span className="text-xs px-2.5 py-1 rounded-md bg-muted/70 text-foreground/80 font-medium border border-border/40">
                  Sri Lankan Youth Generation
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
