import React, { useEffect, useState } from "react";
import Square from "./components/Square";

export default function App() {
  const [state, setState] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  const handleClick = () => {
    setState([...state, 1]);
  };
  return (
    <div
      style={{
        background: "green",
      }}
      className="px-3"
    >
      <button className="btn btn-danger" onClick={() => handleClick()}>
        +
      </button>
      <div
        style={{
          background: "blue",
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          maxWidth: "1110px",
          width: "100%",
          margin: "0 auto",
          gap: "30px",
          padding: "20px",
        }}
      >
        {state.map((item, index) => (
          <Square key={index} />
        ))}
      </div>
    </div>
  );
}
