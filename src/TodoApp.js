import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import AppRouter from './routers/AppRouter';

const TodoApp = () => {
  return (
    <div className='app'>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </div>
  );
};

export default TodoApp;
