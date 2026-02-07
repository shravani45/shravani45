import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaRocket, FaHeart, FaGraduationCap } from 'react-icons/fa';
import './About.css';

const About = () => {
  const aboutPoints = [
    {
      icon: FaCode,
      title: 'Data Analysis',
      description: 'Translate raw and unstructured data into actionable insights using statistical analysis, exploratory data analysis, and data visualization.'
    },
    {
      icon: FaRocket,
      title: 'Machine Learning, DL & AI',
      description: 'Develop and evaluate machine learning and deep learning models, leveraging AI techniques to solve real-world and business-driven problems.'
    },
    {
      icon: FaHeart,
      title: 'Business Impact',
      description: 'Build AI-powered, data-driven solutions that enhance business processes, improve efficiency, and support informed decision-making.'
    },
    {
      icon: FaGraduationCap,
      title: 'Continuous Learning',
      description: 'Actively upskill by exploring emerging trends in AI, deep learning, and data science through hands-on projects, internships, and experimentation.'
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Data science enthusiast with a love for creating exceptional digital experiences
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>What I Do</h3>
            <p>
              I focus on applying data science and machine learning to solve practical, business-driven problems. My experience spans model development, analytics, and enterprise data workflows, allowing me to bridge the gap between technical solutions and real-world impact.
            </p>
            <p>
              Through internships at SLB, Mamsys.com, and EaseMyTrip, I've worked across diverse domains—finance systems, digital analytics, and predictive modeling—where I contributed to improving efficiency, accuracy, and data-backed decision-making.
            </p>
            <p>
              My academic journey at Manipal Institute of Technology has strengthened my foundation in ML, NLP, statistics, and data engineering, while my projects demonstrate an emphasis on performance, interpretability, and scalability, with models achieving up to 96% accuracy.
            </p>
            <p>
              Beyond structured work, I stay hands-on by experimenting with new ML techniques, building independent projects, and engaging in NSS volunteer activities, which has shaped my collaborative mindset and problem-solving approach.
            </p>
            
            <div className="about-stats">
              <div className="stat">
                <span className="stat-number">3</span>
                <span className="stat-label">Internships</span>
              </div>
              <div className="stat">
                <span className="stat-number">8.14</span>
                <span className="stat-label">CGPA</span>
              </div>
              <div className="stat">
                <span className="stat-number">6+</span>
                <span className="stat-label">Months of Industry Experience</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-features"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {aboutPoints.map((point, index) => (
              <motion.div
                key={point.title}
                className="feature-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="feature-icon">
                  <point.icon />
                </div>
                <h4 className="feature-title">{point.title}</h4>
                <p className="feature-description">{point.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="certifications-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="certifications-title">Certifications & Achievements</h3>
          <div className="certifications-grid">
            <div className="certification-item">
              <div className="cert-icon">🎓</div>
              <h4>PwC Data Analytics & AI Launchpad Program</h4>
              <p>Hands-on training in data analytics, machine learning, and applied AI use cases.</p>
            </div>
            <div className="certification-item">
              <div className="cert-icon">📚</div>
              <h4>NPTEL Certifications</h4>
              <p>Computer Vision · Software Engineering</p>
            </div>
            <div className="certification-item">
              <div className="cert-icon">🎓</div>
              <h4>Actuarial Common Entrance Test (ACET)</h4>
              <p>Qualified and became a Student Member of the Institute of Actuaries of India.</p>
            </div>
            <div className="certification-item">
              <div className="cert-icon">🌍</div>
              <h4>University of Cambridge – FCE Certification</h4>
              <p>Certified proficiency in English communication.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
