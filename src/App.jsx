import React from 'react';
import { Shield, Brain, HandHeart, Users, Flame, CheckCircle, MapPin, Mail, Phone, Swords, Layout, Hexagon, ShieldAlert, Activity } from 'lucide-react';
import { motion } from 'framer-motion';

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const scaleReveal = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
};

function App() {
  return (
    <div className="app">
      {/* 1️⃣ Hero Section */}
      <section className="hero">
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src="/images/hero-kumite.jpg"
          alt="Combat Kumite Intense"
          className="hero-bg"
        />
        <div className="hero-overlay"></div>
        <motion.div
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 className="hero-title" variants={fadeInUp}>
            Discipline. Combat. Maîtrise.
          </motion.h1>
          <motion.p className="hero-subtitle" variants={fadeInUp}>
            Banlieu Karaté Club – Kumite, Kata, Self-défense & Fitness au Sénégal
          </motion.p>
          <motion.div variants={fadeInUp}>
            <motion.button
              className="btn btn-primary"
              onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(193, 18, 31, 0.6)" }}
              whileTap={{ scale: 0.95 }}
            >
              Rejoindre le dojo
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* 2️⃣ Présentation du Dojo */}
      <section className="section container">
        <motion.h2
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          Le Dojo
        </motion.h2>
        <div className="dojo-section">
          <motion.div
            className="dojo-text"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <p>
              <strong>Banlieu Karaté Club</strong> est un dojo moderne au Sénégal, dédié à la formation complète du corps et de l’esprit.
            </p>
            <p>
              À travers le <strong>kihon</strong>, le <strong>kata</strong>, le <strong>kumite</strong>, la self-défense et le fitness, nous formons des pratiquants disciplinés, confiants et mentalement forts.
            </p>
            <p>
              Ici, la tradition rencontre la modernité pour offrir un enseignement d'excellence adapté à tous.
            </p>
          </motion.div>
          <motion.div
            className="dojo-image"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={scaleReveal}
          >
            <img src="/images/dojo-training.jpg" alt="Entraînement au dojo" />
          </motion.div>
        </div>
      </section>

      {/* 3️⃣ Nos Disciplines (NEW) */}
      <section className="section disciplines-bg">
        <div className="container">
          <motion.h2
            className="section-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Nos Disciplines
          </motion.h2>
          <motion.div
            className="disciplines-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            <DisciplineCard
              title="Kumite"
              desc="Combat contrôlé, stratégie, respect de l’adversaire."
              img="/images/kumite.jpg"
              icon={<Swords size={32} />}
              color="#C1121F"
            />
            <DisciplineCard
              title="Kata"
              desc="Techniques traditionnelles, précision et concentration."
              img="/images/kata.jpg"
              icon={<Layout size={32} />}
              color="#000"
            />
            <DisciplineCard
              title="Kihon"
              desc="Bases solides, posture, rigueur technique."
              img="/images/kihon.jpg"
              icon={<Hexagon size={32} />}
              color="#C1121F"
            />
            <DisciplineCard
              title="Self-Défense"
              desc="Réflexes, sécurité personnelle, confiance."
              img="/images/self-defense.jpg"
              icon={<ShieldAlert size={32} />}
              color="#000"
            />
            <DisciplineCard
              title="Fitness Karaté"
              desc="Condition physique, explosivité, endurance."
              img="/images/fitness.jpg"
              icon={<Activity size={32} />}
              color="#C1121F"
            />
          </motion.div>
        </div>
      </section>

      {/* 4️⃣ Programmes */}
      <section className="section container">
        <motion.h2
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Nos Programmes
        </motion.h2>
        <motion.div
          className="programs-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <ProgramCard
            title="Enfants (5-12 ans)"
            desc="Discipline, confiance, respect et coordination."
            img="/images/classes.jpg"
          />
          <ProgramCard
            title="Adolescents"
            desc="Maîtrise, force mentale, canalisation de l’énergie."
            img="/images/hero-karate.jpg"
          />
          <ProgramCard
            title="Adultes"
            desc="Self-défense, fitness, performance et bien-être."
            img="/images/dojo-training.jpg"
          />
        </motion.div>
      </section>

      {/* 5️⃣ Nos Valeurs */}
      <section className="section values-bg">
        <div className="container">
          <motion.h2
            className="section-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Nos Valeurs
          </motion.h2>
          <motion.div
            className="values-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <ValueCard icon={<Shield size={40} />} title="Discipline" />
            <ValueCard icon={<HandHeart size={40} />} title="Respect" />
            <ValueCard icon={<Flame size={40} />} title="Courage" />
            <ValueCard icon={<Brain size={40} />} title="Maîtrise de soi" />
            <ValueCard icon={<Users size={40} />} title="Communauté" />
          </motion.div>
        </div>
      </section>

      {/* 6️⃣ Pourquoi nous choisir ? */}
      <section className="section container">
        <motion.h2
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Pourquoi nous choisir ?
        </motion.h2>
        <div className="why-us-content">
          <motion.div
            className="why-list"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className="why-item" variants={fadeInUp}><CheckCircle size={24} color="#C1121F" /> Entraînements complets</motion.div>
            <motion.div className="why-item" variants={fadeInUp}><CheckCircle size={24} color="#C1121F" /> Encadrement sérieux</motion.div>
            <motion.div className="why-item" variants={fadeInUp}><CheckCircle size={24} color="#C1121F" /> Adapté à tous niveaux</motion.div>
            <motion.div className="why-item" variants={fadeInUp}><CheckCircle size={24} color="#C1121F" /> Ancré au Sénégal</motion.div>
          </motion.div>
        </div>
      </section>

      {/* 7️⃣ Call To Action Final */}
      <section className="cta-section">
        <div className="container">
          <motion.h2
            className="cta-quote"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            « Le karaté est un art de combat, mais surtout une école de vie. »
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <motion.a
              href="tel:+221771923206"
              className="btn btn-black"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}
              whileHover={{ scale: 1.05, backgroundColor: "#222" }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone size={20} />
              Appeler le Sensei
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <span className="footer-logo">BANLIEU KARATÉ CLUB</span>

          <div className="footer-contact-grid">
            <div className="footer-item">
              <MapPin size={24} color="#C1121F" />
              <span>Dakar, Sénégal</span>
            </div>
            <a href="tel:+221771923206" className="footer-item hover-effect">
              <Phone size={24} color="#C1121F" />
              <span>+221 77 192 32 06</span>
            </a>
          </div>

          <p style={{ marginTop: '40px', fontSize: '0.8rem', opacity: 0.6 }}>&copy; {new Date().getFullYear()} Banlieu Karaté Club. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}

