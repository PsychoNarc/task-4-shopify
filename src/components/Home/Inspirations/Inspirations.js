import React from "react";
import "./Inspirations.css";
import ImageOne from "../../../assets/img/blog-1.jpg";
import ImageTwo from "../../../assets/img/blog-2.jpg";
import ImageThree from "../../../assets/img/blog-3.jpg";

const DataInspirations = [
  {
    title: "MFW Today",
    description:
      "Couture shows have been held in Paris since at least 1945, when the Chambre Syndicale de la Haute Couture...",
    image: ImageOne,
    alt: "insp1",
  },
  {
    title: "Paris Fashion Week",
    description:
      "But the more organized “semaine de la mode” that we know today was put together by the French Fashion Federation Fédération Française...",
    image: ImageTwo,
    alt: "insp2",
  },
  {
    title: "Fashion Shows",
    description:
      "Artist Unskilled Worker—Helen Downie—discusses her work in her London studio and shows the places that inspire her. Today the main...",
    image: ImageThree,
    alt: "insp3",
  },
];

export const Inspirations = () => {
  return (
    <div className="inspirations-container">
      <h1 className="inspirations-header">Inspirations</h1>
      <div className="inspirations-wrapper">
        {DataInspirations.map((item, index) => {
          return (
              <div className="inspirations-card" key={index}>
                <img
                  className="inspirations-icon"
                  src={item.image}
                  alt={item.alt}
                />
                <h2 className="inspirations-title">{item.title}</h2>
                <p className="inspirations-description">{item.description}</p>
              </div>
          );
        })}
      </div>
    </div>
  );
};
