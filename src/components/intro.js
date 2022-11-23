import React from "react";
import "../css/intro.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {useNavigate} from "react-router-dom";

const Intro = () => {


    const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        slide: 'img',
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: false,
        centerMode: true,
        variableWidth: false,
        vertical: false,
        dots: false
    }


   const navigate = useNavigate();

    return(
        <>
        <div className= "main">
            <div className="titleWrapper">
                <h1>공영주차장, 비교해 둠.</h1>
                <h3>최적의 공영주차장을 찾아보세요.</h3>
                <button onClick={()=> navigate("/main")}>찾으러가기</button>
            </div>
            
            <div className= "imageWrapper">
                
                <div><img src="/main-phone-mockup-base.png" alt=""></img></div>
                <div><img src="/main-rebalancing-mockup.png" alt=""></img></div>
                <Slider {...settings} className= "slider">
                <div><img src="/main-graphdetail-mockup.png" alt=""></img></div>
                <div><img src="/main-kakakochat-mockup.png" alt=""></img></div>
                </Slider>
            </div>
            
        </div>
        </>
    )
}

export default Intro;