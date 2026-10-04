import { useState } from "react";
import "./App.css";

function App() {
  const [opened, setOpened] = useState(false);

  const openWish = () => {
    setOpened(true);
  };

  return (
    <div className="app">

      <div className="background-hearts">
        <span>♡</span>
        <span>♡</span>
        <span>♡</span>
        <span>♡</span>
        <span>♡</span>
      </div>

      <main className={`card ${opened ? "opened" : ""}`}>

        {!opened ? (
          <div className="intro-screen">

            <div className="cake">🎂</div>

            <p className="top-text">
              Uzi turns 19!
            </p>

            <h1>
              Happy Birthday
              <span>Uzi!</span>
            </h1>

            <p className="intro">
              Open it already!!!
            </p>

            <button className="open-button" onClick={openWish}>
              Open
              <span>→</span>
            </button>

            <p className="hint">
              Click the button.
            </p>

          </div>
        ) : (
          <div className="wish-screen">

            <div className="celebration">
              
            </div>

            <p className="top-text">
              Uzi turns 19!
            </p>

            <h1>
              Happy Birthday Uzi!
              <span>❤️</span>
            </h1>

            <div className="divider">
              <span>♡</span>
            </div>

            <div className="message">

              <p>
                Happy Birthday dear uzi! 🎉🎂🎈
              </p>

              <p>
                I hope today brings you countless smiles,
                beautiful memories, and moments that you
                will remember for a very long time.
              </p>

              <p>
                Keep smiling, keep being yourself.
              </p>

              <h2>
                Have the most amazing birthday ever! 🥳
              </h2>

            </div>

            <div className="bottom-decoration">
            
            </div>

          </div>
        )}

      </main>

    </div>
  );
}

export default App;