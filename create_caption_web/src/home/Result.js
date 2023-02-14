import Copy from "../Assets/Images/icons/copy.png";
import React from "react";
import Time from "../Assets/Images/time.png";
import ResultImg from "../Assets/Images/resultImg.png";
import Like from "../Assets/Images/icons/like.png";
import NotLike from "../Assets/Images/icons/like2.png";

const Result = ({
  isFav,
  setIsFav,
  displayCaption,
  handleCopyCaption,
  countWords,
  handleHistory,
  isHistory,
  setHistory,
  history,
}) => {
  const handleFav = () => {
    if (history.length > 0) {
      history[0].isFavourite = !history[0].isFavourite;
      setIsFav(!isFav);
    } else {
      let setLocalData = { displayCaption, isFavourite: true };
      setHistory([setLocalData]);
      setIsFav(!isFav);
      setLocalData = JSON.stringify(setLocalData);
      localStorage.setItem("caption_history", setLocalData);
    }
  };

  return (
    <div className="result-sec">
      <div className="result-top">
        {<h2 className="heading">Results</h2>}
        {
         history.length > 0 && <button
            onClick={(e) => {
              handleHistory(e);
            }}
            className={ "Previous-result"}
          >
            <img src={Time} alt="previous result" />
            Previous Results
          </button>
        }
      </div>
      {!displayCaption && (
        <div className="result-main">
          <div className="result-image">
            <img src={ResultImg} alt="result img" className="img-fluid" />
          </div>
          <p className="result-txt">
            It is a long established fact that a reader will be distracted.
          </p>
        </div>
      )}
      <div className="">
        <p className="result-descriiption">{displayCaption}</p>
        {displayCaption && (
          <div className="button-wrap">
            <div>
              <button
                className="transparent-btn me-3"
                onClick={() => {
                  handleCopyCaption(displayCaption);
                }}
              >
                <img src={Copy} alt="copy" className="me-2" /> Copy
              </button>
              <button className="transparent-btn" onClick={() => handleFav()}>
                {isFav ? (
                  <img src={Like} alt="Like" />
                ) : (
                  <img src={NotLike} alt="like2" />
                )}
              </button>
            </div>
            {/* <div className="result-counter">
              {countWords(displayCaption) +
                " words / " +
                displayCaption.trim().length +
                " chars"}
            </div> */}
          </div>
        )}{" "}
      </div>
    </div>
  );
};

export default Result;
