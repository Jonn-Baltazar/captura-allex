import GrowthSection from './components/GrowthSection';
import Hero from './components/Hero';
import MethodologySection from './components/MethodologySection';
import ServicesSection from './components/ServicesSection';
import Footer from './components/Footer';
import EventRegistrationSection from './components/EventRegistrationSection';
import AboutSection from './components/AboutSection';


function App() {
  return (
    <div className="app">
      <Hero />
      <GrowthSection />
      <ServicesSection />
      <MethodologySection />
      <EventRegistrationSection />
      <AboutSection />
      <Footer />
    </div>
  )
}

export default App
