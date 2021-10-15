import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewTodo, editTodo } from '../../actions/todos';

const AddTodo = () => {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();
  const { activeTodo } = useSelector((state) => state.todos);

  useEffect(() => {
    if (activeTodo) {
      setTodo(activeTodo.title);
    }
  }, [activeTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (activeTodo) {
      dispatch(
        editTodo({
          ...activeTodo,
          title: todo,
        })
      );
    } else {
      const newTodo = {
        id: new Date().getTime(),
        title: todo,
        complete: false,
      };
      dispatch(addNewTodo(newTodo));
    }

    setTodo('');
  };

  return (
    <div className='addTodo'>
      <h2> {activeTodo ? 'Edit ' : 'Add'} Todo</h2>

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
