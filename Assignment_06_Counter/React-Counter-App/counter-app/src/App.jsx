import React, { useState } from 'react';

function App() {
  // The counter starts at zero.
  const [count, setCount] = useState(0);

  return (
    <main className="counter">
      <h1>Counter App</h1>
      <p>Click a button to change the value.</p>
      <div className="count" aria-live="polite">{count}</div>

      <div className="buttons">
        <button onClick={() => setCount(previous => previous - 1)}>
          Decrement
        </button>
        <button className="reset" onClick={() => setCount(0)}>
          Reset
        </button>
        <button onClick={() => setCount(previous => previous + 1)}>
          Increment
        </button>
      </div>
    </main>
  );
}

export default App;
