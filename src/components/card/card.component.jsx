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
          src={`https://robohash.org/${props.idol.id}?set=set2&size=180x180`}
          alt="robot"
        ></img>
        <h1>{props.idol.name}</h1>
      </div>
    </a>
  );
};
