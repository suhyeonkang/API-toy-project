

const MonthlyTicket = "resultStore/MonthlyTicket";

export const monthlyticket = (props) => ({
    type: MonthlyTicket,
    value: props

});


const initialstate = {
   title: "선택안함"
}


const ticketreducer = (state=initialstate, action) => {
    switch(action.type) {
        case MonthlyTicket :
            return {title: action.value}   
        default :
            return state    
    }
}

export default ticketreducer;
