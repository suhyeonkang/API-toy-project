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
const GuReset = 'guStore/GuReset'

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
export const gureset = () => ({type: GuReset});


const initialStates = {
    title: '?????????',
    guValue: 0,
};

const gureducer = (state=initialStates, action) => {
    switch(action.type){
        case Gangnam :
            return {title: '?????????', guValue: 1}
        case Gangdong :
            return {title: '?????????', guValue: 2}
        case Gangbuk :
            return {title: '?????????', guValue: 3}
        case Gangseo :
            return {title: '?????????', guValue: 4}
        case Gwanak :
            return {title: '?????????', guValue: 5}
        case Gwangjin :
            return {title: '?????????', guValue: 6}
        case Guro :
            return {title: '?????????', guValue: 7}
        case Geumcheon :
            return {title: '?????????', guValue: 8}
        case Nowon :
            return {title: '?????????', guValue: 9}
        case Dobong :
            return {title: '?????????', guValue: 10}
        case Dongdaemun :
            return {title: '????????????', guValue: 11}
        case Dongjak :
            return {title: '?????????', guValue: 12}
        case Mapo :
            return {title: '?????????', guValue: 13}
        case Seodaemun :
            return {title: '????????????', guValue: 14}
        case Seocho :
            return {title: '?????????', guValue: 15}
        case Seongdong :
            return {title: '?????????', guValue: 16}
        case Seongbuk :
            return {title: '?????????', guValue: 17}
        case Songpa :
            return {title: '?????????', guValue: 18}
        case Yangcheon :
            return {title: '?????????', guValue: 19}
        case Yeongdeungpo :
            return {title: '????????????', guValue: 20}
        case Yongsan :
            return {title: '?????????', guValue: 21}
        case Eunpyeong :
            return {title: '?????????', guValue: 22}
        case Jongro :
            return {title: '?????????', guValue: 23}
        case Jung :
            return {title: '??????', guValue: 24}
        case Jungnang :
            return {title: '?????????', guValue: 25}     
        case GuReset :
            return {title: '?????????', guValue: 0}                                                                                
        default :
            return state;    
    }
}

export default gureducer;

