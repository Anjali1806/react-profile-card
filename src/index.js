import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "intermediate",
    color: "#669999",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#666699",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "beginner",
    color: "#538cc6",
  },
];

function App() {
  return (
    <div className="container">
      <Intro
        name="Anjali Singh"
        profileImage="./dev2.png"
        intro="
I'm a frontend web developer passionate about creating intuitive and visually appealing user interfaces. With expertise in HTML, CSS, and JavaScript, I specialize in crafting responsive and interactive web experiences. My goal is to leverage my skills to bring designs to life and enhance user engagement on the web."
      />
      <Skills />
    </div>
  );
}

function Intro(props) {
  return (
    <div className="intro">
      <img src={props.profileImage} alt={props.name} />
      <div className="detail">
        <h2>{props.name}</h2>
        <p>{props.intro}</p>
      </div>
    </div>
  );
}

function Skills() {
  const skillsData = skills;
  return (
    <ul className="skills-list">
      {skillsData.map((skills) => (
        <Skill skillObj={skills} key={skills.skill} />
      ))}
    </ul>
  );
}

function Skill({ skillObj }) {
  return (
    <li style={{ backgroundColor: skillObj.color }}>
      {skillObj.skill}
      <span>
        {skillObj.level === "beginner" && " 👶"}
        {skillObj.level === "intermediate" && " 👍"}
        {skillObj.level === "advanced" && " 💪"}
      </span>
    </li>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
