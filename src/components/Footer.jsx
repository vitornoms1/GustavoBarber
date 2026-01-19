import React from 'react';
import { Phone, Instagram, MapPin, Clock, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contato" className="bg-[#050505] pt-20 pb-10 px-6 border-t border-[#c5a47e]/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        
        <div className="space-y-6">
          <h3 className="text-[#c5a47e] text-2xl font-bold mb-4">Barbearia do Gustavo</h3>
          <p className="text-gray-400 flex items-center gap-3 text-sm md:text-base">
            <MapPin className="text-[#c5a47e]" size={20} />
            R. Rio Grande, 1128 - Centro, Esteio - RS
          </p>
          <p className="text-gray-400 flex items-center gap-3 text-sm md:text-base">
            <Phone className="text-[#c5a47e]" size={20} />
            (51) 99704-3829
          </p>
          <div className="flex gap-4 pt-4">
            <a href="https://www.instagram.com/barbearia_do_gustavoo/" target="_blank" className="p-4 bg-white/10 text-white rounded-full border border-white/20 hover:bg-[#E1306C] transition-all">
              <Instagram size={24} />
            </a>
            <a href="https://wa.me/5551997043829" target="_blank" className="p-4 bg-white/10 text-white rounded-full border border-white/20 hover:bg-[#25D366] transition-all">
              <MessageCircle size={24} />
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-white text-xl font-bold mb-4 flex items-center gap-2">
            <Clock className="text-[#c5a47e]" size={20} /> Horários
          </h3>
          <ul className="text-gray-400 space-y-2 text-sm md:text-base">
            <li className="flex justify-between border-b border-white/5 pb-2">
              <span>Segunda - Sábado</span> <span>08:00 - 20:00</span>
            </li>
            <li className="flex justify-between text-[#c5a47e] font-bold">
              <span>Domingo</span> <span>Fechado</span>
            </li>
          </ul>
        </div>

        <div className="rounded-xl overflow-hidden h-64 border border-white/10 grayscale hover:grayscale-0 transition-all duration-500">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3459.723385617304!2d-51.1834164!3d-29.8722513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95196f7c16694e97%3A0x6a0a0a0a0a0a0a0a!2sR.%20Rio%20Grande%2C%201128%20-%20Centro%2C%20Esteio%20-%20RS!5e0!3m2!1spt-BR!2sbr!4v1700000000000" 
            width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" title="Localização"
          ></iframe>
        </div>
      </div>

      <div className="text-center pt-10 border-t border-white/5 text-gray-600 text-xs md:text-sm">
        <p>© 2026 Barbearia do Gustavo. Desenvolvido por Vitor Noms.</p>
      </div>
    </footer>
  );
};

export default Footer;