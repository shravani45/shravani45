import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaEye } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Election Result Predictor Using Twitter Data',
      description: 'Developed a political sentiment analysis model using Bidirectional LSTM to classify tweets as positive or negative. Achieved 96% accuracy in sentiment classification and analyzed sentiment trends for BJP and Congress.',
      image: '/api/placeholder/600/400',
      technologies: ['Keras', 'TensorFlow', 'Matplotlib', 'Python', 'LSTM'],
      category: 'ml',
      liveUrl: 'https://github.com/shravani/election-predictor',
      githubUrl: 'https://github.com/shravani/election-predictor',
      featured: true
    },
    {
      id: 2,
      title: 'Handwriting-Based Parkinson\'s Detection',
      description: 'Built a machine learning model to detect Parkinson\'s disease using spiral and wave drawings. Achieved 80% accuracy with KNN and improved to 83% with a Voting Classifier.',
      image: '/api/placeholder/600/400',
      technologies: ['Python', 'scikit-learn', 'OpenCV', 'Matplotlib', 'KNN'],
      category: 'ml',
      liveUrl: 'https://github.com/shravani/parkinsons-detection',
      githubUrl: 'https://github.com/shravani/parkinsons-detection',
      featured: true
    },
    {
      id: 3,
      title: 'Train Ticket Status Prediction',
      description: 'Built a machine learning model to predict train ticket status for EaseMyTrip.com, boosting accuracy by 12% through feature selection and preprocessing.',
      image: '/api/placeholder/600/400',
      technologies: ['Machine Learning', 'Python', 'Feature Engineering', 'Data Analysis'],
      category: 'ml',
      liveUrl: 'https://github.com/shravani/ticket-prediction',
      githubUrl: 'https://github.com/shravani/ticket-prediction',
      featured: true
    },
    {
      id: 4,
      title: 'PowerBI Analytics Dashboard',
      description: 'Built interactive Power BI dashboards to track KPIs and present insights on content performance and search trends for Mamsys.com.',
      image: '/api/placeholder/600/400',
      technologies: ['PowerBI', 'Data Visualization', 'KPI Tracking', 'Analytics'],
      category: 'analytics',
      liveUrl: 'https://github.com/shravani/powerbi-dashboard',
      githubUrl: 'https://github.com/shravani/powerbi-dashboard',
      featured: false
    },
    {
      id: 5,
      title: 'SAP Enable Now Training Module',
      description: 'Created SAP Enable Now training on Intercompany Accounts Receivable/Payable and Return Order Reconciliation using storytelling and gamification techniques.',
      image: '/api/placeholder/600/400',
      technologies: ['SAP Enable Now', 'Training Development', 'Gamification', 'Storytelling'],
      category: 'sap',
      liveUrl: 'https://github.com/shravani/sap-training',
      githubUrl: 'https://github.com/shravani/sap-training',
      featured: false
    },
    {
      id: 6,
      title: 'Knowledge Article Automation',
      description: 'Drove a continuous improvement project, automating knowledge article creation on a ServiceNow-hosted application, improving efficiency by 85%.',
      image: '/api/placeholder/600/400',
      technologies: ['ServiceNow', 'Automation', 'Process Improvement', 'Knowledge Management'],
      category: 'automation',
      liveUrl: 'https://github.com/shravani/knowledge-automation',
      githubUrl: 'https://github.com/shravani/knowledge-automation',
      featured: false
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'ml', label: 'Machine Learning' },
    { key: 'analytics', label: 'Analytics' },
    { key: 'sap', label: 'SAP' },
    { key: 'automation', label: 'Automation' }
  ];

  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' || project.category === activeFilter
  );

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A showcase of my recent work and side projects
          </p>
        </motion.div>

        <motion.div
          className="project-filters"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {filters.map((filter) => (
            <button
              key={filter.key}
              className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        <motion.div
          className="projects-grid"
          layout
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`project-card ${project.featured ? 'featured' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              layout
            >
              <div className="project-image">
                <div className="image-placeholder">
                  <FaCode className="placeholder-icon" />
                  <span>Project Image</span>
                </div>
                <div className="project-overlay">
                  <div className="project-links">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label="View live project"
                    >
                      <FaEye />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label="View source code"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  {project.featured && (
                    <span className="featured-badge">Featured</span>
                  )}
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>

                <div className="project-actions">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    <FaExternalLinkAlt className="btn-icon" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    <FaGithub className="btn-icon" />
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="projects-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="cta-content">
            <h3>Interested in working together?</h3>
            <p>Let's discuss your next project and bring your ideas to life.</p>
            <a href="#contact" className="btn btn-primary">
              Get In Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
