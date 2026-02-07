import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaPython, 
  FaDatabase,
  FaChartLine,
  FaBrain,
  FaCode,
  FaFileAlt,
  FaCogs
} from 'react-icons/fa';
import { SiJupyter, SiPowerbi, SiMongodb, SiOracle } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming & Core CS',
      skills: [
        { name: 'Python', icon: FaPython, level: 90 },
        { name: 'C++', icon: FaCode, level: 80 },
        { name: 'CUDA', icon: FaCode, level: 75 },
        { name: 'Object-Oriented Programming', icon: FaCogs, level: 85 },
        { name: 'Data Structures & Algorithms (foundational)', icon: FaCogs, level: 80 }
      ]
    },
    {
      title: 'Data Science & Analytics',
      skills: [
        { name: 'Exploratory Data Analysis (EDA)', icon: FaChartLine, level: 90 },
        { name: 'Statistical Analysis', icon: FaChartLine, level: 85 },
        { name: 'Data Visualization', icon: FaChartLine, level: 88 },
        { name: 'Big Data Analytics', icon: FaChartLine, level: 80 }
      ]
    },
    {
      title: 'Machine Learning, DL & AI',
      skills: [
        { name: 'Machine Learning', icon: FaBrain, level: 85 },
        { name: 'Deep Learning', icon: FaBrain, level: 80 },
        { name: 'Computer Vision', icon: FaBrain, level: 75 },
        { name: 'Natural Language Processing (NLP)', icon: FaBrain, level: 80 }
      ]
    },
    {
      title: 'Databases & Data Tools',
      skills: [
        { name: 'Oracle SQL', icon: SiOracle, level: 80 },
        { name: 'MongoDB', icon: SiMongodb, level: 75 },
        { name: 'Power BI', icon: SiPowerbi, level: 85 }
      ]
    },
    {
      title: 'Enterprise & Business Tools',
      skills: [
        { name: 'SAP FI/CO', icon: FaDatabase, level: 85 },
        { name: 'SAP Project System (PS)', icon: FaDatabase, level: 80 },
        { name: 'SAP Enable Now', icon: FaCogs, level: 75 },
        { name: 'Microsoft 365', icon: FaFileAlt, level: 88 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="skill-category"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="skill-header">
                      <div className="skill-icon">
                        <skill.icon />
                      </div>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="skills-summary"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="summary-card">
            <h3>What I Bring to the Table</h3>
            <div className="summary-points">
              <div className="summary-point">
                <div className="point-icon">🧠</div>
                <p>Analytical thinking & problem decomposition — breaking complex problems into structured, solvable components.</p>
              </div>
              <div className="summary-point">
                <div className="point-icon">🤝</div>
                <p>Cross-functional collaboration — working effectively with technical and non-technical stakeholders in academic and industry settings.</p>
              </div>
              <div className="summary-point">
                <div className="point-icon">📢</div>
                <p>Clear communication of insights — translating technical findings into meaningful narratives for decision-making.</p>
              </div>
              <div className="summary-point">
                <div className="point-icon">⚙️</div>
                <p>Ownership & adaptability — quickly learning new tools, domains, and workflows to deliver results in dynamic environments.</p>
              </div>
              <div className="summary-point">
                <div className="point-icon">👥</div>
                <p>Stakeholder management — effectively engaging with diverse stakeholders to align technical solutions with business objectives and ensure successful project delivery.</p>
              </div>
              <div className="summary-point">
                <div className="point-icon">⚡</div>
                <p>Learning in fast-paced environments — thriving in dynamic settings by rapidly acquiring new skills, adapting to changing requirements, and maintaining high performance under pressure.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
