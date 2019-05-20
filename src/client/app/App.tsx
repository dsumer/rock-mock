import React, { useState } from 'react';

import './App.less';

const App = () => {
  const [message, setMessage] = useState('it\'s the solid rock for providing a mock.');

  return (
    <div className='app'>
      <b>{message}</b>
      <br/>
      <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
    </div>
  );
};

export default App;
