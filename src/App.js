import React from 'react';
import './App.css';
import PrimaryButton from './components/button/PrimaryButton';
import LargeButton from './components/button/LargeButton';
import PrimaryButtonWithIcon from './components/button/PrimaryButtonWithIcon';




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
      <PrimaryButtonWithIcon />
    </div>
  );
}

export default App;
