
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import HeroSection from './components/HeroSection';
import NavBar from './components/NavBar';
import Work from './components/Work';

function App() {
  return (
    <div className="container">
      <NavBar/>
      <HeroSection/>
      <About/>
      <Work/>
      <Contact/>
      <NavBar/>
    </div>
  );
}

export default App;
