'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';
import { staggerContainer, fadeInUp } from '@/hooks/use-scroll-animation';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-muted/20"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
        <motion.div
          className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <motion.div 
        className="container z-10 flex flex-col items-center text-center"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div
          variants={fadeInUp}
          className="mb-6 flex items-center gap-2 rounded-full border border-border/50 bg-muted/50 px-4 py-2 backdrop-blur-sm"
        >
          <Sparkles className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium">Cutting-edge Technology Solutions</span>
          <Zap className="h-4 w-4 text-yellow-500" />
        </motion.div>

        {/* Main heading */}
        <motion.h1
          variants={fadeInUp}
          className="font-display text-3xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl max-w-5xl"
        >
          <span className="inline-block">
            <span className="gradient-text">Innovating</span>
          </span>{' '}
          <br className="hidden sm:block" />
          the Future of{' '}
          <span className="relative">
            <span className="relative z-10">Technology</span>
            <motion.span
              className="absolute -inset-2 -z-10 bg-primary/20 blur-xl"
              animate={{
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeInUp}
          className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg md:text-xl lg:text-2xl lg:max-w-3xl"
        >
          We engineer next-generation digital products and AI-powered mobile experiences. Creators of <span className="text-foreground font-semibold">Flashboard</span>, Sri Lanka's leading intelligent Android keyboard with over 2.3M+ global downloads.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeInUp}
          className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:mt-10"
        >
          <Button 
            size="lg" 
            className="group relative overflow-hidden bg-primary text-primary-foreground shadow-lg transition-all hover:shadow-xl hover:scale-105"
            asChild
          >
            <a href="#products" className="flex items-center gap-2">
              Explore Our Ecosystem
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>

          <Button 
            size="lg" 
            variant="outline" 
            className="glass border-2 border-emerald-500/40 hover:border-emerald-500 hover:bg-emerald-500/10 text-foreground transition-all hover:scale-105 flex items-center gap-2.5"
            asChild
          >
            <a
              href="https://play.google.com/store/apps/details?id=com.savinduplus.keyboard&hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="h-4 w-4 fill-current text-emerald-500" viewBox="0 0 24 24">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a2.38 2.38 0 0 1-.61-1.623V3.437c0-.624.23-1.19.61-1.623zM15.207 13.414l2.586 2.586-11.89 6.862 9.304-9.448zm0-2.828L5.903 1.138l11.89 6.862-2.586 2.586zm1.414 1.414l3.774 2.18a1.5 1.5 0 0 0 0-2.597l-3.774-2.18 1.414 1.414z" />
              </svg>
              <span>Flashboard on Google Play (2.3M+)</span>
            </a>
          </Button>

          <Button 
            size="lg" 
            variant="outline" 
            className="glass border-2 hover:bg-muted/50 transition-all hover:scale-105"
            asChild
          >
             <a href="#contact">Contact Us</a>
          </Button>
        </motion.div>

        {/* Stats or social proof */}
        <motion.div
          variants={fadeInUp}
          className="mt-12 grid grid-cols-3 gap-6 text-center sm:mt-16 sm:gap-8 md:gap-12"
        >
          <div>
            <div className="text-xl font-bold text-primary sm:text-3xl">2.3M+</div>
            <div className="text-xs text-muted-foreground sm:text-sm font-medium">Play Store Downloads</div>
          </div>
          <div>
            <div className="text-xl font-bold text-primary sm:text-3xl">Nov 2025</div>
            <div className="text-xs text-muted-foreground sm:text-sm font-medium">Incorporated as Furo (Pvt) Ltd</div>
          </div>
          <div>
            <div className="text-xl font-bold text-primary sm:text-3xl">2027</div>
            <div className="text-xs text-muted-foreground sm:text-sm font-medium">Halo Social App Roadmap</div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="h-6 w-4 rounded-full border-2 border-muted-foreground/50">
          <motion.div
            className="mx-auto mt-1 h-1 w-1 rounded-full bg-muted-foreground/50"
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
}
