import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scissors, User, Zap, ChevronDown, ChevronUp, Star, ScissorsLineDashed, SprayCan } from 'lucide-react';
import ServiceCard from './ServiceCard';

const Services = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const allServices = [
    { title: "Corte Clássico", price: "R$ 50", description: "Corte tesoura ou máquina, com acabamento impecável.", icon: Scissors },
    { title: "Barba Premium", price: "R$ 40", description: "Barba feita com toalha quente e produtos especializados.", icon: User },
    { title: "Combo Gustavo", price: "R$ 80", description: "O serviço completo para quem não abre mão do estilo.", icon: Zap },
    { title: "Sobrancelha", price: "R$ 20", description: "Design de sobrancelha na navalha ou pinça.", icon: Star },
    { title: "Pezinho / Acabamento", price: "R$ 15", description: "Limpeza rápida do contorno do cabelo e nuca.", icon: ScissorsLineDashed },
    { title: "Pigmentação", price: "R$ 30", description: "Disfarce de falhas e realce do contorno da barba/cabelo.", icon: SprayCan }
  ];

  const displayedServices = isExpanded ? allServices : allServices.slice(0, 3);

  return (
    <section id="servicos" className="py-16 md:py-24 bg-[#0a0a0a] px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-[#c5a47e] text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-2">Nossos Serviços</h2>
          <p className="text-3xl md:text-5xl font-bold text-white leading-tight">
            O QUE OFERECEMOS
          </p>
        </motion.div>
        
        {/* Gap reduzido para mobile para não espalhar demais os cards */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10"
        >
          <AnimatePresence mode='popLayout'>
            {displayedServices.map((service) => (
              <motion.div 
                key={service.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="flex justify-center mt-10 md:mt-12">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent border-2 border-[#c5a47e] text-[#c5a47e] hover:bg-[#c5a47e] hover:text-black font-bold py-3 px-8 md:px-10 rounded-full transition-all duration-300 group text-sm"
          >
            {isExpanded ? (
              <> <ChevronUp size={18} /> VER MENOS </>
            ) : (
              <> <ChevronDown size={18} className="group-hover:translate-y-1 transition-transform" /> VER TODOS OS SERVIÇOS </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;