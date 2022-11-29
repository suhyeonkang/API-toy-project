import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../css/header.css";

const Header = () => {

    const navigate = useNavigate();
    return(
        <>
        
            <div className= 'header'>
                <div>
                    <img src="/logo_white.png" onClick={()=> navigate("/")}alt=""></img>
                </div>
                <div>
                    <span>공영주차장 보기</span>
                    <span>서비스 안내</span>
                </div>
            </div>

        </>
    )
}

export default Header;
