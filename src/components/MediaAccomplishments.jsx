import React from 'react';
import SplitText from '../components/SplitText/SplitText';

const MediaAccomplishments = () => {
  const accomplishments = [
    {
      id: 1,
      type: "Publication",
      icon: "m1.png",
      items: [
        {
          title: "Sustainability In Web3 Is Becoming Non-Negotiable",
          source: "CoinTelegraph"
        },
        {
          title: "The Future Of Regenerative DeFi",
          source: "Nasdaq"
        },
        {
          title: "Blockchain & Biodiversity: What Comes Next",
          source: ""
        }
      ]
    },
    {
      id: 2,
      type: "Speaking",
      icon: "m2.png",
      items: [
        {
          title: "UNGA 2023",
          source: "Speaker, Biodiversity Finance Panel"
        }
      ]
    },
    {
      id: 3,
      type: "Award",
      icon: "m3.png",
      items: [
        {
          title: "APEA Award 2023",
          source: "Outstanding Ecosystem Leadership"
        },
        {
          title: "Rotary-ASME Award",
          source: "Innovation For Community Health"
        }
      ]
    }
  ];

  return (
    <section id="media" className="media-section">
      <div className="media-container">
        <div className="media-layout">
          {/* Left Side - Title */}
          <div className="media-header">
            <SplitText
              text="Media & Recognition"
              className="media-title"
              tag="h2"
              splitType="words"
              delay={100}
              duration={0.7}
              from={{ opacity: 0, y: 40, rotationX: 45 }}
              to={{ opacity: 1, y: 0, rotationX: 0 }}
            />
          </div>

          {/* Right Side - Accomplishment Cards */}
          <div className="media-cards">
            {accomplishments.map((accomplishment, index) => (
              <div key={accomplishment.id} className={`media-accomplishment ${index % 2 === 1 ? 'reverse' : ''}`}>
                {/* Colored Card - Icon & Label Only */}
                <div className={`accomplishment-badge ${accomplishment.type.toLowerCase()}-badge`}>
                  <div className="badge-icon">
                    <img src={accomplishment.icon} alt={`${accomplishment.type} icon`} />
                  </div>
                  <div className="badge-label">{accomplishment.type.toUpperCase()}</div>
                </div>

                {/* Text Content - Separate from colored card */}
                <div className="accomplishment-content">
                  {accomplishment.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="content-item">
                      <div className="item-title">{item.title}</div>
                      {item.source && (
                        <div className={`item-source ${accomplishment.type.toLowerCase()}-source`}>
                          {item.source}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaAccomplishments;
