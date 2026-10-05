import { useState } from "react";
import "./App.css";

function App() {
  const [blown, setBlown] = useState(false);
  const [opened, setOpened] = useState(false);

  const blowCandles = () => {
    setBlown(true);
  };

  const openWish = () => {
    setOpened(true);
  };

  return (
    <div className={`app ${opened ? "message-mode" : "intro-mode"}`}>

      <div className="background">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>

        <div className="confetti">
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
        </div>
      </div>

      {!opened ? (
        <main className="intro">
          <div className="intro-content">

            <p className="top-text">
              Uzi turns 19!
            </p>

            <h1>
              Happy Birthday
              <span>Uzi!</span>
            </h1>

            <p className="intro-text">
            </p>

            <div className="cake-scene">

              <div className="cake-shadow"></div>

              <div className={`cake ${blown ? "cake-blown" : ""}`}>

                <div className="candles">

                  <div className="candle">
                    <div className={`flame ${blown ? "off" : ""}`}></div>
                    <div className="wick"></div>
                    <div className="candle-body"></div>
                  </div>

                  <div className="candle">
                    <div className={`flame ${blown ? "off" : ""}`}></div>
                    <div className="wick"></div>
                    <div className="candle-body"></div>
                  </div>

                  <div className="candle">
                    <div className={`flame ${blown ? "off" : ""}`}></div>
                    <div className="wick"></div>
                    <div className="candle-body"></div>
                  </div>

                </div>

                <div className="cake-top">
                  <div className="cream"></div>
                </div>

                <div className="cake-middle">
                  <div className="cake-detail"></div>
                </div>

                <div className="cake-bottom">
                  <div className="cake-highlight"></div>
                </div>

                {blown && (
                  <div className="smoke">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                )}

              </div>
            </div>

            {!blown ? (
              <>
                <button
                  className="blow-button"
                  onClick={blowCandles}
                >
                  <span className="button-glow"></span>
                  <span>Blow the Candles</span>
                </button>

                <p className="hint">
                  Make a wish first.
                </p>
              </>
            ) : (
              <>
                <button
                  className="open-button"
                  onClick={openWish}
                >
                  <span>Open</span>
                  <b>→</b>
                </button>

                <p className="hint">
                  The candles are out.
                </p>
              </>
            )}

          </div>
        </main>
      ) : (
        <main className="notebook">

          <div className="paper">

            <div className="paper-holes">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="paper-content">

              <p className="note-top">
                Uzi turns 19!
              </p>

              <h1>
                Happy Birthday Uzi!
                <span>♡</span>
              </h1>

              <div className="notebook-divider">
                <span></span>
              </div>

              <div className="message">

                <p>
                  Happy Birthday dear uzi!
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
                  Have the most amazing birthday ever!
                </h2>

              </div>

              <div className="paper-line"></div>

              <div className="bottom-decoration">
                <span></span>
                <span></span>
                <span></span>
              </div>

            </div>
          </div>

        </main>
      )}

    </div>
  );
}

export default App;