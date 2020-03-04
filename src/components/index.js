import React from 'react';
import ColorPicker from './colorPicker';
import ColorViewer from './colorViewer';
import '../App.css';

function App() {
  return (
    <div className="App">
        <ColorPicker />
        <ColorViewer />
    </div>
  );
}

export default App;