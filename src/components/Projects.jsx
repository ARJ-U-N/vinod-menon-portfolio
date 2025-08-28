import React from 'react';
import SplitText from '../components/SplitText/SplitText';
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "AQUAE Labs",
      description: "We Are A Collective Of Dedicated Individuals Deeply Invested In The Restoration Of Our Planet With A Passion For Environmental Stewardship. We Invite You To Join Us To Realize The Value Of Conservation Using Tokenized Credit",
      image: "k1.png",
      imagePosition: "right",
      buttonText: "Learn More"
    },
    {
      id: 2,
      title: "MindWaveDAO",
      description: "MindWaveDAO Is A Cutting-Edge Blockchain Platform That Integrates Bitcoin, Backed Yield Generation With Decentralized Finance (DeFi), Artificial Intelligence (AI), And Real-World Applications.",
      image: "k2.png",
      imagePosition: "left",
      buttonText: "Learn More"
    },
    {
      id: 3,
      title: "ALCI Conservation Credits",
      description: "ALECI Is An Index That Reflects An Annually Verified Composite Of Environmental And Social Variables As Landscape Assets Backed By Its Biodiversity & Biomass Which Is Monitored Recorded & Validated (MRV'd) And Value Set (VS) As A Financial Tool",
      image: "k3.png",
      imagePosition: "right",
      buttonText: "Learn More"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="projects-header">
          <SplitText
            text="Projects & Ventures"
            className="projects-title"
            tag="h2"
            splitType="chars"
            delay={70}
            duration={0.6}
            from={{ opacity: 0, y: 30, scale: 1.2 }}
            to={{ opacity: 1, y: 0, scale: 1 }}
            ease="power2.out"
          />
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className={`project-card ${project.imagePosition}`}>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <button className="project-button">{project.buttonText}</button>
              </div>

              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
