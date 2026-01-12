import React, { useContext } from "react";
import "./Education.css";
import StyleContext from "../../contexts/styleContext";
import mdcaps from "../../assets/images/mdcaps.png";

const Education = () => {
  const { isDark } = useContext(StyleContext);

  return (
    <div className="main" id="education">
      <h1 className="education-title">Education</h1>

      {/* First Education */}
      <div className={`education-item ${isDark ? "dark-mode" : ""}`}>
        <div className="education-logo">
            <img src={mdcaps} alt="Madicaps University" />
        </div>

        <div className="education-content">
          <h2>Medicaps Institute Of Technology & Management </h2>
          <h3>Computer Science & Engineering</h3>
          <span className="education-date">
            August 2007 - June 2011
          </span>

          <p>
            An integral part of Medicaps University, recognized for its emphasis on technical excellence and industry-oriented education.<br/> 
            Completed foundational studies in Computer Science & Engineering with a strong focus on core programming concepts,<br/>
             problem-solving skills, and practical technical learning.
          </p>

          <ul>
            <li>Consistently maintained strong academic performance across core engineering subjects</li>
            <li>Actively participated in technical workshops, academic projects, and collaborative learning activities</li>
          <li>Developed a solid foundation in computer science fundamentals and engineering principles</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Education;
