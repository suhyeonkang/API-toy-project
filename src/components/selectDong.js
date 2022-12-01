import React from "react";
import {useSelector, useDispatch} from "react-redux";
import "../css/selectDong.css";
import {dong} from "../modules/dStore.js"

const SelectDong = () => {

    const guValue = useSelector(state=> state.gureducer.guValue);
    const dispatch = useDispatch();

    return(
        <>
            {/* 강남구 */}
            {guValue === 1 ? (
                <div id= "dongWrapper">
                <>
                    <div><button onClick={()=> dispatch(dong('개포동'))}>개포동</button></div>
                    <div><button onClick={()=> dispatch(dong('논현동'))}>논현동</button></div>
                    <div><button onClick={()=> dispatch(dong('대치동'))}>대치동</button></div>
                    <div><button onClick={()=> dispatch(dong('도곡동'))}>도곡동</button></div>
                    <div><button onClick={()=> dispatch(dong('삼성동'))}>삼성동</button></div>
                    <div><button onClick={()=> dispatch(dong('세곡동'))}>세곡동</button></div>
                    <div><button onClick={()=> dispatch(dong('수서동'))}>수서동</button></div>
                    <div><button onClick={()=> dispatch(dong('신사동'))}>신사동</button></div>
                    <div><button onClick={()=> dispatch(dong('압구정동'))}>압구정동</button></div>
                    <div><button onClick={()=> dispatch(dong('역삼동'))}>역삼동</button></div>
                    <div><button onClick={()=> dispatch(dong('율현동'))}>율현동</button></div>
                    <div><button onClick={()=> dispatch(dong('일원동'))}>일원동</button></div>
                    <div><button onClick={()=> dispatch(dong('청담동'))}>청담동</button></div>
                </>
                </div>
            ): null }
            

                            {/* 강동구 */}
                            {guValue === 2 ? (
                                 <div id= "dongWrapper">
                                 <>
                                    <div><button onClick={()=> dispatch(dong('강일동'))}>강일동</button></div>
                                    <div><button onClick={()=> dispatch(dong('고덕동'))}>고덕동</button></div>
                                    <div><button onClick={()=> dispatch(dong('길동'))}>길동</button></div>
                                    <div><button onClick={()=> dispatch(dong('둔촌동'))}>둔촌동</button></div>
                                    <div><button onClick={()=> dispatch(dong('명일동'))}>명일동</button></div>
                                    <div><button onClick={()=> dispatch(dong('상일동'))}>상일동</button></div>
                                    <div><button onClick={()=> dispatch(dong('성내동'))}>성내동</button></div>
                                    <div><button onClick={()=> dispatch(dong('암사동'))}>암사동</button></div>
                                    <div><button onClick={()=> dispatch(dong('천호동'))}>천호동</button></div>
                                    
                                 </>
                             </div>
                            ) : null }
                           

                            {/* 강북구 */}
                            {guValue === 3 ? (
                                <div id= "dongWrapper" >
                                <>
                                <div><button onClick={()=> dispatch(dong('미아동'))}>미아동</button></div>
                                <div><button onClick={()=> dispatch(dong('번1동'))}>번동</button></div>
                                <div><button onClick={()=> dispatch(dong('삼각산동'))}>삼각산동</button></div>
                                <div><button onClick={()=> dispatch(dong('삼양동'))}>삼양동</button></div>
                                <div><button onClick={()=> dispatch(dong('송중동'))}>송중동</button></div>
                                <div><button onClick={()=> dispatch(dong('송천동'))}>송천동</button></div>
                                <div><button onClick={()=> dispatch(dong('수유1동'))}>수유동</button></div>
                                <div><button onClick={()=> dispatch(dong('우이동'))}>우이동</button></div>
                                <div><button onClick={()=> dispatch(dong('인수동'))}>인수동</button></div>
                                </>
                            </div>
                            ):null}
                            

                            {/* 강서구 */}
                            {guValue === 4 ? (
                                <div id= "dongWrapper">
                                <>
                                <div><button onClick={()=> dispatch(dong('가양동'))}>가양동</button></div>
                                <div><button onClick={()=> dispatch(dong('개화동'))}>개화동</button></div>
                                <div><button onClick={()=> dispatch(dong('공항동'))}>공항동</button></div>
                                <div><button onClick={()=> dispatch(dong('등촌동'))}>등촌동</button></div>
                                <div><button onClick={()=> dispatch(dong('마곡동'))}>마곡동</button></div>
                                <div><button onClick={()=> dispatch(dong('발산동'))}>발산동</button></div>
                                <div><button onClick={()=> dispatch(dong('방화동'))}>방화동</button></div>
                                <div><button onClick={()=> dispatch(dong('염창동'))}>염창동</button></div>
                                <div><button onClick={()=> dispatch(dong('우장산동'))}>우장산동</button></div>
                                <div><button onClick={()=> dispatch(dong('화곡동'))}>화곡동</button></div>
                                
                                </>

                            </div>
                            ):null}
                            

                            {/* 관악구 */}
                            {guValue === 5 ? (
                                <div id= "dongWrapper">
                                <>
                                <div><button onClick={()=> dispatch(dong('낙성대동'))}>낙성대동</button></div>
                                <div><button onClick={()=> dispatch(dong('난곡동'))}>난곡동</button></div>
                                <div><button onClick={()=> dispatch(dong('난향동'))}>난향동</button></div>
                                <div><button onClick={()=> dispatch(dong('남현동'))}>남현동</button></div>
                                <div><button onClick={()=> dispatch(dong('대학동'))}>대학동</button></div>
                                <div><button onClick={()=> dispatch(dong('미성동'))}>미성동</button></div>
                                <div><button onClick={()=> dispatch(dong('보라매동'))}>보라매동</button></div>
                                <div><button onClick={()=> dispatch(dong('삼성동'))}>삼성동</button></div>
                                <div><button onClick={()=> dispatch(dong('서림동'))}>서림동</button></div>
                                <div><button onClick={()=> dispatch(dong('서원동'))}>서원동</button></div>
                                <div><button onClick={()=> dispatch(dong('성현동'))}>성현동</button></div>
                                <div><button onClick={()=> dispatch(dong('신림동'))}>신림동</button></div>
                                <div><button onClick={()=> dispatch(dong('신사동'))}>신사동</button></div>
                                <div><button onClick={()=> dispatch(dong('신원동'))}>신원동</button></div>
                                <div><button onClick={()=> dispatch(dong('은천동'))}>은천동</button></div>
                                <div><button onClick={()=> dispatch(dong('인헌동'))}>인헌동</button></div>
                                <div><button onClick={()=> dispatch(dong('조원동'))}>조원동</button></div>
                                <div><button onClick={()=> dispatch(dong('중앙동'))}>중앙동</button></div>
                                <div><button onClick={()=> dispatch(dong('청룡동'))}>청룡동</button></div>
                                <div><button onClick={()=> dispatch(dong('청림동'))}>청림동</button></div>
                                <div><button onClick={()=> dispatch(dong('행운동'))}>행운동</button></div>
                                </>

                            </div>
                            ):null}
                            

                            {/* 광진구 */}
                            {guValue === 6 ? (
                                <div id= "dongWrapper">
                                <>
                                <div><button onClick={()=> dispatch(dong('광장동'))}>광장동</button></div>
                                <div><button onClick={()=> dispatch(dong('구의동'))}>구의동</button></div>
                                <div><button onClick={()=> dispatch(dong('군자동'))}>군자동</button></div>
                                <div><button onClick={()=> dispatch(dong('능동'))}>능동</button></div>
                                <div><button onClick={()=> dispatch(dong('자양동'))}>자양동</button></div>
                                <div><button onClick={()=> dispatch(dong('중곡동'))}>중곡동</button></div>
                                <div><button onClick={()=> dispatch(dong('화양동'))}>화양동</button></div>
                                </>

                            </div>
                            ):null}
                            

                            {/* 구로구 */}
                            {guValue === 7 ? (
                                <div id= "dongWrapper">
                                <>
                                <div><button onClick={()=> dispatch(dong('가리봉동'))}>가리봉동</button></div>
                                <div><button onClick={()=> dispatch(dong('개봉동'))}>개봉동</button></div>
                                <div><button onClick={()=> dispatch(dong('고척동'))}>고척동</button></div>
                                <div><button onClick={()=> dispatch(dong('구로동'))}>구로동</button></div>
                                <div><button onClick={()=> dispatch(dong('(온수동)수궁동'))}>온수동(수궁동)</button></div>
                                <div><button onClick={()=> dispatch(dong('신도림동'))}>신도림동</button></div>
                                <div><button onClick={()=> dispatch(dong('오류동'))}>오류동</button></div>
                                <div><button onClick={()=> dispatch(dong('항동'))}>항동</button></div>
                                </>

                            </div>
                            ): null}
                            

                            {/* 금천구 */}
                            {guValue === 8 ? (
                                <div id= "dongWrapper">
                                <>
                                <div><button onClick={()=> dispatch(dong('가산동'))}>가산동</button></div>
                                <div><button onClick={()=> dispatch(dong('독산동'))}>독산동</button></div>
                                <div><button onClick={()=> dispatch(dong('시흥동'))}>시흥동</button></div>
                               
                                </>

                            </div>
                            ): null}
                            

                            {/* 노원구 */}
                            {guValue === 9 ? (
                                <div id= "dongWrapper">
                                <>
                                <div><button onClick={()=> dispatch(dong('공릉동'))}>공릉동</button></div>
                                <div><button onClick={()=> dispatch(dong('상계동'))}>상계동</button></div>
                                <div><button onClick={()=> dispatch(dong('월계동'))}>월계동</button></div>
                                <div><button onClick={()=> dispatch(dong('중계동'))}>중계동</button></div>
                                <div><button onClick={()=> dispatch(dong('하계동'))}>하계동</button></div>
                                
                                </>

                            </div>
                            ):null}
                            

                            {/* 도봉구 */}
                            {guValue === 10 ? (
                                <div id= "dongWrapper">
                                <>
                                <div><button onClick={()=> dispatch(dong('도봉동'))}>도봉동</button></div>
                                <div><button onClick={()=> dispatch(dong('방학동'))}>방학동</button></div>
                                <div><button onClick={()=> dispatch(dong('쌍문동'))}>쌍문동</button></div>
                                <div><button onClick={()=> dispatch(dong('창동'))}>창동</button></div>
                                
                                </>

                            </div>
                            ):null}
                            

                            {/* 동대문구 */}
                            {guValue === 11 ? (
                                <div id= "dongWrapper">
                                <>
                                <div><button onClick={()=> dispatch(dong('답십리동'))}>답십리동</button></div>
                                <div><button onClick={()=> dispatch(dong('신설동'))}>신설동</button></div>
                                <div><button onClick={()=> dispatch(dong('용신동'))}>용신동</button></div>
                                <div><button onClick={()=> dispatch(dong('용두동'))}>용두동</button></div>
                                <div><button onClick={()=> dispatch(dong('이문동'))}>이문동</button></div>
                                <div><button onClick={()=> dispatch(dong('장안동'))}>장안동</button></div>
                                <div><button onClick={()=> dispatch(dong('전농동'))}>전농동</button></div>
                                <div><button onClick={()=> dispatch(dong('제기동'))}>제기동</button></div>
                                <div><button onClick={()=> dispatch(dong('청량리동'))}>청량리동</button></div>
                                <div><button onClick={()=> dispatch(dong('회기동'))}>회기동</button></div>
                                <div><button onClick={()=> dispatch(dong('휘경동'))}>휘경동</button></div>
                                
                                </>

                            </div>
                            ) : null }
                            

                            {/* 동작구 */}
                            {guValue === 12 ? (
                                <div id= "dongWrapper">
                                <>
                                <div><button onClick={()=> dispatch(dong('노량진동'))}>노량진동</button></div>
                                <div><button onClick={()=> dispatch(dong('대방동'))}>대방동</button></div>
                                <div><button onClick={()=> dispatch(dong('동작동'))}>동작동</button></div>
                                <div><button onClick={()=> dispatch(dong('사당동'))}>사당동</button></div>
                                <div><button onClick={()=> dispatch(dong('상도동'))}>상도동</button></div>
                                <div><button onClick={()=> dispatch(dong('신대방동'))}>신대방동</button></div>
                                <div><button onClick={()=> dispatch(dong('흑석동'))}>흑석동</button></div>
                                </>

                            </div>
                            ) : null }
                            

                            {/* 마포구 */}
                            {guValue === 13 ? (
                                <div id= "dongWrapper">
                                <>
                                <div><button onClick={()=> dispatch(dong('공덕동'))}>공덕동</button></div>
                                <div><button onClick={()=> dispatch(dong('노고산동'))}>노고산동</button></div>
                                <div><button onClick={()=> dispatch(dong('대흥동'))}>대흥동</button></div>
                                <div><button onClick={()=> dispatch(dong('도화동'))}>도화동</button></div>
                                <div><button onClick={()=> dispatch(dong('동교동'))}>동교동</button></div>
                                <div><button onClick={()=> dispatch(dong('마포동'))}>마포동</button></div>
                                <div><button onClick={()=> dispatch(dong('망원동'))}>망원동</button></div>
                                <div><button onClick={()=> dispatch(dong('상암동'))}>상암동</button></div>
                                <div><button onClick={()=> dispatch(dong('서강동'))}>서강동</button></div>
                                <div><button onClick={()=> dispatch(dong('서교동'))}>서교동</button></div>
                                <div><button onClick={()=> dispatch(dong('성산동'))}>성산동</button></div>
                                <div><button onClick={()=> dispatch(dong('신수동'))}>신수동</button></div>
                                <div><button onClick={()=> dispatch(dong('아현동'))}>아현동</button></div>
                                <div><button onClick={()=> dispatch(dong('연남동'))}>연남동</button></div>
                                <div><button onClick={()=> dispatch(dong('염리동'))}>염리동</button></div>
                                <div><button onClick={()=> dispatch(dong('용강동'))}>용강동</button></div>
                                <div><button onClick={()=> dispatch(dong('합정동'))}>합정동</button></div>
                                </>
                            </div>
                            ) : null }
                            

                            {/* 서대문구 */}
                            {guValue === 14 ? (
                                <div id= "dongWrapper">
                                <>
                                <div><button onClick={()=> dispatch(dong('남가좌동'))}>남가좌동</button></div>
                                <div><button onClick={()=> dispatch(dong('북가좌동'))}>북가좌동</button></div>
                                <div><button onClick={()=> dispatch(dong('북아현동'))}>북아현동</button></div>
                                <div><button onClick={()=> dispatch(dong('신촌동'))}>신촌동</button></div>
                                <div><button onClick={()=> dispatch(dong('연희동'))}>연희동</button></div>
                                <div><button onClick={()=> dispatch(dong('천연동'))}>천연동</button></div>
                                <div><button onClick={()=> dispatch(dong('충현동(충정로2가)'))}>충현동(충정로2가)</button></div>
                                <div><button onClick={()=> dispatch(dong('홍은동'))}>홍은동</button></div>
                                <div><button onClick={()=> dispatch(dong('홍제동'))}>홍제동</button></div>
                                
                                </>
                            </div>
                            ) : null }
                            

                            {/* 서초구 */}
                            {guValue === 15 ? (
                                <div id= "dongWrapper">
                                <>
                                <div><button onClick={()=> dispatch(dong('내곡동'))}>내곡동</button></div>
                                <div><button onClick={()=> dispatch(dong('반포동'))}>반포동</button></div>
                                <div><button onClick={()=> dispatch(dong('방배동'))}>방배동</button></div>
                                <div><button onClick={()=> dispatch(dong('서초동'))}>서초동</button></div>
                                <div><button onClick={()=> dispatch(dong('신원동'))}>신원동</button></div>
                                <div><button onClick={()=> dispatch(dong('양재동'))}>양재동</button></div>
                                <div><button onClick={()=> dispatch(dong('원지동'))}>원지동</button></div>
                                <div><button onClick={()=> dispatch(dong('잠원동'))}>잠원동</button></div>
                                </>
                            </div>
                            ) : null }
                            

                            {/* 성동구 */}
                            {guValue === 16? (
                                <div id= "dongWrapper">
                                <>
                                <div><button onClick={()=> dispatch(dong('금호동1가'))}>금호동1가</button></div>
                                <div><button onClick={()=> dispatch(dong('금호동2가'))}>금호동2가</button></div>
                                <div><button onClick={()=> dispatch(dong('금호동3가'))}>금호동3가</button></div>
                                <div><button onClick={()=> dispatch(dong('금호동4가'))}>금호동4가</button></div>
                                <div><button onClick={()=> dispatch(dong('도선동'))}>도선동</button></div>
                                <div><button onClick={()=> dispatch(dong('마장동'))}>마장동</button></div>
                                <div><button onClick={()=> dispatch(dong('사근동'))}>사근동</button></div>
                                <div><button onClick={()=> dispatch(dong('성수동1가'))}>성수동1가</button></div>
                                <div><button onClick={()=> dispatch(dong('성수동2가'))}>성수동2가</button></div>
                                <div><button onClick={()=> dispatch(dong('송정동'))}>송정동</button></div>
                                <div><button onClick={()=> dispatch(dong('옥수동'))}>옥수동</button></div>
                                <div><button onClick={()=> dispatch(dong('상왕십리동'))}>상왕십리동</button></div>
                                <div><button onClick={()=> dispatch(dong('하왕십리동'))}>하왕십리동</button></div>
                                <div><button onClick={()=> dispatch(dong('용답동'))}>용답동</button></div>
                                <div><button onClick={()=> dispatch(dong('응봉동'))}>응봉동</button></div>
                                <div><button onClick={()=> dispatch(dong('행당동'))}>행당동</button></div>
                                <div><button onClick={()=> dispatch(dong('홍익동'))}>홍익동</button></div>
                                
                                </>
                            </div>
                            ) : null }
                            

                            {/* 성북구 */}
                            {guValue === 17? (
                                <div id= "dongWrapper">
                                <>
                                <div><button onClick={()=> dispatch(dong('길음동'))}>길음동</button></div>
                                <div><button onClick={()=> dispatch(dong('돈암동'))}>돈암동</button></div>
                                <div><button onClick={()=> dispatch(dong('동선동'))}>동선동</button></div>
                                <div><button onClick={()=> dispatch(dong('보문동'))}>보문동</button></div>
                                <div><button onClick={()=> dispatch(dong('삼선동'))}>삼선동</button></div>
                                <div><button onClick={()=> dispatch(dong('석관동'))}>석관동</button></div>
                                <div><button onClick={()=> dispatch(dong('성북동'))}>성북동</button></div>
                                <div><button onClick={()=> dispatch(dong('안암동'))}>안암동</button></div>
                                <div><button onClick={()=> dispatch(dong('월곡동'))}>월곡동</button></div>
                                <div><button onClick={()=> dispatch(dong('장위동'))}>장위동</button></div>
                                <div><button onClick={()=> dispatch(dong('정릉동'))}>정릉동</button></div>
                                <div><button onClick={()=> dispatch(dong('종암동'))}>종암동</button></div>
                                </>
                            </div>
                            ): null }
                            

                            {/* 송파구 */}
                            {guValue === 18? (
                                <div id= "dongWrapper">
                                <>
                                <div><button onClick={()=> dispatch(dong('가락동'))}>가락동</button></div>
                                <div><button onClick={()=> dispatch(dong('거여동'))}>거여동</button></div>
                                <div><button onClick={()=> dispatch(dong('마천동'))}>마천동</button></div>
                                <div><button onClick={()=> dispatch(dong('문정동'))}>문정동</button></div>
                                <div><button onClick={()=> dispatch(dong('방이동'))}>방이동</button></div>
                                <div><button onClick={()=> dispatch(dong('삼전동'))}>삼전동</button></div>
                                <div><button onClick={()=> dispatch(dong('석촌동'))}>석촌동</button></div>
                                <div><button onClick={()=> dispatch(dong('송파동'))}>송파동</button></div>
                                <div><button onClick={()=> dispatch(dong('신천동'))}>신천동</button></div>
                                <div><button onClick={()=> dispatch(dong('오금동'))}>오금동</button></div>
                                <div><button onClick={()=> dispatch(dong('오륜동'))}>오륜동</button></div>
                                <div><button onClick={()=> dispatch(dong('위례동'))}>위례동</button></div>
                                <div><button onClick={()=> dispatch(dong('잠실동'))}>잠실동</button></div>
                                <div><button onClick={()=> dispatch(dong('장지동'))}>장지동</button></div>
                                <div><button onClick={()=> dispatch(dong('풍납동'))}>풍납동</button></div>
                                
                                </>
                            </div>
                            ) : null }
                            

                            {/* 양천구 */}
                            {guValue === 19? (
                                <div id= "dongWrapper">
                                <>
                                <div><button onClick={()=> dispatch(dong('목동'))}>목동</button></div>
                                <div><button onClick={()=> dispatch(dong('신월동'))}>신월동</button></div>
                                <div><button onClick={()=> dispatch(dong('신정동'))}>신정동</button></div>
                                
                                </>
                            </div>
                            ): null }
                            

                            {/* 영등포구 */}
                            {guValue === 20 ? (
                                <div id= "dongWrapper">
                                <>
                                <div><button onClick={()=> dispatch(dong('당산동'))}>당산동</button></div>
                                <div><button onClick={()=> dispatch(dong('당산동2가'))}>당산동2가</button></div>
                                <div><button onClick={()=> dispatch(dong('당산동3가'))}>당산동3가</button></div>
                                <div><button onClick={()=> dispatch(dong('당산동5가'))}>당산동5가</button></div>
                                <div><button onClick={()=> dispatch(dong('대림동'))}>대림동</button></div>
                                <div><button onClick={()=> dispatch(dong('도림동'))}>도림동</button></div>
                                <div><button onClick={()=> dispatch(dong('문래동1가'))}>문래동1가</button></div>
                                <div><button onClick={()=> dispatch(dong('문래동3가'))}>문래동3가</button></div>
                                <div><button onClick={()=> dispatch(dong('문래동4가'))}>문래동4가</button></div>
                                <div><button onClick={()=> dispatch(dong('문래동5가'))}>문래동5가</button></div>
                                <div><button onClick={()=> dispatch(dong('신길동'))}>신길동</button></div>
                                <div><button onClick={()=> dispatch(dong('양평동1가'))}>양평동1가</button></div>
                                <div><button onClick={()=> dispatch(dong('양평동3가'))}>양평동3가</button></div>
                                <div><button onClick={()=> dispatch(dong('양평동4가'))}>양평동4가</button></div>
                                <div><button onClick={()=> dispatch(dong('양평동5가'))}>양평동5가</button></div>
                                <div><button onClick={()=> dispatch(dong('여의도동'))}>여의도동</button></div>
                                <div><button onClick={()=> dispatch(dong('영등포동'))}>영등포동</button></div>
                                <div><button onClick={()=> dispatch(dong('영등포동1가'))}>영등포동1가</button></div>
                                <div><button onClick={()=> dispatch(dong('영등포동2가'))}>영등포동2가</button></div>
                                <div><button onClick={()=> dispatch(dong('영등포동3가'))}>영등포동3가</button></div>
                                <div><button onClick={()=> dispatch(dong('영등포동4가'))}>영등포동4가</button></div>
                                <div><button onClick={()=> dispatch(dong('영등포동7가'))}>영등포동7가</button></div>
                                </>
                            </div>
                            ) : null }
                            

                            {/* 용산구 */}
                            {guValue === 21 ? (
                                <div id= "dongWrapper">
                                <>
                                <div><button onClick={()=> dispatch(dong('남영동'))}>남영동</button></div>
                                <div><button onClick={()=> dispatch(dong('보광동'))}>보광동</button></div>
                                <div><button onClick={()=> dispatch(dong('서빙고동'))}>서빙고동</button></div>
                                <div><button onClick={()=> dispatch(dong('용문동'))}>용문동</button></div>
                                <div><button onClick={()=> dispatch(dong('용산2가동'))}>용산2가동</button></div>
                                <div><button onClick={()=> dispatch(dong('원효로1동'))}>원효로1동</button></div>
                                <div><button onClick={()=> dispatch(dong('원효로2동'))}>원효로2동</button></div>
                                <div><button onClick={()=> dispatch(dong('이촌동'))}>이촌동</button></div>
                                <div><button onClick={()=> dispatch(dong('이태원동'))}>이태원동</button></div>
                                <div><button onClick={()=> dispatch(dong('청파동'))}>청파동</button></div>
                                <div><button onClick={()=> dispatch(dong('한강로동'))}>한강로1가</button></div>
                                <div><button onClick={()=> dispatch(dong('한남동'))}>한남동</button></div>
                                <div><button onClick={()=> dispatch(dong('효창동'))}>효창동</button></div>
                                <div><button onClick={()=> dispatch(dong('후암동'))}>후암동</button></div>
                                </>
                            </div>
                            ) : null }
                            

                            {/* 은평구 */}
                            {guValue === 22 ? (
                                <div id= "dongWrapper">
                                <>
                                <div><button onClick={()=> dispatch(dong('갈현1동'))}>갈현1동</button></div>
                                <div><button onClick={()=> dispatch(dong('갈현2동'))}>갈현2동</button></div>
                                <div><button onClick={()=> dispatch(dong('구산동'))}>구산동</button></div>
                                <div><button onClick={()=> dispatch(dong('녹번동'))}>녹번동</button></div>
                                <div><button onClick={()=> dispatch(dong('대조동'))}>대조동</button></div>
                                <div><button onClick={()=> dispatch(dong('불광1동'))}>불광1동</button></div>
                                <div><button onClick={()=> dispatch(dong('불광2동'))}>불광2동</button></div>
                                <div><button onClick={()=> dispatch(dong('수색동'))}>수색동</button></div>
                                <div><button onClick={()=> dispatch(dong('신사1동'))}>신사1동</button></div>
                                <div><button onClick={()=> dispatch(dong('신사2동'))}>신사2동</button></div>
                                <div><button onClick={()=> dispatch(dong('역촌동'))}>역촌동</button></div>
                                <div><button onClick={()=> dispatch(dong('응암1동'))}>응암1동</button></div>
                                <div><button onClick={()=> dispatch(dong('응암2동'))}>응암2동</button></div>
                                <div><button onClick={()=> dispatch(dong('응암3동'))}>응암3동</button></div>
                                <div><button onClick={()=> dispatch(dong('증산동'))}>증산동</button></div>
                                <div><button onClick={()=> dispatch(dong('진관동'))}>진관동</button></div>
                                </>
                            </div>
                            ) : null }
                            

                            {/* 종로구(다시보기) */}
                            {guValue === 23 ? (
                                <div id= "dongWrapper">
                                <>
                                <div><button onClick={()=> dispatch(dong('가회동'))}>가회동</button></div>
                                <div><button onClick={()=> dispatch(dong('교남동'))}>교남동</button></div>
                                <div><button onClick={()=> dispatch(dong('무악동'))}>무악동</button></div>
                                <div><button onClick={()=> dispatch(dong('부암동'))}>부암동</button></div>
                                <div><button onClick={()=> dispatch(dong('사직동'))}>사직동</button></div>
                                <div><button onClick={()=> dispatch(dong('삼청동'))}>삼청동</button></div>
                                <div><button onClick={()=> dispatch(dong('숭인1동'))}>숭인1동</button></div>
                                <div><button onClick={()=> dispatch(dong('숭인2동'))}>숭인2동</button></div>
                                <div><button onClick={()=> dispatch(dong('이화동'))}>이화동</button></div>
                                <div><button onClick={()=> dispatch(dong('종로1.2.3.4가동'))}>종로1.2.3.4가동</button></div>
                                <div><button onClick={()=> dispatch(dong('종로5.6가동'))}>종로5.6가동</button></div>
                                <div><button onClick={()=> dispatch(dong('창신1동'))}>창신1동</button></div>
                                <div><button onClick={()=> dispatch(dong('창신2동'))}>창신2동</button></div>
                                <div><button onClick={()=> dispatch(dong('창신3동'))}>창신3동</button></div>
                                <div><button onClick={()=> dispatch(dong('청운효자동'))}>청운효자동</button></div>
                                <div><button onClick={()=> dispatch(dong('평창동'))}>평창동</button></div>
                                <div><button onClick={()=> dispatch(dong('혜화동'))}>혜화동</button></div>
                                </>
                            </div>
                            ) : null }
                            

                            {/* 중구(다시보기) */}
                            {guValue === 24 ? (
                                <div id= "dongWrapper">
                                <>
                                <div><button onClick={()=> dispatch(dong('광희동'))}>광희동</button></div>
                                <div><button onClick={()=> dispatch(dong('다산동'))}>다산동</button></div>
                                <div><button onClick={()=> dispatch(dong('동화동'))}>동화동</button></div>
                                <div><button onClick={()=> dispatch(dong('명동'))}>명동</button></div>
                                <div><button onClick={()=> dispatch(dong('소공동'))}>소공동</button></div>
                                <div><button onClick={()=> dispatch(dong('신당5동'))}>신당5동</button></div>
                                <div><button onClick={()=> dispatch(dong('신당동'))}>신당동</button></div>
                                <div><button onClick={()=> dispatch(dong('약수동'))}>약수동</button></div>
                                <div><button onClick={()=> dispatch(dong('을지로동'))}>을지로동</button></div>
                                <div><button onClick={()=> dispatch(dong('장충동'))}>장충동</button></div>
                                <div><button onClick={()=> dispatch(dong('중림동'))}>중림동</button></div>
                                <div><button onClick={()=> dispatch(dong('청구동'))}>청구동</button></div>
                                <div><button onClick={()=> dispatch(dong('필동'))}>필동</button></div>
                                <div><button onClick={()=> dispatch(dong('황학동'))}>황학동</button></div>
                                <div><button onClick={()=> dispatch(dong('회현동'))}>회현동</button></div>
                                </>
                            </div>
                            ) : null }
                            

                            {/* 중랑구 */}
                            {guValue === 25 ? (
                                <div id= "dongWrapper">
                                <>
                                <div><button onClick={()=> dispatch(dong('망우동'))}>망우동</button></div>
                                <div><button onClick={()=> dispatch(dong('면목동'))}>면목동</button></div>
                                <div><button onClick={()=> dispatch(dong('묵동'))}>묵동</button></div>
                                <div><button onClick={()=> dispatch(dong('상봉동'))}>상봉동</button></div>
                                <div><button onClick={()=> dispatch(dong('신내동'))}>신내동</button></div>
                                <div><button onClick={()=> dispatch(dong('중화동'))}>중화동</button></div>
                                
                                </>
                            </div>
                            ) : null }
                            
        </>
    )
}

export default SelectDong; 