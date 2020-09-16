import React, { useState } from "react";
function Hook(){
  const[counter, setCounter] = useState(0);
  
  const onClick = () => {
    setCounter(counter + 1); // (B)
  };

  return (
    <>
      <p>You have clicked {counter} times</p>
      <button onClick={onClick}>Click me</button>
    </>
  );
};

export default Hook;