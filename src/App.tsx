
import Container from './components/container'
import Hero from './components/hero'
import Navbar from './components/Navbar'

const App = () => {
  return <div >
  <div className='max-w-5xl mx-auto absolute inset-0 w-full h-full '>
    <div className='absolute inset-y-0 left-0 h-full w-px bg-gradient-to-b bg-black/10'></div>
    <div className='absolute inset-y-0 right-0 h-full w-px bg-gradient-to-b bg-black/10'></div>

  </div>
  <Navbar/>
    <Container  className="mt-24">
      <Hero />
    </Container>
  </div>
      
}

export default App