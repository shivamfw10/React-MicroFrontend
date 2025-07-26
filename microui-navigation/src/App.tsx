// import './App.css';

// import React from 'react';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header" style={{ backgroundColor: '#282c34', padding: '20px', color: 'white' }}>
//         <h1>🚀 Micro Frontend 1</h1>
//         <p>This is the first micro frontend component</p>
//         <div style={{ 
//           backgroundColor: '#61dafb', 
//           color: '#282c34', 
//           padding: '10px', 
//           borderRadius: '8px',
//           margin: '20px 0'
//         }}>
//           <h3>Features:</h3>
//           <ul style={{ textAlign: 'left', listStyle: 'none', padding: 0 }}>
//             <li> Module Federation enabled</li>
//             <li> Independent deployment</li>
//             <li> React TypeScript</li>
//           </ul>
//         </div>
//         <button 
//           style={{
//             backgroundColor: '#61dafb',
//             color: '#282c34',
//             border: 'none',
//             padding: '10px 20px',
//             borderRadius: '5px',
//             cursor: 'pointer',
//             fontSize: '16px'
//           }}
//           onClick={() => alert('Hello from Micro Frontend 1!')}
//         >
//           Click Me!
//         </button>
//       </header>
//     </div>
//   );
// }

// export default App;
import './App.css'

import SideNav from './components/SideNav/SideNav';
import { useState } from 'react';

function App() {
  const [sideNavCollapsed, setSideNavCollapsed] = useState(false);
  const contentMarginLeft = sideNavCollapsed ? 70 : 320;

  return (
    <div style={{ display: 'flex' }}>
      <div className="app-header">
          <SideNav collapsed={sideNavCollapsed} onCollapsedChange={setSideNavCollapsed} />
      </div>
      <div 
        className="app-content" 
        style={{ 
          marginLeft: contentMarginLeft, 
          flex: 1, 
          padding: 32,
          transition: 'margin-left 0.3s'
        }}
      >
        {/* Main content goes here */}
        <p>Hello</p>
      </div>
    </div>
  );
}

export default App
