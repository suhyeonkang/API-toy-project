

const Dong = 'dStore/Dong';
const DongReset = 'dStore/DongReset';

export const dong = (props) => ({
    type: Dong,
    value: props
});

export const dongreset = () => ({type: DongReset});

const initial = {
    title: '읍/면/동',

}

const dongreducer = (state=initial, action) => {
    switch(action.type){
        case Dong :
            return {title: action.value}
        case DongReset :
            return {title: '읍/면/동'}    
        default :
            return state    
    }
};

export default dongreducer;

