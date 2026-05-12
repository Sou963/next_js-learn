import React from "react";
import { useState } from "react";

function state01() {
  const [value, setvalue] = useState(0);
  function inc() {
    setvalue(value + 1);
  }
  return (
    <div>
      <h1>the post like : {value}</h1>
      <button onClick={inc}>💕</button>
    </div>
  );
}

export default state01;
