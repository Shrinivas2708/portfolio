
import About from './components/about'
import Container from './components/container'
import Hero from './components/hero'
import Navbar from './components/Navbar'
import Skills from './components/skills'

const App = () => {
  return <div >
  <div className='max-w-4xl mx-auto fixed inset-0 w-full min-h-screen  '>
    <div className='absolute inset-y-0 left-0 h-full w-px bg-gradient-to-b bg-black/10'></div>
    <div className='absolute inset-y-0 right-0 h-full w-px bg-gradient-to-b bg-black/10'></div>

  </div>


  <Navbar/>
    <Container  className="md:mt-34 mt-24">
      <Hero />
      <About />
      <Skills />
    </Container>
  </div>
      
}

export default App