import "./styles/Skills.css";

const skillGroups = [
  {
    category: "Programming",
    skills: ["Python", "Go", "C++", "SQL", "AWS"],
  },
  {
    category: "Frameworks & Tools",
    skills: ["Next.js", "Flask", "Node.js", "Express", "GitHub", "Firebase"],
  },
  {
    category: "AI / ML",
    skills: ["GenAI", "OpenCV", "Scikit-learn"],
  },
  {
    category: "Soft Skills",
    skills: [
      "Cross-functional Communication",
      "Time Management",
      "Analytical Thinking",
    ],
  },
];

const Skills = () => {
  return (
    <div className="skills-section section-container" id="skills">
      <div className="skills-container">
        <h2>
          Skills <span>&</span>
          <br /> Technologies
        </h2>
        <div className="skills-grid">
          {skillGroups.map((group, groupIndex) => (
            <div className="skill-group" key={groupIndex}>
              <h4 className="skill-category">{group.category}</h4>
              <div className="skill-tags">
                {group.skills.map((skill, skillIndex) => (
                  <div className="skill-tag" key={skillIndex}>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
