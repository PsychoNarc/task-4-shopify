import React from "react";
import "./Testimonials.css";
import AvatarOne from "../../../assets/img/avatar-1.png";
import AvatarTwo from "../../../assets/img/avatar-2.jpg";
import AvatarThree from "../../../assets/img/avatar-3.jpg";
import AvatarFour from "../../../assets/img/avatar-4.jpg";
import AvatarFive from "../../../assets/img/avatar-5.jpg";

const DataRowOne = [
  {
    image: AvatarOne,
    blockquote:
      `"If you have the opportunity to play this game of life you need to appreciate every moment."`,
    user: "Leila Kanye",
  },
  {
    image: AvatarTwo,
    blockquote:
      `"If you can't decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term."`,
    user: "Emily Jane",
  },
  {
    image: AvatarThree,
    blockquote:
      `"The time is now for it to be okay to be great. People in this world shun people for being great. For being a bright color."`,
    user: "Mike Jackson",
  },
];

const DataRowTwo = [
  {
    image: AvatarFour,
    blockquote:
      `"The networking at Web Summit is like no other European tech conference. Everything is amazing.The Arctic Ocean freezes every winter and much of the sea-ice then thaws every."`,
    user: "Abbie Dan",
  },
  {
    image: AvatarFive,
    blockquote:
      `"People are so scared to lose that they don't even try. Like, one thing people can't say is that I'm not trying, and I'm not trying my hardest."`,
    user: "Sandra Bell",
  },
];

export const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="container">
        <h3 className="testimonial-header">Testimonials</h3>
        <p className="testimonial-subtitle">
          Here's what our customer have to say
        </p>
        <div className="row">
          {DataRowOne.map((item, index) => {
            return (
              <div className="col-md-4 text-center" key={index}>
                <div className="profile">
                  <img src={item.image} alt={item.user} className="user" />
                  <blockquote className="user-quote">
                    {item.blockquote}
                  </blockquote>
                  <h4 className="user-name">{item.user}</h4>
                </div>
              </div>
            );
          })}
        </div>
        <div className="row">
          {DataRowTwo.map((item, index) => {
            return (
              <div className="col-md-6 text-center" key={index}>
                <div className="profile">
                  <img src={item.image} alt={item.user} className="user" />
                  <blockquote className="user-quote">
                    {item.blockquote}
                  </blockquote>
                  <h4 className="user-name">{item.user}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
