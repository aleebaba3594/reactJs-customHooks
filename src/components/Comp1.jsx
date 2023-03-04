import React, { useState } from "react";
// imported own custom made hook
import useEffectTitle from "../customHooks/useEffect";


export default function Comp1() {
  const [title, setTitle] = useState(0);
  //calling custom hook with parameter
  useEffectTitle(title);

  const handleTitle = () => {
    setTitle(title + 1);
  };
  return (
    <div>
      <button onClick={handleTitle}>comp 1 </button>
      <p>
        check document tilte <span style={{ color: "red" }}>{title}</span>
      </p>
    </div>
  );
}
