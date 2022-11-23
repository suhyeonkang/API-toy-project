import React, { useState } from "react";
import "../css/mainPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from 'react-bootstrap/Dropdown';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import {Map, MapMarker} from "react-kakao-maps-sdk";

const MainPage = () => {

    const [showGu, setShowGu] = useState(false);
    const marks = {
        5: '30분이하',
        15: '1시간',
        25: '2시간',
        35: '3시간',
        45: '4시간',
        55: '5시간',
        65: '6시간',
        75: '7시간',
        85: '8시간',
        95: '8h 초과'
    }
    return(
        <>
        <div className= "contentsWrapper">
            <div className= "optionWrapper">
                <div className ="selectLocation">
                    <div>
                        <span>지역을 선택하세요</span>
                        <div className ="locationWrapper">
                            <div>서울시</div>
                            <div><button onClick={()=> setShowGu(!showGu)}>지역구</button></div>
                                {showGu && (
                                    <div id="selectGu">
                                        <div><button>강남구</button></div>
                                        <div><button>강동구</button></div>
                                        <div><button>강북구</button></div>
                                        <div><button>강서구</button></div>
                                        <div><button>관악구</button></div>
                                        <div><button>광진구</button></div>
                                        <div><button>구로구</button></div>
                                        <div><button>금천구</button></div>
                                        <div><button>노원구</button></div>
                                        <div><button>도봉구</button></div>
                                        <div><button>동대문구</button></div>
                                        <div><button>동작구</button></div>
                                        <div><button>마포구</button></div>
                                        <div><button>서대문구</button></div>
                                        <div><button>서초구</button></div>
                                        <div><button>성동구</button></div>
                                        <div><button>성북구</button></div>
                                        <div><button>송파구</button></div>
                                        <div><button>양천구</button></div>
                                        <div><button>영등포구</button></div>
                                        <div><button>용산구</button></div>
                                        <div><button>은평구</button></div>
                                        <div><button>종로구</button></div>
                                        <div><button>중구</button></div>
                                        <div><button>중랑구</button></div>
                                    </div>
                                )}    
                            <div><button >읍/면/동</button></div>    
                        </div>
                    </div>


                    <div>
                        <span>유료/무료</span>
                        <div className= "costWrapper">
                            <div><button>전체</button></div>
                            <div><button>유료</button></div>
                            <div><button>무료</button></div>
                        </div>
                    </div>
                    
                    <div className= "timeWrapper">
                        <span>예상주차시간</span>
                        <Slider min={0} marks={marks} step={null}  defaultValue={25} className= "timeSlider" />
                        
                    </div>

                    <div className= "plusWrapper">
                        <span>추가 선택 사항</span>
                        <div><button>월 정기권</button></div>
                    </div>
                </div>
                <div className= "map"> 
                    <Map center={{ lat: 37.51520496, lng: 126.91511598 }}
                        style={{width: "100%", height: "100%"}} >
                    <MapMarker position={{ lat: 37.51520496, lng: 126.91511598 }}></MapMarker>        
                    </Map>
                </div>
                <div>입력조건+결과보기</div>
            </div>
            <div className= "rankingWrapper">
                <div>랭킹1결과</div>
                <div>랭킹2결과</div>
                <div>랭킹3결과</div>
            </div>
        </div>
        </>
    )
}

export default MainPage;
