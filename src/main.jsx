import React from "react";
import { createRoot } from "react-dom/client";

let globaState;
const useState = (initialState) => {
  if (globaState === undefined) {
    globaState = initialState;
  }

  const setState = (newState) => {
    console.log("pre-render", globaState);

    // ! Jgn lupa parameter nya
    globaState = newState;
    Render();
  };

  console.log(globaState);

  return [globaState, setState];
};

const Counter = () => {
  console.log("Re-render");

  const [count, setCount] = useState(0);
  function handleCounter() {
    setCount(count + 1);
  }
  return <button onClick={handleCounter}>{count}</button>;
};

const rootElement = document.createElement("div");

document.body.append(rootElement);

const appRoot = createRoot(rootElement);

function Render() {
  appRoot.render(<Counter />);
}

Render();