// Sub-components
function DisciplineCard({ title, desc, img, icon, color }) {
  return (
    <motion.div
      className="discipline-card"
      variants={fadeInUp}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
    >
      <div className="discipline-image-wrapper">
        <motion.img
          src={img}
          alt={title}
          className="discipline-img"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
        <div className="discipline-overlay" style={{ background: color }}>
          {icon}
        </div>
      </div>
      <div className="discipline-content">
        <h3 className="discipline-title">{title}</h3>
        <p className="discipline-desc">{desc}</p>
      </div>
    </motion.div>
  );
}

function ValueCard({ icon, title }) {
  return (
    <motion.div
      className="value-card"
      variants={fadeInUp}
      whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
    >
      <motion.div
        className="value-icon"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      >
        {icon}
      </motion.div>
      <h3 className="value-title">{title}</h3>
    </motion.div>
  );
}

function ProgramCard({ title, desc, img }) {
  return (
    <motion.div
      className="program-card"
      variants={fadeInUp}
      whileHover={{ y: -5 }}
    >
      <motion.img
        src={img}
        alt={title}
        className="program-bg"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.5 }}
      />
      <div className="program-overlay">
        <h3 className="program-title">{title}</h3>
        <p className="program-desc">{desc}</p>
      </div>
    </motion.div>
  );
}

export default App;
