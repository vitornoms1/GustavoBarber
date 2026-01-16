import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import NavBar from './components/Navbar.jsx';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen">

      <NavBar />

      <Hero />
      <Services />
      <Gallery />
      <Footer />
      
      <WhatsAppButton />
    </main>
  );
}

export default App;