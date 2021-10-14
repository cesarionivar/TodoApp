import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from '../components/auth/Login';
import Todos from '../components/Todos/Todos';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const AppRouter = () => {
  const [user] = useState('false');
  const [checking, setChecking] = useState(true);

  setTimeout(() => {
    setChecking(false);
  }, 1000);

  if (checking) {
    return <h1>Espere...</h1>;
  }

  return (
    <div className='router'>
      <Router>
        <PublicRoute isAuthenticated={user} path='/login' component={Login} />
        <PrivateRoute isAuthenticated={user} path='/' component={Todos} />
      </Router>
    </div>
  );
};

export default AppRouter;
