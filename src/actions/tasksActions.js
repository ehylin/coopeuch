import {
    ADD_TASKS,
    ADD_TASKS_OK,
    ADD_TASKS_ERROR

} from '../types'


import axios from 'axios'

export function newTasksAction(task) {
    return async (dispatch) => {
        dispatch( addTasks() );

        try {
           await axios.post('http://localhost:4000/tasks', task)
            dispatch( addTasksOk(task))
        }catch (error){
            console.log(error)
            dispatch( addTasksError(true))
        }
    }
}

const addTasks = () => ({
    type: ADD_TASKS,
    payload: true
})

const addTasksOk = task => ({
    type: ADD_TASKS_OK,
    payload: task
})

const addTasksError = stateError => ({
    type: ADD_TASKS_ERROR,
    payload: stateError
})