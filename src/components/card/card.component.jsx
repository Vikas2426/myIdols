import React from "react";
import "./card.styles.css";

export const Card = (props) => {
  return (
    <a
      className="card-container"
      href={props.idol.wiki}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div>
        <img
          src={props.idol.image}
          alt="robot"
          width="150"
          height="201"
        ></img>
        <h1>{props.idol.name}</h1>
      </div>
    </a>
  );
};
