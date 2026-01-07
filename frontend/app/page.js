import { personalBlogData } from "@/utils/data/personal-blog-data";
import AboutSection from "./components/homepage/about";
import Blog from "./components/homepage/blog";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";
import ContributionGraph from "./components/homepage/contribution-graph";

export default async function Home() {
  const blogs = personalBlogData;

  return (
    <div suppressHydrationWarning >
      <HeroSection />
      <ContributionGraph />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Blog blogs={blogs} />
      <ContactSection />
    </div>
  )
};