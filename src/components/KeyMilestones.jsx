import React, { useState } from 'react';
import MobileKeyMilestones from './MobileKeyMilestones';

const KeyMilestones = () => {
  const [hoveredSphere, setHoveredSphere] = useState(null);

  return (
    <>
    <section id="milestones" className="milestones-section">
      <div className="milestones-container">
        <div className="milestones-header">
          <h2 className="milestones-title">
            Key Mile<br />Stones
          </h2>
        </div>
        
        <div className="timeline-area">
          {/* SVG for straight connecting lines exactly as shown in target */}
          <svg className="timeline-lines" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.6" />
              </linearGradient>
            </defs>
            
            {/* Exact straight line pattern from target image */}
            <line x1="200" y1="420" x2="350" y2="180" stroke="url(#lineGrad)" strokeWidth="2" strokeDasharray="8,4" className="connection-line" />
            <line x1="350" y1="180" x2="500" y2="280" stroke="url(#lineGrad)" strokeWidth="2" strokeDasharray="8,4" className="connection-line" />
            <line x1="500" y1="280" x2="700" y2="150" stroke="url(#lineGrad)" strokeWidth="2" strokeDasharray="8,4" className="connection-line" />
            <line x1="700" y1="150" x2="850" y2="50" stroke="url(#lineGrad)" strokeWidth="2" strokeDasharray="8,4" className="connection-line" />
            <line x1="850" y1="50" x2="920" y2="220" stroke="url(#lineGrad)" strokeWidth="2" strokeDasharray="8,4" className="connection-line" />
          </svg>
          
          {/* Large Blue Sphere - Bottom Left - AQUAE Labs */}
          <div 
            className="milestone-sphere large-sphere" 
            style={{ bottom: '30%', left: '18%' }}
            onMouseEnter={() => setHoveredSphere('aquae')}
            onMouseLeave={() => setHoveredSphere(null)}
          >
            <img src="2.png" alt="Large blue sphere" className="sphere-img" />
            <div className={`text-card large-card card-left ${hoveredSphere === 'aquae' ? 'visible' : ''}`}>
              <h3>Co-Founder, AQUAE Labs</h3>
              <p>A nature-based finance think tank pioneering sustainable solutions</p>
            </div>
          </div>
          
          {/* Medium Blue Sphere with connection dot - Center Left - PhD */}
          <div 
            className="milestone-sphere medium-sphere" 
            style={{ top: '30%', left: '33%' }}
            onMouseEnter={() => setHoveredSphere('phd')}
            onMouseLeave={() => setHoveredSphere(null)}
          >
            <img src="2.png" alt="Medium blue sphere" className="sphere-img" />
            <div className="connection-dot"></div>
            <div className={`text-card medium-card card-above ${hoveredSphere === 'phd' ? 'visible' : ''}`}>
              <h3>PhD in Blockchain & Healthcare</h3>
              <p>From Swiss School of Management, bridging technology and wellness</p>
            </div>
          </div>
          
          {/* Dark Medium Sphere - Center - MindWaveDAO */}
          <div 
            className="milestone-sphere dark-sphere" 
            style={{ top: '47%', left: '48%' }}
            onMouseEnter={() => setHoveredSphere('mindwave')}
            onMouseLeave={() => setHoveredSphere(null)}
          >
            <img src="2.png" alt="Dark medium sphere" className="sphere-img" />
            <div className={`text-card medium-card card-below ${hoveredSphere === 'mindwave' ? 'visible' : ''}`}>
              <h3>Founder, MindWaveDAO</h3>
              <p>Innovative platform bridging brainwave data with DeFi</p>
            </div>
          </div>
          
          {/* Small Blue Sphere - Top Center Right - UNGA Speaker */}
          <div 
            className="milestone-sphere small-sphere" 
            style={{ top: '25%', right: '30%' }}
            onMouseEnter={() => setHoveredSphere('unga')}
            onMouseLeave={() => setHoveredSphere(null)}
          >
            <img src="2.png" alt="Small blue sphere" className="sphere-img" />
            <div className={`text-card small-card card-right ${hoveredSphere === 'unga' ? 'visible' : ''}`}>
              <h3>UNGA Speaker</h3>
              <p>Presented ALCI Green Credits at the United Nations General Assembly</p>
              <span className="year-tag">2023</span>
            </div>
          </div>
          
          {/* Large Blue Sphere - Top Far Right - Forbes Council */}
          <div 
            className="milestone-sphere large-sphere" 
            style={{ top: '8%', right: '15%' }}
            onMouseEnter={() => setHoveredSphere('forbes')}
            onMouseLeave={() => setHoveredSphere(null)}
          >
            <img src="2.png" alt="Large blue sphere" className="sphere-img" />
            <div className={`text-card large-card card-left ${hoveredSphere === 'forbes' ? 'visible' : ''}`}>
              <h3>Member, Forbes Council</h3>
              <p>Presented ALCI Green Credits at the United Nations General Assembly</p>
            </div>
          </div>
          
          {/* Medium Blue Sphere - Bottom Right - The Giant */}
          <div 
            className="milestone-sphere medium-sphere" 
            style={{ top: '37%', right: '8%' }}
            onMouseEnter={() => setHoveredSphere('giant')}
            onMouseLeave={() => setHoveredSphere(null)}
          >
            <img src="2.png" alt="Medium blue sphere" className="sphere-img" />
            <div className={`text-card medium-card card-left ${hoveredSphere === 'giant' ? 'visible' : ''}`}>
              <h3>Launch of "The Giant"</h3>
              <p>Groundbreaking initiative featured at Super Bowl-scale events</p>
              <span className="year-tag">2024</span>
            </div>
          </div>
        </div>
      </div>
    </section>
     <div className="mobile-only">
       
      </div>
    </>
  );
};

export default KeyMilestones;
