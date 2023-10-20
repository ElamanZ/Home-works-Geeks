import {types} from "../types/types";

export const addAction = (data) => {
    return {
        type: types.ADD,
        payload: data
    }
}

export const clearAction = () => {
    return {
        type: types.CLEAR
    }
}