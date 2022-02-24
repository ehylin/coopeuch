import {
    ADD_TASKS,
    ADD_TASKS_OK,
    ADD_TASKS_ERROR,
    START_DOW_TASKS,
    DOW_TASKS_OK,
    DOW_TASKS_ERROR

} from '../types'

import axios from 'axios'
import Swal from 'sweetalert2'


export function newTasksAction(task) {
    return async (dispatch) => {
        dispatch( addTasks() );

        try {
           await axios.post('http://localhost:4000/tasks', task)
            dispatch( addTasksOk(task))

            Swal.fire(
                'Correcto',
                'La tarea se agrego correctamente',
                'success'
            )

        }catch (error){
            console.log(error)
            dispatch( addTasksError(true))

            Swal.fire({
                icon: 'error',
                title: 'Hubo un error',
                text: 'Hubo un error, intenta de nuevo'
            })
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


export function getTasksAction(){
    return async (dispatch) => {
        dispatch( downloadTasks() );

        try{
            const res = await axios.get('http://localhost:4000/tasks');
            dispatch( dowloadTasksOk(res.data) )

        }catch(error){
            dispatch( dowloadTasksError())
        }
    }
}

const downloadTasks = () => ({
    type: START_DOW_TASKS,
    payload: true
})

const dowloadTasksOk = tasks => ({
    type: DOW_TASKS_OK,
    payload: tasks
})

const dowloadTasksError = () => ({
    type: DOW_TASKS_ERROR,
    payload: true
})