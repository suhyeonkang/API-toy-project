const Gangnam = 'guStore/Gangnam';
const Gangdong = 'guStore/Gangdong';
const Gangbuk = 'guStore/Gangbuk';
const Gangseo = 'guStore/Gangseo';
const Gwanak = 'guStore/Gwanak';
const Gwangjin = 'guStore/Gwangjin';
const Guro = 'guStore/Guro';
const Geumcheon = 'guStore/Geumcheon';
const Nowon = 'guStore/Nowon';
const Dobong = 'loctionStore/Dobong';
const Dongdaemun = 'guStore/Dongdaemun'
const Dongjak = 'guStore/Dongjak';
const Mapo = 'guStore/Mapo';
const Seodaemun = 'guStore/Seodaemun';
const Seocho = 'guStore/Seocho';
const Seongdong = 'guStore/Seongdong';
const Seongbuk = 'guStore/Seongbuk';
const Songpa = 'guStore/Songpa';
const Yangcheon = 'guStore/Yangcheon';
const Yeongdeungpo = 'guStore/Yeongdeungpo';
const Yongsan = 'guStore/Yongsan';
const Eunpyeong = 'guStore/Eunpyeong';
const Jongro = 'guStore/Jongro';
const Jung = 'guStore/Jung';
const Jungnang = 'guStore/Jungnang';

export const gangnam = () => ({type: Gangnam});
export const gangdong = () => ({type: Gangdong});
export const gangbuk = () => ({type: Gangbuk});
export const gangseo = () => ({type: Gangseo});
export const gwanak = () => ({type: Gwanak});
export const gwangjin = () => ({type: Gwangjin});
export const guro = () => ({type: Guro});
export const geumcheon = () => ({type: Geumcheon});
export const nowon = () => ({type: Nowon});
export const dobong = () => ({type: Dobong});
export const dongdaemun = () => ({type: Dongdaemun});
export const dongjak = () => ({type: Dongjak});
export const mapo = () => ({type: Mapo});
export const seodaemun = () => ({type: Seodaemun});
export const seocho = () => ({type: Seocho});
export const seongdong = () => ({type: Seongdong});
export const seongbuk = () => ({type: Seongbuk});
export const songpa = () => ({type: Songpa});
export const yangcheon = () => ({type: Yangcheon});
export const yeongdeungpo = () => ({type: Yeongdeungpo});
export const yongsan = () => ({type: Yongsan});
export const eunpyeong = () => ({type: Eunpyeong});
export const jongro = () => ({type: Jongro});
export const jung = () => ({type: Jung});
export const jungnang = () => ({type: Jungnang});


const initialStates = {
    title: '지역구',
    guValue: 0,
};

const gureducer = (state=initialStates, action) => {
    switch(action.type){
        case Gangnam :
            return {title: '강남구', guValue: 1}
        case Gangdong :
            return {title: '강동구', guValue: 2}
        case Gangbuk :
            return {title: '강북구', guValue: 3}
        case Gangseo :
            return {title: '강서구', guValue: 4}
        case Gwanak :
            return {title: '관악구', guValue: 5}
        case Gwangjin :
            return {title: '광진구', guValue: 6}
        case Guro :
            return {title: '구로구', guValue: 7}
        case Geumcheon :
            return {title: '금천구', guValue: 8}
        case Nowon :
            return {title: '노원구', guValue: 9}
        case Dobong :
            return {title: '도봉구', guValue: 10}
        case Dongdaemun :
            return {title: '동대문구', guValue: 11}
        case Dongjak :
            return {title: '동작구', guValue: 12}
        case Mapo :
            return {title: '마포구', guValue: 13}
        case Seodaemun :
            return {title: '서대문구', guValue: 14}
        case Seocho :
            return {title: '서초구', guValue: 15}
        case Seongdong :
            return {title: '성동구', guValue: 16}
        case Seongbuk :
            return {title: '성북구', guValue: 17}
        case Songpa :
            return {title: '송파구', guValue: 18}
        case Yangcheon :
            return {title: '양천구', guValue: 19}
        case Yeongdeungpo :
            return {title: '영등포구', guValue: 20}
        case Yongsan :
            return {title: '용산구', guValue: 21}
        case Eunpyeong :
            return {title: '은평구', guValue: 22}
        case Jongro :
            return {title: '종로구', guValue: 23}
        case Jung :
            return {title: '중구', guValue: 24}
        case Jungnang :
            return {title: '중랑구', guValue: 25}                                                                                 
        default :
            return state;    
    }
}

export default gureducer;

