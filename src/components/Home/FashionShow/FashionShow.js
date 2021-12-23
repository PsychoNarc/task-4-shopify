import React from "react";
import ReactPlayer from "react-player";
import "./FashionShow.css";

export const FashionShow = () => {
  return (
    <div className="fashion-show-container">
      <div className="fashion-show-content">
        <h2>Fashion Show</h2>
        <p>
          Use this text to share information about your brand with your
          customers. Describe a <br /> product, share announcements, or welcome
          customers to your store.
        </p>
        <div className="player-wrapper">
          <ReactPlayer
            className="react-player"
            url="https://youtu.be/zIOxfqp52W0"
            width="100%"
            height="100%"
            controls={true}
          />
        </div>
      </div>
    </div>
  );
};
