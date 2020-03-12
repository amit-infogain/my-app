import React from 'react';
import './App.css';

function App() {

  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => console.log('my api response', json))

  return (
    <div className="App">
      <header className="App-header">
        Fetching Api
      </header>
    </div>
  );
}

export default App;
