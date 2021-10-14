import React from 'react';
import Header from '../ui/Header';
import AddTodo from './AddTodo';
import Todo from './Todo';

const Todos = () => {
  return (
    <div className='todos'>
      <Header />
      <div className='todos__body'>
        <h2>Todos (0)</h2>
        <div className='todos__container'>
          <AddTodo />
          <div className='todoList'>
            <h3>Todo list</h3>
            <div className='todoList__container'>
              <Todo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todos;
