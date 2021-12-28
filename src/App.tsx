import React, { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
import { CardVariant } from './components/Card';
import UserList from './components/UserList';
import { ITodo, IUser } from './types/types';
import axios from 'axios';
import List from './components/List';
import UserItem from './components/UserItem';
import TodoItem from './components/TodoItem';

function App() {

  const [users, setUsers] = useState<IUser[]>([]);
  const [todos, setTodos] = useState<ITodo[]>([])

  useEffect(() => {
    fetchUsers()
    fetchYodos()
  }, [])

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
      setUsers(response.data)
    } catch (e) {
      alert(e)
    }
  }

  async function fetchYodos() {
    try {
      const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
      setTodos(response.data)
    } catch (e) {
      alert(e)
    }
  }

  return (
    <div className="App">
      <Card onClick={(num) => console.log('click', num)} variant={CardVariant.primary} width='200px' height='200px'>
        <button>Click</button>
      </Card>
      <List items={users} renderItem={(user: IUser) => <UserItem user={user} key={user.id} />} />
      <List items={todos} renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />} />
    </div>
  );
}

export default App;