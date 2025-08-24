import React from 'react';
import { portfolioData } from '../data/portfolioData';

const KeySkills = () => {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2>Key Skills</h2>
          <p>Technologies and expertise I work with</p>
        </div>
        
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
              <div className="skill-level">
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{width: `${skill.level}%`}}
                  ></div>
                </div>
                <span>{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeySkills;
