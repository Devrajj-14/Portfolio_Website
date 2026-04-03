import "./styles/Achievements.css";
import { MdStars } from "react-icons/md";

const achievements = [
  {
    title: "House of the Coders Hackathon 2024",
    description:
      "Competed in an intensive competitive programming and product-building hackathon, showcasing rapid ideation and execution skills.",
  },
  {
    title: "Special Mention — CSI SRM",
    description:
      "Received Special Mention recognition at the Computer Society of India, SRM chapter for technical contribution and innovation.",
  },
  {
    title: "Skill-Based Developer Matcher",
    description:
      "Built a custom heuristic-based matching engine achieving 70% match accuracy for pairing developers with complementary skill sets.",
  },
];

const Achievements = () => {
  return (
    <div className="achievements-section section-container" id="achievements">
      <div className="achievements-container">
        <h2>
          Achievements <span>&</span>
          <br /> Highlights
        </h2>
        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div className="achievement-card" key={index}>
              <div className="achievement-icon">
                <MdStars />
              </div>
              <div className="achievement-content">
                <h4>{achievement.title}</h4>
                <p>{achievement.description}</p>
              </div>
              <div className="achievement-number">0{index + 1}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
