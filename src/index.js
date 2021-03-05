import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ButtonAppBar from './components/topcomponent/navbar';
import TopComponent from './components/topcomponent/topcomponent';
import TypeWriter from './components/typewriter/typewriter';
import AimTrainer from './components/aimtrainer/aim-trainer';
import AimtrainerWrapper from './components/aimtrainer/aim-trainer-wrapper'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';



const routing = (
  <Router>
      <Route path="/" exact component={ButtonAppBar}/>
      <Route path="/" exact component={TopComponent}/>
      <Route path="/" exact component={TypeWriter}/>
      <Route path="/" exact component={AimtrainerWrapper}/>
      <Route path="/aimtrainer" component={AimTrainer}/>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
