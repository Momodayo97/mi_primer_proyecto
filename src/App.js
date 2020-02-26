import React, { useState } from 'react';

import Counter from './components/Counter'
import logo from './logo.svg';
import './App.css';


function App() {
  const [activateComponent, setActivateComponent] = useState(false)
  return(
    <div>
      <button onClick={() => setActivateComponent(!activateComponent)}>{activateComponent ? 'is Active' : 'is Inactive'}</button>
      <br/>
      {activateComponent && <Counter />}
    </div>
  )
}

export default App;
