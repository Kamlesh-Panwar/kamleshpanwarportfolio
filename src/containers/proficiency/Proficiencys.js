import React from "react";
import "./Proficiency.css";
import proficiencyImage from "./proficiency.png";

const Proficiency = () => {
  const skills = [
    {
      title: "Frontend / UI Development",
      description:
        "Angular, HTML, CSS, JavaScript, TypeScript, jQuery",
      percentage: 85,
    },
    {
      title: "Backend Development",
      description:
        "ASP.NET Core, MVC, Web API, Entity Framework, SQL Server",
      percentage: 90,
    },
    {
      title: "General Programming & Problem Solving",
      description:
        "C#, JavaScript, TypeScript, LINQ, Web Scraping",
      percentage: 80,
    },
  ];

  return (
    <div className="proficiency-main" id="proficiency">
      <div className="proficiency-content">

        {/* LEFT SIDE */}
        <div className="proficiency-left">
          <h1 className="proficiency-title">Proficiency</h1>

          {skills.map((skill, index) => (
            <div className="skill-box" key={index}>
              <h3 className="skill-title">{skill.title}</h3>
              <p className="skill-desc">{skill.description}</p>

              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${skill.percentage}%` }}
                >
                  <span className="progress-text">
                    {skill.percentage}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="proficiency-right">
          <img
            src={proficiencyImage}
            alt="Proficiency Illustration"
            className="proficiency-image"
          />
        </div>

      </div>
    </div>
  );
};

export default Proficiency;
