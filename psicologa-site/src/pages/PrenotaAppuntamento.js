import React from 'react';
import { motion } from 'framer-motion';

const PrenotaAppuntamento = () => {
  return (
    <motion.div
      className="page prenota-appuntamento-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Prenota un Appuntamento</h1>
      <p>Compila il modulo sottostante per prenotare il tuo appuntamento online:</p>
      <form className="appointment-form">
        <div>
          <label>Nome:</label>
          <input type="text" placeholder="Inserisci il tuo nome" required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" placeholder="Inserisci la tua email" required />
        </div>
        <div>
          <label>Data e Ora:</label>
          <input type="datetime-local" required />
        </div>
        <button type="submit">Prenota</button>
      </form>
    </motion.div>
  );
};

export default PrenotaAppuntamento;
