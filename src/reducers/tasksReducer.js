import {
    ADD_TASKS,
    ADD_TASKS_OK,
    ADD_TASKS_ERROR,
    START_DOW_TASKS,
    DOW_TASKS_OK,
    DOW_TASKS_ERROR,
    GET_TASK_DELETE,
    TASK_DELETE_OK,
    TASK_DELETE_ERROR,
    GET_TASK_EDIT,
    TASK_EDIT_OK,
    TASK_EDIT_ERROR

} from '../types'


const initialState = {
    tasks: [],
    error: null,
    loading: false,
    taskdelete: null,
    taskedit: null
}

export default function(state = initialState, action){
    switch(action.type){
        case START_DOW_TASKS:
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
        case DOW_TASKS_ERROR:
        case TASK_DELETE_ERROR:
        case TASK_EDIT_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case DOW_TASKS_OK:
            return{
                ...state,
                loading: false,
                error: null,
                tasks: action.payload
            }
        case GET_TASK_DELETE:
            return{
                ...state,
                taskdelete: action.payload
            }
        case TASK_DELETE_OK:
            return{
                ...state,
                tasks: state.tasks.filter( task => task.id !== state.taskdelete),
                taskdelete: null 
            }
        case GET_TASK_EDIT:
            return{
                ...state,
                taskedit: action.payload
            }
        case TASK_EDIT_OK:
            return {
                ...state,
                taskedit: null,
                tasks: state.tasks.map( task =>
                    task.id === action.payload.id ? task = action.payload :
                    task
                )
            }
        default:
            return state;
    }
}