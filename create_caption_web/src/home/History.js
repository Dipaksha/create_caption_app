import React from "react";
import Remove from "../Assets/Images/icons/remove.png";
import Copy from "../Assets/Images/icons/copy.png";
import Cross from "../Assets/Images/icons/cross.png";
import Like from "../Assets/Images/icons/like.png";
import NotLike from "../Assets/Images/icons/like2.png";
import ChevronLeft from "../Assets/Images/icons/chevron-left.png";

const History = ({
  setIsFav,
  isFav,
  history,
  setHistory,
  handleCopyCaption,
  handleAddToFavorite,
  countWords,
  clearAllHistory,
  setIsHistory,
}) => {
  const handleDeleteCaption = (selectedItem) => {
    const deleteCaption = history.filter(
      (item) => item.displayCaption !== selectedItem.displayCaption
    );
    setHistory(deleteCaption);
    if (history.length === 1) {
      setIsHistory(false);
    }
  };

  const handlePrevious = () => {
    setIsHistory(false);
    setIsFav(history[0].isFavourite);
  };

  return (
    <div>
      <aside>
        <div className="aside-top">
          <button
            onClick={() => handlePrevious()}
            className="previous-caption__result"
          >
            <img src={ChevronLeft} alt="chevron left" />
            <h3 className="title">Previous caption results</h3>
          </button>
          <div className="remove">
            <button className="transparent-btn me-3" onClick={clearAllHistory}>
              <img src={Remove} alt="dustbin" className="me-2" /> Clear All
            </button>
          </div>
        </div>
        {history
          .filter((item) => {
            return item.isFavourite === true;
          })
          .concat(
            history.filter((item) => {
              return item.isFavourite === false;
            })
          )
          .slice(0, 50)
          .map(
            (item) =>
              item.displayCaption && (
                <div className="card">
                  <div className="cnt">
                    <h3 className="card-heading">{item.displayCaption}</h3>
                    <p className="card-counter">
                      {" "}
                      {countWords(item.displayCaption) +
                        " words / " +
                        item.displayCaption.trim().length +
                        " chars"}
                    </p>
                  </div>
                  <div className="button-wrap">
                    <div className="button-wrap__inside">
                      <button
                        className="transparent-btn me-3"
                        onClick={() => handleCopyCaption(item.displayCaption)}
                      >
                        <img src={Copy} alt="copy" className="me-2" /> Copy
                      </button>
                      <button
                        className="transparent-btn"
                        onClick={() => {
                          handleDeleteCaption(item);
                        }}
                      >
                        <img src={Cross} alt="cross" className="me-2" />
                        Remove
                      </button>
                    </div>
                    <button
                      className="like-icon"
                      onClick={() => {
                        handleAddToFavorite(item);
                      }}
                    >
                      {!item.isFavourite ? (
                        <img src={NotLike} alt="like2" />
                      ) : (
                        <img src={Like} alt="Like" />
                      )}
                    </button>
                  </div>
                </div>
              )
          )}
      </aside>
    </div>
  );
};

export default History;
