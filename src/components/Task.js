import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTaskAction, getTaskEdit } from '../actions/tasksActions'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';

const Task = ({task}) => {
    const { name, id} = task;
    

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const okDeleteTask = id => {

        Swal.fire({
            title: 'Esta seguro?',
            text: 'Se eliminara la tarea de la lista',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar'
        }).then((result) => {
            if(result.value){
                dispatch(deleteTaskAction(id))
                
            }
        })     
    }

    const redirectEdit = task => {
        dispatch( getTaskEdit(task))
        navigate(`/tarea/edita/${task.id}`);
    }

    return(
        <tr>
            <td>{name}</td>
            <td className='actions'>
                <button onClick={ () => redirectEdit(task) } className='btn btn-primary mr-2'>
                    Editar
                </button>
                <button type='button' className='btn btn-danger' onClick={() => okDeleteTask(id)}>
                    Eliminar
                </button>
            </td>

        </tr>
    );
}

export default Task;