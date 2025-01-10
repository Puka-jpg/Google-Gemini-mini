import React, { useContext } from "react";
import "./main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/context"; // ensure this import is correct

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Pukar</span>
              </p>
              <p>How can I help you Today ?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Give the roadmap to learn Maching Learning</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>Explain necessary concepts of maching Learning</p>
                <img src={assets.bulb_icon} alt="" />
              </div>

              <div className="card">
                <p>Where to learn numpy</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>
                  Give the raw code for Leniar Regression Algorithm to predict
                  housing prices{" "}
                </p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}

              {/*  To display as html tags*/}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              type="text"
              placeholder="Enter a prompt here"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              {input ? (
                <img onClick={() => onSent()} src={assets.send_icon} alt="" />
              ) : null}
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so
            double check its responses{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
