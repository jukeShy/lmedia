import React from 'react';
import { Form } from './components';

import './App.scss';

const App = () => {
  return (
    <main className='app-main'>
      <div className='form-wrapper'>
        <Form title='Авторизация' />
      </div>
    </main>
  );
};

export { App };
