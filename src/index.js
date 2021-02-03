import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ButtonAppBar from './navbar';
import TypeWriter from './typewriter/typewriter';
import TopComponent from './topcomponent';
import Footer from './footer';

ReactDOM.render(
  <React.StrictMode>
    <ButtonAppBar/>
   </React.StrictMode>,
  
  document.getElementById('root')
);
ReactDOM.render(
  <React.StrictMode>
    <TopComponent/>
   </React.StrictMode>,
  
  document.getElementById('topcomponent')
);


ReactDOM.render(
  <React.StrictMode>
    <Footer/>
   </React.StrictMode>,
  document.getElementById('footer')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
