import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import home1 from './components/home1.js';
import Page1 from './components/page1.js' ;
import Dashboard from './components/dashboard.js' ;
import chart from './components/chart.js' ;
import PDFsite from './components/pdf.js' ;
import Marketsite from './components/market.js' ;

class App extends Component {
  render() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={home1}></Route>
      <Route path="/page1" component={Page1}></Route>
      <Route path="/dashboard" component={Dashboard}></Route>
      <Route path="/chart" component={chart}></Route>
      <Route path="/pdf" component={PDFsite}></Route>
      <Route path="/market" component={Marketsite}></Route>
    </Switch>
    </BrowserRouter>
  );
}
}

export default App;
