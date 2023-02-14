import React, { useState } from "react";
import Slider from "react-slick";
import Buld from "../Assets/Images/light-bulb.png";
import EmojiIdea from "../Assets/Images/emojidea.png";
import EmojiSmily from "../Assets/Images/emojismily.png";
import EmojiToggle from "../Assets/Images/icons/toggle.png";
import HashSwitch from "../Assets/Images/icons/hashswitch.png";
import Cross from "../Assets/Images/icons/modalcross.png";
import Point from "../Assets/Images/icons/pointbottom.png";

const TipsModal = ({ setGetTips }) => {

    const [slideImg,setSlideImg]= useState(0)

    const data = [
        {
        id: 0,
        heading: "Tips for your search",
        img1: Buld,
        alt1: Buld,
        img2: Point,
        alt2: Point,
        desc: "Write keywords to generate captions.",
        example: "Example",
        mainTxt: "Beautiful, Beach, Vacation, Dubai",
        btmDes:
            "Escape to paradise and soak up the sun on the stunning beaches of Dubai.",
        },
        {
        id: 1,
        heading: "Tips for your search",
        img1: EmojiIdea,
        alt1: EmojiIdea,
        img2: Point,
        alt2: Point,
        desc: "Write keywords to generate captions.",
        example: "Example",
        mainTxt: "Vacation enjoying in dubai beach",
        btmDes:
            "Escape to paradise and soak up the sun on the stunning beaches of Dubai.",
        },
        {
        id: 2,
        heading: "Get emotions for your captions",
        img1: EmojiSmily,
        alt1: EmojiSmily,
        img2: Point,
        alt2: Point,
        img3: EmojiToggle,
        alt3: EmojiToggle,
        example: "Example",
        mainTxt: "Drinks for a beautiful summer day",
        btmDes:
            "Escape to paradise and soak up the sun on the stunning beaches of Dubai🌴.",
        },
        {
        id: 3,
        heading: "Get hashtags for your captions",
        img1: EmojiSmily,
        alt1: EmojiSmily,
        img2: Point,
        alt2: Point,
        img3: HashSwitch,
        alt3: HashSwitch,
        example: "Example",
        mainTxt: "Drinks for a beautiful summer day",
        btmDes:
            "Escape to paradise and soak up the sun on the stunning beaches of Dubai🌴 #Beach love #Dubai",
        },
    ];
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    
    };

    let slideChange=(currentslide)=>{
        setSlideImg(currentslide)
    }


    return (
        <div className="tips-modal">
        <div className="tips-modal__inner">
            <div
            className="cross"
            onClick={() => {
                setGetTips(false);
            }}
            >
            <img src={Cross} alt="close" />
            </div>
            <div className="buld-design">
            <img src={data[slideImg].img1} alt="Buld" />
            </div>
            <Slider {...settings} afterChange={(currentslide)=>slideChange(currentslide)}>
            {data.map((value,index) => {
                console.log("object==>",index)
                return (
                <>
                    <div>
                    <h1 className="modal-heading">{value.heading}</h1>
                    <p className="desc">{value.desc}</p>
                    <p className="example">{value.example}</p>
                    <p className="main-txt">{value.mainTxt}</p>
                    <div className="emoji-toggle">
                        <img src={value.img3} alt={value.alt3} />
                    </div>
                    <div className="point-image">
                        <img src={value.img2} alt={value.alt2} />
                    </div>
                    <p className="btm-desc">{value.btmDes}</p>
                    </div>
                </>
                );
            })}
            </Slider>
        </div>
        </div>
    );
};

export default TipsModal;
