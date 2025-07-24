import './App.css';

import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{ backgroundColor: '#20232a', padding: '20px', color: 'white' }}>
        <h1>⚡ Micro Frontend 2</h1>
        <p>This is the second micro frontend component</p>
        <div style={{ 
          backgroundColor: '#ff6b6b', 
          color: 'white', 
          padding: '10px', 
          borderRadius: '8px',
          margin: '20px 0'
        }}>
          <h3>Capabilities:</h3>
          <ul style={{ textAlign: 'left', listStyle: 'none', padding: 0 }}>
            <li> Webpack Module Federation</li>
            <li> Custom styling</li>
            <li> Hot reload enabled</li>
          </ul>
        </div>
        <button 
          style={{
            backgroundColor: '#ff6b6b',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
          onClick={() => alert('Greetings from Micro Frontend 2!')}
        >
          Interact with me!
        </button>
      </header>
    </div>
  );
}

export default App;
