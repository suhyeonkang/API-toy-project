import React, { useCallback, useEffect, useState } from "react";
import "../css/mainPage.css";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import {Map, MapMarker} from "react-kakao-maps-sdk";
import SelectDong from "./selectDong";
import { dobong, dongdaemun, dongjak, eunpyeong, gangbuk, gangdong, gangnam, gangseo, geumcheon, guro, gwanak, gwangjin, jongro, jung, jungnang, mapo, nowon, seocho, seodaemun, seongbuk, seongdong, songpa, yangcheon, yeongdeungpo, yongsan } from "../modules/guStore";
import {useSelector, useDispatch} from "react-redux";
import axios from "axios"
import { json, useNavigate } from "react-router-dom";


const MainPage = () => {

    const [showGu, setShowGu] = useState(false);
    const [showDong, setShowDong] = useState(false);
    const [pay, setPay] = useState('해당없음');
    const [time, setTime] = useState('');
    const [ticketNeeds, setTicketNeeds] = useState('false');
    const [seasonTicket, setSeasonTicket] = useState('해당없음');
    const [parkingList, setParkingList] = useState([]);
    // const [uniqueParkingList, setUniqueParkingList] = useState([]);

    const [isFetching, setFetching] = useState(true);
    const [page, setPage] = useState(1);
    
    const dispatch = useDispatch();
    const guTitle = useSelector(state=> state.gureducer.title);
    const guValue = useSelector(state=> state.gureducer.guValue);
    const dongTitle = useSelector(state=> state.dongreducer.title);

    const API_KEY = "4865714d71726b64383441434b6954";

    const navigate = useNavigate();

    const fetchData = useCallback( async () => {
        const url = `http://openapi.seoul.go.kr:8088/${API_KEY}/json/GetParkInfo/${page}/${page + 999}/`;

        const savedData = data => {
            
                const dataList = {
                    PARKING_NAME: data.PARKING_NAME,  // 주차장명
                    ADDR : data.ADDR, //주소
                    PARKING_CODE : data.PARKING_CODE, //주차장코드
                    PARKING_TYPE : data.PARKING_TYPE, //주차장 종류
                    PARKING_TYPE_NM : data.PARKING_TYPE_NM, //주차장 종류명
                    OPERATION_RULE : data.OPERATION_RULE, //운영구분
                    CAPACITY : data.CAPACITY, // 총 주차면
                    PAY_YN : data.PAY_YN, //유무료구분
                    FULLTIME_MONTHLY : data.FULLTIME_MONTHLY, //월 정기권 금액
                    RATES: data.RATES, // 기본 주차 요금
                    TIME_RATE : data.TIME_RATE, //기본 주차 시간(분 단위)
                    ADD_RATES : data.ADD_RATES, //추가 단위 요금
                    ADD_TIME_RATE : data.ADD_TIME_RATE, //추가 단위 시간(분 단위)
                    DAY_MAXIMUM : data.DAY_MAXIMUM, //일 최대 요금
                    LAT : data.LAT.toFixed(2) , //주차장 위치 좌표 위도
                    LNG : data.LNG.toFixed(2)  //주차장 위치 좌표 경도 
                };
        
                setParkingList(prev => prev.concat(dataList));
                   
            }
            try {
                const getData = await axios ({
                    method: 'get',
                    url: url,
                })
                if(getData.data.GetParkInfo) {
                    await getData.data.GetParkInfo.row.forEach(data => savedData(data));
                    await setFetching(true);
                }
                }
            catch(err) {
                setFetching(false);
                alert(err);
            }
    }, [page]);

    useEffect(()=> {
        if(isFetching) {
            setFetching(false);
            fetchData(page);
            setPage(prev => prev + 1000);
        }
    }, [isFetching]);

    // 받아온 API 데이터의 중복을 제거
   const filterItem = parkingList.reduce((acc, current) => {
    const x = acc.find(item => item.PARKING_CODE === current.PARKING_CODE);
    
    if(!x) {
        return acc.concat([current]);
    } else {
        return acc;
    }
   }, []);

   console.log(filterItem);


    
    
    const searchParking = filterItem.filter((val) => {

        if(val.ADDR.includes(guTitle) ){
             return val
        } 
     }).map((list) => (
         <>
         <div>{list.PARKING_NAME}</div>
         </>
 
     ));
   
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

    const timelog = (value) => {
        let log = '';
        if(value === 5) {
            log = '30분이하'
        } else if (value === 15) {
            log = '1시간'
        } else if (value === 25) {
            log = '2시간'
        } else if (value === 35) {
            log = '3시간'
        } else if (value === 45) {
            log = '4시간'
        } else if (value === 55) {
            log = '5시간'
        } else if (value === 65) {
            log = '6시간'
        } else if (value === 75) {
            log = '7시간'
        } else if (value === 85) {
            log = '8시간'
        } else {
            log = '8시간 초과'
        }

        setTime(log);
    }

    const ticket = () => {
        if(ticketNeeds === false) {
            setTicketNeeds(true);
            setSeasonTicket('월 정기권');
        } else {
            setTicketNeeds(false);
            setSeasonTicket('해당없음');
        }
    }

    const payOption = (value) => {
        if(value === '유료'){
            setPay('유료');
        }else if (value === "무료"){
            setPay('무료');
        }else if (value === "전체"){
            setPay('유료/무료');
        }

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
                            <div><button value="전체" onClick={(e)=>payOption(e.target.value)}>전체</button></div>
                            <div><button value="유료" onClick={(e)=>payOption(e.target.value)}>유료</button></div>
                            <div><button value="무료" onClick={(e)=>payOption(e.target.value)}>무료</button></div>
                        </div>
                    </div>
                    
                    <div className= "timeWrapper">
                        <span>예상주차시간</span>
                        <Slider min={0} marks={marks} step={null}  defaultValue={25} onChange={timelog}className= "timeSlider" />
                        
                    </div>

                    <div className= "plusWrapper">
                        <span>추가 선택 사항</span>
                        <div><button onClick={ticket}>월 정기권</button></div>
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
                            <h3>서울시 {guTitle} {dongTitle}</h3>
                        </div>
                        <div>
                            <span>유료/무료</span>
                            <h3>{pay}</h3>
                        </div>
                        <div>
                            <span>예상주차시간</span>
                            <h3>{time}</h3>
                        </div>
                        <div>
                            <span>추가 선택 사항</span>
                            <h3>{seasonTicket}</h3>
                        </div>
                    </div>
                    <div>
                        <button>결과보기</button>
                    </div>
                </div>

            </div>
            <div className= "rankingWrapper">
                <div>{searchParking}</div>
                <div>.</div>
                <div>.</div>
            </div>
        </div>
        </>
    )
}

export default MainPage;
