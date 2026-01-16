import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Scissors, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Monitora o scroll para mudar o fundo da navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Galeria', href: '#galeria' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md py-4 shadow-xl' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo - Clicável para voltar ao topo */}
        <a href="#" className="flex items-center gap-2 group cursor-pointer">
          <div className="p-2 border border-[#c5a47e] rounded-lg group-hover:bg-[#c5a47e] transition-colors">
            <Scissors size={20} className="text-[#c5a47e] group-hover:text-black" />
          </div>
          <span className="text-white font-bold tracking-tighter text-xl uppercase">
            BARBEARIA DO <span className="text-[#c5a47e]">GUSTAVO</span>
          </span>
        </a>

        {/* Links Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              // Estilização especial para o link de Contato (o último da lista)
              className={link.name === 'Contato' 
                ? "bg-[#c5a47e] text-black px-6 py-2 rounded font-bold text-sm hover:bg-[#b3936d] transition-all"
                : "text-gray-300 hover:text-[#c5a47e] transition-colors text-sm font-medium uppercase tracking-widest"
              }
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Botão Mobile */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu Mobile */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-black/95 p-6 flex flex-col gap-4 border-t border-white/10 md:hidden"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white text-lg font-bold border-b border-white/5 pb-2"
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;