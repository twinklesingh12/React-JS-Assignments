import React, { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header className="studio-header">
        <nav className="studio-nav">
          <a className="studio-brand" href="../">
            <span>✳</span> Assignment Studio
          </a>
          <a className="studio-back" href="../">
            ← All assignments
          </a>
        </nav>
      </header>

      <main className="counter-page">
        <section className="counter">
          <p className="eyebrow">ONE CLICK AT A TIME</p>
          <h1>Make every click count.</h1>
          <p className="subtitle">
            A tiny counter with endless possibilities.
          </p>

          <output className="count" aria-live="polite">
            {count}
          </output>

          <div className="buttons">
            <button
              className="decrement"
              onClick={() => setCount(previous => previous - 1)}
            >
              − Decrement
            </button>

            <button
              className="increment"
              onClick={() => setCount(previous => previous + 1)}
            >
              + Increment
            </button>
          </div>

          <button className="reset" onClick={() => setCount(0)}>
            Reset to zero ↺
          </button>
        </section>
      </main>
    </>
  );
}