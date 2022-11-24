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
                    <div><button onClick={()=> dispatch(dong('개포1동'))}>개포1동</button></div>
                    <div><button onClick={()=> dispatch(dong('개포2동'))}>개포2동</button></div>
                    <div><button onClick={()=> dispatch(dong('개포4동'))}>개포4동</button></div>
                    <div><button onClick={()=> dispatch(dong('논현1동'))}>논현1동</button></div>
                    <div><button onClick={()=> dispatch(dong('논현2동'))}>논현2동</button></div>
                    <div><button onClick={()=> dispatch(dong('대치1동'))}>대치1동</button></div>
                    <div><button onClick={()=> dispatch(dong('대치2동'))}>대치2동</button></div>
                    <div><button onClick={()=> dispatch(dong('대치4동'))}>대치4동</button></div>
                    <div><button onClick={()=> dispatch(dong('도곡1동'))}>도곡1동</button></div>
                    <div><button onClick={()=> dispatch(dong('도곡2동'))}>도곡2동</button></div>
                    <div><button onClick={()=> dispatch(dong('삼성1동'))}>삼성1동</button></div>
                    <div><button onClick={()=> dispatch(dong('삼성2동'))}>삼성2동</button></div>
                    <div><button onClick={()=> dispatch(dong('세곡동'))}>세곡동</button></div>
                    <div><button onClick={()=> dispatch(dong('수서동'))}>수서동</button></div>
                    <div><button onClick={()=> dispatch(dong('신사동'))}>신사동</button></div>
                    <div><button onClick={()=> dispatch(dong('압구정동'))}>압구정동</button></div>
                    <div><button onClick={()=> dispatch(dong('역삼1동'))}>역삼1동</button></div>
                    <div><button onClick={()=> dispatch(dong('역삼2동'))}>역삼2동</button></div>
                    <div><button onClick={()=> dispatch(dong('일원1동'))}>일원1동</button></div>
                    <div><button onClick={()=> dispatch(dong('일원2동'))}>일원2동</button></div>
                    <div><button onClick={()=> dispatch(dong('일원본동'))}>일원본동</button></div>
                    <div><button onClick={()=> dispatch(dong('청담동'))}>청담동</button></div>
                </>
                </div>
            ): null }
            

                            {/* 강동구 */}
                            {guValue === 2 ? (
                                 <div id= "dongWrapper">
                                 <>
                                    <div><button onClick={()=> dispatch(dong('강일동'))}>강일동</button></div>
                                    <div><button onClick={()=> dispatch(dong('고덕1동'))}>고덕1동</button></div>
                                    <div><button onClick={()=> dispatch(dong('고덕2동'))}>고덕2동</button></div>
                                    <div><button onClick={()=> dispatch(dong('길동'))}>길동</button></div>
                                    <div><button onClick={()=> dispatch(dong('둔촌1동'))}>둔촌1동</button></div>
                                    <div><button onClick={()=> dispatch(dong('둔촌2동'))}>둔촌2동</button></div>
                                    <div><button onClick={()=> dispatch(dong('명일1동'))}>명일1동</button></div>
                                    <div><button onClick={()=> dispatch(dong('명일2동'))}>명일2동</button></div>
                                    <div><button onClick={()=> dispatch(dong('상일1동'))}>상일1동</button></div>
                                    <div><button onClick={()=> dispatch(dong('상일2동'))}>상일2동</button></div>
                                    <div><button onClick={()=> dispatch(dong('성내1동'))}>성내1동</button></div>
                                    <div><button onClick={()=> dispatch(dong('성내2동'))}>성내2동</button></div>
                                    <div><button onClick={()=> dispatch(dong('성내3동'))}>성내3동</button></div>
                                    <div><button onClick={()=> dispatch(dong('암사1동'))}>암사1동</button></div>
                                    <div><button onClick={()=> dispatch(dong('암사2동'))}>암사2동</button></div>
                                    <div><button onClick={()=> dispatch(dong('암사3동'))}>암사3동</button></div>
                                    <div><button onClick={()=> dispatch(dong('천호1동'))}>천호1동</button></div>
                                    <div><button onClick={()=> dispatch(dong('천호2동'))}>천호2동</button></div>
                                    <div><button onClick={()=> dispatch(dong('천호3동'))}>천호3동</button></div>
                                 </>
                             </div>
                            ) : null }
                           

                            {/* 강북구 */}
                            {guValue === 3 ? (
                                <div id= "dongWrapper" >
                                <>
                                <div><button onClick={()=> dispatch(dong('미아동'))}>미아동</button></div>
                                <div><button onClick={()=> dispatch(dong('번1동'))}>번1동</button></div>
                                <div><button onClick={()=> dispatch(dong('번2동'))}>번2동</button></div>
                                <div><button onClick={()=> dispatch(dong('번3동'))}>번3동</button></div>
                                <div><button onClick={()=> dispatch(dong('삼각산동'))}>삼각산동</button></div>
                                <div><button onClick={()=> dispatch(dong('삼양동'))}>삼양동</button></div>
                                <div><button onClick={()=> dispatch(dong('송중동'))}>송중동</button></div>
                                <div><button onClick={()=> dispatch(dong('송천동'))}>송천동</button></div>
                                <div><button onClick={()=> dispatch(dong('수유1동'))}>수유1동</button></div>
                                <div><button onClick={()=> dispatch(dong('수유2동'))}>수유2동</button></div>
                                <div><button onClick={()=> dispatch(dong('수유3동'))}>수유3동</button></div>
                                <div><button onClick={()=> dispatch(dong('우이동'))}>우이동</button></div>
                                <div><button onClick={()=> dispatch(dong('인수동'))}>인수동</button></div>
                                </>
                            </div>
                            ):null}
                            

                            {/* 강서구 */}
                            {guValue === 4 ? (
                                <div id= "dongWrapper">
                                <>
                                <div><button onClick={()=> dispatch(dong('가양1동'))}>가양1동</button></div>
                                <div><button onClick={()=> dispatch(dong('가양2동'))}>가양2동</button></div>
                                <div><button onClick={()=> dispatch(dong('가양3동'))}>가양3동</button></div>
                                <div><button onClick={()=> dispatch(dong('공항동'))}>공항동</button></div>
                                <div><button onClick={()=> dispatch(dong('등촌1동'))}>등촌1동</button></div>
                                <div><button onClick={()=> dispatch(dong('등촌2돋'))}>등촌2동</button></div>
                                <div><button onClick={()=> dispatch(dong('등촌3동'))}>등촌3동</button></div>
                                <div><button onClick={()=> dispatch(dong('발산1동'))}>발산1동</button></div>
                                <div><button onClick={()=> dispatch(dong('방화1동'))}>방화1동</button></div>
                                <div><button onClick={()=> dispatch(dong('방화2동'))}>방화2동</button></div>
                                <div><button onClick={()=> dispatch(dong('방화3동'))}>방화3동</button></div>
                                <div><button onClick={()=> dispatch(dong('염창동'))}>염창동</button></div>
                                <div><button onClick={()=> dispatch(dong('우장산동'))}>우장산동</button></div>
                                <div><button onClick={()=> dispatch(dong('화곡1동'))}>화곡1동</button></div>
                                <div><button onClick={()=> dispatch(dong('화곡2동'))}>화곡2동</button></div>
                                <div><button onClick={()=> dispatch(dong('화곡3동'))}>화곡3동</button></div>
                                <div><button onClick={()=> dispatch(dong('화곡4동'))}>화곡4동</button></div>
                                <div><button onClick={()=> dispatch(dong('화곡6동'))}>화곡6동</button></div>
                                <div><button onClick={()=> dispatch(dong('화곡8동'))}>화곡8동</button></div>
                                <div><button onClick={()=> dispatch(dong('화곡본동'))}>화곡본동</button></div>
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
                                <div><button onClick={()=> dispatch(dong('구의1동'))}>구의1동</button></div>
                                <div><button onClick={()=> dispatch(dong('구의2동'))}>구의2동</button></div>
                                <div><button onClick={()=> dispatch(dong('구의3동'))}>구의3동</button></div>
                                <div><button onClick={()=> dispatch(dong('군자동'))}>군자동</button></div>
                                <div><button onClick={()=> dispatch(dong('능동'))}>능동</button></div>
                                <div><button onClick={()=> dispatch(dong('자양1동'))}>자양1동</button></div>
                                <div><button onClick={()=> dispatch(dong('자양2동'))}>자양2동</button></div>
                                <div><button onClick={()=> dispatch(dong('자양3동'))}>자양3동</button></div>
                                <div><button onClick={()=> dispatch(dong('자양4동'))}>자양4동</button></div>
                                <div><button onClick={()=> dispatch(dong('중곡1동'))}>중곡1동</button></div>
                                <div><button onClick={()=> dispatch(dong('중곡2동'))}>중곡2동</button></div>
                                <div><button onClick={()=> dispatch(dong('중곡3동'))}>중곡3동</button></div>
                                <div><button onClick={()=> dispatch(dong('중곡4동'))}>중곡4동</button></div>
                                <div><button onClick={()=> dispatch(dong('화양동'))}>화양동</button></div>
                                </>

                            </div>
                            ):null}
                            

                            {/* 구로구 */}
                            {guValue === 7 ? (
                                <div id= "dongWrapper">
                                <>
                                <div><button onClick={()=> dispatch(dong('가리봉동'))}>가리봉동</button></div>
                                <div><button onClick={()=> dispatch(dong('개봉1동'))}>개봉1동</button></div>
                                <div><button onClick={()=> dispatch(dong('개봉2동'))}>개봉2동</button></div>
                                <div><button onClick={()=> dispatch(dong('개봉3동'))}>개봉3동</button></div>
                                <div><button onClick={()=> dispatch(dong('고척1동'))}>고척1동</button></div>
                                <div><button onClick={()=> dispatch(dong('고척2동'))}>고척2동</button></div>
                                <div><button onClick={()=> dispatch(dong('구로1동'))}>구로1동</button></div>
                                <div><button onClick={()=> dispatch(dong('구로2동'))}>구로2동</button></div>
                                <div><button onClick={()=> dispatch(dong('구로3동'))}>구로3동</button></div>
                                <div><button onClick={()=> dispatch(dong('구로4동'))}>구로4동</button></div>
                                <div><button onClick={()=> dispatch(dong('구로5동'))}>구로5동</button></div>
                                <div><button onClick={()=> dispatch(dong('수궁동'))}>수궁동</button></div>
                                <div><button onClick={()=> dispatch(dong('신도림동'))}>신도림동</button></div>
                                <div><button onClick={()=> dispatch(dong('오류1동'))}>오류1동</button></div>
                                <div><button onClick={()=> dispatch(dong('오류2동'))}>오류2동</button></div>
                                <div><button onClick={()=> dispatch(dong('항동'))}>항동</button></div>
                                </>

                            </div>
                            ): null}
                            

                            {/* 금천구 */}
                            {guValue === 8 ? (
                                <div id= "dongWrapper">
                                <>
                                <div><button onClick={()=> dispatch(dong('가산동'))}>가산동</button></div>
                                <div><button onClick={()=> dispatch(dong('독산1동'))}>독산1동</button></div>
                                <div><button onClick={()=> dispatch(dong('독산2동'))}>독산2동</button></div>
                                <div><button onClick={()=> dispatch(dong('독산3동'))}>독산3동</button></div>
                                <div><button onClick={()=> dispatch(dong('독산4동'))}>독산4동</button></div>
                                <div><button onClick={()=> dispatch(dong('시흥1동'))}>시흥1동</button></div>
                                <div><button onClick={()=> dispatch(dong('시흥2동'))}>시흥2동</button></div>
                                <div><button onClick={()=> dispatch(dong('시흥3동'))}>시흥3동</button></div>
                                <div><button onClick={()=> dispatch(dong('시흥4동'))}>시흥4동</button></div>
                                <div><button onClick={()=> dispatch(dong('시흥5동'))}>시흥5동</button></div>
                                </>

                            </div>
                            ): null}
                            

                            {/* 노원구 */}
                            {guValue === 9 ? (
                                <div id= "dongWrapper">
                                <>
                                <div><button onClick={()=> dispatch(dong('공릉1동'))}>공릉1동</button></div>
                                <div><button onClick={()=> dispatch(dong('공릉2동'))}>공릉2동</button></div>
                                <div><button onClick={()=> dispatch(dong('상계10동'))}>상계10동</button></div>
                                <div><button onClick={()=> dispatch(dong('상계1동'))}>상계1동</button></div>
                                <div><button onClick={()=> dispatch(dong('상계2동'))}>상계2동</button></div>
                                <div><button onClick={()=> dispatch(dong('상계3.4동'))}>상계3.4동</button></div>
                                <div><button onClick={()=> dispatch(dong('상계5동'))}>상계5동</button></div>
                                <div><button onClick={()=> dispatch(dong('상계6.7동'))}>상계6.7동</button></div>
                                <div><button onClick={()=> dispatch(dong('상계8동'))}>상계8동</button></div>
                                <div><button onClick={()=> dispatch(dong('상계9동'))}>상계9동</button></div>
                                <div><button onClick={()=> dispatch(dong('월계1동'))}>월계1동</button></div>
                                <div><button onClick={()=> dispatch(dong('월계2동'))}>월계2동</button></div>
                                <div><button onClick={()=> dispatch(dong('월계3동'))}>월계3동</button></div>
                                <div><button onClick={()=> dispatch(dong('중계1동'))}>중계1동</button></div>
                                <div><button onClick={()=> dispatch(dong('중계2.3동'))}>중계2.3동</button></div>
                                <div><button onClick={()=> dispatch(dong('중계4동'))}>중계4동</button></div>
                                <div><button onClick={()=> dispatch(dong('중계본동'))}>중계본동</button></div>
                                <div><button onClick={()=> dispatch(dong('하계1동'))}>하계1동</button></div>
                                <div><button onClick={()=> dispatch(dong('하계2동'))}>하계2동</button></div>
                                </>

                            </div>
                            ):null}
                            

                            {/* 도봉구 */}
                            {guValue === 10 ? (
                                <div id= "dongWrapper">
                                <>
                                <div><button onClick={()=> dispatch(dong('도봉1동'))}>도봉1동</button></div>
                                <div><button onClick={()=> dispatch(dong('도봉2동'))}>도봉2동</button></div>
                                <div><button onClick={()=> dispatch(dong('방학1동'))}>방학1동</button></div>
                                <div><button onClick={()=> dispatch(dong('방학2동'))}>방학2동</button></div>
                                <div><button onClick={()=> dispatch(dong('방학3동'))}>방학3동</button></div>
                                <div><button onClick={()=> dispatch(dong('쌍문1동'))}>쌍문1동</button></div>
                                <div><button onClick={()=> dispatch(dong('쌍문2동'))}>쌍문2동</button></div>
                                <div><button onClick={()=> dispatch(dong('쌍문3동'))}>쌍문3동</button></div>
                                <div><button onClick={()=> dispatch(dong('쌍문4동'))}>쌍문4동</button></div>
                                <div><button onClick={()=> dispatch(dong('창1동'))}>창1동</button></div>
                                <div><button onClick={()=> dispatch(dong('창2동'))}>창2동</button></div>
                                <div><button onClick={()=> dispatch(dong('창3동'))}>창3동</button></div>
                                <div><button onClick={()=> dispatch(dong('창4동'))}>창4동</button></div>
                                <div><button onClick={()=> dispatch(dong('창5동'))}>창5동</button></div>
                                </>

                            </div>
                            ):null}
                            

                            {/* 동대문구 */}
                            {guValue === 11 ? (
                                <div id= "dongWrapper">
                                <>
                                <div><button onClick={()=> dispatch(dong('답십리1동'))}>답십리1동</button></div>
                                <div><button onClick={()=> dispatch(dong('답십리2동'))}>답십리2동</button></div>
                                <div><button onClick={()=> dispatch(dong('용신동'))}>용신동</button></div>
                                <div><button onClick={()=> dispatch(dong('이문1동'))}>이문1동</button></div>
                                <div><button onClick={()=> dispatch(dong('이문2동'))}>이문2동</button></div>
                                <div><button onClick={()=> dispatch(dong('장안1동'))}>장안1동</button></div>
                                <div><button onClick={()=> dispatch(dong('장안2동'))}>장안2동</button></div>
                                <div><button onClick={()=> dispatch(dong('전농1동'))}>전농1동</button></div>
                                <div><button onClick={()=> dispatch(dong('전농2동'))}>전농2동</button></div>
                                <div><button onClick={()=> dispatch(dong('제기동'))}>제기동</button></div>
                                <div><button onClick={()=> dispatch(dong('청량리동'))}>청량리동</button></div>
                                <div><button onClick={()=> dispatch(dong('회기동'))}>회기동</button></div>
                                <div><button onClick={()=> dispatch(dong('휘경1동'))}>휘경1동</button></div>
                                <div><button onClick={()=> dispatch(dong('휘경2동'))}>휘경2동</button></div>
                                </>

                            </div>
                            ) : null }
                            

                            {/* 동작구 */}
                            {guValue === 12 ? (
                                <div id= "dongWrapper">
                                <>
                                <div><button onClick={()=> dispatch(dong('노량진1동'))}>노량진1동</button></div>
                                <div><button onClick={()=> dispatch(dong('노량진2동'))}>노량진2동</button></div>
                                <div><button onClick={()=> dispatch(dong('대방동'))}>대방동</button></div>
                                <div><button onClick={()=> dispatch(dong('사당1동'))}>사당1동</button></div>
                                <div><button onClick={()=> dispatch(dong('사당5동'))}>사당5동</button></div>
                                <div><button onClick={()=> dispatch(dong('상도1동'))}>상도1동</button></div>
                                <div><button onClick={()=> dispatch(dong('상도2동'))}>상도2동</button></div>
                                <div><button onClick={()=> dispatch(dong('상도3동'))}>상도3동</button></div>
                                <div><button onClick={()=> dispatch(dong('상도4동'))}>상도4동</button></div>
                                <div><button onClick={()=> dispatch(dong('신대방1동'))}>신대방1동</button></div>
                                <div><button onClick={()=> dispatch(dong('신대방2동'))}>신대방2동</button></div>
                                <div><button onClick={()=> dispatch(dong('흑석동'))}>흑석동</button></div>
                                </>

                            </div>
                            ) : null }
                            

                            {/* 마포구 */}
                            {guValue === 13 ? (
                                <div id= "dongWrapper">
                                <>
                                <div><button onClick={()=> dispatch(dong('공덕동'))}>공덕동</button></div>
                                <div><button onClick={()=> dispatch(dong('대흥동'))}>대흥동</button></div>
                                <div><button onClick={()=> dispatch(dong('도화동'))}>도화동</button></div>
                                <div><button onClick={()=> dispatch(dong('망원1동'))}>망원1동</button></div>
                                <div><button onClick={()=> dispatch(dong('망원2동'))}>망원2동</button></div>
                                <div><button onClick={()=> dispatch(dong('상암동'))}>상암동</button></div>
                                <div><button onClick={()=> dispatch(dong('서강동'))}>서강동</button></div>
                                <div><button onClick={()=> dispatch(dong('서교동'))}>서교동</button></div>
                                <div><button onClick={()=> dispatch(dong('성산1동'))}>성산1동</button></div>
                                <div><button onClick={()=> dispatch(dong('성산2동'))}>성산2동</button></div>
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
                                <div><button onClick={()=> dispatch(dong('남가좌1동'))}>남가좌1동</button></div>
                                <div><button onClick={()=> dispatch(dong('남가좌2동'))}>남가좌2동</button></div>
                                <div><button onClick={()=> dispatch(dong('북가좌1동'))}>북가좌1동</button></div>
                                <div><button onClick={()=> dispatch(dong('북가좌2동'))}>북가좌2동</button></div>
                                <div><button onClick={()=> dispatch(dong('북아현동'))}>북아현동</button></div>
                                <div><button onClick={()=> dispatch(dong('신촌동'))}>신촌동</button></div>
                                <div><button onClick={()=> dispatch(dong('연희동'))}>연희동</button></div>
                                <div><button onClick={()=> dispatch(dong('천연동'))}>천연동</button></div>
                                <div><button onClick={()=> dispatch(dong('충현동'))}>충현동</button></div>
                                <div><button onClick={()=> dispatch(dong('홍은1동'))}>홍은1동</button></div>
                                <div><button onClick={()=> dispatch(dong('홍은2동'))}>홍은2동</button></div>
                                <div><button onClick={()=> dispatch(dong('홍제1동'))}>홍제1동</button></div>
                                <div><button onClick={()=> dispatch(dong('홍제2동'))}>홍제2동</button></div>
                                <div><button onClick={()=> dispatch(dong('홍제3동'))}>홍제3동</button></div>
                                </>
                            </div>
                            ) : null }
                            

                            {/* 서초구 */}
                            {guValue === 15 ? (
                                <div id= "dongWrapper">
                                <>
                                <div><button onClick={()=> dispatch(dong('내곡동'))}>내곡동</button></div>
                                <div><button onClick={()=> dispatch(dong('반포1동'))}>반포1동</button></div>
                                <div><button onClick={()=> dispatch(dong('반포2동'))}>반포2동</button></div>
                                <div><button onClick={()=> dispatch(dong('반포3동'))}>반포3동</button></div>
                                <div><button onClick={()=> dispatch(dong('반포4동'))}>반포4동</button></div>
                                <div><button onClick={()=> dispatch(dong('반포본동'))}>반포본동</button></div>
                                <div><button onClick={()=> dispatch(dong('방배1동'))}>방배1동</button></div>
                                <div><button onClick={()=> dispatch(dong('방배2동'))}>방배2동</button></div>
                                <div><button onClick={()=> dispatch(dong('방배3동'))}>방배3동</button></div>
                                <div><button onClick={()=> dispatch(dong('방배4동'))}>방배4동</button></div>
                                <div><button onClick={()=> dispatch(dong('방배본동'))}>방배본동</button></div>
                                <div><button onClick={()=> dispatch(dong('서초1동'))}>서초1동</button></div>
                                <div><button onClick={()=> dispatch(dong('서초2동'))}>서초2동</button></div>
                                <div><button onClick={()=> dispatch(dong('서초3동'))}>서초3동</button></div>
                                <div><button onClick={()=> dispatch(dong('서초4동'))}>서초4동</button></div>
                                <div><button onClick={()=> dispatch(dong('양재1동'))}>양재1동</button></div>
                                <div><button onClick={()=> dispatch(dong('양재2동'))}>양재2동</button></div>
                                <div><button onClick={()=> dispatch(dong('잠원동'))}>잠원동</button></div>
                                </>
                            </div>
                            ) : null }
                            

                            {/* 성동구 */}
                            {guValue === 16? (
                                <div id= "dongWrapper">
                                <>
                                <div><button onClick={()=> dispatch(dong('금호1가동'))}>금호1가동</button></div>
                                <div><button onClick={()=> dispatch(dong('금호2.3가동'))}>금호2.3가동</button></div>
                                <div><button onClick={()=> dispatch(dong('금호4가동'))}>금호4가동</button></div>
                                <div><button onClick={()=> dispatch(dong('마장동'))}>마장동</button></div>
                                <div><button onClick={()=> dispatch(dong('사근동'))}>사근동</button></div>
                                <div><button onClick={()=> dispatch(dong('성수1가1동'))}>성수1가1동</button></div>
                                <div><button onClick={()=> dispatch(dong('성수1가2동'))}>성수1가2동</button></div>
                                <div><button onClick={()=> dispatch(dong('성수2가1동'))}>성수2가1동</button></div>
                                <div><button onClick={()=> dispatch(dong('성수2가3동'))}>성수2가3동</button></div>
                                <div><button onClick={()=> dispatch(dong('송정동'))}>송정동</button></div>
                                <div><button onClick={()=> dispatch(dong('옥수동'))}>옥수동</button></div>
                                <div><button onClick={()=> dispatch(dong('왕십리2동'))}>왕십리2동</button></div>
                                <div><button onClick={()=> dispatch(dong('왕십리도선동'))}>왕십리도선동</button></div>
                                <div><button onClick={()=> dispatch(dong('용답동'))}>용답동</button></div>
                                <div><button onClick={()=> dispatch(dong('응봉동'))}>응봉동</button></div>
                                <div><button onClick={()=> dispatch(dong('행당1동'))}>행당1동</button></div>
                                <div><button onClick={()=> dispatch(dong('행당2동'))}>행당2동</button></div>
                                </>
                            </div>
                            ) : null }
                            

                            {/* 성북구 */}
                            {guValue === 17? (
                                <div id= "dongWrapper">
                                <>
                                <div><button onClick={()=> dispatch(dong('길음1동'))}>길음1동</button></div>
                                <div><button onClick={()=> dispatch(dong('길음2동'))}>길음2동</button></div>
                                <div><button onClick={()=> dispatch(dong('돈암1동'))}>돈암1동</button></div>
                                <div><button onClick={()=> dispatch(dong('돈암2동'))}>돈암2동</button></div>
                                <div><button onClick={()=> dispatch(dong('동선동'))}>동선동</button></div>
                                <div><button onClick={()=> dispatch(dong('보문동'))}>보문동</button></div>
                                <div><button onClick={()=> dispatch(dong('삼선동'))}>삼선동</button></div>
                                <div><button onClick={()=> dispatch(dong('석관동'))}>석관동</button></div>
                                <div><button onClick={()=> dispatch(dong('성북동'))}>성북동</button></div>
                                <div><button onClick={()=> dispatch(dong('안암동'))}>안암동</button></div>
                                <div><button onClick={()=> dispatch(dong('월곡1동'))}>월곡1동</button></div>
                                <div><button onClick={()=> dispatch(dong('월곡2동'))}>월곡2동</button></div>
                                <div><button onClick={()=> dispatch(dong('장위1동'))}>장위1동</button></div>
                                <div><button onClick={()=> dispatch(dong('장위2동'))}>장위2동</button></div>
                                <div><button onClick={()=> dispatch(dong('장위3동'))}>장위3동</button></div>
                                <div><button onClick={()=> dispatch(dong('정릉1동'))}>정릉1동</button></div>
                                <div><button onClick={()=> dispatch(dong('정릉2동'))}>정릉2동</button></div>
                                <div><button onClick={()=> dispatch(dong('정릉3동'))}>정릉3동</button></div>
                                <div><button onClick={()=> dispatch(dong('정릉4동'))}>정릉4동</button></div>
                                <div><button onClick={()=> dispatch(dong('종암동'))}>종암동</button></div>
                                </>
                            </div>
                            ): null }
                            

                            {/* 송파구 */}
                            {guValue === 18? (
                                <div id= "dongWrapper">
                                <>
                                <div><button onClick={()=> dispatch(dong('가락1동'))}>가락1동</button></div>
                                <div><button onClick={()=> dispatch(dong('가락2동'))}>가락2동</button></div>
                                <div><button onClick={()=> dispatch(dong('가락본동'))}>가락본동</button></div>
                                <div><button onClick={()=> dispatch(dong('거여1동'))}>거여1동</button></div>
                                <div><button onClick={()=> dispatch(dong('거여2동'))}>거여2동</button></div>
                                <div><button onClick={()=> dispatch(dong('마천1동'))}>마천1동</button></div>
                                <div><button onClick={()=> dispatch(dong('마천2동'))}>마천2동</button></div>
                                <div><button onClick={()=> dispatch(dong('문정1동'))}>문정1동</button></div>
                                <div><button onClick={()=> dispatch(dong('문정2동'))}>문정2동</button></div>
                                <div><button onClick={()=> dispatch(dong('방이1동'))}>방이1동</button></div>
                                <div><button onClick={()=> dispatch(dong('방이2동'))}>방이2동</button></div>
                                <div><button onClick={()=> dispatch(dong('삼전동'))}>삼전동</button></div>
                                <div><button onClick={()=> dispatch(dong('석촌동'))}>석촌동</button></div>
                                <div><button onClick={()=> dispatch(dong('송파1동'))}>송파1동</button></div>
                                <div><button onClick={()=> dispatch(dong('송파2동'))}>송파2동</button></div>
                                <div><button onClick={()=> dispatch(dong('오금동'))}>오금동</button></div>
                                <div><button onClick={()=> dispatch(dong('오륜동'))}>오륜동</button></div>
                                <div><button onClick={()=> dispatch(dong('위례동'))}>위례동</button></div>
                                <div><button onClick={()=> dispatch(dong('잠실2동'))}>잠실2동</button></div>
                                <div><button onClick={()=> dispatch(dong('잠실3동'))}>잠실3동</button></div>
                                <div><button onClick={()=> dispatch(dong('잠실4동'))}>잠실4동</button></div>
                                <div><button onClick={()=> dispatch(dong('잠실6동'))}>잠실6동</button></div>
                                <div><button onClick={()=> dispatch(dong('잠실7동'))}>잠실7동</button></div>
                                <div><button onClick={()=> dispatch(dong('잠실본동'))}>잠실본동</button></div>
                                <div><button onClick={()=> dispatch(dong('장지동'))}>장지동</button></div>
                                <div><button onClick={()=> dispatch(dong('풍납1동'))}>풍납1동</button></div>
                                <div><button onClick={()=> dispatch(dong('풍납2동'))}>풍납2동</button></div>
                                </>
                            </div>
                            ) : null }
                            

                            {/* 양천구 */}
                            {guValue === 19? (
                                <div id= "dongWrapper">
                                <>
                                <div><button onClick={()=> dispatch(dong('목1동'))}>목1동</button></div>
                                <div><button onClick={()=> dispatch(dong('목2동'))}>목2동</button></div>
                                <div><button onClick={()=> dispatch(dong('목3동'))}>목3동</button></div>
                                <div><button onClick={()=> dispatch(dong('목4동'))}>목4동</button></div>
                                <div><button onClick={()=> dispatch(dong('목5동'))}>목5동</button></div>
                                <div><button onClick={()=> dispatch(dong('신월1동'))}>신월1동</button></div>
                                <div><button onClick={()=> dispatch(dong('신월2동'))}>신월2동</button></div>
                                <div><button onClick={()=> dispatch(dong('신월3동'))}>신월3동</button></div>
                                <div><button onClick={()=> dispatch(dong('신월4동'))}>신월4동</button></div>
                                <div><button onClick={()=> dispatch(dong('신월5동'))}>신월5동</button></div>
                                <div><button onClick={()=> dispatch(dong('신월6동'))}>신월6동</button></div>
                                <div><button onClick={()=> dispatch(dong('신월7동'))}>신월7동</button></div>
                                <div><button onClick={()=> dispatch(dong('신정1동'))}>신정1동</button></div>
                                <div><button onClick={()=> dispatch(dong('신정2동'))}>신정2동</button></div>
                                <div><button onClick={()=> dispatch(dong('신정3동'))}>신정3동</button></div>
                                <div><button onClick={()=> dispatch(dong('신정4동'))}>신정4동</button></div>
                                <div><button onClick={()=> dispatch(dong('신정6동'))}>신정6동</button></div>
                                <div><button onClick={()=> dispatch(dong('신정7동'))}>신정7동</button></div>
                                </>
                            </div>
                            ): null }
                            

                            {/* 영등포구 */}
                            {guValue === 20 ? (
                                <div id= "dongWrapper">
                                <>
                                <div><button onClick={()=> dispatch(dong('당산1동'))}>당산1동</button></div>
                                <div><button onClick={()=> dispatch(dong('당산2동'))}>당산2동</button></div>
                                <div><button onClick={()=> dispatch(dong('대림1동'))}>대림1동</button></div>
                                <div><button onClick={()=> dispatch(dong('대림2동'))}>대림2동</button></div>
                                <div><button onClick={()=> dispatch(dong('대림3동'))}>대림3동</button></div>
                                <div><button onClick={()=> dispatch(dong('도림동'))}>도림동</button></div>
                                <div><button onClick={()=> dispatch(dong('문래동'))}>문래동</button></div>
                                <div><button onClick={()=> dispatch(dong('신길1동'))}>신길1동</button></div>
                                <div><button onClick={()=> dispatch(dong('신길3동'))}>신길3동</button></div>
                                <div><button onClick={()=> dispatch(dong('신길4동'))}>신길4동</button></div>
                                <div><button onClick={()=> dispatch(dong('신길5동'))}>신길5동</button></div>
                                <div><button onClick={()=> dispatch(dong('신길6동'))}>신길6동</button></div>
                                <div><button onClick={()=> dispatch(dong('신길7동'))}>신길7동</button></div>
                                <div><button onClick={()=> dispatch(dong('양평1동'))}>양평1동</button></div>
                                <div><button onClick={()=> dispatch(dong('양평2동'))}>양평2동</button></div>
                                <div><button onClick={()=> dispatch(dong('여의동'))}>여의동</button></div>
                                <div><button onClick={()=> dispatch(dong('영등포동'))}>영등포동</button></div>
                                <div><button onClick={()=> dispatch(dong('영등포본동'))}>영등포본동</button></div>
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
                                <div><button onClick={()=> dispatch(dong('이촌1동'))}>이촌1동</button></div>
                                <div><button onClick={()=> dispatch(dong('이촌2동'))}>이촌2동</button></div>
                                <div><button onClick={()=> dispatch(dong('이태원1동'))}>이태원1동</button></div>
                                <div><button onClick={()=> dispatch(dong('이태원2동'))}>이태원2동</button></div>
                                <div><button onClick={()=> dispatch(dong('청파동'))}>청파동</button></div>
                                <div><button onClick={()=> dispatch(dong('한강로동'))}>한강로동</button></div>
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
                            

                            {/* 종로구 */}
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
                            

                            {/* 중구 */}
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
                                <div><button onClick={()=> dispatch(dong('망우3동'))}>망우3동</button></div>
                                <div><button onClick={()=> dispatch(dong('망우본동'))}>망우본동</button></div>
                                <div><button onClick={()=> dispatch(dong('면목2동'))}>면목2동</button></div>
                                <div><button onClick={()=> dispatch(dong('면목3.8동'))}>면목3.8동</button></div>
                                <div><button onClick={()=> dispatch(dong('면목4동'))}>면목4동</button></div>
                                <div><button onClick={()=> dispatch(dong('면목5동'))}>면목5동</button></div>
                                <div><button onClick={()=> dispatch(dong('면목7동'))}>면목7동</button></div>
                                <div><button onClick={()=> dispatch(dong('면목본동'))}>면목본동</button></div>
                                <div><button onClick={()=> dispatch(dong('묵1동'))}>묵1동</button></div>
                                <div><button onClick={()=> dispatch(dong('묵2동'))}>묵2동</button></div>
                                <div><button onClick={()=> dispatch(dong('상봉1동'))}>상봉1동</button></div>
                                <div><button onClick={()=> dispatch(dong('상봉2동'))}>상봉2동</button></div>
                                <div><button onClick={()=> dispatch(dong('신내1동'))}>신내1동</button></div>
                                <div><button onClick={()=> dispatch(dong('신내2동'))}>신내2동</button></div>
                                <div><button onClick={()=> dispatch(dong('중화1동'))}>중화1동</button></div>
                                <div><button onClick={()=> dispatch(dong('중화2동'))}>중화2동</button></div>
                                </>
                            </div>
                            ) : null }
                            
        </>
    )
}

export default SelectDong; 