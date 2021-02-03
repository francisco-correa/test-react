import React, { useState } from "react";

function Traffic() {
  const [color, setColor] = useState(" ");
  return (
    <div className="traffic-light">
      <div
        className={`red light ${color === "red" ? "turn-on" : ""}`}
        onClick={() => setColor("red")}
      />

      <div
        className={`yellow light ${color === "yellow" ? "turn-on" : ""}`}
        onClick={() => setColor("yellow")}
      />

      <div
        className={`green light ${color === "green" ? "turn-on" : ""}`}
        onClick={() => setColor("green")}
      />
    </div>
  );
}

export default Traffic;
