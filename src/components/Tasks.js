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
    const error = useSelector(state => state.tasks.error);
    const loading = useSelector(state => state.tasks.loading);


    return (
        <Fragment>
            <h2 className='text-center my-5'>Listado de tareas</h2>
                { error ? <p className='font-weight-bold alert alert-danger text-center mt-4'>Hubo un error</p> : null}

                { loading ? <p className='text-center'>Cargando...</p> : null}
            <table className='table table-striped'>
                <thead className='bg-dark table-dark'>
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