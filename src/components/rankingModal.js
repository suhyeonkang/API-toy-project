import React from "react";
import { useSelector } from "react-redux";
import {useState, useCallback, useEffect} from "react";
import axios from "axios";

const RankingModal = () => {

    const guTitle = useSelector(state=> state.gureducer.title);
    const guValue = useSelector(state=> state.gureducer.guValue);
    const dongTitle = useSelector(state=> state.dongreducer.title);

    const API_KEY = "4865714d71726b64383441434b6954";
    const url = `http://openapi.seoul.go.kr:8088/${API_KEY}/json/GetParkInfo/1/100/`;

    const [parkingList, setParkingList] = useState([]);
    const [uniqueParkingList, setUniqueParkingList] = useState([]);


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
            LAT : data.LAT, //주차장 위치 좌표 위도
            LNG : data.LNG //주차장 위치 좌표 경도 
        };

        
        setParkingList(prev => prev.concat(dataList));
        const unique = parkingList.filter(dat => dat.PARKING_CODE !== dataList.PARKING_CODE);
        setUniqueParkingList(unique);
        
    }

    console.log(uniqueParkingList);
    
           
    const getData = async () => {
        try {
            const getData = await axios ({
                method: 'get',
                url: url,
            })
            if(getData.data.GetParkInfo) {
                await getData.data.GetParkInfo.row.forEach(data => savedData(data));
                
            }
        }
        catch(err) {
            alert(err);
        }
    }
    
    

    const searchParking = uniqueParkingList.filter((val) => {

        if(val.ADDR.includes(guTitle) ){
             return val
        } 
     }).map((list) => (
         <>
         <div>{list.PARKING_NAME}</div>
         </>
 
     ))

    return (
        <>
        <div><button onClick={getData}>불러오기</button></div>
        <div>{searchParking}</div>
        </>

    );
}

export default RankingModal;
