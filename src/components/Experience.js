import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Associate Business Process Analyst Intern',
      company: 'SLB',
      location: 'Coimbatore, India',
      period: 'Jun 2025 – Jan 2026',
      type: 'Internship (Ongoing)',
      description: 'Supporting new SAP releases in the Record-to-Report (Finance) domain with hands-on experience in SAP FI/CO and Project System (PS) modules.',
      achievements: [
        'Collaborated with cross-functional teams and managed global stakeholders to deliver requirements',
        'Led User Engagement Project within the Change Management team, creating SAP Enable Now training',
        'Drove continuous improvement project, automating knowledge article creation with 85% efficiency improvement',
        'Focused on Project Accounting processes and Intercompany Accounts Receivable/Payable'
      ],
      technologies: ['SAP FI/CO', 'SAP Project System', 'SAP Enable Now', 'ServiceNow', 'Change Management']
    },
    {
      title: 'Digital Analytics Intern',
      company: 'Mamsys.com',
      location: 'Noida, India',
      period: 'Jun 2024 – Jul 2024',
      type: 'Internship',
      description: 'Conducted search behavior analysis and developed keyword strategy to improve visibility among CXOs and VPs.',
      achievements: [
        'Built interactive Power BI dashboards to track KPIs and present insights',
        'Analyzed content performance and search trends for strategic decision making',
        'Developed comprehensive keyword strategy for target audience engagement',
        'Created data-driven reports for content optimization'
      ],
      technologies: ['PowerBI', 'Data Analysis', 'Google Keyword Planner', 'KPI Tracking', 'Content Analytics']
    },
    {
      title: 'Data Science Intern',
      company: 'EaseMyTrip.com',
      location: 'Noida, India',
      period: 'Dec 2023 – Dec 2023',
      type: 'Internship',
      description: 'Built machine learning models to predict train ticket status and performed exploratory data analysis for operational insights.',
      achievements: [
        'Built ML model to predict train ticket status, boosting accuracy by 12%',
        'Performed feature selection and preprocessing for model optimization',
        'Conducted exploratory data analysis to uncover booking trends',
        'Provided actionable insights for operational decision making'
      ],
      technologies: ['Machine Learning', 'Python', 'Data Analysis', 'Feature Engineering', 'Predictive Modeling']
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Technology (B.Tech) in Data Science and Engineering',
      institution: 'Manipal Institute of Technology',
      location: 'Manipal, India',
      period: 'Sept 2022 – July 2026',
      description: 'Currently pursuing with a CGPA of 8.14. Focused on data science, machine learning, and engineering principles.',
      relevantCourses: ['Machine Learning', 'Data Analysis', 'Statistical Analysis', 'Database Systems', 'Programming']
    },
    {
      degree: 'Intermediate (12th Grade)',
      institution: 'Amity International School',
      location: 'Mayur Vihar, Delhi, India',
      period: 'March 2021 – March 2022',
      description: 'Completed with 95% score. Strong foundation in mathematics and science.',
      relevantCourses: ['Mathematics', 'Physics', 'Chemistry', 'English', 'Computer Science']
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
                        <span className="company">{exp.company}</span>
                        <span className="period">{exp.period}</span>
                      </div>
                      <div className="experience-location">
                        <FaMapMarkerAlt className="location-icon" />
                        <span>{exp.location}</span>
                        <span className="experience-type">{exp.type}</span>
                      </div>
                    </div>
                    <p className="experience-description">{exp.description}</p>
                    <div className="achievements">
                      <h5>Achievements:</h5>
                      <ul>
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="technologies">
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
