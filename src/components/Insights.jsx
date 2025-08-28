import React from 'react';
import SplitText from '../components/SplitText/SplitText';
const Insights = () => {
  const insights = [
    {
      id: 1,
      title: "The Future Of Biodiversity Finance",
      category: "Sustainable Finance",
      date: "April 18, 2025",
      excerpt: "Exploring Innovative Mechanisms To Fund Conservation And Ecological Restoration At Scale Through Market-Based Solutions And Technological Innovation.",
      image: "b1.png",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Web3 Technologies For Environmental Impact",
      category: "Technology",
      date: "March 25, 2025",
      excerpt: "How Blockchain, Tokenization, And Decentralized Governance Can Transform Environmental Monitoring, Reporting, And Incentive Structures.",
      image: "b2.png",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Mental Wellness In The Digital Age",
      category: "Wellness",
      date: "February 10, 2025",
      excerpt: "Examining The Intersection Of Neuroscience, Digital Tools, And Personal Wellbeing In Creating Effective Mental Health Solutions.",
      image: "b3.png",
      readTime: "6 min read"
    }
  ];

  return (
    <section id="insights" className="insights-section">
      <div className="insights-container">
        <div className="insights-header">
          <SplitText
            text="Insights"
            className="insights-title"
            tag="h2"
            splitType="chars"
            delay={60}
            duration={0.5}
            from={{ opacity: 0, y: 50, scale: 0.9 }}
            to={{ opacity: 1, y: 0, scale: 1 }}
            
          />
          <p className="insights-subtitle">
            Thoughts and essays on technology, sustainability, and wellness.
          </p>
        </div>

        <div className="insights-grid">
          {insights.map((insight) => (
            <article key={insight.id} className="insight-card">
              <div className="card-image">
                <img src={insight.image} alt={insight.title} />
              </div>

              <div className="card-content">
                <div className="card-meta">
                  <span className="card-category">{insight.category}</span>
                  <span className="card-date">{insight.date}</span>
                </div>

                <h3 className="card-title">{insight.title}</h3>
                <p className="card-excerpt">{insight.excerpt}</p>

                <a href="#" className="read-more-link">
                  Read More →
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="insights-footer">
          <button className="visit-all-btn">Visit All Insights</button>
        </div>
      </div>
    </section>
  );
};

export default Insights;
