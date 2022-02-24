import React from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks';
import NewTasks from './components/NewTasks'
import EditTasks from './components/EditTasks'

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'


function App() {
  return (
    <Router>
      <Provider store={store}>
      <Header />
      <div className='container mt-5'>
        <Routes>
          <Route exact path='/' element={<Tasks/>} />
          <Route exact path='/tarea/nueva' element={<NewTasks/>} />
          <Route exact path='/tarea/edita/:id' element={<EditTasks/>} />
        </Routes>
      </div>
      </Provider>
    </Router>
  );
}

export default App;
