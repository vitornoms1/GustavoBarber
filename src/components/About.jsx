import React from 'react';
import { motion } from 'framer-motion';
import gustavoImg from '../assets/gustavo.jpeg';

const About = () => {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-[#050505] px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Lado da Imagem */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group mx-auto md:mx-0"
        >
          {/* Moldura decorativa atrás da foto */}
          <div className="absolute -inset-3 border-2 border-[#c5a47e]/20 rounded-2xl group-hover:border-[#c5a47e]/50 transition-all duration-500 hidden md:block" />
          
          <div className="relative overflow-hidden rounded-xl shadow-2xl">
            <img 
              src={gustavoImg} 
              alt="Gustavo Raniel - Barbeiro" 
              className="w-full max-w-[350px] md:max-w-full h-[450px] md:h-[550px] object-cover grayscale hover:grayscale-0 transition-all duration-700" 
            />
          </div>
        </motion.div>

        {/* Lado do Texto */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-left space-y-6"
        >
          <h2 className="text-[#c5a47e] font-bold tracking-[0.3em] uppercase text-xs md:text-sm">Gustavo Raniel</h2>
          <h3 className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tighter">
            SOBRE MIM
          </h3>
          
          <div className="space-y-4 text-gray-400 text-base md:text-lg leading-relaxed">
            <p>
              Prazer, sou o <span className="text-white font-semibold">Gustavo Raniel</span>. Minha trajetória na barbearia é movida pela paixão em transformar não apenas o visual, mas a autoestima de cada cliente que senta na minha cadeira.
            </p>
            <p>
              Especialista em técnicas de degradê, corte navalhado e barboterapia, busco unir a essência das barbearias clássicas com as tendências mais modernas do mercado. 
            </p>
            <p>
              Aqui na Barbearia do Gustavo, em Esteio, cada detalhe é pensado para oferecer um momento de relaxamento e um acabamento impecável.
            </p>
          </div>

          <div className="pt-6 border-t border-white/10 italic">
            <p className="text-[#c5a47e] font-medium">
              "Qualidade e tradição em cada detalhe."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;