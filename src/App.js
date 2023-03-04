import React from "react";
import Comp1 from "./components/Comp1";
import Comp2 from "./components/Comp2";

export default function App() {
  return (
    <div>
      <p>
        using useEffect custom hook,both comp is sharing same use effect hook
      </p>
      <p>
        we use cutom hook for reusablity, in any comp i need this logic i will
        call that hook
      </p>
      <Comp1 />
      <Comp2 />
    </div>
  );
}
