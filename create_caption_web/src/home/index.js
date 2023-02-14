import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import History from "./History";
import Result from "./Result";
import GetCaption from "../Assets/Images/getCaption.png";
import Loader from "../Component/Loader";
import Buld from "../Assets/Images/icons/light-bulb.png";
import Add from "../Assets/Images/main-add.png";
import Logo from "../Assets/Images/logo.png";
import AppleLogo from "../Assets/Images/icons/apple-icon.png";
import PlayStore from "../Assets/Images/icons/play-store.png";
import Coins from "../Assets/Images/icons/coins.png";
import Advertisment from "../Component/Advertisment";
import { useNavigate } from "react-router-dom";

import Tips from "./Tips";

export default function Home({ openai }) {
  const initialState = {
    for: "",
  };


  let navigate = useNavigate();

  const [caption, setCaption] = useState(initialState);
  const [displayCaption, setDisplayCaption] = useState("");
  const [history, setHistory] = useState(
    [] || JSON.parse(localStorage.getItem("caption_history"))
  );
  const [isHistory, setIsHistory] = useState(false);
  const [isEmojiChecked, setIsEmojiChecked] = useState(false);
  const [isHashtagChecked, setIsHashtagChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [getTips, setGetTips] = useState(false);
  const [getCaptions, setGetCaptions] = useState(true);
  const [isFav, setIsFav] = useState(false);
  const [credits, setCredits] = useState(1);

  const option = {
    model: "text-davinci-003",
    temperature: 0,
    max_tokens: 100,
    top_p: 1,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  };

  useEffect(() => {
    let setLocalData = JSON.stringify(history);
    if (history.length > 0) {
      localStorage.setItem("caption_history", setLocalData);
    }
  }, [history]);

  useEffect(() => {
    let localData = JSON.parse(localStorage.getItem("caption_history"));
    if (localData?.length > 0) {
      setHistory(localData);
    }
  }, []);

  useEffect(() => {
    if (displayCaption !== "") {
      const newHistory = [...history];
      newHistory.unshift({ displayCaption, isFavourite: false });
      setHistory(newHistory);
    }
  }, [displayCaption]);

  const handleDisplayData = async (event) => {
    event.preventDefault();
    let data = JSON.stringify(caption);
    let finalData = data.replace(/[/\])}[{(]/g, "");
    let object = {
      ...option,
      prompt:
        isEmojiChecked && isHashtagChecked
          ? `write caption  ${finalData} + emoji +  hastags`
          : isHashtagChecked
          ? `write caption  ${finalData} + hastags`
          : isEmojiChecked
          ? `write caption  ${finalData} + emoji`
          : `write caption ${finalData}`,

      max_tokens: 3000,
      temperature: 0.8,
    };
    setIsLoading(true);
    const response = await openai.createCompletion(object);
    setIsLoading(false);
    setDisplayCaption(response.data.choices[0].text);
    setIsFav(false);
    if  (credits === 0){
setCredits(0)
    }
    else{setCredits(credits-1)
    }
    localStorage.setItem("credit",credits)
  };

  const handleRegisterUser = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setCaption({ ...caption, [name]: value });
    if (value === "") {
      setGetCaptions(true);
    } else {
      setGetCaptions(false);
    }
  };

  const handleCopyCaption = (copyItem) => {
    navigator.clipboard.writeText(copyItem);
    toast.success("Copied", { id: "Copied" });
  };

  const handleAddToFavorite = (selectedFavoriteItem) => {
    const tempArray = [...history];
    tempArray.map((item) => {
      if (item.displayCaption === selectedFavoriteItem.displayCaption) {
        item.isFavourite = !item.isFavourite;
      }
      return item;
    });
    setHistory(tempArray);
  };

  const clearAllHistory = () => {
    localStorage.clear();
    setHistory([]);
    setIsHistory(false);
  };

  function countWords(str) {
    const arr = str.split(" ");
    return arr.filter((word) => word !== "").length;
  }
  const handleHistory = (e) => {
    e.preventDefault();
    if (history.length > 0) {
      setIsHistory(true);
    } else {
      setIsHistory(false);
    }
  };

  const openPlaystore = (id) => {
    if (id === 1) {
      window.open("https://play.google.com/store/apps");
    } else {
      window.open("https://www.apple.com/in/app-store/");
    }
  };

const handleCredits =(e)=>{
  e.preventDefault()
  localStorage.setItem("credit",5)
}

const handleAds = () => {
  navigate('/Advertisment') 
}

  return (
    <>
      {isLoading ? <Loader /> : ""}
      <div className="main-section">
        <div className="container-fluid p-md-0">
          <div className="row m-0">
            <div className="col-md-8 col-xxl-9 p-md-0">
              <section className="get-insta__caption">
                <div className="top">
                  <div className="heading-wraper">
                    {/* {localStorage.getItem("credit")} */}
                    <h1 className="heading">Get Insta Captions</h1>
                    <div className="coins">   
                      <img src={Coins} alt="coins" />
                      <p className="count">00</p>
                    </div>
                  </div>
                  <div className="get-caption__img">
                    <img
                      src={GetCaption}
                      alt="get caption"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="middle">
                  <div className="middle-top">
                    <h2 className="sub-heading">What is your post about?</h2>
                    <div
                      className="dropdown"
                      onClick={() => {
                        setGetTips(true);
                      }}
                    >
                      <p className="m-0">
                        <img src={Buld} alt="buld" /> Get Tips{" "}
                      </p>
                    </div>
                  </div>
                  <form>
                    <textarea
                      className="form-control"
                      rows="3"
                      placeholder="e.g. Drinks for a beautiful summer day"
                      name="for"
                      maxLength={200}
                      onChange={(e) => handleRegisterUser(e)}
                    ></textarea>
                    <div className="counter">{caption.for.length}/200</div>
                    <div className="form-check form-switch toggle-emoji">
                      <div className="emotion-emoji">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          role="switch"
                          id="Switch"
                          onChange={() => {
                            setIsEmojiChecked(!isEmojiChecked);
                          }}
                        />
                        <label className="form-check-label ms-3">
                          Get appropriate emoticons
                        </label>
                      </div>
                      <div className="emotion-hastag">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          role="switch"
                          id="Switch"
                          onChange={() => {
                            setIsHashtagChecked(!isHashtagChecked);
                          }}
                        />
                        <label className="form-check-label ms-3">
                          Get appropriate hastags
                        </label>
                      </div>
                    </div>
                    {console.log(localStorage.getItem("credit") !== 0, "ak")}
                   { localStorage.getItem("credit") !== 0 ? <button
                      className={
                        getCaptions ? "theme-btn opacity-50" : "theme-btn"
                      }
                      disabled={getCaptions}
                      onClick={(e) => {
                        handleDisplayData(e);
                      }}
                    >
                      Get Caption
                    </button> :  <button onClick={(e)=>{handleCredits(e)}}>get more credits</button>}
                    <div className="mobile-app">
                      <div className="cnt">
                        <div className="logo">
                          <img src={Logo} alt="get insta caption" />
                        </div>
                        <div className="info">
                          <p className="mb-0">Mobile Application</p>
                          <p className="mb-0">Coming Soon</p>
                        </div>
                      </div>
                      <div className="btn-wrapper">
                        <button
                          onClick={() => {
                            openPlaystore(1);
                          }}
                        >
                          <div className="icon">
                            <img src={AppleLogo} alt="apple logo" />
                          </div>
                          <div className="btn-cnt">
                            <p>Coming soon on the</p>
                            <h3>App Store</h3>
                          </div>
                        </button>
                        <button
                          onClick={() => {
                            openPlaystore(2);
                          }}
                        >
                          <div className="icon">
                            <img src={PlayStore} alt="play store" />
                          </div>
                          <div className="btn-cnt">
                            <p>Coming soon on the</p>
                            <h3>Google Play</h3>
                          </div>
                        </button>
                      </div>
                    </div>
                    {getTips && <Tips setGetTips={setGetTips} />}
                  </form>
                </div>
                <div className="bottom">
                  <div className="result-add">
                    <img src={Add} alt="add" className="img-fluid"  onClick={()=>handleAds()}/>
                  </div>
                </div>
              </section>
            </div>
            <div className="col-md-4 col-xxl-3">
              <div className="result">
                {/* <Advertisment /> */}
                {/* <Adsense
                  client="ca-pub-6834637722876237"
                  slot="3553278765"
                  style={{ width: 500, height: 300 }}
                  format=""
                /> */} 
                {!isHistory ? (
                  <Result
                    isFav={isFav}
                    setIsFav={setIsFav}
                    setHistory={setHistory}
                    history={history}
                    isHistory={isHistory}
                    handleHistory={handleHistory}
                    displayCaption={displayCaption}
                    handleCopyCaption={handleCopyCaption}
                    setDisplayCaption={setDisplayCaption}
                    countWords={countWords}
                  />
                ) : (
                  <History
                    isFav={isFav}
                    setIsFav={setIsFav}
                    isHistory={isHistory}
                    setIsHistory={setIsHistory}
                    history={history}
                    setHistory={setHistory}
                    handleCopyCaption={handleCopyCaption}
                    handleAddToFavorite={handleAddToFavorite}
                    countWords={countWords}
                    clearAllHistory={clearAllHistory}
                  />
                )}
                <Toaster />
               
                <div className="result-bottom">
                  <div className="result-add">
                    <img src={Add} alt="add" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
