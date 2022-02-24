import React, {Fragment, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {getTasksAction} from '../actions/tasksActions'
import Task from './Task'

const Tasks = () => {

    const dispatch = useDispatch();

    useEffect(() => {

        const getTasks = () => dispatch( getTasksAction())
        getTasks();

    }, [])

    const tasks = useSelector( state => state.tasks.tasks);
    console.log(tasks)



    return (
        <Fragment>
            <h2 className='text-center my-5'>Listado de tareas</h2>

            <table className='table table-striped'>
                <thead className='bg-primary table-dark'>
                    <tr>
                        <th scope='col'>Nombre</th>
                        <th scope='col'>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    { tasks.length === 0 ? 'No hay tareas' : (
                        tasks.map(task => (
                            <Task 
                                key={task.id}
                                task={task}
                            />
                        ))
                    )

                    }
                    
                </tbody>
            </table>
        </Fragment>
    )
}

export default Tasks;