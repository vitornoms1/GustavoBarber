import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const ServiceCard = ({ title, price, description, icon: Icon }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative h-96 w-full rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 p-8 border border-white/10"
    >
      <div style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }} className="absolute inset-4 grid place-content-center rounded-xl bg-[#1a1a1a] shadow-lg border border-[#c5a47e]/20">
        <Icon style={{ transform: "translateZ(50px)" }} className="mx-auto text-[#c5a47e] mb-4" size={50} />
        <h3 style={{ transform: "translateZ(50px)" }} className="text-center text-2xl font-bold text-white mb-2">
          {title}
        </h3>
        <p style={{ transform: "translateZ(50px)" }} className="text-center text-gray-400 px-4 mb-4">
          {description}
        </p>
        <span style={{ transform: "translateZ(50px)" }} className="text-center text-[#c5a47e] text-3xl font-black">
          {price}
        </span>
      </div>
    </motion.div>
  );
};

export default ServiceCard;