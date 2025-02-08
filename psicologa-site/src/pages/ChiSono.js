import React from 'react';
import { motion } from 'framer-motion';

const ChiSono = () => {
  return (
    <motion.div
      className="page chi-sono-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Chi Sono</h1>
      <p>Sono una psicologa con anni di esperienza, specializzata in [inserisci specializzazione]. Il mio approccio si basa su [descrizione del metodo o approccio terapeutico].</p>
      <img 
        src="https://via.placeholder.com/600x300" 
        alt="Foto della psicologa" 
        style={{ width: '100%', height: 'auto' }} 
      />
    </motion.div>
  );
};

export default ChiSono;
