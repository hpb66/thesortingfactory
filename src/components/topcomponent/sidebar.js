import { render } from '@testing-library/react';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import Slide from 'react-reveal/Slide';
import cancel from '../../static/cancel.svg';
export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      btnClicked: false,
      isDesktop: document.body.clientWidth < 1200 ? false : true
    }
    console.log(document.body.clientWidth)
    console.log(this.state.isDesktop);
  }
  btnClicked() {
    this.setState({
      btnClicked: !this.state.btnClicked

    })

  }
  render() {
    return (
      <div>
        {this.state.isDesktop ? <div>
          <div className="sidm" style={this.styles.bigSidebar}>
              <h2 style={{marginTop: '10%', marginLeft: '38%'}}>HRIDAY</h2>
               <div style={{fontSize: '100%', marginLeft: '20%',  marginTop: '70%'}}>
                <div style={{borderRight: '3px solid #eee', width: '77%', textAlign: 'right', paddingRight: '5%', marginTop: '7%'}}>About</div>
                <div style={{borderRight: '3px solid #666', width: '77%', textAlign: 'right', paddingRight: '5%', marginTop: '7%'}}>Projects</div>
                <div style={{borderRight: '3px solid #666', width: '77%', textAlign: 'right', paddingRight: '5%', marginTop: '7%'}}>Social Media</div>
                <div style={{borderRight: '3px solid #666', width: '77%', textAlign: 'right', paddingRight: '5%', marginTop: '7%'}}>Contact</div>
                <div style={{borderRight: '3px solid #666', width: '77%', textAlign: 'right', paddingRight: '5%', marginTop: '7%'}}>Resume</div>
              </div>

            </div>
          </div> : <div>
          <Slide right when={this.state.btnClicked}>
            <div className="sidm" style={this.state.btnClicked ? this.styles.desktopSidebar : this.styles.sidebaroff}>
              <FontAwesomeIcon style={{marginLeft: '83%', marginTop: '15%'}} className="fa-4x" icon={faTimes} onClick={this.btnClicked.bind(this)} />
              <div style={{fontSize: '200%', marginLeft: '20%'}}>
                <div style={{borderRight: '8px solid #eee', width: '90%', textAlign: 'right', paddingRight: '5%', marginTop: '60%'}}>About</div>
                <div style={{borderRight: '8px solid #666', width: '90%', textAlign: 'right', paddingRight: '5%', marginTop: '7%'}}>Projects</div>
                <div style={{borderRight: '8px solid #666', width: '90%', textAlign: 'right', paddingRight: '5%', marginTop: '7%'}}>Social Media</div>
                <div style={{borderRight: '8px solid #666', width: '90%', textAlign: 'right', paddingRight: '5%', marginTop: '7%'}}>Contact</div>
                <div style={{borderRight: '8px solid #666', width: '90%', textAlign: 'right', paddingRight: '5%', marginTop: '7%'}}>Resume</div>
              </div>

            </div>
          </Slide>
          <div className="sidm" style={this.styles.phoneSidebar}>
              <FontAwesomeIcon style={{marginLeft: '54%', marginTop: '30%'}} className="fa-3x" icon={faBars} onClick={this.btnClicked.bind(this)} />
      
              <div style={{fontSize: '200%', marginLeft: '20%'}}>
                <div style={{borderRight: '8px solid #eee', height: '3vh',  width: '69%', textAlign: 'right', paddingRight: '5%', marginTop: '174%'}}></div>
                <div style={{borderRight: '8px solid #666',height: '3vh', width: '69%', textAlign: 'right', paddingRight: '5%', marginTop: '16%'}}></div>
                <div style={{borderRight: '8px solid #666',height: '3vh', width: '69%', textAlign: 'right', paddingRight: '5%', marginTop: '16%'}}> </div>
                <div style={{borderRight: '8px solid #666',height: '3vh', width: '69%', textAlign: 'right', paddingRight: '5%', marginTop: '16%'}}></div>
                <div style={{borderRight: '8px solid #666',height: '3vh', width: '69%', textAlign: 'right', paddingRight: '5%', marginTop: '16%'}}></div>
              </div>
          </div>
        </div>}
      </div>

    );
  }
  styles = {
    phoneSidebar: {
      position: 'fixed',
      right: '1px',
      height: '100vh',
      width: '20vw',
      backgroundColor: '#201f24',
      color: '#fff',
    },
    desktopSidebar: {
      position: 'fixed',
      right: '1px',
      height: '100vh',
      width: '50vw',
      backgroundColor: 'black',
      color: '#fff',
      zIndex: 2,
    },
    bigSidebar: {
      position: 'fixed',
      right: '1px',
      height: '100vh',
      width: '16vw',
      backgroundColor: 'black',
      color: '#fff',
      zIndex: 2,
    },
    sidebaroff: {
      position: 'fixed',
      right: '1px',
      height: '100vh',
      width: '50vw',
      backgroundColor: '#201f24',
      color: '#fff',
      zIndex: -2,
    }
  }
}