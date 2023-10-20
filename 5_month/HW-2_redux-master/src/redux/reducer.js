
const initialState = {
    num1: '',
    num2: '',
    result: ''
}

export default function reducer (state= initialState, action) {
    if(action.type === "VALUE1") {
        return {...state, num1: action.payload}
    }else if(action.type === "VALUE2") {
        return {...state, num2: action.payload}
    } else if (action.type === "PLUS") {
        return {...state, result: state.num1!==0 && state.num2 !==0? parseInt(state.num1) + parseInt(state.num2): alert('Пожалуйста, введите число'),num1:'',num2:''}
    } else if (action.type === "MINUS") {
        return {...state, result: state.num1!==0 && state.num2 !==0? parseInt(state.num1) - parseInt(state.num2): alert('Пожалуйста, введите число'),num1:'',num2:''}
    } else if (action.type === "MULTIPLIED") {
        return {...state, result: state.num1!==0 && state.num2 !==0? parseInt(state.num1) * parseInt(state.num2): alert('Пожалуйста, введите число'),num1:'',num2:''}
    } else if (action.type === "DIVISION") {
        return {...state, result: state.num1!==0 && state.num2 !==0? parseInt(state.num1) / parseInt(state.num2): alert('Пожалуйста, введите число'),num1:'',num2:''}
    }


    return state
}