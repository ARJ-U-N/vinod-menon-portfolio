import React from 'react';
import SplitText from '../components/SplitText/SplitText';


const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      {/* Move Hyperspeed INSIDE the hero section */}


      <div className="hero-container">
        <div className="hero-main">
          <div className="hero-left">
            <SplitText
              text="Dr. Vin Menon"
              className="hero-title"
              tag="h1"
              splitType="chars"
              delay={50}
              duration={0.8}
              from={{ opacity: 0, y: 60, rotationX: -90 }}
              to={{ opacity: 1, y: 0, rotationX: 0 }}
              ease="back.out(1.7)"
            /><p>        </p>
            <SplitText
              text="Global Entrepreneur & Thought Leader"
              className="hero-subtitle"
              tag="p"
              splitType="words"
              delay={100}
              duration={0.6}
              from={{ opacity: 0, y: 30 }}
              to={{ opacity: 1, y: 0 }}
            />
          </div>

          <div className="hero-right">
            <div className="profile-image-container">
              <img
                src="hero.png"
                alt="Dr. Vin Menon"
                className="profile-image"
              />
            </div>

            <div className="social-media">
              <a href="" className="social-icon twitter">
                <img src="Component1.png" alt="Twitter" />
              </a>
              <a href="#" className="social-icon linkedin">
                <img src="Vector.png" alt="LinkedIn" />
              </a>
              <a href="#" className="social-icon youtube">
                <img src="Vector1.png" alt="YouTube" />
              </a>
              <a href="#" className="social-icon instagram">
                <img src="Vector (2).png" alt="Instagram" />
              </a>
            </div>
          </div>
        </div>

        <div className="hero-bottom">
          <div className="info-card impact-card">
            <p className="card-text">
              Pioneering regenerative technologies and sustainable finance
              solutions for global impact
            </p>
            <div className="card-actions">
              <button className="btn-explore">Explore Projects</button>
              <button className="btn-touch">Get In Touch</button>
            </div>
          </div>

          <div className="info-card sdg-card">
            <div className="sdg-content">
              <p className="sdg-text">Proud contributor to</p>
              <div className="sdg-logo">
                <img src="sdg-main 2.png" alt="UN Sustainable Development Goals" />
              </div>
              <p className="sdg-subtitle">UN Sustainable Development Goals</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
