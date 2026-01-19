import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Scissors, Zap } from 'lucide-react';

const Services = () => {
  const [activeTab, setActiveTab] = useState('individuais');

  const individuais = [
    { title: "Degradê", price: "R$ 35" },
    { title: "Navalhado", price: "R$ 40" },
    { title: "Social", price: "R$ 30" },
    { title: "Barba", price: "R$ 30" },
    { title: "Sobrancelha", price: "R$ 10" },
    { title: "Platinado", price: "A combinar" }
  ];

  const combos = [
    { title: "Degradê + Barba", price: "R$ 60" },
    { title: "Navalhado + Barba", price: "R$ 65" },
    { title: "Combo 3 em 1 (Degradê)", price: "R$ 65" },
    { title: "Combo 3 em 1 (Navalhado)", price: "R$ 70" }
  ];

  const currentList = activeTab === 'individuais' ? individuais : combos;

  return (
    <section id="servicos" className="py-16 md:py-24 bg-[#0a0a0a] px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[#c5a47e] text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-2">Menu de Serviços</h2>
          <p className="text-3xl md:text-4xl font-bold text-white uppercase">Tabela de Preços</p>
        </div>

        {/* Seleção de Categoria Minimalista */}
        <div className="flex justify-center border-b border-white/10 mb-10">
          <button 
            onClick={() => setActiveTab('individuais')}
            className={`px-8 py-4 font-bold text-sm uppercase tracking-widest transition-all relative ${activeTab === 'individuais' ? 'text-[#c5a47e]' : 'text-gray-500'}`}
          >
            Serviços
            {activeTab === 'individuais' && <motion.div layoutId="underline" className="absolute bottom-0 left-0 w-full h-0.5 bg-[#c5a47e]" />}
          </button>
          <button 
            onClick={() => setActiveTab('combos')}
            className={`px-8 py-4 font-bold text-sm uppercase tracking-widest transition-all relative ${activeTab === 'combos' ? 'text-[#c5a47e]' : 'text-gray-500'}`}
          >
            Combos
            {activeTab === 'combos' && <motion.div layoutId="underline" className="absolute bottom-0 left-0 w-full h-0.5 bg-[#c5a47e]" />}
          </button>
        </div>

        {/* Lista de Preços Estilo Cardápio */}
        <div className="space-y-6">
          {currentList.map((item, index) => (
            <motion.div 
              key={item.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="flex items-end group"
            >
              <div className="flex flex-col text-left">
                <span className="text-white font-bold md:text-xl group-hover:text-[#c5a47e] transition-colors uppercase italic tracking-tighter">
                  {item.title}
                </span>
              </div>
              
              {/* Pontilhado entre nome e preço */}
              <div className="flex-1 border-b border-dotted border-white/20 mx-4 mb-2 opacity-50" />
              
              <span className="text-[#c5a47e] font-black md:text-xl whitespace-nowrap italic">
                {item.price}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;