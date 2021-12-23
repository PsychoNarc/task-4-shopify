import React, { useState } from "react";
import "./Accordion.css";

const DataFAQ = [
  {
    question: "How do I order?",
    answer:
      "We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play this game of life you need to appreciate every moment. A lot of people don't appreciate the moment until it's passed.",
  },
  {
    question: "How can I make the payment?",
    answer:
      "It really matters and then like it really doesn't matter. What matters is the people who are sparked by it. And the people who are like offended by it, it doesn't matter. Because it's about motivating the doers. Because I'm here to follow my dreams and inspire other people to follow their dreams, too.",
  },
  {
    question: "How much time does it take to receive the order?",
    answer:
      "The time is now for it to be okay to be great. People in this world shun people for being great. For being a bright color. For standing out. But the time is now to be okay to be the greatest you. Would you believe in what you believe in, if you were the only one who believed it? If everything I did failed - which it doesn't, it actually succeeds - just the fact that I'm willing to fail is an inspiration. People are so scared to lose that they don't even try. Like, one thing people can't say is that I'm not trying, and I'm not trying my hardest, and I'm not trying to do the best way I know how.",
  },
  {
    question: "Where do I find the shipping details?",
    answer:
      "There's nothing I really wanted to do in life that I wasn't able to get good at. That's my skill. I'm not really specifically talented at anything except for the ability to learn. That's what I do. That's what I'm here for. Don't be afraid to be wrong because you can't learn anything from a compliment. I always felt like I could do anything. That's the main thing people are controlled by! Thoughts- their perception of themselves! They're slowed down by their perception of themselves. If you're taught you can't do anything, you won't do anything. I was taught I could do everything.",
  },
];

export const Accordion = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };

  return (
    <div className="accordion-section ">
      <div className="accordion-container">
        <div className="accordion-heading">
          <h2>Frequently Asked Questions</h2>
          <p>Our customer service will is here to help you.</p>
        </div>
        {DataFAQ.map((item, index) => {
          return (
            <div key={index}>
              <div
                className="accordion-wrap"
                onClick={() => toggle(index)}
                key={index}
              >
                <h6>{item.question}</h6>
                <span>
                  {clicked === index ? (
                    <i className="fa fa-chevron-up"></i>
                  ) : (
                    <i className="fa fa-chevron-down"></i>
                  )}
                </span>
              </div>
              {clicked === index && (
                <div className="accordion-dropdown">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
