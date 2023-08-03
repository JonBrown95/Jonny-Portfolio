
import './index.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ScrollToTopButton from './scripts/ScrollToTop';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Hero />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
