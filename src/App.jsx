import React from 'react'
import Introduction from './components/introduction';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.css'

function App() {
    return (
        <div className="App">
            <Introduction />
            <Projects />
            <Footer />
        </div>
    );
}

export default App