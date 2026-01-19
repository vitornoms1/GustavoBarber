import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import logoImg from '../assets/logo.jpeg';
import bgBarbearia from '../assets/barbearia.jpeg';

const SplitText = ({ text }) => {
  return (
    <span className="inline-block">
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05, duration: 0.5 }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
};

const Hero = () => {
  const phoneNumber = "5551997043829";
  const message = encodeURIComponent("Olá Gustavo! Gostaria de agendar um horário.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <section className="relative h-screen w-full flex items-center justify-center bg-[#0a0a0a] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/70 z-10" />
        <img 
          src={bgBarbearia} 
          alt="Barbearia Background" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-20 text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-6"
        >
          <img src={logoImg} alt="Logo" className="w-20 h-20 md:w-32 md:h-32 object-contain" />
        </motion.div>

        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-4 tracking-tighter leading-tight">
          <SplitText text="BARBEARIA DO GUSTAVO" />
        </h1>
        
        <p className="text-gray-300 text-base md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
          Onde a tradição encontra o estilo moderno. Agende seu horário e viva a experiência premium.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-[#c5a47e] hover:bg-[#b3936d] text-black font-bold py-4 px-8 rounded-md transition-all flex items-center justify-center gap-2 text-sm"
          >
            <Calendar size={18} />
            AGENDAR VIA WHATSAPP
          </a>
          
          <a 
            href="#contato"
            className="w-full sm:w-auto bg-transparent border border-white/30 hover:border-white text-white py-4 px-8 rounded-md transition-all flex items-center justify-center gap-2 text-sm"
          >
            <MapPin size={18} />
            COMO CHEGAR
          </a>
        </div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-xs flex flex-col items-center gap-2"
      >
        <span>Role para descobrir</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-[#c5a47e] to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;