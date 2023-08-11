import React, { useState } from "react";

function UserActions() {
  const [count, setCount] = useState(0);

  const countHandler = () => {
    setCount((prevState) => {
      return prevState + 1;
    });
  };

  const copyHandler = () => {
    window.navigator.clipboard.writeText("Some text copied here...");
  };

  return (
    <>
      <h3>{count}</h3>
      <button onClick={countHandler}>Increment</button>
      <button onClick={copyHandler}>Copy</button>
      <input type="text" />

      <select multiple>
        <option value="tiger">Tiger</option>
        <option value="cat">Cat</option>
        <option value="giraffe">Giraffe</option>
      </select>
    </>
  );
}

export default UserActions;
