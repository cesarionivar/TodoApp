import React from 'react';

const Todo = () => {
  return (
    <div className='todo'>
      <p>Wakeup at 5:00 am</p>
      <div className='todo__buttons'>
        <span>Edit</span>
        <span>Delete</span>
      </div>
    </div>
  );
};

export default Todo;
