import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/hero/Hero';
import { About } from '@/components/about/About';
import { Skills } from '@/components/skills/Skills';
import { Projects } from '@/components/projects/Projects';
import { Experience } from '@/components/experience/Experience';
import { Certifications } from '@/components/certifications/Certifications';
import { Education } from '@/components/education/Education';
import { Contact } from '@/components/contact/Contact';
import { Footer } from '@/components/footer/Footer';
import { ScrollProgress } from '@/components/ui/ScrollProgress';

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <ScrollProgress />
      <Navbar />

      <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
