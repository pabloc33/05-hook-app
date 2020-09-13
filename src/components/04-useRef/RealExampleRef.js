import React, { useState } from "react";
import "../02-useEffect/effects.css";
import { MultiplesCustomHooks } from "../03-examples/MultiplesCustomHooks";

export const RealExampleRef = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h1>RealExampleRef</h1>
      <hr />
      {show && <MultiplesCustomHooks />}

      <button
        className="btn btn-primary mt-5"
        onClick={() => {
          setShow(!show);
        }}
      >
        show/hide
      </button>
    </div>
  );
};
