import Hero from "@/components/portfolio/Hero"
import Navigation from "@/components/portfolio/Navigation"
import MobileNav from "@/components/portfolio/MobileNav"
import ThemeToggle from "@/components/portfolio/ThemeToggle"
import About from "@/components/portfolio/About"
import Experience from "@/components/portfolio/Experience"
import Projects from "@/components/portfolio/Projects"
import Skills from "@/components/portfolio/Skills"
import Contact from "@/components/portfolio/Contact"
import Footer from "@/components/portfolio/Footer"

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Background pattern */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJWMTJoMnY0em0wLTZoLTJWNmgydjR6bTAtNmgtMlYwaDJ2NHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20 dark:opacity-20 opacity-5" />
      </div>

      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Navigation */}
      <Navigation />
      <MobileNav />

      {/* Main content */}
      <main className="relative lg:pl-48">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>

      {/* Cursor glow effect (decorative) */}
      <div className="fixed inset-0 pointer-events-none z-30">
        <div className="spotlight-overlay" />
      </div>
    </div>
  )
}
