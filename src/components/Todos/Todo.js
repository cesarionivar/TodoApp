import React, { useState } from 'react';

const Todo = () => {
  const [complete, setComplete] = useState(false);

  const handleComplete = () => {
    setComplete(!complete);
  };

  return (
    <div className={`todo ${complete && 'complete'}`}>
      <p onClick={handleComplete}>Wakeup at 5:00 am</p>
      <div className='todo__buttons'>
        <span>Edit</span>
        <span>Delete</span>
      </div>
    </div>
  );
};

export default Todo;
