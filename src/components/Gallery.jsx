import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import corte1 from '../assets/corte1.jpeg';
import corte2 from '../assets/corte2.jpeg';
import corte3 from '../assets/corte3.jpeg';
import corte4 from '../assets/corte4.jpeg';
import corte5 from '../assets/corte5.jpeg';
import corte6 from '../assets/corte6.jpeg';
import corte7 from '../assets/corte7.jpeg';
import corte8 from '../assets/corte8.jpeg';
import corte9 from '../assets/corte9.jpeg';
import corte10 from '../assets/corte10.jpeg';

const images = [corte1, corte2, corte3, corte4, corte5, corte6, corte7, corte8, corte9, corte10];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <section id="galeria" className="py-16 md:py-24 bg-[#0a0a0a] px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-[#c5a47e] text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-2">Nossa Arte</h2>
        <p className="text-3xl md:text-5xl font-bold text-white mb-12">Galeria da Barbearia</p>

        {/* Esse container agora limita onde as setas podem ir */}
        <div className="relative mx-auto w-full max-w-[320px] sm:max-w-[400px]">
          
          {/* Seta Esquerda - Agora ancorada ao container da imagem */}
          <button
            onClick={prevSlide} 
            className="absolute -left-12 md:-left-16 top-1/2 -translate-y-1/2 z-40 p-2 text-[#c5a47e] hover:scale-110 transition-transform"
          >
            <ChevronLeft size={44} strokeWidth={1} />
          </button>

          {/* Área da Imagem */}
          <div className="relative w-full aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={images[currentIndex]}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full object-cover" 
                alt={`Corte ${currentIndex + 1}`}
              />
            </AnimatePresence>
          </div>

          {/* Seta Direita - Agora ancorada ao container da imagem */}
          <button 
            onClick={nextSlide} 
            className="absolute -right-12 md:-right-16 top-1/2 -translate-y-1/2 z-40 p-2 text-[#c5a47e] hover:scale-110 transition-transform"
          >
            <ChevronRight size={44} strokeWidth={1} />
          </button>
        </div>

        {/* Indicadores (Dots) */}
        <div className="flex justify-center gap-2 mt-8">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1 transition-all rounded-full ${
                currentIndex === index ? 'bg-[#c5a47e] w-8' : 'bg-gray-800 w-4'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;