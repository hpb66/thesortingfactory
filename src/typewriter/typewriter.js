import {quotes} from './quotes';
import React from 'react';
import ReactDOM from 'react-dom';

class TypeWriter extends React.Component{
    constructor(props){
        super(props);
        this.lengt = quotes.length;
        const random  = Math.floor(Math.random() * this.lengt);
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.startClock = this.startClock.bind(this);
        this.words = 0;
        this.counter=1
        this.state = {flag:false, blinkIndex:0, stringList:quotes[random].split(""), wpm:0};
        
    }
    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }
    
    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }
    setCursor(e){
        this.setState(state => ({
            flag: true,
        }))
    }
    startClock(){
        setInterval(() => this.counter++, 1000);
    }
    handleKeyPress(e){
        e.preventDefault();
        if(this.state.blinkIndex===1){
            this.startClock();
        }
        if(e.key===" "){
            this.words++;
            this.setState(state=>({
                wpm: Math.floor((this.words*60)/this.counter) 
            }))
            console.log(this.state.wpm);
        }
        if(this.state.stringList[this.state.blinkIndex]===e.key){
            this.setState(state => ({
                blinkIndex: state.blinkIndex+1
            }))
        }
        if(this.state.blinkIndex>=this.state.stringList.length-1){
            
            const random  = Math.floor(Math.random() * this.lengt);
            this.counter=0;
            this.setState(state=>({
                    flag: true,
                    blinkIndex:0,
                    
                    stringList: quotes[random].split(""),

                
            }))
        }
        
    }
    setWrapperRef(node) {
        this.wrapperRef = node;
      }
    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.setState({
                flag: false,
                blinkIndex: 0
            })
        }
        
      }
    render(){
        
        let ele = '';
        let blinkIndex = this.state.blinkIndex;
        const style = {
            color: '#666'
        }
        if(!this.state.flag){
            ele = (
                this.state.stringList.map(function (name, index) {
                    if(name===" "){
                        return <span key={index} id={index}  style={style}>␣</span> 
                    }
                    else{
                        return <span key={index} id={index}  >{name}</span>
                    }
                    
  
                })
            );
        }
        else{
            ele = (
            
                this.state.stringList.map(function (name, index) {
                    if(name===" "){
                        return <span key={index} id={index} className={index===blinkIndex?"blink_me" : ""} style={style}>␣</span>
                    }
                    else{
                        return <span key={index} id={index} className={index===blinkIndex?"blink_me" : ""}>{name}</span>
                    }
                    
                   
                })
            );
        }
        return <div className="main main-raised" ref={this.setWrapperRef}  onClick={this.setCursor.bind(this)}  onKeyPress={this.handleKeyPress.bind(this)} tabIndex="0">
        <div className="quotearea" >{ele}</div>
        <div className="wpm">WPM: {this.state.wpm}</div>
        </div>
    }
}
ReactDOM.render(<TypeWriter/>,document.getElementById('typewriter'))