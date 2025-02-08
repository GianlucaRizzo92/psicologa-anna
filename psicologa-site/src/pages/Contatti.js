import React from 'react';
import { motion } from 'framer-motion';

const Contatti = () => {
  return (
    <motion.div
      className="page contatti-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Contatti</h1>
      <p>Per ulteriori informazioni o per fissare un appuntamento, contattami:</p>
      <ul>
        <li>Email: info@psicologa.it</li>
        <li>Telefono: 123-456-7890</li>
        <li>Indirizzo: Via Roma 123, Città</li>
      </ul>
      <img 
        src="https://via.placeholder.com/400x200" 
        alt="Mappa o immagine di contatto" 
        style={{ width: '100%', height: 'auto' }} 
      />
    </motion.div>
  );
};

export default Contatti;
