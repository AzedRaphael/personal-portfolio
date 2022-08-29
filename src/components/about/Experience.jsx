import React from "react";

const experienceContent = [
  {
    year: "   2022 - Present",
    position: " Web Developer",
    compnayName: "Alabian solutions",
    details: `write well designed,efficient codes that solves real problems via integration of various back end services`,
  },
  {
    year: "2022- present",
    position: "Product Manager",
    compnayName: "Scrum Agile certified",
    details: `Manage products life cycle proces using a well tested and proven agile framework`,
  },
  {
    year: "2020-2022",
    position: " Data Analyst",
    compnayName: "AB MICROFINANCE BANK",
    details: `Analyse different loan applications via the credit bureau database and provide low risk avenues
              for financing businesses seeking for funding`,
  },
  {
    year: "2017-2020",
    position: " Product Lead",
    compnayName: "Heldi Foods",
    details: `Manage daily operations for product design, analyse market data and perception for improved revenue
                and manage a team of other designers in order to achieve teams objective`,
  }
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
