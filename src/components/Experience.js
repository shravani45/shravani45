import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Associate Business Process Analyst Intern',
      company: 'SLB',
      companyUrl: 'https://www.slb.com/',
      location: 'Coimbatore, India',
      period: 'Jun 2025 – Jan 2026',
      type: '',
      description: 'Supporting new SAP releases in the Record-to-Report (Finance) domain, with hands-on exposure to SAP FI/CO and SAP Project System (PS) in global enterprise workflows.',
      achievements: [
        'Collaborated with cross-functional teams and global stakeholders to gather, manage, and deliver business requirements.',
        'Led a User Engagement initiative within the Change Management team by creating structured training content using SAP Enable Now.',
        'Drove a continuous improvement project by automating ServiceNow knowledge article creation, resulting in an ~85% efficiency improvement.',
        'Worked closely on Project Accounting and Intercompany AR/AP processes, gaining end-to-end finance domain exposure.'
      ],
      technologies: ['SAP FI/CO', 'SAP Project System', 'SAP Enable Now', 'ServiceNow', 'Change Management', 'Planisware', 'Python', 'Flask']
    },
    {
      title: 'Digital Analytics Intern',
      company: 'Mamsys.com',
      companyUrl: 'https://mamsys.com/',
      location: 'Noida, India',
      period: 'Jun 2024 – Jul 2024',
      type: 'Internship',
      description: 'Worked on search behavior and content performance analysis to improve digital visibility among CXOs and senior leadership audiences.',
      achievements: [
        'Built interactive Power BI dashboards to track KPIs and communicate insights to stakeholders.',
        'Analyzed search trends and content performance to support strategic decision-making.',
        'Designed a data-driven keyword strategy to improve targeted audience engagement.',
        'Created analytical reports to guide content optimization and campaign planning.'
      ],
      technologies: ['Power BI', 'Data Analysis', 'Google Keyword Planner', 'KPI Tracking', 'Content Analytics']
    },
    {
      title: 'Data Science Intern',
      company: 'EaseMyTrip.com',
      companyUrl: 'https://www.easemytrip.com/',
      location: 'Noida, India',
      period: 'Dec 2023',
      type: 'Internship',
      description: 'Built and evaluated machine learning models while performing exploratory data analysis on large-scale booking data to support operational decisions.',
      achievements: [
        'Developed an ML-based train ticket status prediction model, improving accuracy by ~12% through feature engineering.',
        'Performed data preprocessing, feature selection, and EDA to identify booking patterns and trends.',
        'Translated analytical findings into actionable operational insights for business teams.'
      ],
      technologies: ['Python', 'Machine Learning', 'Data Analysis', 'Feature Engineering', 'Predictive Modeling']
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Technology (B.Tech) in Data Science and Engineering',
      institution: 'Manipal Institute of Technology',
      location: 'Manipal, India',
      period: 'Sept 2022 – July 2026',
      description: 'Currently pursuing with a CGPA of 8.14. Focused on data science, machine learning, and engineering principles.',
      relevantCourses: ['Machine Learning', 'Data Analysis', 'Statistical Analysis', 'Database Systems', 'Programming', 'Big Data Analytics and AI', 'Object Oriented Programming']
    },
    {
      degree: 'Intermediate (12th Grade)',
      institution: 'Amity International School',
      location: 'Mayur Vihar, Delhi, India',
      period: 'March 2021 – March 2022',
      description: 'Completed with 95% score. Strong foundation in mathematics and science.',
      relevantCourses: ['Mathematics', 'Physics', 'Chemistry', 'English']
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Experience & Education</h2>
          <p className="section-subtitle">
            My professional journey and educational background
          </p>
        </motion.div>

        <div className="experience-content">
          <motion.div
            className="experience-section"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="subsection-title">
              <FaBriefcase className="title-icon" />
              Work Experience
            </h3>
            <div className="timeline">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="timeline-item"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <div className="experience-header">
                      <h4 className="experience-title">{exp.title}</h4>
                      <div className="experience-meta">
                        <a 
                          href={exp.companyUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="company-link"
                        >
                          <span className="company">{exp.company}</span>
                        </a>
                        <span className="period">{exp.period}</span>
                        {exp.type && exp.type !== '' && <span className="experience-type">| {exp.type}</span>}
                      </div>
                      <div className="experience-location">
                        <FaMapMarkerAlt className="location-icon" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    <p className="experience-description">{exp.description}</p>
                    <div className="achievements">
                      <h5>Key Contributions & Impact:</h5>
                      <ul>
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="technologies">
                      <span className="tech-label">Tools & Skills:</span>
                      {exp.technologies.map((tech, idx) => (
                        <span key={idx} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="education-section"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="subsection-title">
              <FaCalendarAlt className="title-icon" />
              Education
            </h3>
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="education-item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="education-header">
                  <h4 className="degree">{edu.degree}</h4>
                  <div className="education-meta">
                    <span className="institution">{edu.institution}</span>
                    <span className="period">{edu.period}</span>
                  </div>
                  <div className="education-location">
                    <FaMapMarkerAlt className="location-icon" />
                    <span>{edu.location}</span>
                  </div>
                </div>
                <p className="education-description">{edu.description}</p>
                <div className="relevant-courses">
                  <h5>Relevant Courses:</h5>
                  <div className="course-tags">
                    {edu.relevantCourses.map((course, idx) => (
                      <span key={idx} className="course-tag">{course}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
