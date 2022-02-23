import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
       <nav className='navbar navbar-expand-lg navbar-dark bg-primary justify-content-between'>
           <div className='container'> 
           <h2>
               <Link to={'/'} className='text-light'>Coopeuch</Link>
            </h2>
           </div>
           <Link className='btn btn-danger d-block d-md-inline-block' to={'/tarea/nueva'}>Agregar Tarea</Link>
        </nav>
    );
}

export default Header;