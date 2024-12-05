import React, { useState } from "react";

const State1 = () => {
  const [total, setTotal] = useState(0);
  const [colour, setColor] = useState("Red")

  return (
    <div>
      <button
        onClick={() => {
          setTotal(total + 1);
        }}
      >
        Badhta Hua
      </button>
      <button
        onClick={() => {
          setTotal(total - 1);
        }}
      >
        Ghatta Hua
      </button>
      <h1>{total}</h1>

      <h2>My favotite Color is Red</h2>

      <button
        style={{ backgroundColor: "red" }}
        onClick={() => {
          document.querySelector("h2").style.color = "red";
          document.querySelector("h2").innerHTML = "My favourite Color is Red";
        }}
      >
        Red
      </button>
      <button
        style={{ backgroundColor: "green" }}
        onClick={() => {
          document.querySelector("h2").style.color = "green";
          document.querySelector("h2").innerHTML =
            "My favourite Color is Green";
        }}
      >
        Green
      </button>
      <button
        style={{ backgroundColor: "pink" }}
        onClick={() => {
          document.querySelector("h2").style.color = "pink";
          document.querySelector("h2").innerHTML = "My favourite Color is Pink";
        }}
      >
        Pink
      </button>
      <button
        style={{ backgroundColor: "blue" }}
        onClick={() => {
          document.querySelector("h2").style.color = "blue";
          document.querySelector("h2").innerHTML = "My favourite Color is Blue";
        }}
      >
        Blue
      </button>
    </div>
  );
};

export default State1;
