import React, {Fragment} from 'react'

const Tasks = () => {
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
                    
                </tbody>
            </table>
        </Fragment>
    )
}

export default Tasks;