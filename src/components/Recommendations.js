import React from 'react';
import { motion } from 'framer-motion';
import './Recommendations.css';

const Recommendations = () => {
  const recommendations = [
    {
      quote: "Since the day you joined R2R, I've always admired your calm and grounded nature. Your sincerity and dedication greatly helped us consolidate Finance–Project Systems requirements. Excellent work engaging with global stakeholders and the DevOps team, and thank you for your technical contribution in developing PublishMate to optimize our work time.",
      author: "Devi Prabha Ananthakrishnan",
      designation: "Business Process Analyst, SLB"
    },
    {
      quote: "Shravani consistently demonstrated creativity, initiative, and ownership throughout her internship. Her work on the PublishMate automation project not only showcased strong technical skills but also her ability to innovate and take responsibility. I'm confident she will continue to make meaningful contributions in her future endeavors.",
      author: "Bayu Suko Widiharto",
      designation: "Engagement Center Knowledge Manager, SAP4U | GBS IT, SLB"
    }
  ];

  return (
    <section id="recommendations" className="recommendations">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Recommendations</h2>
          <p className="section-subtitle">
            What colleagues and mentors say about my work
          </p>
        </motion.div>

        <div className="recommendations-grid">
          {recommendations.map((rec, index) => (
            <motion.div
              key={index}
              className="recommendation-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="quote-icon">"</div>
              <blockquote className="recommendation-quote">
                {rec.quote}
              </blockquote>
              <div className="recommendation-author">
                <div className="author-name">{rec.author}</div>
                <div className="author-designation">{rec.designation}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recommendations;
