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
        default:
            return state;
    }
}