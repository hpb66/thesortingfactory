import {quotes} from './quotes';
import React from 'react';
import ReactDOM from 'react-dom';

export default function TypeWriter() {
    const lengt = quotes.length;
    const random  = Math.floor(Math.random() * lengt);
    console.log(random);
    const string = quotes[random];
    const stringList = string.split("");
    // let blinks = '';
    let flag = false;
    function toggleCursor(){
        if(flag){
            let ele = <div class="main main-raised" onClick={toggleCursor}>
            <div class="quotearea" >
                {
                    stringList.map(function (name, index) {
                        return <span key={index} id={index}>{name}</span>
                        
                    })
                }
            </div>
            
        </div>
        ReactDOM.render(
            ele,
          document.getElementById('typewriter')
        )
        flag = false;
        }
        else{
            let ele = <div class="main main-raised" onClick={toggleCursor}>
            <div class="quotearea" >
                {
                    stringList.map(function (name, index) {
                        return <span key={index} id={index} class={index===4?"blink_me" : ""}>{name}</span>
                        
                    })
                }
            </div>
            
        </div>
        ReactDOM.render(
            ele,
          document.getElementById('typewriter')
        );
        flag = true;
        }

    }
    return (
        <div class="main main-raised" onClick={toggleCursor}>
            <div class="quotearea" >
                {
                    stringList.map(function (name, index) {
                        return <span key={index} id={index}>{name}</span>
                        
                    })
                }
            </div>
            
        </div>
        
    );
  }