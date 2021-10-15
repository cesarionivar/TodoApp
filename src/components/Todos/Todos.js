import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../ui/Header';
import AddTodo from './AddTodo';
import Todo from './Todo';

const Todos = () => {
  const { todos } = useSelector((state) => state.todos);
  const totalTodos = todos.length;

  return (
    <div className='todos'>
      <Header />
      <div className='todos__body'>
        <h2>Todos ({totalTodos})</h2>
        <div className='todos__container'>
          <AddTodo />
          {totalTodos > 0 && (
            <div className='todoList'>
              <h3>Todo list</h3>
              <div className='todoList__container'>
                {todos.map((todo) => (
                  <Todo key={todo.id} todo={todo} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Todos;
