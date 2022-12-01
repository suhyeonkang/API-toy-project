import React, { useCallback, useEffect, useMemo, useState } from "react";
import "../css/mainPage.css";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import {Map, MapMarker} from "react-kakao-maps-sdk";
import SelectDong from "./selectDong";
import { dobong, dongdaemun, dongjak, eunpyeong, gangbuk, gangdong, gangnam, gangseo, geumcheon, gureset, guro, gwanak, gwangjin, jongro, jung, jungnang, mapo, nowon, seocho, seodaemun, seongbuk, seongdong, songpa, yangcheon, yeongdeungpo, yongsan } from "../modules/guStore";
import {useSelector, useDispatch} from "react-redux";
import axios from "axios"
import { json, useNavigate } from "react-router-dom";
import {time, timeReset} from "../modules/timeStore";
import { monthlyticket } from "../modules/ticketStore";
import {Link} from 'react-router-dom';
import { dongreset } from "../modules/dStore";


const MainPage = () => {

    const [showGu, setShowGu] = useState(false);
    const [showDong, setShowDong] = useState(false);
    const [pay, setPay] = useState('해당없음');
    const [min, setMin] = useState(0);
    const [ticketNeeds, setTicketNeeds] = useState(false);
    const [parkingList, setParkingList] = useState([]);
    const [localFilterList, setLocalFilterList] = useState([]);
    const [costFilterList, setCostFilterList] = useState([]);
    const [ticketFilterList, setTicketFilterList] = useState([]);
    const [isCalculate, setCalculate] = useState(false);
   

    const [isFetching, setFetching] = useState(true);
    const [page, setPage] = useState(1);
    
    const dispatch = useDispatch();
    const guTitle = useSelector(state=> state.gureducer.title);
    const guValue = useSelector(state=> state.gureducer.guValue);
    const dongTitle = useSelector(state=> state.dongreducer.title);
    const timeSet = useSelector(state=> state.timereducer.title);
    const seasonTicket = useSelector(state=>state.ticketreducer.title);

    const API_KEY = "4865714d71726b64383441434b6954";

    const navigate = useNavigate();

    // API 데이터 받아오기
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
                    PAY_NM : data.PAY_NM, //유무료구분명
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
    
    const searchParking = useCallback(() => {

     filterItem.filter((val) => {

        if(dongTitle !== "읍/면/동") {
            if(val.ADDR.includes(guTitle) && val.ADDR.includes(dongTitle)){
                return val
            }
        } else {
            if(val.ADDR.includes(guTitle) ){
                return val
           } 
        }
       
     }).map((list) => (
        setLocalFilterList(prev => prev.concat(list))
     ))
    },[guTitle,dongTitle]);
   
    const filterCost = useCallback(() => {
        localFilterList.filter((val) => {
            if(pay === "유료"){
                if(val.PAY_YN.includes('Y')){
                    return val
                }
            } else if(pay === "무료"){
                if(val.PAY_YN.includes('N')) {
                    return val
                }
            } else {
                return val
            }
        }).map((list) => (
            setCostFilterList(prev => prev.concat(list))
        ))
    },[localFilterList, pay]);

    const fillterTicket = useCallback(() => {
        costFilterList.filter((val) => {
            if(ticketNeeds){
                if(val.FULLTIME_MONTHLY > 0){
                    return val
                }// } else {
                //     val['FULLTIME_MONTHLY'] = 0
                //     return val
                // }
            } else {
                return val
            }
        }).map((list) => (
            setTicketFilterList(prev => prev.concat(list))
        ))
    },[costFilterList, ticketNeeds]);
   
    // 예상 주차시간 별 요금과 분 당 요금 계산하여 배열에 추가 
    const calculateCost = () => {
        
        ticketFilterList.forEach(data => {
            
           let extraTime = min - parseInt(data.TIME_RATE);

           if(parseInt(data.ADD_RATES) > 0) {
            let total = (parseInt(data.TIME_RATE) * parseInt(data.RATES)) + (extraTime * (parseInt(data.ADD_RATES)/parseInt(data.ADD_TIME_RATE)))
            if(parseInt(data.DAY_MAXIMUM) > 0){
                if(total > parseInt(data.DAY_MAXIMUM)){
                     total = parseInt(data.DAY_MAXIMUM);
                     let costPerMin = total / min;
                     
                     data["TOTAL_COST"] = total;
                     data["COST_PER_MIN"] = costPerMin.toFixed(2);
                 }else if(total === 0) {
                     data["TOTAL_COST"] = 0;
                     data["COST_PER_MIN"] = 0;
                     
                 } 
                 else {
                     data["TOTAL_COST"] = total;
                     let costPerMin = total / min;
                     data["COST_PER_MIN"] = costPerMin.toFixed(2);
                     
                 }
             } else if(total === 0) {
                 data["TOTAL_COST"] = 0;
                 data["COST_PER_MIN"] = 0;
             } 
             else {
                 data["TOTAL_COST"] = total;
                     let costPerMin = total / min;
                     data["COST_PER_MIN"] = costPerMin.toFixed(2);
             }
           }
          else {
            let total = (min / parseInt(data.TIME_RATE) * parseInt(data.RATES)) 
            if(parseInt(data.DAY_MAXIMUM) > 0){
                if(total > parseInt(data.DAY_MAXIMUM)){
                     total = parseInt(data.DAY_MAXIMUM);
                     let costPerMin = total / min;
                     
                     data["TOTAL_COST"] = total;
                     data["COST_PER_MIN"] = costPerMin.toFixed(2);
                 }else if(total === 0) {
                     data["TOTAL_COST"] = 0;
                     data["COST_PER_MIN"] = 0;
                     
                 } 
                 else {
                     data["TOTAL_COST"] = total;
                     let costPerMin = total / min;
                     data["COST_PER_MIN"] = costPerMin.toFixed(2);
                     
                 }
             } else if(total === 0) {
                 data["TOTAL_COST"] = 0;
                 data["COST_PER_MIN"] = 0;
             } 
             else {
                 data["TOTAL_COST"] = total;
                     let costPerMin = total / min;
                     data["COST_PER_MIN"] = costPerMin.toFixed(2);
             }
           }

        })
    }


    // 최종 저장된 배열의 중복 제거 
    const finalList = ticketFilterList.reduce((acc, current) => {
        const y = acc.find(item => item.PARKING_CODE === current.PARKING_CODE);

        if(!y) {
            return acc.concat([current]);
        } else {
            return acc;
        }
    }, []);

    let sortList = finalList.concat();
    let sortList2 = finalList.concat();
    let sortList3 = finalList.concat();


    // 예상 주차 시간 별 요금이 가장 저렴한 순으로 정렬
    const lowerCost = sortList.sort((a,b) => a.TOTAL_COST - b.TOTAL_COST);
   
    
    // 1분당 요금이 가장 저렴한 순으로 정렬
    const costPerMin = sortList2.sort((a,b) => a.COST_PER_MIN - b.COST_PER_MIN);

    // 정기권 가격이 가장 저렴한 주차장 순으로 정렬
    const lowerTicket = sortList3.sort((a,b) => a.FULLTIME_MONTHLY - b.FULLTIME_MONTHLY);

    const showLowerCost = 
        lowerCost.map((list) => {
            let index = lowerCost.findIndex(obj => obj.PARKING_CODE === list.PARKING_CODE);
            
            return (
                <>
                <div>
                    <div>
                        <span>{list.PAY_NM}</span>
                        <h1>{list.PARKING_NAME}</h1>
                    </div>
                    <div>
                        <div id="rank">{index+1}</div>
                        <h3>{list.PARKING_TYPE_NM} /</h3>
                        <h3>주차면 : {list.CAPACITY}개</h3>
                    </div>
                    <div>총 주차요금 : {list.TOTAL_COST} 원</div>
                   
                </div>    
                </>
            )
        });
    
    const showCostPerMin = costPerMin.map((list) => {
        let index = costPerMin.findIndex(obj => obj.PARKING_CODE === list.PARKING_CODE);
        return (
            <>
            <div>
                    <div>
                        <span>{list.PAY_NM}</span>
                        <h1>{list.PARKING_NAME}</h1>
                    </div>
                    <div>
                        <div id="rank">{index+1}</div>
                        <h3>{list.PARKING_TYPE_NM} /</h3>
                        <h3>주차면 : {list.CAPACITY}개</h3>
                    </div>
                    <div>1분 당 주차요금 : {list.COST_PER_MIN}원</div>
                    <div>총 주차요금 : {list.TOTAL_COST} 원</div>

            </div>
            </>
        )
    })

    const showLowerTicket = lowerTicket.map((list) => {
        let index = costPerMin.findIndex(obj => obj.PARKING_CODE === list.PARKING_CODE);
        return (
            <>
            <div>
                    <div>
                        <span>{list.PAY_NM}</span>
                        <h1>{list.PARKING_NAME}</h1>
                    </div>
                    <div>
                        <div id="rank">{index+1}</div>
                        <h3>{list.PARKING_TYPE_NM} /</h3>
                        <h3>주차면 : {list.CAPACITY}개</h3>    
                    </div>
                    <div>월 정기권 요금: {list.FULLTIME_MONTHLY} 원 </div>

            </div>
            </>
        )
    })

    useEffect(()=> {
        setCalculate(false);
        searchParking();
        filterCost();
        fillterTicket();
        calculateCost();
    },[isCalculate])

    const reset = () => {
        dispatch(gureset());
        dispatch(dongreset());
        setPay('해당없음');
        setMin(0);
        dispatch(timeReset());
        setTicketNeeds(false);
        dispatch(monthlyticket("해당없음"));
        setLocalFilterList([]);
        setCostFilterList([]);
        setTicketFilterList([]);
        setCalculate(false);
    }
    
    
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
        let minute = 0;
        if(value === 5) {
            log = '30분이하'
            minute = 30
        } else if (value === 15) {
            log = '1시간'
            minute = 60
        } else if (value === 25) {
            log = '2시간'
            minute = 120
        } else if (value === 35) {
            log = '3시간'
            minute = 180
        } else if (value === 45) {
            log = '4시간'
            minute = 240
        } else if (value === 55) {
            log = '5시간'
            minute = 300
        } else if (value === 65) {
            log = '6시간'
            minute = 360
        } else if (value === 75) {
            log = '7시간'
            minute = 420
        } else if (value === 85) {
            log = '8시간'
            minute = 480
        } else {
            log = '8시간 초과'
            minute = 481
        }

        dispatch(time(log))  
        setMin(minute);  
    }

    const ticket = () => {
        if(ticketNeeds === false) {
            setTicketNeeds(true);
            dispatch(monthlyticket("월 정기권"));
        } else {
            setTicketNeeds(false);
            dispatch(monthlyticket("해당없음"));
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
            <div className= "borderWrapper"> 
            <div className= "optionWrapper">
            <div className= "Wrapper1">
            
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
                        <Slider min={0} marks={marks} step={null}  defaultValue={25} onChange={timelog} className= "timeSlider" />
                        
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
            </div>

                
                                            
            
                <div className= "rankingWrapper">
                    <div>
                        <span>총 주차금액이 낮은 순</span>
                        {showLowerCost}
                    </div>
                    <div>
                        <span> 1분 당 주차금액이 낮은 순</span>
                        {showCostPerMin}
                    </div>
                    {ticketNeeds  && (
                        <div>
                        <span> 정기권 금액이 낮은 순</span>
                        {showLowerTicket}
                    </div>
                    )}
                    
                </div>
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
                            <h3>{timeSet}</h3>
                        </div>
                        <div>
                            <span>추가 선택 사항</span>
                            <h3>{seasonTicket}</h3>
                        </div>
                    </div>
                    <div>
                        <button onClick={()=>setCalculate(true)}>결과보기</button>
                        <button onClick={reset}>다시 조회하기</button>
                    </div>
                </div>
            </div>    
            
        </div>
        </>
    )
}

export default MainPage;
