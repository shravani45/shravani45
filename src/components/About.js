import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaRocket, FaHeart, FaGraduationCap } from 'react-icons/fa';
import './About.css';

const About = () => {
  const aboutPoints = [
    {
      icon: FaCode,
      title: 'Data Analysis',
      description: 'Expert in translating complex data into actionable insights through statistical analysis and visualization.'
    },
    {
      icon: FaRocket,
      title: 'Machine Learning',
      description: 'Skilled in developing predictive models and algorithms to solve real-world business problems.'
    },
    {
      icon: FaHeart,
      title: 'Business Impact',
      description: 'Focused on delivering data-driven solutions that improve business processes and decision-making.'
    },
    {
      icon: FaGraduationCap,
      title: 'Continuous Learning',
      description: 'Always exploring new techniques in data science, machine learning, and emerging technologies.'
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
            Passionate developer with a love for creating exceptional digital experiences
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
            <h3>Hello! I'm Shravani Anand</h3>
            <p>
              I'm a passionate Data Science student with experience in predictive modeling, data analysis, 
              and analyzing business processes. I love translating complex data into actionable insights 
              that drive business decisions and improvements.
            </p>
            <p>
              Currently pursuing B.Tech in Data Science and Engineering at Manipal Institute of Technology 
              with a CGPA of 8.14. I have hands-on experience through internships at SLB, Mamsys.com, 
              and EaseMyTrip.com, where I've worked on machine learning models and data analytics projects.
            </p>
            <p>
              When I'm not analyzing data, you can find me exploring new machine learning techniques, 
              working on personal projects, or contributing to the data science community through 
              NSS volunteer work and continuous learning.
            </p>
            
            <div className="about-stats">
              <div className="stat">
                <span className="stat-number">3</span>
                <span className="stat-label">Internships</span>
              </div>
              <div className="stat">
                <span className="stat-number">8.14</span>
                <span className="stat-label">Current CGPA</span>
              </div>
              <div className="stat">
                <span className="stat-number">96%</span>
                <span className="stat-label">ML Model Accuracy</span>
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
              <h4>Actuarial Common Entrance Test (ACET)</h4>
              <p>Cleared ACET and student member of Institute of Actuaries of India</p>
            </div>
            <div className="certification-item">
              <div className="cert-icon">🌍</div>
              <h4>Cambridge FCE Certification</h4>
              <p>Certified for proficiency in English language</p>
            </div>
            <div className="certification-item">
              <div className="cert-icon">🤝</div>
              <h4>National Service Scheme (NSS)</h4>
              <p>Active volunteer for community outreach programs</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
