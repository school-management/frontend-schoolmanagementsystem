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
import Router from './router/Router';
import Table from './components/table/Table';
import TableCom from './screens/Table';
import NewAdmission from './screens/student/admission/NewAdmission';


function App() {
  return (
    <Router />
    // <TableCom />
    // <NewAdmission />
  );
}
export default App;
