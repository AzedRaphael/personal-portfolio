import React from "react";

const educationContent = [
  {
    year: "2011-2015",
    degree: "BIOCHEMISTRY DEGREE(major)",
    institute: "UNIVERSITY OF NIGERIA NSUKKA Nigeria",
    details: `Degree in plant science and biotecnology and biochemistry.`,
  },
  {
    year: "2022",
    degree: "VISION VOICE INC BOOTCAMP",
    institute: "PRIVATE COMPANY",
    details: `Provide mentorship with trained and experienced software engineers,series of high quality 
                project meetups and introduction to interview preparatory programs`,
  },
  {
    year: "2022",
    degree: "SELF TAUGHT DEVELOPER",
    institute: "YOUTUBE || UDEMY",
    details: `Learnt the basics of software development(HTML,CSS AND JAVASCRIPT) and worked on amazing projects
    that improved my kmowledge of react and next js`,
  }
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
