'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, Smartphone, Music, Heart, Building2 } from 'lucide-react';
import { useScrollAnimation, staggerContainer, fadeInUp, slideInLeft, slideInRight } from '@/hooks/use-scroll-animation';

const timelineData = [
  {
    year: '2019',
    badge: 'Genesis',
    title: 'The Birth of Flashboard',
    description: 'Began building Flashboard, an ambitious Android keyboard created to redefine how mobile users type, customize, and communicate in Sri Lanka and globally.',
    icon: <Smartphone className="h-5 w-5" />,
    tags: ['Android', 'Kotlin', 'Mobile IME'],
  },
  {
    year: '2020 - 2023',
    badge: 'Rapid Scale & 2.3M+ Downloads',
    title: 'Flashboard Feature Innovation & Scale',
    description: 'Flashboard experienced exponential adoption, crossing 2.3M+ Google Play Store downloads. Rolled out translation, voice typing, text-to-sticker engine, sticker marketplace, in-keyboard calculator, stylish fonts, customizable layouts, and offline dictionary.',
    icon: <TrendingUp className="h-5 w-5" />,
    tags: ['2.3M+ Downloads', 'Sticker Engine', 'Premium Tier'],
  },
  {
    year: '2024',
    badge: 'AI Keyboard & Lyric Library',
    title: 'AI Content Generation & Lyric Library',
    description: 'Integrated generative AI directly into Flashboard, empowering users to draft messages and create smart content on the fly. Simultaneously launched Lyric Library, a dedicated Sinhala song and lyrics platform curated for the Sri Lankan music community.',
    icon: <Music className="h-5 w-5" />,
    tags: ['Gen-AI Keyboard', 'Lyric Library', 'Sinhala Music'],
  },
  {
    year: 'Nov 2025',
    badge: 'Company Incorporation & Revenue Spike',
    title: 'Registered as Furo (Pvt) Ltd & Flash News Launch',
    description: 'Officially registered the company as Furo (Pvt) Ltd, operating commercially under the FuroLabs brand. Rolled out Flash News within Flashboard, driving a massive spike in monthly recurring revenue and daily active user retention.',
    icon: <Building2 className="h-5 w-5" />,
    tags: ['Furo (Pvt) Ltd', 'FuroLabs', 'Flash News', 'Revenue Spike'],
  },
  {
    year: 'Late 2027',
    badge: 'The Next Major Flagship',
    title: 'Halo: Next-Gen Dating & Social Network',
    description: 'Engineering Halo, our upcoming flagship dating and social discovery platform designed for Sri Lankan youth, combining cultural context, safety, and modern social experiences.',
    icon: <Heart className="h-5 w-5" />,
    tags: ['Social Network', 'Dating Platform', 'Sri Lankan Youth'],
  },
];

export default function About() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="about" className="py-24 md:py-32 bg-gradient-to-br from-muted/30 via-background to-muted/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute right-1/4 top-1/3 h-80 w-80 rounded-full bg-gradient-to-r from-emerald-500/10 to-blue-500/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          className="mb-20 text-center"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            variants={fadeInUp}
            className="mb-4 flex justify-center"
          >
            <Badge 
              variant="outline" 
              className="border-primary/50 bg-primary/10 text-primary px-4 py-2"
            >
              Our Journey & Product Roadmap
            </Badge>
          </motion.div>
          
          <motion.h2
            variants={fadeInUp}
            className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
          >
            From Flashboard to{' '}
            <span className="gradient-text">FuroLabs</span>
          </motion.h2>
          
          <motion.p
            variants={fadeInUp}
            className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground lg:text-xl"
          >
            Tracing our evolution from a breakthrough Android keyboard with 2.3M+ downloads to an incorporated software powerhouse launching AI features, media platforms, and next-gen social ecosystems.
          </motion.p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-primary via-primary/50 to-transparent -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-12 md:space-y-16">
            {timelineData.map((item, index) => (
              <motion.div
                key={item.year}
                className="relative"
                variants={index % 2 === 0 ? slideInLeft : slideInRight}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ delay: index * 0.2 }}
              >
                <div className="md:flex md:items-center md:justify-center">
                  {/* Content Card - positioned on alternating sides */}
                  <div className={`w-full md:w-5/12 ${
                    index % 2 === 0 
                      ? 'md:mr-auto md:pr-8' 
                      : 'md:ml-auto md:pl-8'
                  }`}>
                    <Card className="group hover:shadow-2xl transition-all duration-500 bg-background/80 backdrop-blur-sm border-2 hover:border-primary/30">
                      <CardContent className="p-8">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                          <div className="flex items-center gap-3">
                            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                              <div className="text-primary">
                                {item.icon}
                              </div>
                            </div>
                            <Badge 
                              variant="outline" 
                              className="text-primary font-bold border-primary/30 bg-primary/5 text-sm px-3 py-1"
                            >
                              {item.year}
                            </Badge>
                          </div>
                          {item.badge && (
                            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-accent/20 text-accent-foreground border border-accent/30">
                              {item.badge}
                            </span>
                          )}
                        </div>
                        
                        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                          {item.title}
                        </h3>
                        
                        <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                          {item.description}
                        </p>

                        {item.tags && (
                          <div className="mt-4 flex flex-wrap gap-1.5 pt-2 border-t border-border/40">
                            {item.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-xs px-2.5 py-1 rounded-md bg-muted/70 text-foreground/80 font-medium border border-border/40"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Timeline dot - always centered */}
                  <div className="absolute left-1/2 top-8 md:top-1/2 z-10 flex items-center justify-center -translate-x-1/2 -translate-y-1/2">
                    <motion.div
                      className="w-6 h-6 bg-primary rounded-full border-4 border-background shadow-lg"
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.div
                        className="w-full h-full bg-primary/30 rounded-full"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 0, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom stats section */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {[
            { label: 'Active Play Store Downloads', value: '2.3M+' },
            { label: 'Year Product Started', value: '2019' },
            { label: 'Registered Entity', value: 'Furo (Pvt) Ltd' },
            { label: 'Upcoming Major Platform', value: 'Halo (2027)' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              className="group"
            >
              <div className="text-2xl md:text-3xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-muted-foreground mt-2">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
