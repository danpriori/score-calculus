import React from 'react';
import './App.css';
import MainContainer from './components/MainContainer';

function App() {

  // it can be changed, added, removed items
  let items = [
    { label: 'A', score: 50, threshold: 3, amountMore: 1},
    { label: 'B', score: 30, threshold: 2, amountMore: 1},
    { label: 'C', score: 20, threshold: null, amountMore: 0},
    { label: 'D', score: 15, threshold: null, amountMore: 0},
    { label: 'E', score: 10, threshold: null, amountMore: 0}
  ]

  return (
    <div className="App">
      <MainContainer items={items}/>
    </div>
  );
}

export default App;
