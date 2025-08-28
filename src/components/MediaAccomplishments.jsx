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

          {/* Right Side - Cards */}
          <div className="media-cards">
            {accomplishments.map((accomplishment) => (
              <div key={accomplishment.id} className={`media-card ${accomplishment.type.toLowerCase()}-card`}>
                <div className="card-badge">
                  <div className="badge-icon">
                    <img src={accomplishment.icon} alt={`${accomplishment.type} icon`} />
                  </div>
                  <span className="badge-label">{accomplishment.type}</span>
                </div>

                <div className="card-details">
                  {accomplishment.items.map((item, index) => (
                    <div key={index} className="detail-item">
                      <div className="item-title">{item.title}</div>
                      {item.source && (
                        <div className="item-source">{item.source}</div>
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
