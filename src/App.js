import React from 'react';
import './App.css';
import PrimaryButton from './components/button/PrimaryButton';
import LargeButton from './components/button/LargeButton';



function App() {
  return (
    <div className="App">
      <PrimaryButton primary>Submit</PrimaryButton>
      <PrimaryButton secondary>Clear</PrimaryButton>
      <br></br>
      <LargeButton primary>Submit</LargeButton>
      <LargeButton secondary>Clear</LargeButton>
    </div>
  );
}

export default App;
