import React from 'react';
import Navbar from './components/Navbar';
import ContainerList from './components/Container';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <ContainerList />
      </header>
    </div>
  );
}

export default App;
