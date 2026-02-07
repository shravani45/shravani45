import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Election Result Predictor Using Twitter Data',
      description: 'Developed an NLP-based political sentiment analysis system using a Bidirectional LSTM to classify Twitter data into positive and negative sentiment. The project involved large-scale text preprocessing, model training, and sentiment trend analysis to study public opinion patterns for major political parties such as BJP and Congress.',
      image: `${process.env.PUBLIC_URL}/images/lstm.png`,
      technologies: ['Python', 'TensorFlow', 'Keras', 'LSTM', 'Matplotlib'],
      category: 'ml',
      featured: true
    },
    {
      id: 2,
      title: 'Handwriting-Based Parkinson\'s Disease Detection',
      description: 'Built a machine learning pipeline to identify early signs of Parkinson\'s disease using spiral and wave drawing patterns. Implemented and compared multiple models, achieving improved performance by combining classifiers through an ensemble-based Voting Classifier.',
      image: `${process.env.PUBLIC_URL}/images/parkinson.png`,
      technologies: ['Python', 'scikit-learn', 'OpenCV', 'KNN', 'Matplotlib'],
      category: 'ml',
      featured: true
    }
  ];

  const filteredProjects = projects;

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
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-img"
                />
              </div>

              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  <span className="tech-label">Tech Stack:</span>
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
