import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewTodo } from '../../actions/todos';

const AddTodo = () => {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      title: todo,
      complete: false,
    };

    dispatch(addNewTodo(newTodo));

    setTodo('');
  };

  return (
    <div className='addTodo'>
      <h2>Add Todo</h2>

      <form onSubmit={handleSubmit}>
        <input
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder='Enter todo here'
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default AddTodo;
