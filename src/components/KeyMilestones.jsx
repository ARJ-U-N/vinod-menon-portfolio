import { useState } from "react";
import "../styles/KeyMilestones.css";

/* ← edit your milestones here */
const milestones = [
  {
    id: "aquae",
    size: "large",
    title: "Co-Founder, AQUAE Labs",
    desc: "A nature-based finance think tank pioneering sustainable solutions"
  },
  {
    id: "phd",
    size: "medium",
    title: "PhD in Blockchain & Healthcare",
    desc: "Swiss School of Management – bridging technology and wellness"
  },
  {
    id: "mindwave",
    size: "dark",
    title: "Founder, MindWaveDAO",
    desc: "Innovative platform bridging brain-wave data with DeFi"
  },
  {
    id: "unga",
    size: "small",
    title: "UNGA Speaker",
    desc: "Presented ALCI Green Credits at the United Nations General Assembly",
    year: "2023"
  },
  {
    id: "forbes",
    size: "large",
    title: "Member, Forbes Council",
    desc: "Presented ALCI Green Credits at the United Nations General Assembly"
  },
  {
    id: "giant",
    size: "medium",
    title: "Launch of “The Giant”",
    desc: "Ground-breaking initiative featured at Super Bowl-scale events",
    year: "2024"
  }
];

export default function KeyMilestones() {
  const [active, setActive] = useState(null);

  const sphereClass = (s) =>
    ({ large: "large-sphere", medium: "medium-sphere", small: "small-sphere", dark: "dark-sphere" }[s]);

  return (
    <section id="milestones" className="milestones-section">
      <h2 className="milestones-title">
        Key Mile<br />Stones
      </h2>

      <div className="timeline-area">
        {milestones.map((m) => (
          <div
            key={m.id}
            className={`milestone-sphere ${sphereClass(m.size)}`}
            onMouseEnter={() => setActive(m.id)}
            onMouseLeave={() => setActive(null)}
            onTouchStart={() => setActive(m.id)}
            onTouchEnd={() => setActive(null)}
          >
            <div className={`text-card ${active === m.id ? "show" : ""} card-below`}>
              <h3>{m.title}</h3>
              <p>{m.desc}</p>
              {m.year && <span className="year-tag">{m.year}</span>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
