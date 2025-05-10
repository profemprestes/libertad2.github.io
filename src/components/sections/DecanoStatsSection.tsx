
'use client';

import { Trophy, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export function DecanoStatsSection() {
  const titleParts = "Decano de las Instituciones Deportivas de Canelones".split(" ");
  const firstPartTitle = titleParts.slice(0, 2).join(" "); // "Decano de"
  const secondPartTitle = titleParts.slice(2).join(" "); // "las Instituciones Deportivas de Canelones"


  return (
    <motion.section 
      className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/50 dark:from-background dark:to-secondary/20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4 text-center">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-tight drop-shadow-lg">
            <span className="text-primary">{firstPartTitle}</span>
            <span className="text-foreground"> {secondPartTitle} </span>
            <span role="img" aria-label="Bandera de Uruguay" className="ml-2 inline-block">🇺🇾</span>
          </h2>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center text-2xl sm:text-3xl md:text-4xl font-semibold text-accent mt-8 mb-10 drop-shadow-md"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Trophy className="h-10 w-10 md:h-12 md:w-12 mr-3 text-yellow-500 filter drop-shadow-lg" />
            <span>15</span>
            <span className="text-xl sm:text-2xl md:text-3xl text-foreground/80 ml-2 mr-4">Campeonatos Monegal</span>
            <Star className="h-8 w-8 md:h-10 md:w-10 mr-2 text-yellow-400 filter drop-shadow-lg" />
          </motion.div>

          <motion.p 
            className="text-lg md:text-xl text-muted-foreground leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Un legado de gloria y tradición que nos enorgullece. Desde 1906, escribiendo la historia grande del fútbol canario, consolidándonos como una institución referente en el deporte y la comunidad.
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
}
