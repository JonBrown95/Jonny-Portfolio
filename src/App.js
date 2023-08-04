
import './index.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ScrollToTopButton from './scripts/ScrollToTop';
import About from './components/About';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
