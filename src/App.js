import React from 'react';
import './App.css';
// import PrimaryButton from './components/button/PrimaryButton';
// import LargeButton from './components/button/LargeButton';
import Heading1 from './components/typography/Heading1';
import Heading2 from './components/typography/Heading2';
import Heading3 from './components/typography/Heading3';
import Heading4 from './components/typography/Heading4';
import Heading5 from './components/typography/Heading5';
import Heading6 from './components/typography/heading6';




function App() {
  return (
    <div className="App">
      <h1>Typography</h1>
      <br></br>
        <Heading1>Heading1</Heading1>
        <Heading2>Heading2</Heading2>
        <Heading3>Heading3</Heading3>
        <Heading4>Heading4</Heading4>
        <Heading5>Heading5</Heading5>
        <Heading6>Heading6</Heading6>  
        <p>What is a paragraph?
A paragraph is a series of related sentences 
developing a central idea, called the topic. 
Try to think about paragraphs in terms of 
thematic unity: a paragraph is a sentence or a 
group of sentences that supports one central, 
unified idea. Paragraphs add one idea at a time 
to your broader argument.</p>   
    </div>
  );
}

export default App;
