import React from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks';
import NewTasks from './components/NewTasks'
import EditTasks from './components/EditTasks'

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'


function App() {
  return (
    <Router>
      <Header />
      <div className='container mt-5'>
        <Routes>
          <Route exact path='/' element={<Tasks/>} />
          <Route exact path='/tarea/nueva' element={<NewTasks/>} />
          <Route exact path='/tarea/edita/:id' element={<EditTasks/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
