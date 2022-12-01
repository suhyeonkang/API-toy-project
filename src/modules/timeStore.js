

const Time = "resultStore/Time";
const TimeReset = "resultStore/TimeReset";

export const time = (props) => ({
    type: Time,
    value: props

});

export const timeReset = () => ({type: TimeReset});


const initialstate = {
   title: "선택안함"
}


const timereducer = (state=initialstate, action) => {
    switch(action.type) {
        case Time :
            return {title: action.value}   
        case TimeReset :
            return {title: "선택안함"}    
        default :
            return state    
    }
}

export default timereducer;
