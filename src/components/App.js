import React from 'react';
import { Route } from 'react-router-dom';

import Users from '../components/Users';

const App = () => {
  return (
    <div className='container'>
      <Route path='/' component={Users} />
    </div>
  );
};

export default App;
