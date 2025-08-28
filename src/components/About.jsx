import React from 'react';
import SplitText from '../components/SplitText/SplitText';

const About = () => {
  const highlights = [
    {
      icon: "s1.png",
      title: "20+ Years In Tech, Strategy & Innovation",
      id: "experience"
    },
    {
      icon: "s2.png",
      title: "Co-Founder Of AQUAE Group Of Companies And MindWaveDAO.Com",
      id: "founder"
    },
    {
      icon: "s3.png",
      title: "Speaker At UNGA, APEA, Forbes Councils And BFI Summit",
      id: "speaker"
    },
    {
      icon: "s4.png",
      title: "$3B+ Initiatives Through MindWaveDAO.Com",
      id: "initiatives"
    },
    {
      icon: "s5.png",
      title: "Multiple Successful Exits To Private Equity And Public Companies",
      id: "exits"
    },
    {
      icon: "s6.png",
      title: "20+ Years In Tech, Strategy & Innovation",
      id: "tech-years"
    }
  ];

  const pillars = [
    {
      icon: "a1.png",
      title: "Global Impact",
      description: "Leading initiatives across 15+ countries focused on sustainable development and regenerative technologies."
    },
    {
      icon: "a2.png",
      title: "Recognition",
      description: "Recipient of prestigious awards including APEA and featured in Forbes, Nasdaq, and global summits"
    },
    {
      icon: "a3.png",
      title: "Ecosystem Builder",
      description: "Founder of multiple ventures integrating technology, sustainability, and mental wellness solutions."
    },
    {
      icon: "a4.png",
      title: "Thought Leadership",
      description: "Published research and insights on DeFi, nature-based solutions, and sustainable finance innovation."
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-content">
          <div className="about-left">
            <div className="professional-highlights">
              <SplitText
                text="Professional Highlights"
                className="highlights-title"
                tag="h2"
                splitType="words"
                delay={120}
                duration={0.6}
                from={{ opacity: 0, x: -40 }}
                to={{ opacity: 1, x: 0 }}
              />
              <div className="highlights-grid">
                {highlights.map((highlight, index) => (
                  <div key={index} className="highlight-card">
                    <div className="highlight-icon">
                      <img src={highlight.icon} alt="" />
                    </div>
                    <p className="highlight-text">{highlight.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="about-right">
            <SplitText
  text="About"
  className="about-title"
  tag="h2"
  splitType="chars"
  delay={60}
  duration={0.8}
  from={{ opacity: 0, y: 40, rotationY: 45 }}
  to={{ opacity: 1, y: 0, rotationY: 0 }}
/>

            <div className="about-text">
              <p className="about-intro">
                With over 20 years of experience, Dr. Menon bridges technology innovation
                with environmental sustainability.
              </p>

              <p className="about-description">
                Dr. Vin Menon is a global entrepreneur and thought leader with more than two
                decades of experience in technology innovation, sustainable finance, and
                environmental initiatives.
              </p>

              <p className="about-description">
                As a pioneer in the field of regenerative technologies and decentralized finance
                (DeFi), Dr. Menon has developed groundbreaking solutions that address critical
                environmental challenges while creating economic value. His work bridges the gap
                between cutting-edge technology and ecological sustainability, demonstrating
                how innovation can drive positive change.
              </p>

              <p className="about-description">
                A passionate advocate for the UN Sustainable Development Goals, Dr. Menon has
                contributed to international initiatives focused on biodiversity conservation,
                climate action, and sustainable economic growth. His ventures span multiple
                continents, implementing nature-based innovations and financial mechanisms
                that support environmental restoration and protection.
              </p>

              <p className="about-description">
                Dr. Menon also leads research and development in mental wellness technologies,
                exploring the intersection of cognitive science, digital tools, and personal
                wellbeing.
              </p>
            </div>
          </div>
        </div>

        <div className="pillars-section">
          <div className="pillars-grid">
            {pillars.map((pillar, index) => (
              <div key={index} className="pillar-card">
                <div className="pillar-icon">
                  <img src={pillar.icon} alt={pillar.title} />
                </div>
                <h3 className="pillar-title">{pillar.title}</h3>
                <p className="pillar-description">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
