import React, { useState } from "react";
import "../css/mainPage.css";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import {Map, MapMarker} from "react-kakao-maps-sdk";
import SelectDong from "./selectDong";
import { dobong, dongdaemun, dongjak, eunpyeong, gangbuk, gangdong, gangnam, gangseo, geumcheon, guro, gwanak, gwangjin, jongro, jung, jungnang, mapo, nowon, seocho, seodaemun, seongbuk, seongdong, songpa, yangcheon, yeongdeungpo, yongsan } from "../modules/guStore";
import {useSelector, useDispatch} from "react-redux";


const MainPage = () => {

    const [showGu, setShowGu] = useState(false);
    const [showDong, setShowDong] = useState(false);
    
    const dispatch = useDispatch();
    const guTitle = useSelector(state=> state.gureducer.title);
    const guValue = useSelector(state=> state.gureducer.guValue);
    const dongTitle = useSelector(state=> state.dongreducer.title);

    
 

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
                            <div><button onClick={()=> setShowGu(!showGu)}>{guTitle}</button></div>
                                {showGu && (
                                    <div id="selectGu">
                                        <div><button onClick={()=> dispatch(gangnam())}>강남구</button></div>
                                        <div><button onClick={()=> dispatch(gangdong())}>강동구</button></div>
                                        <div><button onClick={()=> dispatch(gangbuk())}>강북구</button></div>
                                        <div><button onClick={()=> dispatch(gangseo())}>강서구</button></div>
                                        <div><button onClick={()=> dispatch(gwanak())}>관악구</button></div>
                                        <div><button onClick={()=> dispatch(gwangjin())}>광진구</button></div>
                                        <div><button onClick={()=> dispatch(guro())}>구로구</button></div>
                                        <div><button onClick={()=> dispatch(geumcheon())}>금천구</button></div>
                                        <div><button onClick={()=> dispatch(nowon())}>노원구</button></div>
                                        <div><button onClick={()=> dispatch(dobong())}>도봉구</button></div>
                                        <div><button onClick={()=> dispatch(dongdaemun())}>동대문구</button></div>
                                        <div><button onClick={()=> dispatch(dongjak())}>동작구</button></div>
                                        <div><button onClick={()=> dispatch(mapo())}>마포구</button></div>
                                        <div><button onClick={()=> dispatch(seodaemun())}>서대문구</button></div>
                                        <div><button onClick={()=> dispatch(seocho())}>서초구</button></div>
                                        <div><button onClick={()=> dispatch(seongdong())}>성동구</button></div>
                                        <div><button onClick={()=> dispatch(seongbuk())}>성북구</button></div>
                                        <div><button onClick={()=> dispatch(songpa())}>송파구</button></div>
                                        <div><button onClick={()=> dispatch(yangcheon())}>양천구</button></div>
                                        <div><button onClick={()=> dispatch(yeongdeungpo())}>영등포구</button></div>
                                        <div><button onClick={()=> dispatch(yongsan())}>용산구</button></div>
                                        <div><button onClick={()=> dispatch(eunpyeong())}>은평구</button></div>
                                        <div><button onClick={()=> dispatch(jongro())}>종로구</button></div>
                                        <div><button onClick={()=> dispatch(jung())}>중구</button></div>
                                        <div><button onClick={()=> dispatch(jungnang())}>중랑구</button></div>
                                    </div>
                                )}    
                            <div><button onClick={()=> setShowDong(!showDong)}>{dongTitle}</button></div> 
                            {showDong && <SelectDong />}
                            
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

                <div className= "selectReview">
                    <div>
                        <h3>선택한 항목</h3>
                    </div>
                    <div>
                        <div>
                            <span>지역</span>
                            <h3>선택결과</h3>
                        </div>
                        <div>
                            <span>유료/무료</span>
                            <h3>선택결과</h3>
                        </div>
                        <div>
                            <span>예상주차시간</span>
                            <h3>선택결과</h3>
                        </div>
                        <div>
                            <span>추가 선택 사항</span>
                            <h3>선택결과</h3>
                        </div>
                    </div>
                    <div>
                        <button>결과보기</button>
                    </div>
                </div>

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
