import React from "react";

const SocialShare = [
  {
    iconName: "fa fa-github",
    link: "https://www.github.com/AzedRaphael",
  },
  { iconName: "fa fa-twitter", link: "https://twitter.com/AzedRaphael?t=oAPmEOsWLGystpN0v_nNow&s=09" },
  {
    iconName: "fa fa-linkedin",
    link: "https://www.linkedin.com/in/raphael-enweazu-373293166",
  },
  // { iconName: "fa fa-discord", link: "https://discordapp.com/users/raphaz#4135" },
];

const Social = () => {
  return (
    <ul className="social list-unstyled pt-1 mb-5">
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            <i className={val.iconName}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
