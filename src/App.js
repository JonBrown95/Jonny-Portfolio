
import './index.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ScrollToTopButton from './scripts/ScrollToTop';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <div>
      <div class="snap-y snap-mandatory h-[100dvh] w-screen overflow-y-scroll overflow-x-hidden">
      <Navbar/>
      
      
      <Hero />
      <About />
      <Projects />
      <ScrollToTopButton snapPoint={1} />
    </div>
    
    </div>
    
  );
}

export default App;
