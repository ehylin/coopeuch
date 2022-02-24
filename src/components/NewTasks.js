import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { newTasksAction } from '../actions/tasksActions'

const NewTasks = () => {

    const [ name, saveName ] = useState('')

    const dispatch = useDispatch();

    const loading = useSelector( state => state.tasks.loading)
    const error = useSelector( state => state.tasks.error)

    const addTasks = task => dispatch( newTasksAction(task) )

    const submitNewTasks = e =>{
        e.preventDefault();

        if(name.trim() === ''){
            return;
        }

        addTasks({
            name
        });
    }


return(
    <div className='row justify-content-center'>
        <div className='col-md-8'>
            <div className='card'>
                <div className='card-body'>
                    <h2 className='text-center mb-4 font-weight-bold'>
                            Agregar nueva tarea
                    </h2>

                    <form onSubmit={submitNewTasks}>
                        <div className='form-group'>
                            <label>Nombre tarea</label>
                            <input
                            type='text'
                            className='form-control'
                            placeholder='Nombre tarea' 
                            name='name'
                            value={name}
                            onChange={e => saveName(e.target.value)}
                        />
                        </div>
                        <button
                        type='submit'
                        className='btn btn-primary font-weight-bold text-uppercase d-block w-100'>
                            Agregar
                        </button>
                    </form>
                    { loading ? <p>Cargando...</p> : null}
                    { error ? <p className='alert alert-danger p2 mt-4 text-center'>Hubo un error</p> : null}
                </div>
            </div>
        </div>

    </div>
)
}

export default NewTasks;