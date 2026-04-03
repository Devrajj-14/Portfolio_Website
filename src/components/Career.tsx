import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Java Full Stack Training</h4>
                <h5>BridgeLabz</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Intensive project-based training in Java full-stack development
              covering backend engineering, application architecture, and
              Git/GitFlow-based workflows. Focused on hands-on implementation,
              clean coding practices, and version control discipline.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer Intern</h4>
                <h5>Impulse Activator · Remote</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Engineered 6+ web modules using modular architecture, improving
              feature rollout speed by 30%. Built and secured RESTful APIs
              with Node.js and Firebase, reducing user-side errors by 20%.
              Coordinated Agile-based weekly sprints and retrospectives
              across distributed teams.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech — CSE</h4>
                <h5>SRM IST, Kattankulathur</h5>
              </div>
              <h3>2022–26</h3>
            </div>
            <p>
              B.Tech in Computer Science and Engineering. CGPA: 8.72/10.
              Active in hackathons, technical communities, and project-based
              learning alongside academic coursework.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
