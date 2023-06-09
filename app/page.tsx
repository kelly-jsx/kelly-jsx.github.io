import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'

export default function Home() {
  return (
    <main className="w-screen h-full bg-base text-text">
      <Hero />
      <Header />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}
