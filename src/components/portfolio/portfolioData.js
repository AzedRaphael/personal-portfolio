import Image1 from "../../assets/img/portfolio/herobiz.png";
import Image3 from "../../assets/img/portfolio/restaurant.png";
import Image4 from "../../assets/img/portfolio/medium-clone.png";
import Image5 from "../../assets/img/portfolio/cryptopaay.png";

const PortfolioData = [
  {
    id: 1,
    type: "Medium clone",
    image: Image4,
    modalDetails: [
      {
        project: "blog clone",
        client: "self",
        language: "Typescript, Tailwind CSS, Sanity,HTML",
        preview: "www.medium-clone.vercel.com",
        link: "https://www.medium-clone.vercel.com/",
      },
    ],
  },
  
  {
    id: 2,
    type: "CryptoPaay",
    image: Image5,
    modalDetails: [
      {
        project: "Paid Website",
        client: "cryptoPaay",
        language: " HTML, CSS, Javascript, ReactJs",
        preview: "github",
        link: "https://www.github.com/AzedRaphael/cryptoPaay",
      },
    ],
  },
  {
    id: 3,
    type: "Restaurants site",
    image: Image3,
    modalDetails: [
      {
        project: "restaurant",
        client: "paid",
        language: "HTML, CSS, JS",
        preview: "github-frontend",
        link: "https://www.github.com/AzedRaphael/restaurant-clone",
      },
    ],
  },
  {
    id: 4,
    type: "Front End",
    image: Image1,
    modalDetails: [
      {
        project: "HeroBiz",
        client: "self",
        language: "HTML, CSS, Javascript",
        preview: "github",
        link: "https://www.github.com/AzedRaphael/demo-website",
      },
    ],
  },
];

export default PortfolioData;
