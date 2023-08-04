
import './index.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ScrollToTopButton from './scripts/ScrollToTop';
import About from './components/About';

function App() {
  return (
    <div>
      <Navbar/>
      <div class="snap-y snap-mandatory h-[100dvh] w-screen overflow-y-scroll overflow-x-hidden">
      
      <Hero />
      <About />
      
      <ScrollToTopButton />
    </div>
    </div>
    
  );
}

export default App;
