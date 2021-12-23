import React from "react";
import { Buttons } from "../../Buttons/Buttons";
import ImageInfo from "../../../assets/img/info.jpg";
import "./Info.css";

export const Info = () => {
  return (
    <>
      <div className="info-container">
        <div className="info-wrapper">
          <div className="info-row">
            <div className="column-one">
              <div className="img-wrap">
                <img className="info-img" src={ImageInfo} alt="info" />
              </div>
            </div>
            <div className="column-two">
              <div className="text-wrapper">
                <p className="topline">Trending</p>
                <h1 className="heading">Pink is the new Black</h1>
                <p className="subtitle">
                  Unlike the other fashion capitals, there are actually two
                  “fashion weeks” in Paris. If you don't count the menswear
                  shows. The “haute couture” high fashion shows and the
                  “prêt-à-porter” ready to wear shows.
                </p>
                <div className="btn-wrap">
                  <Buttons
                    to="/"
                    buttonStyle="button-primary"
                    buttonSize="button-medium"
                  >
                    See More
                  </Buttons>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
