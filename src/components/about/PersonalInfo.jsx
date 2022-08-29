import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Raphael" },
  { meta: "last name", metaInfo: "Enweazu" },
  { meta: "Age", metaInfo: "27 Years" },
  { meta: "Nationality", metaInfo: "Nigerian" },
  { meta: "Job Type", metaInfo: "Freelance and Full-Time" },
  { meta: "Address", metaInfo: "Lagos" },
  { meta: "Phone", metaInfo: "+234(0)- 702-529-1046" },
  { meta: "Email", metaInfo: "azuamakaraphael@gmail.com" },
  { meta: "LinkedIn", metaInfo: "Raphael Enweazu" },
  { meta: "Github", metaInfo: "AzedRaphael" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
