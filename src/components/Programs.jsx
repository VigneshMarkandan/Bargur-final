import React, { useState } from "react";
import "../assets/program.css";
import mba from "../assets/img/mba.png";
import mbahr from "../assets/img/mbahr.png";
import pgpbm from "../assets/img/pgpbm.png";
import phd from "../assets/img/phd.png";
import exphd from "../assets/img/exphd.png";
import girl from '../assets/img/Student-girl.png'

const programs = [
  {
    category: "UG -BE",
    programs: [
      {
        name: "CSE",
        image: mba,
        description:
          "Bachelor of Engineering in Computer Science and Engineering (BE - CSE) focuses on designing and developing computer systems and software..",
      },
      {
        name: "ECE",
        image: mbahr,
        description:
          "Bachelor of Engineering in Electronics and Communication Engineering (BE - ECE): Innovating electronic systems and communication technologies..",
      },
      {
        name: "EEE",
        image: pgpbm,
        description:
          "Bachelor of Engineering in Electrical and Electronics Engineering (BE - EEE) focuses on designing, developing, and maintaining electrical systems and electronic devices..",
      },
      {
        name: "MECH",
        image: phd,
        description:
          "Bachelor of Engineering in Mechanical Engineering: design, analysis, manufacturing, maintenance, innovation, systems, machines, energy, automation..",
      },
      {
        name: "CIVIL",
        image: exphd,
        description:
        "Bachelor of Engineering (BE) in Civil Engineering focuses on designing, constructing, and maintaining infrastructure such as buildings, roads, bridges, and water systems..",
      },
    ],
  },
  
];

const Programs = () => {
  const [selectedProgram, setSelectedProgram] = useState({
    category: "PGPM",
    program: "UG",
    image: mba,
    description:
    "Government College of Engineering, Bargur has been granted autonomous status from the year 2017-18 to 2022-23 (six years).",
  });

  const handleProgramClick = (category, program, image, description) => {
    setSelectedProgram({ category, program, image, description });
  };

  return (
    <>
      <h1 className="main-heading">Programme Highlights</h1>
       <div className="programme-main">
       <div className="programmes-container">
        <div className="programmes-sidebar">
          {programs.map((section) => (
            <div key={section.category}>
              <div className="programmes-category">{section.category}</div>
              <ul>
                {section.programs.map((prog) => (
                  <li
                    key={prog.name}
                    className={
                      selectedProgram.program === prog.name ? "active" : ""
                    }
                    onClick={() =>
                      handleProgramClick(
                        section.category,
                        prog.name,
                        prog.image,
                        prog.description
                      )
                    }
                  >
                    {prog.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="programmes-content">
          <img
            src={selectedProgram.image}
            alt={selectedProgram.program}
            className="programmes-image"
          />
          <div className="programmes-text">
            <h2>Under Graduate Programme in BE -{selectedProgram.program}</h2>
            <p>{selectedProgram.description}</p>
            <div className="programmes-buttons">
              <button className="read-more-button">READ MORE</button>
              <button className="admission-button">ADMISSION</button>
            </div>
          </div>
        </div>
      </div>
        <div className="programme-image">
          <section>
            <img src={girl} alt="Student" />
          </section>
        </div>
       </div>
    </>
  );
};

export default Programs;
