
import { Toaster } from 'sonner'
import About from './components/about'
import Certification from './components/certification'
import Contact from './components/contact'
import Container from './components/container'
import Education from './components/education'
import Experience from './components/experience'
import Footer from './components/footer'
import Hero from './components/hero'
import Navbar from './components/Navbar'
import Projects from './components/projects'
import Skills from './components/skills'

const App = () => {
  return <div >
  <div className='max-w-4xl mx-auto fixed inset-0 w-full min-h-screen  '>
    <div className='absolute inset-y-0 left-0 h-full w-px bg-gradient-to-b bg-black/10'></div>
    <div className='absolute inset-y-0 right-0 h-full w-px bg-gradient-to-b bg-black/10'></div>

  </div>

<Toaster position='top-right'/>
  <Navbar/>
    <Container  className="md:mt-34 mt-24">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience/>
      <Education />
      <Certification />
      <Contact/>
      <Footer/>
    </Container>
  </div>
      
}

export default App