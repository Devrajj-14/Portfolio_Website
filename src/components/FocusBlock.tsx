import "./styles/FocusBlock.css";

const focusAreas = [
  "Full-Stack Development",
  "Backend Systems",
  "API Development",
  "Practical Software Engineering",
];

const FocusBlock = () => {
  return (
    <div className="focus-section section-container">
      <div className="focus-container">
        <div className="focus-label">Currently Focused On</div>
        <div className="focus-items">
          {focusAreas.map((area, index) => (
            <div className="focus-item" key={index}>
              <span className="focus-dot"></span>
              {area}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FocusBlock;
