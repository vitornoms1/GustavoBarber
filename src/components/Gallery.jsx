import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const images = [
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1621605815841-aa3396568195?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1599351431247-f10b21817021?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1532710093739-9470acff878f?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1512690196236-0ec1500355f3?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1622286332618-f28020ee5138?q=80&w=2070&auto=format&fit=crop"
];

const Gallery = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Define quantas fotos mostrar inicialmente
  const displayedImages = isExpanded ? images : images.slice(0, 4);

  return (
    <section id="galeria" className="py-24 bg-[#0a0a0a] px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[#c5a47e] font-bold tracking-widest uppercase mb-2">Nossa Arte</h2>
          <p className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Galeria da Barbearia do Gustavo
          </p>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode='popLayout'>
            {displayedImages.map((src, index) => (
              <motion.div
                key={src} 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ scale: 1.03 }}
                className="relative aspect-square rounded-lg overflow-hidden border border-white/10 shadow-2xl"
              >
                <img 
                  src={src} 
                  alt={`Corte Barbearia do Gustavo ${index + 1}`} 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="flex justify-center mt-12">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="group flex items-center gap-2 bg-transparent border-2 border-[#c5a47e] text-[#c5a47e] hover:bg-[#c5a47e] hover:text-black font-bold py-3 px-8 rounded-full transition-all duration-300"
          >
            {isExpanded ? (
              <> <Minus size={20} /> VER MENOS </>
            ) : (
              <> <Plus size={20} className="group-hover:rotate-90 transition-transform" /> VER GALERIA COMPLETA </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;