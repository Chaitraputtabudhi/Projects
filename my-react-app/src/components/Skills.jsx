import React from "react";
import {
  FaJs,
  FaReact,
  FaHtml5,
  FaCss3,
  FaGithub,
  FaDocker,
} from "react-icons/fa";

function Skills() {
  const skills = [
    {
      name: "JavaScript",
      icon: FaJs,
    },
    {
      name: "ReactJs",
      icon: FaReact,
    },
    {
      name: "HTML5",
      icon: FaHtml5,
    },
    {
      name: "CSS",
      icon: FaCss3,
    },
    {
      name: "GIT",
      icon: FaGithub,
    },
    {
      name: "Docker",
      icon: FaDocker,
    },
  ];

  return (
    <div id="skills" className="skills">
        <h2 className="title">Skills</h2>
        <div className="skill-holder">
      {skills.map((skill, index) => {
        const Icon = skill.icon;
        return (
          <i key={index} className="skill-cards">
            <Icon className="skill-icon" />
            <p className="skill">{skill.name}</p>
          </i>
        );
      })}
      </div>
    </div>
  );
}

export default Skills;
