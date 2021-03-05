import React from 'react';
export default class AimTrainer extends React.Component{
    constructor(props){
        super(props);
        this.contexts = React.createRef();
        this.xVal = 0;
        this.yVal = 0;
        this.count = 30;
        this.score = 0;
        this.startFlag = false;
        this.state= {sc: this.score, count: this.count, str: 'Start'};
        this.handler = false;
        this.setCanv = false;
    }
    componentDidMount() {
        document.body.style.backgroundColor = "rgb(245, 247, 138)";
        this.draw();
    }
    
    draw(){
        const canvas = this.contexts.current;
        canvas.width = document.body.clientWidth * 2;
        canvas.height =document.documentElement.clientHeight * 2;
        canvas.style.width =  `${document.body.clientWidth}px`;
        canvas.style.height = `${document.body.clientHeight-100}px`;
        this.ctx = canvas.getContext('2d');
        
    }
    startGame(){
        let handle = setInterval(()=>{
            this.handler = true;
            let x = Math.floor((Math.random() * document.body.clientWidth*2) + 1);
            let y = Math.floor((Math.random() * document.body.clientHeight*2) + 1);
            this.xVal = x;
            this.yVal = y;
            this.ctx.clearRect(0,0,10000,10000);
            this.ctx.beginPath();
            this.ctx.arc(x, y, 14, 0, 2 * Math.PI);
            this.ctx.fill();
            this.count--;
            this.setState({
                count: this.count
            })
            if(this.count===0 || !this.startFlag){
                this.ctx.clearRect(0,0,10000,10000);
                this.score = 0;
                this.count = 30;
                this.startFlag = false;
                this.setState({
                    count: this.count,
                    str: 'Start'
                })
                clearInterval(handle);
                
            }
            
            console.log(this.count);
            
        }, 1000);
    }
    handleCanvasClick(e){
        this.xVal = Math.floor(this.xVal/2);
        this.yVal = Math.floor(this.yVal/2);
        console.log("First " + e.pageX + " " + this.xVal);
        console.log("Second " + e.pageY + " " + this.yVal);
        
        if((e.pageX <= this.xVal+70 && e.pageX >= this.xVal-70)&&(e.pageY<=this.yVal+70 && e.pageY>=this.yVal-70) && this.handler){
            
            this.score++;
            this.setState({
                sc: this.score
            })
        }
        this.handler = false;
    }
    handleStart(e){
        if(!this.startFlag){
            this.startFlag = true;
            this.setState({
                str: 'Reset'
            })
            this.startGame();
        }
        else{
            this.startFlag = false;
            this.count=30;
            this.score=0;
            this.setState({
                str: 'Start',
                score: 0,
                count: 30
            })
            
        }
        
    }
    render(){
        return <div id="aimtrainer">
                    <div className="aim aim-trainer" >
                        <div className="canva" >
                            <canvas ref={this.contexts} onClick={this.handleCanvasClick.bind(this)}/>   
                        </div>
                        <div className="aimt-timer">
                            {this.state.count}
                        </div>
                        <div className="aimt-score">Score:
                            {" "+this.state.sc}
                        </div>
                        <div className="aimt-start btn btn-secondary" onClick={this.handleStart.bind(this)}>
                            {this.state.str}
                        </div>
                    
                    </div>
                {/* <div class="score">Score: {this.score}</div> */}
                </div>
    }
}