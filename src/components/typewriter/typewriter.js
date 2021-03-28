import { quotes } from './quotes';
import React from 'react';
import { globalCache } from '../../GlobalCache';
export default class TypeWriter extends React.Component {
    constructor(props) {
        super(props);
        this.lengt = quotes.length;
        const random = Math.floor(Math.random() * this.lengt);
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.startClock = this.startClock.bind(this);
        this.words = 0;
        this.clock = false;
        this.counter = 1;
        this.state = { flag: false, blinkIndex: 0, theme: 'light', stringList: quotes[random].split(""), wpm: 0, colorList: new Array(quotes[random].length).fill(false) };


    }
    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
        globalCache.registerCallback("typewriterTheme", this.changeTheme.bind(this));
    }
    changeTheme() {
        if (this.state.theme === 'dark') {
            this.setState({
                theme: 'light'
            })
        }
        else {
            this.setState({
                theme: 'dark'
            })
        }
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }
    setCursor(e) {
        this.setState(state => ({
            flag: true,
        }))
    }
    startClock() {
        this.clock = true;
        setInterval(() => this.counter++, 1000);
    }
    handleKeyPress(e) {
        e.preventDefault();
        if (this.state.blinkIndex === 1 && !this.clock) {
            this.startClock();
        }
        if (e.key === " ") {
            this.words++;
            this.setState(state => ({
                wpm: Math.floor((this.words * 60) / this.counter)
            }))
        }
        if (this.state.stringList[this.state.blinkIndex] === e.key) {
            this.setState(state => ({
                blinkIndex: state.blinkIndex + 1
            }))
        }
        else {
            let tempList = this.state.colorList;
            tempList[this.state.blinkIndex] = true;
            this.setState(state => ({
                colorList: tempList
            }))
        }
        if (this.state.blinkIndex >= this.state.stringList.length - 1) {
            const random = Math.floor(Math.random() * this.lengt);
            this.counter = 1;
            this.words = 0;
            let colorListNew = new Array(quotes[random].length).fill(false);
            this.setState(state => ({
                flag: true,
                blinkIndex: 0,
                stringList: quotes[random].split(""),
                colorList: colorListNew
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
    render() {

        let ele = '';
        let blinkIndex = this.state.blinkIndex;

        if (!this.state.flag) {
            ele = (
                this.state.stringList.map((name, index) => {
                    if (name === " ") {
                        return <span key={index} id={index} className={this.state.colorList[index] ? "color1" : "color3"}>␣</span>
                    }
                    else {
                        return <span key={index} id={index} className={this.state.colorList[index] ? "color1" : "color2"}>{name}</span>
                    }


                })
            );
        }
        else {
            ele = (

                this.state.stringList.map((name, index) => {
                    if (name === " ") {
                        return <span key={index} id={index} className={index === blinkIndex && this.state.colorList[index] ? this.state.theme === 'light' ? "blink_me2 color1" : "blink_me color1" : this.state.colorList[index] ? "color1" : index === blinkIndex ? this.state.theme === 'light' ? "blink_me2 color4" : "blink_me color4" : "color3"}>␣</span>
                    }
                    else {
                        return <span key={index} id={index} className={index === blinkIndex && this.state.colorList[index] ? this.state.theme === 'light' ? "blink_me2 color1" : "blink_me color1" : this.state.colorList[index] ? "color1" : index === blinkIndex ? this.state.theme === 'light' ? "blink_me2 color4" : "blink_me color4" : "color2"} >{name}</span>
                    }


                })
            );
        }
        return <div id="typewriter">
            <div className="main main-raised" ref={this.setWrapperRef} onClick={this.setCursor.bind(this)} onKeyPress={this.handleKeyPress.bind(this)} tabIndex="0">
                <div className="quotearea" >{ele}</div>
                <div className="wpm">Words Per Minute: {this.state.wpm}</div>
            </div>
        </div>
    }
}