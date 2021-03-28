import React from 'react';
import Timer from '../static/timer.svg';
import ProjectOvidhan from '../static/ProjectOvidhan.svg';
import TypeWriter from './typewriter/typewriter';
import ButtonAppBar from './topcomponent/navbar';
import Paper from '@material-ui/core/Paper';
export default class HomeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.millisec = new Date(Date.now()) - new Date('7/1/2019');
        this.state = {
            isDesktop: document.body.clientWidth < 1200 ? false : true,
            day: Math.floor((this.millisec % (1000 * 60 * 60 * 24 * 30.5)) / (1000 * 60 * 60 * 24)),
            month: Math.floor((this.millisec % (1000 * 60 * 60 * 24 * 30.5 * 12)) / (1000 * 60 * 60 * 24 * 30.5)),
            year: Math.floor(this.millisec / (1000 * 60 * 60 * 24 * 30.5 * 12))
        }
    }
    render() {

        return (
            <div className="home-component" style={this.state.isDesktop ? this.styles.deskbody : this.styles.body}>
                {this.state.isDesktop ? <div style={{ gridArea: 'redline', height: '100%', borderRight: '1px solid #9f2f2f' }}></div> : null}

                <div className="data-about-me" style={this.state.isDesktop ? { marginBottom: '10%', gridArea: 'aboutme', marginTop: '7%' } : { marginBottom: '10%', gridArea: 'aboutme', marginTop: '13%' }}>
                    {this.state.isDesktop ? <div style={{ width: '1vw', height: '2vh', backgroundColor: 'black', borderRadius: '50%', marginLeft: '-10%', border: '1px solid #9f2f2f', marginTop: '-4%' }}></div>
                        : null}
                    <h1 style={this.state.isDesktop ? { fontSize: '430%', fontWeight: 'bold', color: '#302f33' } : { fontSize: '900%', fontWeight: 'bold', color: '#302f33' }}>about/></h1>
                    <h3 style={this.state.isDesktop ? { fontSize: '1.5vw' } : { fontSize: '5vw' }}><span style={this.state.isDesktop ? { fontStyle: 'italic', fontSize: '2vw', color: '#e5e5e5' } : { fontStyle: 'italic', fontSize: '6vw', color: '#e5e5e5' }}>hello</span>, I am</h3>
                    <h3 style={this.state.isDesktop ? { fontSize: '2.5vw', fontStyle: 'italic', color: '#9f2f2f' } : { fontSize: '7vw', fontStyle: 'italic', color: '#9f2f2f' }}>Hriday Pratim Bharali</h3>

                    <h3 style={this.state.isDesktop ? { fontSize: '1.5vw', fontStyle: 'italic' } : { fontSize: '5vw' }}>an Assam based Software Engineer.</h3>
                </div>
                <div className="timer" style={this.state.isDesktop ? this.styles.timer2 : this.styles.timer}>
                    {this.state.isDesktop ? null : <h1 style={this.state.isDesktop ? { fontSize: '430%', fontWeight: 'bold', color: '#302f33' } : { fontSize: '900%', fontWeight: 'bold', color: '#302f33' }}>exp.</h1>}
                    <img src={Timer} style={this.state.isDesktop ? { marginLeft: '-106%', marginTop: '23%'} : { width: '117%', marginLeft: '-20%' }} />
                </div>

                <div style={this.state.isDesktop ? { gridArea: 'timer', width: '50%', height: '50%', marginTop: '59%', marginLeft: '-69%' } : { gridArea: 'timer', width: '50%', height: '50%', marginTop: '50%', marginLeft: '1%' }}>
                    <h4 style={this.state.isDesktop ? { fontSize: '130%', textAlign: 'center' } : { fontSize: '200%', textAlign: 'center' }} >
                        {this.state.year} Year
                    </h4 >
                    <h4 style={this.state.isDesktop ? { fontSize: '130%', textAlign: 'center' } : { fontSize: '200%', textAlign: 'center' }}>
                        {this.state.month} Months
                    </h4>
                    <h4 style={this.state.isDesktop ? { fontSize: '130%', textAlign: 'center' } : { fontSize: '200%', textAlign: 'center' }}>
                        {this.state.day + 1} Days
                    </h4>
                </div>


                <div style={this.state.isDesktop ? { gridArea: 'subex', marginTop: '6%', width: '30vw' } : { gridArea: 'subex', marginTop: '18%', width: '30vw' }}>
                    {this.state.isDesktop ? <h1 style={this.state.isDesktop ? { fontSize: '430%', fontWeight: 'bold', color: '#302f33' } : { fontSize: '900%', fontWeight: 'bold', color: '#302f33' }}>exp.</h1> : null}

                    <h2 style={this.state.isDesktop ? { fontSize: '212%', fontStyle: 'Italic' } : { fontSize: '450%', fontStyle: 'Italic' }}>SUBEX LTD,</h2>
                    <h3 style={this.state.isDesktop ? { fontSize: '138%' } : { fontSize: '250%' }}>Bangalore, In</h3>
                    <h3 style={this.state.isDesktop ? { fontSize: '138%' } : { fontSize: '250%' }}>Sr. Software Engineer</h3>
                </div>
                <div style={this.state.isDesktop ? { gridArea: 'proj' } : { gridArea: 'proj', marginTop: '10%' }}>
                    {this.state.isDesktop ? <div style={{ width: '1vw', height: '2vh', backgroundColor: 'black', borderRadius: '50%', marginLeft: '-10%', border: '1px solid #9f2f2f', marginTop: '-4%' }}></div>
                        : null}
                    <h2 style={this.state.isDesktop ? { fontSize: '151%' } : { fontSize: '304%' }}>Let me show you few selected <span style={{ color: '#9f2f2f' }}>Projects</span></h2>
                </div>



                <div style={this.state.isDesktop?{ gridArea: 'proj-ovidhan', display: 'grid', gridTemplateAreas: "'projects projects' 'ovidhanimage ovidhantitle' 'ovidhanimage ovidhandetails' 'ovidhanimage ovidhanfeatures' 'ovidhanimage ovidhanlist'" }: { gridArea: 'proj-ovidhan' }}>
                    <h1 style={this.state.isDesktop ? { fontSize: '430%', fontWeight: 'bold', color: '#302f33', gridArea: 'projects'} : { fontSize: '900%', fontWeight: 'bold', color: '#302f33', marginTop: '11%' }}>projects</h1>
                    <h2 style={this.state.isDesktop ? { fontSize: '212%',color: '#9f2f2f',  fontStyle: 'Italic', gridArea: 'ovidhantitle', borderBottom: '1px solid #C4C4C4', width: '45%' } : { fontSize: '450%', fontStyle: 'italic', color: '#9f2f2f', marginTop: '11%', borderBottom: '1px solid #C4C4C4', width: '64%' }}>Ovidhan <span style={{ fontStyle: 'normal', color: '#fff', fontSize: '50%', marginLeft: '10%' }}>01</span></h2>
                    <img src={ProjectOvidhan} style={this.state.isDesktop?{width: '132%', gridArea:'ovidhanimage',marginLeft: '-57.5%'}:{ width: '103%' }} />
                    <div>
                        <h2 style={this.state.isDesktop?{fontSize: '1em', gridArea: 'ovidhandetails', marginTop: '11%'}:{ fontSize: '2.8em' }}>
                            The free Assamese Dictionary application explains the meanings of Assamese words! Definitions are based on
                            data collected from xobdo.org. Fast search, easy and functional user interface.
                    </h2>
                        <h1 style={this.state.isDesktop? { fontSize: '1em', fontStyle: 'italic', gridArea: 'ovidhanfeatures'}:{ fontSize: '4em', fontStyle: 'italic' }}>Features</h1>
                        <ul style={this.state.isDesktop? {fontSize: '1em', gridArea:'ovidhanlist'}:{ fontSize: '2em' }}>
                            <li className="lis">More than 35000 Assamese words.</li>

                            <li className="lis">Search using phonetics.</li>

                            <li className="lis">Both english and
                            assamese meanings.</li>

                            <li className="lis">Meanings displayed
                            based on their type.</li>

                            <li className="lis">A scrollable synonyms view. </li>

                            <li className="lis">Cant' find a meaning?
                            Check related word.</li>

                            <li className="lis">Get a random proverb on
                            your home screen every time
                            you open the app.</li>

                            <li className="lis">800+ Assamese proverbs.</li>
                        </ul>
                    </div>
                </div>

                <div style={{gridArea:'typewriter'}}>
                    <TypeWriter />
                </div>

            </div>
        )
    }

    styles = {
        body: {
            gridArea: 'tw',
            backgroundColor: '#201f24',
            // height: '90vh',
            width: '100%',
            color: '#fff',
            marginTop: '16%',
            display: 'grid',
            gridTemplateColumns: '8vw auto 8vw',
            gridTemplateRows: 'minmax(700px, max-content)',
            gridTemplateAreas: "'. aboutme .' ' . timer .' ' . subex .' ' . proj .' '. proj-ovidhan .' ' . typewriter .'"
        },
        deskbody: {
            gridArea: 'tw',
            backgroundColor: '#201f24',
            height: '90vh',
            width: '100%',
            color: '#fff',
            marginTop: '5%',
            display: 'grid',
            gridTemplateColumns: '5vw 5vw auto auto',
            gridGap: '4vw',
            gridTemplateRows: 'minmax(200px, max-content)',
            gridTemplateAreas: "'. redline aboutme .' ' . redline subex timer'  ' . redline proj .' ' . redline proj-ovidhan . ' '. redline typewriter typewriter'"

        },
        timer: {
            width: '50%',
            height: '50%',
            gridArea: 'timer'
        },
        timer2: {
            gridArea: 'timer'
        }
    }
}