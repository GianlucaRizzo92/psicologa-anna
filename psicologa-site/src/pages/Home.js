import React from "react";
import "./Home.css";
import Masonry from "react-masonry-css";  // ① Import di react-masonry-css

// Import immagini come prima
import img from '../img/img.jpeg';
import yoga from '../img/yoga.svg';
import caffe from '../img/coffe.svg';
import loading from '../img/loading.svg';
import relax from '../img/relax.svg';
import call from '../img/call.svg';

// ② Definisci un oggetto per i breakpoint
const breakpointColumnsObj = {
  default: 3,     // Su schermi larghi: 3 colonne
  1100: 2,        // Sotto 1100px: 2 colonne
  700: 1          // Sotto 700px: 1 colonna
};

const Home = () => {
  return (
    <>
      <div className="home-container">
        {/* Sezione Hero */}
        <section className="hero-container">
          <div className="hero-text-col">
            <p className="hero-subtitle">ASSISTENZA PER TE</p>
            <h1 className="hero-title">
              Scopri il potere della tua mente: il primo passo è parlare.
            </h1>
            <p className="hero-description">
              Sono qui per aiutarti a migliorare la tua vita quotidiana attraverso un
              percorso di ascolto e supporto. Il mio obiettivo è la tua serenità.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary">Prenota subito</button>
              <button className="btn-secondary">Contact us</button>
            </div>
          </div>

          <div className="hero-image-col">
            <div className="image-wrapper">
              <img src={img} alt="Hero" />
            </div>
          </div>
        </section>
      </div>

      {/* Sezione Masonry */}
      <section className="resources-section">
        <h2>Esplora le opportunità</h2>
        
        {/* ③ Sostituisci la div .resources-grid con <Masonry> */}
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {/* Card 1 */}
          <div className="resource-card card-orange">
            <div className="card-content">
              <h3 className="card-title">Employers & Employees</h3>
              <p className="card-description">
                With the COVID-19 pandemic having a negative impact on many people’s
                mental wellbeing, here’s a range of resources for employers and
                employees across the city.
              </p>
            </div>
            <div className="card-illustration">
              <img src={caffe} alt="Employers and employees illustration" />
            </div>
          </div>

          {/* Card 2 */}
          <div className="resource-card card-lilac">
            <div className="card-content">
              <p className="card-subtitle">Self-Assessment</p>
              <h3 className="card-title">Stress</h3>
              <p className="card-description">
                Feeling stressed or under pressure? Find tips and exercises to help
                manage daily tension.
              </p>
            </div>
            <div className="card-illustration">
              <img src={yoga} alt="Stress illustration" />
            </div>
          </div>

          {/* Card 3 */}
          <div className="resource-card card-cream">
            <div className="card-content">
              <h3 className="card-title">Take our self assessments</h3>
              <p className="card-description">
                Find out more about your sleep, anxiety, mood, and how you might
                improve them.
              </p>
              <ul className="card-list">
                <li>Assess your sleep, anxiety, mood</li>
                <li>Identify areas for improvement</li>
                <li>Get personalized resources</li>
              </ul>
            </div>
            <div className="card-illustration">
              <img src={loading} alt="Assessment illustration" />
            </div>
          </div>

          {/* Card 4 */}
          <div className="resource-card card-pink">
            <div className="card-content">
              <p className="card-subtitle">Self-Assessment</p>
              <h3 className="card-title">Anxiety</h3>
              <p className="card-description">
                Feeling anxious, can't switch off, or racing thoughts? Try our 
                guided exercises.
              </p>
            </div>
            <div className="card-illustration">
              <img src={relax} alt="Anxiety illustration" />
            </div>
          </div>

          {/* Card 5 */}
          <div className="resource-card card-green">
            <div className="card-content">
              <h3 className="card-title">Mental Health in London</h3>
              <p className="card-description">
                Learn about the city-wide mental health initiatives, professional
                help, and community programs available to you.
              </p>
            </div>
            <div className="card-illustration">
              <img src={call} alt="City illustration" />
            </div>
          </div>

          {/* Card 6 */}
          <div className="resource-card card-dark">
            <div className="card-content">
              <h3 className="card-title">More Topics & Tips</h3>
              <p className="card-description">
                Explore additional articles, workshops, and podcasts focused
                on mindfulness, nutrition, and digital wellbeing.
              </p>
            </div>
            <div className="card-illustration">
              <img src={caffe} alt="Tips illustration" />
            </div>
          </div>
        </Masonry>
      </section>
    </>
  );
};

export default Home;
