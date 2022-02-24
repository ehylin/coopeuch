import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { newTasksAction } from '../actions/tasksActions'

const NewTasks = () => {

    const [ name, saveName ] = useState('')

    const dispatch = useDispatch();

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

                </div>
            </div>
        </div>

    </div>
)
}

export default NewTasks;