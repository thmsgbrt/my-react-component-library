import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MyComponent } from './component-lib';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <MyComponent color="salmon" text="My awesome react component library" />
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
