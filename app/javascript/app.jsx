import * as React from 'react'
import Counter from "./counter";

export default function App() {
  let style = {
    border: "1px solid red",
    padding: "1rem"
  }

  return (
    <div style={style}>
      <h1>This is a React App!</h1>
      <p>This are some react counters!</p>

      <Counter />
      <Counter />
      <Counter />
    </div>
  );
}
