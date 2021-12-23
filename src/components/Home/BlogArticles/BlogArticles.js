import React from "react";
import "./BlogArticles.css";
import ImageOne from "../../../assets/img/blog-1.jpg";
import ImageTwo from "../../../assets/img/blog-2.jpg";
import ImageThree from "../../../assets/img/blog-3.jpg";
import { Buttons } from "../../Buttons/Buttons";
import { Link } from "react-router-dom";

export const DataBlogs = [
  {
    title: "MFW Today",
    description:
      "Couture shows have been held in Paris since at least 1945, when the Chambre Syndicale de la Haute Couture...",
    image: ImageOne,
    alt: "insp1",
    action: "Continue Reading",
    author: "Creative Tim",
    date: "October 19, 2021",
    id: 1,
    paraOne:
      " Couture shows have been held in Paris since at least 1945, when the Chambre Syndicale de la Haute Couture required couture houses to present a collection of at least 35 runs to the press, with both daytime and evening wear. (You can read a fascinating comparison of Paris shows past and present, by Katherine Whitehorn — erstwhile fashion editor for UK's The Observer.",
    paraTwo:
      "But the more organized “semaine de la mode” that we know today was put together by the French Fashion Federation (Fédération Française de la Couture) in 1973, and held originally at Versailles Palace.",
    paraThree:
      "Unlike the other fashion capitals, there are actually two “fashion weeks” in Paris (if you don’t count the menswear shows). The “haute couture” (high fashion) shows and the “prêt-à-porter” (ready to wear) shows.",
  },
  {
    title: "Paris Fashion Week",
    description:
      "But the more organized “semaine de la mode” that we know today was put together by the French Fashion Federation Fédération Française...",
    image: ImageTwo,
    alt: "insp2",
    action: "Continue Reading",
    author: "Creative Tim",
    date: "October 19, 2021",
    id: 2,
    paraOne:
      "Artist Unskilled Worker—Helen Downie—discusses her work in her London studio and shows the places that inspire her. Today the Federation main. Most events are organized under the auspices of the National Chamber for Italian Fashion (Camera Nazionale della Moda Italiana), founded in 1958. But some of the largest design houses — such as Dolce & Gabbana and Gucci — show outside of Camera Moda. While many shows appear under the auspices of the Chamber for Italian Fashion, many of the largest names (such as Dolce & Gabbana) show independently.",
    paraTwo:
      " Couture shows have been held in Paris since at least 1945, when the Chambre Syndicale de la Haute Couture required couture houses to present a collection of at least 35 runs to the press, with both daytime and evening wear. (You can read a fascinating comparison of Paris shows past and present, by Katherine Whitehorn — erstwhile fashion editor for UK's The Observer. But the more organized “semaine de la mode” that we know today was put together by the French Fashion Federation (Fédération Française de la Couture) in 1973, and held originally at Versailles Palace.",
  },
  {
    title: "Fashion Shows",
    description:
      "Artist Unskilled Worker—Helen Downie—discusses her work in her London studio and shows the places that inspire her. Today the main...",
    image: ImageThree,
    alt: "insp3",
    action: "Continue Reading",
    author: "Creative Tim",
    date: "October 19, 2021",
    id: 3,
    paraOne:
      "Unlike the other fashion capitals, there are actually two “fashion weeks” in Paris (if you don't count the menswear shows). The “haute couture” (high fashion) shows and the “prêt-à-porter” (ready to wear) shows.",
    paraTwo:
      " Couture shows have been held in Paris since at least 1945, when the Chambre Syndicale de la Haute Couture required couture houses to present a collection of at least 35 runs to the press, with both daytime and evening wear. (You can read a fascinating comparison of Paris shows past and present, by Katherine Whitehorn — erstwhile fashion editor for UK's The Observer. But the more organized “semaine de la mode” that we know today was put together by the French Fashion Federation (Fédération Française de la Couture) in 1973, and held originally at Versailles Palace.",
    paraThree:
      "Unlike the other fashion capitals, there are actually two “fashion weeks” in Paris (if you don’t count the menswear shows). The “haute couture” (high fashion) shows and the “prêt-à-porter” (ready to wear) shows.",
  },
];

export const BlogArticles = () => {
  return (
    <div className="blog-container">
      <h2 className="blog-header">Blog Articles</h2>
      <hr />
      <div className="blog-wrapper">
        {DataBlogs.map((item) => {
          return (
            <Link to={`/blog/${item.id}`} className="item-link">
              <div className="blog-card" key={item.id}>
                <img className="blog-icon" src={item.image} alt={item.alt} />
                <h2 className="blog-title">{item.title}</h2>
                <p className="blog-description">{item.description}</p>

                <p className="blog-continue">
                  {item.action}
                  <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                </p>

                <div className="blog-footnote">
                  <span>{item.author}</span>
                  <span>{item.date}</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="blog-button">
        <Buttons to="/">View All</Buttons>
      </div>
    </div>
  );
};
