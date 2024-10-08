import React from 'react'
import Introduction from './components/introduction';
import Projects from './components/Projects';
import './App.css'

function App() {
  return (
      <div className="App">
          <Introduction />
          <Projects />
      </div>
  );
}

export default App