import React, { useState } from "react";
import Remove from "../Assets/Images/icons/remove.png";
import Copy from "../Assets/Images/icons/copy.png";
import Cross from "../Assets/Images/icons/cross.png";
import Like from "../Assets/Images/icons/like.png";
import AsideData from "./AsideCnt";
const Aside = () => {
  const [data, setData] = useState(AsideData);
  return (
    <div>
      {/* <aside>
                <div className="aside-top">
                    <h3 className="title">Previous caption results</h3>
                    <div className="remove">
                        <img src={Remove} alt="dustbin" className="me-2"/> Clear All
                    </div>
                </div>
                {
                    data.map((value)=>(
                        <div className="card">
                            <div className="cnt">
                                <h3 className="card-heading">{value.heading}</h3>
                                <p className="card-counter">{value.counter}</p>
                            </div>
                            <div className="button-wrap">
                                <div>
                                    <button className="transparent-btn me-3"><img src={Copy} alt="copy" className="me-2"/> Copy</button>
                                    <button className="transparent-btn"><img src={Cross} alt="cross" className="me-2"/>Remove</button>
                                </div>
                                <div className="like-icon">
                                    <img src={Like} alt="Like" />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </aside> */}
    </div>
  );
};

export default Aside;
