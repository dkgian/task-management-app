
import * as types from './../constants/ActionTypes'

var initialState = false //close form default

var myReducer = (state = initialState, action)=>{
    switch (action.type) {
        case types.TOGGLE_FORM:
            state = !state
            return state
        case types.OPEN_FORM:
            state = true
            return state
        case types.CLOSE_FORM:
            state = false
            return state
        default:
            return state
    }
    return state;
}

export default myReducer;