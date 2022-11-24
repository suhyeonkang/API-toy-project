

const Dong = 'dStore/Dong';

export const dong = (props) => ({
    type: Dong,
    value: props
});


const initial = {
    title: '읍/면/동',

}

const dongreducer = (state=initial, action) => {
    switch(action.type){
        case Dong :
            return {title: action.value}
        default :
            return state    
    }
};

export default dongreducer;

