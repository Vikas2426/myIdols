import React from "react";
// import idols from "../../Assets/idols.json";
import "./card-list.styles.css";
import { Card } from "../card/card.component.jsx";

export const CardList = (props) => {
  let { idols } = props;
  return (
    <div className="card-list">
      {idols.map((idol) => (
        <Card key={idol.id} idol={idol} link={idol.wiki} />
      ))}
    </div>
  );
};
