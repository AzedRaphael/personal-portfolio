import React from "react";

const skillsContent = [
  { skillClass: "p70", skillPercent: "70", skillName: "HTML" },
  { skillClass: "p89", skillPercent: "89", skillName: "JAVASCRIPT" },
  { skillClass: "p66", skillPercent: "66", skillName: "TAILWIND CSS" },
  { skillClass: "p60", skillPercent: "60", skillName: "NODE JS" },
  { skillClass: "p80", skillPercent: "80", skillName: "FIREBASE V9" },
  { skillClass: "p85", skillPercent: "85", skillName: "MONGO DB" },
  { skillClass: "p90", skillPercent: "90", skillName: "REACT JS" },
  { skillClass: "p70", skillPercent: "70", skillName: "NEXT JS" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
