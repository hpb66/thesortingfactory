import React from 'react';


export default class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isDesktop: document.body.clientWidth < 1200 ? false : true,
    }
  }
  render(){
    
    return (
      <div className="header" style={this.styles.header}>
        <h2 style={this.state.isDesktop? this.styles.headdesk:this.styles.head}>HRIDAY</h2>
      </div>
      
    );
  }
  styles = {
    header: {
      position: 'fixed',
      gridArea : 'nav',
      backgroundColor: '#201f24',
      color: '#fff',
      height: '10vh',
      width: '100%'
    },
    head: {
      fontSize: '400%',
      marginTop: '5%',
      marginLeft: '9%',
      fontFamily: "'Courier Prime', monospace"
    },
    headdesk: {
      display: 'none'
    }
  }
  
}