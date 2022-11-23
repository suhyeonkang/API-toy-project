import React, { useEffect } from "react";
import "../css/firstPage.css";
import AOS from "aos";
import "aos/dist/aos.css";

const FirstPage = () => {

    useEffect(() => {
        AOS.init();
    });

    return(
        <>
        <div className= "main">
            <div >
                <h1>공영주차장, 비교해 둠.</h1>
                <h3>최적의 공영주차장을 찾아보세요.</h3>
                <button>찾으러가기</button>
            </div>
            <div >
                <div id ="imageWrapper" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in-out" data-aos-duration="1200" data-aos-offset="200" >
                    <div><img src="/shadow1.png" alt=""></img></div>
                    <div><img src="/phone.png" alt=""></img></div>
                        
                </div>
                <div className= "imageWrapper2" data-aos="fade-down" data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in-out" data-aos-duration="2000">
                    <div><img src="/pin.png" alt=""></img></div>
                </div>
                <div className= "imageWrapper3" data-aos="fade-right" data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in-out" data-aos-duration="2200">
                    <div><img src="/pin.png" alt=""></img></div>
                </div>
                <div className= "imageWrapper4" data-aos="fade-left" data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in-out" data-aos-duration="2400">
                    <div><img src="/pin.png" alt=""></img></div>
                </div>
               
                <div className= "imageWrapper9" data-aos="fade-left" data-aos-anchor-placement="top-bottom"  data-aos-duration="1000" data-aos-offset="200">
                    <img src="/parkinglot.gif" alt=""></img>
                </div>
            </div>
            
        </div>
        </>
    )
}

export default FirstPage;