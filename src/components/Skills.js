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
      title: 'Programming Languages',
      skills: [
        { name: 'Python', icon: FaPython, level: 90 },
        { name: 'C++', icon: FaCode, level: 80 },
        { name: 'Object-Oriented Programming', icon: FaCogs, level: 85 },
        { name: 'Parallel Programming', icon: FaCogs, level: 75 }
      ]
    },
    {
      title: 'Data Science & ML',
      skills: [
        { name: 'Machine Learning', icon: FaBrain, level: 85 },
        { name: 'Deep Learning', icon: FaBrain, level: 80 },
        { name: 'Data Analysis', icon: FaChartLine, level: 90 },
        { name: 'Statistical Analysis', icon: FaChartLine, level: 85 },
        { name: 'Data Visualization', icon: FaChartLine, level: 88 }
      ]
    },
    {
      title: 'Tools & Platforms',
      skills: [
        { name: 'PowerBI', icon: SiPowerbi, level: 85 },
        { name: 'Jupyter Notebook', icon: SiJupyter, level: 90 },
        { name: 'Microsoft Office', icon: FaFileAlt, level: 88 },
        { name: 'Google Keyword Planner', icon: FaChartLine, level: 75 }
      ]
    },
    {
      title: 'Databases & SAP',
      skills: [
        { name: 'Oracle SQL', icon: SiOracle, level: 80 },
        { name: 'MongoDB', icon: SiMongodb, level: 75 },
        { name: 'SAP FI/CO', icon: FaDatabase, level: 85 },
        { name: 'SAP Project System', icon: FaDatabase, level: 80 },
        { name: 'SAP Enable Now', icon: FaCogs, level: 75 }
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
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 + 0.5 }}
                        viewport={{ once: true }}
                      />
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
                <div className="point-icon">📊</div>
                <p>Advanced data analysis and statistical modeling techniques</p>
              </div>
              <div className="summary-point">
                <div className="point-icon">🤖</div>
                <p>Machine learning model development and optimization</p>
              </div>
              <div className="summary-point">
                <div className="point-icon">📈</div>
                <p>Interactive dashboards and data visualization</p>
              </div>
              <div className="summary-point">
                <div className="point-icon">💼</div>
                <p>Business process improvement through data insights</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
