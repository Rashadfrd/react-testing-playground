import React, { useState } from "react";

function UserActions() {
  const [count, setCount] = useState(0);

  const countHandler = () => {
    setCount((prevState) => {
      return prevState + 1;
    });
  };

  return (
    <>
      <h3>{count}</h3>
      <button onClick={countHandler}>Increment</button>
    </>
  );
}

export default UserActions;
