import {
    ADD_TASKS,
    ADD_TASKS_OK,
    ADD_TASKS_ERROR

} from '../types'


const initialState = {
    tasks: [],
    error: null,
    loading: false
}

export default function(state = initialState, action){
    switch(action.type){
        case ADD_TASKS:
            return {
                ...state,
                loading: action.payload
            }
        case ADD_TASKS_OK:
            return {
                ...state,
                loading: false,
                tasks: [...state.tasks, action.payload]
            }
        case ADD_TASKS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        default:
            return state;
    }
}