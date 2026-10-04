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
    <div className="app">

      <div className="ambient-glow"></div>

      {!opened ? (
        <main className="card intro-card">

          <div className="cake-area">

            <div className="cake">

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

              <div className="cake-middle"></div>

              <div className="cake-bottom">
                <div className="cake-highlight"></div>
              </div>

              {blown && (
                <div className="smoke">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              )}

            </div>

          </div>

          <p className="top-text">
            Uzi turns 19!
          </p>

          <h1>
            Happy Birthday
            <span>Uzi!</span>
          </h1>

          <p className="intro">
            Make a wish and blow the candles.
          </p>

          {!blown ? (
            <>
              <button
                className="blow-button"
                onClick={blowCandles}
              >
                Blow the Candles
              </button>

              <p className="hint">
                
              </p>
            </>
          ) : (
            <>
              <button
                className="open-button"
                onClick={openWish}
              >
                Open
                <span>→</span>
              </button>

              <p className="hint">
                The candles are out.
              </p>
            </>
          )}

        </main>
      ) : (

        <main className="card wish-card">

          <div className="wish-screen">

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

            <div className="bottom-decoration"></div>

          </div>

        </main>
      )}

    </div>
  );
}

export default App;