import React from 'react';
import './App.css';
import PrimaryButton from './components/button/PrimaryButton';
import LargeButton from './components/button/LargeButton';



function App() {
  return (
    <div className="App">
      <h3>Buttons</h3>
      <PrimaryButton primary>Submit</PrimaryButton>
      <PrimaryButton secondary>Clear</PrimaryButton>
      <br></br>
      <LargeButton primary>Submit</LargeButton>
      <LargeButton secondary>Clear</LargeButton>
      <br></br>
      <PrimaryButton primary>Clear</PrimaryButton>
    </div>
  );
}

export default App;
