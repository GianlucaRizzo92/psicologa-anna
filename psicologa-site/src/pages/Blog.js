import React from 'react';
import { motion } from 'framer-motion';

const Blog = () => {
  return (
    <motion.div
      className="page blog-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Blog</h1>
      <p>Leggi gli ultimi articoli e consigli sul benessere psicologico:</p>
      <article className="blog-post">
        <h2>Titolo Articolo 1</h2>
        <p>Anteprima del contenuto dell'articolo...</p>
        <button>Leggi di più</button>
      </article>
      <article className="blog-post">
        <h2>Titolo Articolo 2</h2>
        <p>Anteprima del contenuto dell'articolo...</p>
        <button>Leggi di più</button>
      </article>
    </motion.div>
  );
};

export default Blog;
