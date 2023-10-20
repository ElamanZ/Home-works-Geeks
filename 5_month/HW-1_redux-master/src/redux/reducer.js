
const initialState = {
    num: 0
}

export default function (state = initialState, action) {
    if(action.type === "PLUS") {
        return {...state, num: state.num +1}
    } else if (action.type === "MINUS"){
        return {...state, num: state.num -1}
    }
    return state

}