import React from 'react';
import './App.css';
import Buttons from './screens/Buttons';
import Typography from './screens/Typography';
import Inputs from './screens/Inputs';
import SampleForm from './screens/SampleForm';
import Breadcrumbs from './screens/Breadcrumbs';
import Cards from './screens/Cards';
import Layout from './layout/Layout';
import GlobalStyle from './globalstyle/GlobalStyle';
import Divider from './screens/Divider';
import LargeDivider from './components/divider/LargeDivider';
import TinyDivider from './components/divider/TinyDivider';
import MiddleDivider from './components/divider/MiddleDivider';
import TinyBottom from './components/divider/TinyBottom';
import MiddleBottom from './components/divider/MiddleBottom';
import LargeBottom from './components/divider/LargeBottom';


function App() {
  return (
<div>
    <TinyDivider style={{marginTop: "3em", marginLeft: "4em"}}/>
    <MiddleDivider style={{marginTop: "5em", marginLeft: "4em"}} />
     <LargeDivider style={{marginTop: "5em", marginLeft: "4em"}}/>
<TinyBottom style={{marginTop: "3em", marginLeft: "3em"}} />
   <MiddleBottom style={{marginTop: "5em", marginLeft: "3em"}} />
   <LargeBottom style={{marginTop: "5em", marginLeft: "3em"}} />
       </div>
  );
}

export default App;
