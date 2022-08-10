import React, { useState } from "react";
import "./styles.css";
var lotOfFlags = {
  "🏁": "Chequered",
  "🚩": "Triangular",
  "🎌": "Crossed",
  "🏴": "Black",
  "🏳️": "White",
  "🏳️‍🌈": "Rainbow",
  "🏳️‍⚧️": "Transgender",
  "🏴‍☠️": "Pirate"
};

var pileOfObject = Object.keys(lotOfFlags);

export default function App() {
  var [flag, setFlag] = useState("");

  function changeHandler(event) {
    var input = event.target.value;
    var flag = lotOfFlags[input];
    if (flag === undefined) {
      flag = "Sorry! We don't have your flag";
    }
    setFlag(flag);
  }

  function clickHandler(item) {
    var flag = lotOfFlags[item];
    setFlag(flag);
  }
  return (
    <div className="App">
      <h1>fun with flags</h1>
      <input
        onChange={changeHandler}
        placeholder="Input any flags or click from below"
      ></input>
      <h4>{flag}</h4>
      {pileOfObject.map(function (item) {
        return (
          <span
            key={item}
            onClick={() => clickHandler(item)}
            style={{ cursor: "pointer", padding: "0.9rem", fontSize: "2rem" }}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
}
