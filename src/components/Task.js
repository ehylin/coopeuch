import React from 'react'
import {Link} from 'react-router-dom'

const Task = ({task}) => {
    const { name, id} = task
    return(
        <tr>
            <td>{name}</td>
            <td className='actions'>
                <Link to={`/tarea/edita/${id}`} className='btn btn-primary mr-2'>
                    Editar
                </Link>
                <button type='button' className='btn btn-danger'>
                    Eliminar
                </button>
            </td>

        </tr>
    );
}

export default Task;