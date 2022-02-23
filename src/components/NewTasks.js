import React from 'react'

const NewTasks = () => {
return(
    <div className='row justify-content-center'>
        <div className='col-md-8'>
            <div className='card'>
                <div className='card-body'>
                    <h2 className='text-center mb-4 font-weight-bold'>
                            Agregar nueva tarea
                    </h2>

                    <form>
                        <div className='form-group'>
                            <label>Nombre tarea</label>
                            <input
                            type='text'
                            className='form-control'
                            placeholder='Nombre tarea' 
                            name='name'
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