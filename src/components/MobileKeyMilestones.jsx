import React, { useState } from 'react';

const MobileKeyMilestones = () => {
  const [hoveredMilestone, setHoveredMilestone] = useState(null);

  const milestones = [
    {
      id: 1,
      name: "Co-Founder, AQUAE Labs",
      description: "A nature-based finance think tank pioneering sustainable solutions",
      angle: 0
    },
    {
      id: 2, 
      name: "PhD in Blockchain & Healthcare",
      description: "From Swiss School of Management, bridging technology and wellness",
      angle: 60
    },
    {
      id: 3,
      name: "Founder, MindWaveDAO", 
      description: "Innovative platform bridging brainwave data with DeFi",
      angle: 120
    },
    {
      id: 4,
      name: "UNGA Speaker",
      description: "Presented ALCI Green Credits at the United Nations General Assembly",
      year: "2023",
      angle: 180
    },
    {
      id: 5,
      name: "Member, Forbes Council",
      description: "Presented ALCI Green Credits at the United Nations General Assembly", 
      angle: 240
    },
    {
      id: 6,
      name: "Launch of \"The Giant\"",
      description: "Groundbreaking initiative featured at Super Bowl-scale events",
      year: "2024",
      angle: 300
    }
  ];

  return (
    <div className="mobile-milestones">
      <div className="mobile-milestones-container">
        <h2 className="mobile-milestones-title">Key Mile<br />Stones</h2>
        
        <div className="donut-chart-container">
          <svg className="donut-chart" viewBox="0 0 300 300">
            {/* Background circle */}
            <circle
              cx="150"
              cy="150"
              r="120"
              fill="none"
              stroke="rgba(125, 211, 252, 0.1)"
              strokeWidth="2"
            />
            
            {/* Donut segments */}
            {milestones.map((milestone, index) => {
              const startAngle = (milestone.angle - 25) * (Math.PI / 180);
              const endAngle = (milestone.angle + 25) * (Math.PI / 180);
              const largeArcFlag = endAngle - startAngle <= Math.PI ? "0" : "1";
              
              const x1 = 150 + 90 * Math.cos(startAngle);
              const y1 = 150 + 90 * Math.sin(startAngle);
              const x2 = 150 + 90 * Math.cos(endAngle);
              const y2 = 150 + 90 * Math.sin(endAngle);
              
              const x3 = 150 + 120 * Math.cos(endAngle);
              const y3 = 150 + 120 * Math.sin(endAngle);
              const x4 = 150 + 120 * Math.cos(startAngle);
              const y4 = 150 + 120 * Math.sin(startAngle);
              
              const pathData = [
                `M ${x1} ${y1}`,
                `A 90 90 0 ${largeArcFlag} 1 ${x2} ${y2}`,
                `L ${x3} ${y3}`,
                `A 120 120 0 ${largeArcFlag} 0 ${x4} ${y4}`,
                'Z'
              ].join(' ');

              return (
                <path
                  key={milestone.id}
                  d={pathData}
                  fill={hoveredMilestone === milestone.id ? "#60a5fa" : "#3b82f6"}
                  stroke="rgba(255, 255, 255, 0.1)"
                  strokeWidth="1"
                  className="donut-segment"
                  onMouseEnter={() => setHoveredMilestone(milestone.id)}
                  onMouseLeave={() => setHoveredMilestone(null)}
                  style={{ 
                    cursor: 'pointer',
                    transition: 'fill 0.3s ease',
                    opacity: hoveredMilestone === null || hoveredMilestone === milestone.id ? 1 : 0.6
                  }}
                />
              );
            })}
            
            {/* Center circle */}
            <circle
              cx="150"
              cy="150"
              r="80"
              fill="rgba(15, 23, 42, 0.9)"
              stroke="rgba(125, 211, 252, 0.3)"
              strokeWidth="2"
            />
            
            {/* Center text */}
            <text
              x="150"
              y="145"
              textAnchor="middle"
              fill="#7dd3fc"
              fontSize="16"
              fontWeight="600"
            >
              Key Mile
            </text>
            <text
              x="150"
              y="165"
              textAnchor="middle"
              fill="#7dd3fc"
              fontSize="16"
              fontWeight="600"
            >
              Stones
            </text>
          </svg>
          
          {/* Milestone labels around the donut */}
          {milestones.map((milestone) => {
            const labelAngle = milestone.angle * (Math.PI / 180);
            const labelRadius = 140;
            const x = 150 + labelRadius * Math.cos(labelAngle);
            const y = 150 + labelRadius * Math.sin(labelAngle);
            
            return (
              <div
                key={milestone.id}
                className="milestone-label"
                style={{
                  position: 'absolute',
                  left: `${x}px`,
                  top: `${y}px`,
                  transform: 'translate(-50%, -50%)',
                  opacity: hoveredMilestone === null || hoveredMilestone === milestone.id ? 1 : 0.4,
                  transition: 'opacity 0.3s ease'
                }}
              >
                <span className="milestone-number">M{milestone.id}</span>
              </div>
            );
          })}
        </div>
        
        {/* Hover tooltip */}
        {hoveredMilestone && (
          <div className="milestone-tooltip">
            <h4>{milestones.find(m => m.id === hoveredMilestone)?.name}</h4>
            <p>{milestones.find(m => m.id === hoveredMilestone)?.description}</p>
            {milestones.find(m => m.id === hoveredMilestone)?.year && (
              <span className="tooltip-year">
                {milestones.find(m => m.id === hoveredMilestone)?.year}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileKeyMilestones;
