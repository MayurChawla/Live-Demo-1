import React from 'react';
import Navbar from './components/Navbar';
import ContainerList from './components/Container';
//import ContainerList2 from './components/Containerr';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <ContainerList />
        {/* <ContainerList2/> */}
      </header>
    </div>
  );
}

export default App;
