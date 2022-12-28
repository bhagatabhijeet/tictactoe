import { useState } from "react";
import "./index.css";

export default function Square(props) {
  const [val, setVal] = useState("0");
  return (
    <button className="square" onClick={() => setVal("X")}>
      {val}
    </button>
  );
}
