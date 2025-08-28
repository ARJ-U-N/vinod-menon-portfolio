import React from 'react';
import SplitText from '../components/SplitText/SplitText';

const AdditionalMedia = () => {
  const mediaItems = [
    {
      id: 1,
      year: "2021",
      title: "APEA Awards",
      subtitle: "Environmental Leadership"
    },
    {
      id: 2,
      year: "2021",
      title: "World Economic Forum",
      subtitle: "Tech for Good Panel"
    },
    {
      id: 3,
      year: "2020",
      title: "Bloomberg",
      subtitle: "Environmental Leadership"
    },
    {
      id: 4,
      year: "2022",
      title: "Nasdaq",
      subtitle: "Future of Green Finance"
    }
  ];

  return (
    <section id="additional-media" className="additional-media-section">
      <div className="additional-media-container">
        <div className="section-header">
          <SplitText
            text="Additional Media Coverage"
            className="section-title"
            tag="h2"
            splitType="chars"
            delay={60}
            duration={0.5}
            from={{ opacity: 0, y: 20 }}
            to={{ opacity: 1, y: 0 }}
          />
        </div>

        <div className="media-cards-grid">
          {mediaItems.map((item) => (
            <div key={item.id} className="media-coverage-card">
              <div className="card-year">{item.year}</div>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-subtitle">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdditionalMedia;
