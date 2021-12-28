import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import UsersPage from './components/UsersPage';
import TodosPage from './components/TodosPage';
import UserItemPage from './components/UserItemPage';

function App() {

  return (

    <BrowserRouter>
      <div>
        <div>
          <NavLink to='/users'>Users</NavLink>
          <NavLink to='/todos'>Todos</NavLink>
        </div>
        <Routes>
          <Route path='/users' element={<UsersPage />} />
          <Route path='/users/:id' element={<UserItemPage />} />
          <Route path='/todos' element={<TodosPage />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;