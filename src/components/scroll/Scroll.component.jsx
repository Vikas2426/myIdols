import React from "react";

const Scroll = (props) => {
  return (
    <div style={{ overflowY: "scroll", height: "538px", marginTop: "2%" }}>
      {props.children}
    </div>
  );
};

export default Scroll;
