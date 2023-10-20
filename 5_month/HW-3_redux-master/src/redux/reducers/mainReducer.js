import {types} from "../types/types";

const initialState =  {
    numbers: []
}

export default function mainReducer (state = initialState, action){
     switch (action.type) {
         case types.ADD:
             let lastState = state.numbers[state.numbers.length-1]
             return{...state,numbers: lastState!==undefined ?[...state.numbers,action.payload+lastState]:[...state.numbers,action.payload]}
         case types.CLEAR:
             return {...state, numbers : []}
         default: return state
     }
}
