import React from "react";
import "../App.css";

export default function Squares({ value, chooseSquare }) {
  return (
    <div className="sqaure" onClick={chooseSquare}>
      {value}
    </div>
  );
}
