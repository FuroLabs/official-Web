import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import PageTransition from '@/components/layout/page-transition';
import Hero from '@/components/sections/hero';
import Products from '@/components/sections/products';
import Services from '@/components/sections/services';
import About from '@/components/sections/about';
import TechVisualizer from '@/components/sections/tech-visualizer';
import Team from '@/components/sections/team';
import Testimonials from '@/components/sections/testimonials';
import Contact from '@/components/sections/contact';

/**
 * The official FuroLabs landing page assembling the Hero, Flagship Products,
 * Services, Journey Roadmap, AI Tech Visualizer, and Contact sections.
 */
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-background via-background to-muted/10">
      <Header />
      <PageTransition>
        <main className="flex-1">
          <Hero />
          <Products />
          <Services />
          <About />
          <TechVisualizer />
          {/* <Team /> */}
          {/* <Testimonials /> */}
          <Contact />
        </main>
      </PageTransition>
      <Footer />
    </div>
  );
}
