import React from 'react';
import './App.css';
import Banner from './components/Banner';
import Exhibit from './components/Exhibit';

function App() {
  return (
    <div className="App">
      <Banner title="My Awesome Website" />
      
      <main className="app-main">
        <Exhibit heading="Welcome Section">
          <p>This is the first exhibit component. It wraps any child components you want to display!</p>
          <p>You can put any content here - text, images, forms, or other components.</p>
        </Exhibit>

        <Exhibit heading="Data Display">
          <div style={{ padding: '1rem' }}>
            <h4>Sample Data Point</h4>
            <p>This exhibit demonstrates how you can organize different pieces of content.</p>
            <ul>
              <li>Each exhibit has a heading</li>
              <li>It can contain any child elements</li>
              <li>Click the heading to toggle visibility</li>
            </ul>
          </div>
        </Exhibit>

        <Exhibit heading="Interactive Example">
          <div style={{ padding: '1rem' }}>
            <p>Here's another exhibit with different content.</p>
            <button 
              onClick={() => alert('You clicked a button inside an exhibit!')}
              style={{
                padding: '0.5rem 1rem',
                background: '#667eea',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Click Me!
            </button>
          </div>
        </Exhibit>
      </main>
    </div>
  );
}

export default App;