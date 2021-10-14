import React, { useState } from 'react';

const AddTodo = () => {
  const [todo, setTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Todo >> ', todo);

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
