import {
    ADD_TASKS,
    ADD_TASKS_OK,
    ADD_TASKS_ERROR

} from '../types'

export function newTasksAction(taks) {
    return () => {
        console.log(taks)
    }
}