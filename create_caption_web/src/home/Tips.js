import React from "react";
import TipsModal from "./TipsModal";

const Tips = ({ setGetTips }) => {
  return (
    <div className="main-section">
      <div className="tips-modal__bg">
        <TipsModal setGetTips={setGetTips} />
      </div>
    </div>
  );
};

export default Tips;
