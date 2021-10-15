import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, setCompleteTodo, setEditTodo } from '../../actions/todos';

const Todo = ({ todo: { id, title, complete } }) => {
  const dispatch = useDispatch();

  const handleComplete = () => {
    dispatch(setCompleteTodo(id));
  };

  const handleEdit = () => {
    dispatch(setEditTodo({ id, title, complete }));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className={`todo ${complete && 'complete'}`}>
      <p onClick={handleComplete}>{title}</p>
      <div className='todo__buttons'>
        <span onClick={handleEdit}>Edit</span>
        <span onClick={handleDelete}>Delete</span>
      </div>
    </div>
  );
};

export default Todo;
