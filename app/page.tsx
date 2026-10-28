import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/hero/Hero';
import { About } from '@/components/about/About';
import { Skills } from '@/components/skills/Skills';
import { Projects } from '@/components/projects/Projects';
import { Quote } from '@/components/quote/Quote';
import { Experience } from '@/components/experience/Experience';
import { Certifications } from '@/components/certifications/Certifications';
import { Education } from '@/components/education/Education';
import { Contact } from '@/components/contact/Contact';
import { Footer } from '@/components/footer/Footer';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { RevealController } from '@/components/motion/RevealController';
import { homeJsonLd, serializeJsonLd } from '@/lib/structured-data';

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(homeJsonLd()) }}
      />
      <ScrollProgress />
      <RevealController />
      <Navbar />

      <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Quote />
        <Experience />
        <Certifications />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
