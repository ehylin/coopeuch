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
    START_EDIT_TASK,
    TASK_EDIT_OK,
    TASK_EDIT_ERROR

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


export function deleteTaskAction(id){
    return async (dispatch) => {
        dispatch(getTasksDelete(id))

        try{
            await axios.delete(`http://localhost:4000/tasks/${id}`);
            dispatch( deleteTaskOk())

            Swal.fire(
                'Eliminar',
                'La tarea ha sido eliminada correctamente',
                'success'
            )

        }catch(error){
           console.log(error)
           dispatch( deleteTaskError())
        }
        
    }
}

const getTasksDelete = id => ({
    type: GET_TASK_DELETE,
    payload: id
})

const deleteTaskOk = () => ({
    type: TASK_DELETE_OK

})

const deleteTaskError = () => ({
    type: TASK_DELETE_ERROR,
    payload: true
})


export function getTaskEdit(task){
    return (dispatch) => {
        dispatch( getTaskAction(task))
    }
}

const getTaskAction = task => ({
    type: GET_TASK_EDIT,
    payload: task
})


export function editTaskAction(task){
    return async (dispatch)=> {
        dispatch( editTask() )

        try{
            await axios.put(`http://localhost:4000/tasks/${task.id}`, task);

            dispatch( editTaskOk(task) )
        }catch(error){
           console.log(error)
          
        }
    }
}

const editTask = () => ({
    type: START_EDIT_TASK
})
const editTaskOk = task => ({
    type: TASK_EDIT_OK,
    payload: task
})
