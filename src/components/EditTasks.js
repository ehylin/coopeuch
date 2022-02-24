import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {editTaskAction} from '../actions/tasksActions'
import { useNavigate } from 'react-router-dom';

const EditTasks = () => {
    const navigate = useNavigate()

    const dispatch = useDispatch()

    const [ task, saveTask ] = useState({
        name: ''
    })


    const taskedit = useSelector(state => state.tasks.taskedit)
    
    useEffect( () => {
        saveTask(taskedit)
    }, [taskedit])

    const onChangeForm = e => {
        saveTask({
            ...task,
            [e.target.name] : e.target.value
        })
    }

    const { name } = task

    const submitEditTask = e => {
        e.preventDefault();

       dispatch(editTaskAction(task)) 
       navigate('/');
    }

return(
    <div className='row justify-content-center'>
    <div className='col-md-8'>
        <div className='card'>
            <div className='card-body'>
                <h2 className='text-center mb-4 font-weight-bold'>
                        Editar Tarea
                </h2>

                <form onSubmit={submitEditTask}>
                    <div className='form-group'>
                        <label>Nombre tarea</label>
                        <input
                        type='text'
                        className='form-control'
                        placeholder='Nombre tarea' 
                        name='name'
                        value={name}
                        onChange={onChangeForm}
                    />
                    </div>
                    <button
                    type='submit'
                    className='btn btn-primary font-weight-bold text-uppercase d-block w-100'>
                        Guardar Cambios
                    </button>
                </form>

            </div>
        </div>
    </div>

</div>
)
}

export default EditTasks;