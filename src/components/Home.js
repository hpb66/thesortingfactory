import React, { useEffect, useRef, useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import { useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import ProjectOvidhan from '../static/ProjectOvidhan.svg';
import { Box } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import TypeWriter from './typewriter/typewriter';
import Grow from '@material-ui/core/Grow';
import VizSensor from 'react-visibility-sensor';
import Slide from '@material-ui/core/Slide';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import { globalCache } from '../GlobalCache';
import GitHubIcon from '@material-ui/icons/GitHub';
import Link from '@material-ui/core/Link';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import {  Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import * as emailjs from 'emailjs-com';
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    gridFLows: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.primary,
        border: 'none',
        background: 'none',
        boxShadow: 'none'
    },
    margin: {
        margin: theme.spacing(1),
      },
      withoutLabel: {
        marginTop: theme.spacing(3),
      },
      textField: {
        width: '100%',
      },
      rootForm: {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: '6%'
      },
}));


export default function SimpleContainer() {
    const projectRef = useRef(null);
    const aboutRef = useRef(null);
    const getintouchRef = useRef(null);
    const socialmediaRef = useRef(null);
    const theme = useTheme();
    const classes = useStyles();
    const millisec = new Date(Date.now()) - new Date('7/1/2019');
    const [state, setState] = useState({
        day: Math.floor((millisec % (1000 * 60 * 60 * 24 * 30.5)) / (1000 * 60 * 60 * 24)),
        month: Math.floor((millisec % (1000 * 60 * 60 * 24 * 30.5 * 12)) / (1000 * 60 * 60 * 24 * 30.5)),
        year: Math.floor(millisec / (1000 * 60 * 60 * 24 * 30.5 * 12)),
        visor1: true,
        visor2: true,
        visor3: true,
        visor4: true,
        visor5: false,
        visor6: false,
        visor7: false,
        visor8: false,
        visor9: false,
        visor10: false,
        visor11: false,
        visor12: false
    })
    const[submitMessage, setSubmitMessage] = useState();
    const[inputState, setInputState] = useState({
        name: "",
        email: "",
        description: ""
    })
    const handleProjects = () => {
        if(window.innerWidth > 600){
            window.scrollTo({top: projectRef.current.offsetTop, behavior: 'smooth'});
        }
        else{
            scroller.scrollTo("projects");
        }
    }
    const handleAbout = () => window.scrollTo({ top: aboutRef.current.offsetTop, behavior: 'smooth' });
    const handlegetintouch = () => {
        if(window.innerWidth > 600){
            window.scrollTo({top: getintouchRef.current.offsetTop, behavior: 'smooth'})
        }
        else{
            scroller.scrollTo("getintouch");
        }
    };
    const handlesocialmedia = () => {
        if(window.innerWidth > 600){
            window.scrollTo({top: socialmediaRef.current.offsetTop, behavior: 'smooth'})
        }
        else{
            scroller.scrollTo("socialmedia")
        }
    }
    const [open, setOpen] = React.useState(false);

  const handleClick = () => {
      if(inputState.name.trim() === "" || inputState.email.trim() === "" || inputState.description.trim() ===""){
          setSubmitMessage("Form elements cannot be blank");
          setOpen(true);
      }
      else if(!validateEmail(inputState.email)){
          setSubmitMessage("Invalid Email Id");
          setOpen(true);
      }
      else{
        const templateParams = {
            from_email: inputState.email,
            from_name: inputState.name,
            to_name: 'Hriday',
            message: inputState.description,
        }
        emailjs.send(
        "service_6p2p7em",
        'template_qg9yteu',
            templateParams,
        'user_tutSaBUpUU9wY7n0EjRG1'
        )   
        setSubmitMessage("Thank you for getting in touch with me.");
        setOpen(true);
        setInputState({
            email: "",
            name: "",
            description: ""
        })
      }
        
  };
  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const[loaded, setLoaded] = useState(false);
  useEffect(()=>{
    setLoaded(true)
  },[])
    globalCache.registerCallback('projects', handleProjects);
    globalCache.registerCallback('about', handleAbout);
    globalCache.registerCallback('getintouch', handlegetintouch);
    globalCache.registerCallback('socialmedia', handlesocialmedia);
    const mainContainer = (
        <React.Fragment >
            <CssBaseline />
            <Container maxWidth={false}>
                <div className={classes.toolbar} ref={aboutRef}/>
                <div className={classes.gridFLows} >
                    <Grid container spacing={3} >
                        <VizSensor
                            partialVisibility
                            onChange={(isVisible) => {
                                
                                if(isVisible){
                                    console.log("if About getting called")
                                    globalCache.insert('handleAboutBackground');
                                }
                                else if(loaded){
                                    console.log("else About getting called")
                                    globalCache.insert('handleProjectsBackground')

                                }
                                setState({ ...state, visor1: isVisible });
                            }}
                        >
                            <Slide
                                in={state.visor1}
                                direction="right"
                                mountOnEnter
                            >
                                <Grid item xs={12} style={{ borderLeft: '5px solid #9f2f2f', overflowAnchor: 'hidden' }} >
                                    <Paper className={classes.paper}>
                                        <Typography variant="h3" gutterBottom style={{ fontWeight: 'bold', color: theme.palette.text.secondary }}>
                                            hello /&gt;
                                    </Typography>
                                        <Typography variant="h6" gutterBottom style={{ fontStyle: 'italic' }}>
                                            Welcome to my portfolio.
                                    </Typography>
                                        <Typography variant="h5" gutterBottom style={theme.palette.type === 'dark' ? { fontStyle: 'italic', color: '#9F2F2F' } : { fontStyle: 'italic', color: '#9F2F2F' }}>
                                            <span style={theme.palette.type === 'dark' ? { fontStyle: 'italic', color: '#fff' } : { fontStyle: 'italic', color: '#000' }}>I'm</span> Hriday Pratim Bharali,
                                    </Typography>
                                        <Typography variant="h6" gutterBottom style={{  }}>
                                             I am a software developer with {state.year} years, {state.month} months and {state.day} days of experience in the industry. Apart from writing code most of my time is consumed with video games, reading novels,
                                            watching tutorials, reading documentation because the turorials were horrible and watching every good movie, tv series and anime out there.
                                            So, have a quick peek at some of my selected projects.

                                    </Typography>
                                    </Paper>
                                </Grid>
                            </Slide>
                        </VizSensor>

                        <VizSensor
                            partialVisibility
                            onChange={(isVisible) => {
                                setState({ ...state, visor3: isVisible });
                                
                            }}
                        >
                            <Slide
                                in={state.visor3}
                                direction="right"
                                mountOnEnter
                            >
                                <Grid item xs={12} sm={8}>
                                    <Paper className={classes.paper}>
                                        <Typography><Box component="span" style={{ fontSize: '6em' }}>{state.year} year</Box> <Box component="span" style={{ fontSize: '2em', color: '#9f2f2f' }}> {state.month} months</Box> <Box component="span">{state.day} days</Box></Typography>

                                    </Paper>
                                </Grid>
                            </Slide>
                        </VizSensor>
                        <VizSensor
                            partialVisibility
                            onChange={(isVisible) => {
                                setState({ ...state, visor2: isVisible });
                                
                            }}
                        >
                            <Slide
                                in={state.visor2}
                                direction="right"
                                mountOnEnter
                            >
                                <Grid item xs={12} sm={4} style={{ borderRight: '5px solid #9f2f2f' }}>
                                    <Paper className={classes.paper}>
                                        <Typography variant="h2" gutterBottom style={{ color: theme.palette.text.secondary }}>
                                            exp.
                                    </Typography>
                                        <Typography variant="h6" gutterBottom style={{ fontWeight: 'bold' }}>
                                            SUBEX LTD.
                                    </Typography>
                                        <Typography variant="h5" gutterBottom style={{}}>
                                            Bangalore, IN
                                    </Typography>
                                        <Typography variant="h5" gutterBottom style={{}}>
                                            Sr. Software Engineer
                                    </Typography>
                                    </Paper>
                                </Grid>
                            </Slide>
                        </VizSensor>
                        <VizSensor
                            partialVisibility
                            onChange={(isVisible) => {
                                setState({ ...state, visor4: isVisible });
                            }}
                            
                        >
                            <Grow
                                in={state.visor4}
                                style={{ transformOrigin: '0 10 0' }}
                                {...(state.visor4 ? { timeout: 500 } : {})}
                                
                                id="proj"
                            >
                                <Grid item xs={12} ref={projectRef} >
                                    <Paper className={classes.paper}>
                                        <Typography variant="h6" gutterBottom id="projects">
                                            {/* Let me show you few selected <Box component="span" style={{ color: '#9f2f2f', }}>projects.</Box> */}
                                        </Typography>
                                    </Paper>
                                </Grid>
                            </Grow>
                        </VizSensor>

                        <VizSensor
                            partialVisibility
                            onChange={(isVisible) => {
                                
                                setState({ ...state, visor5: isVisible });
                                if(isVisible){
                                    console.log("if Projects getting called")
                                    globalCache.insert('handleProjectsBackground')
                                }
                            }}
                        >
                            <Grow
                                in={state.visor5}
                                style={{ transformOrigin: '0 10 0' }}
                                {...(state.visor5 ? { timeout: 500 } : {})}
                            >
                                <Grid item xs={12} >
                                    <Paper className={classes.paper} >
                                        <Typography variant="h3"   style={{ color: theme.palette.text.secondary, fontWeight: 'bold'  }}  >projects.</Typography>
                                    </Paper>
                                </Grid>
                            </Grow>
                        </VizSensor>
                        <VizSensor
                            partialVisibility
                            onChange={(isVisible) => {
                                setState({ ...state, visor6: isVisible });
                            }}
                        >
                            <Grow
                                in={state.visor6}
                                style={{ transformOrigin: '0 10 0' }}
                                {...(state.visor6 ? { timeout: 500 } : {})}
                            >
                                <Grid item xs={12} sm={6}>
                                    <Paper className={classes.paper}>
                                        <CardMedia
                                            src={ProjectOvidhan}
                                            component="img"
                                            title="Project Ovidhan"
                                        />
                                    </Paper>
                                </Grid>
                            </Grow>
                        </VizSensor>
                        <VizSensor
                            partialVisibility
                            onChange={(isVisible) => {
                                setState({ ...state, visor7: isVisible });
                            }}
                        >
                            <Grow
                                in={state.visor7}
                                style={{ transformOrigin: '0 10 0' }}
                                {...(state.visor7 ? { timeout: 500 } : {})}
                            >
                                <Grid item xs={12} sm={6}>
                                    <Paper className={classes.paper}>
                                        <Typography variant="h5" gutterBottom style={{ fontStyle: 'italic', color: '#9F2F2F' }}>
                                            Ovidhan <Box component="span">01</Box>
                                        </Typography>
                                        <Divider />
                                        <Typography variant="h6" gutterBottom>
                                            The free Assamese Dictionary application explains the meanings of Assamese words!
                                            Fast search, easy and functional user interface.
                                </Typography>
                                        <Divider />
                                        <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold' }}>
                                            Features
                                </Typography>
                                        <div className={classes.demo}>
                                            <List>
                                                <ListItem>
                                                    <ListItemIcon>
                                                        <RadioButtonUncheckedIcon />
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        primary="More than 35000 Assamese words."
                                                    />
                                                </ListItem>
                                                <ListItem>
                                                    <ListItemIcon>
                                                        <RadioButtonUncheckedIcon />
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        primary="Search using phonetics."
                                                    />
                                                </ListItem>
                                                <ListItem>
                                                    <ListItemIcon>
                                                        <RadioButtonUncheckedIcon />
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        primary="Both english and
                                                assamese meanings."
                                                    />
                                                </ListItem>
                                                <ListItem>
                                                    <ListItemIcon>
                                                        <RadioButtonUncheckedIcon />
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        primary="Meanings displayed
                                                based on their type."
                                                    />
                                                </ListItem>
                                                <ListItem>
                                                    <ListItemIcon>
                                                        <RadioButtonUncheckedIcon />
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        primary="A scrollable synonyms view. "
                                                    />
                                                </ListItem>
                                                <ListItem>
                                                    <ListItemIcon>
                                                        <RadioButtonUncheckedIcon />
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        primary="Cant' find a meaning?
                                                Check related word."
                                                    />
                                                </ListItem>
                                                <ListItem>
                                                    <ListItemIcon>
                                                        <RadioButtonUncheckedIcon />
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        primary="Get a random proverb on
                                                your home screen every time
                                                you open the app."
                                                    />
                                                </ListItem>
                                                <ListItem>
                                                    <ListItemIcon>
                                                        <RadioButtonUncheckedIcon />
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        primary="800+ Assamese proverbs."
                                                    />
                                                </ListItem>
                                            </List>
                                        </div>
                                    </Paper>
                                </Grid>
                            </Grow>
                        </VizSensor>
                        <VizSensor
                            partialVisibility
                            onChange={(isVisible) => {
                                setState({ ...state, visor8: isVisible });
                            }}
                        >
                            <Grow
                                in={state.visor8}
                                style={{ transformOrigin: '0 10 0' }}
                                {...(state.visor8 ? { timeout: 500 } : {})}
                            >
                                <Grid item xs={12}>
                                    <Paper className={classes.paper}>
                                        <Typography variant="h5" gutterBottom style={{ fontStyle: 'italic', color: '#9F2F2F' }}>
                                            Type Off <Box component="span">02</Box>
                                        </Typography>
                                        <Divider />
                                        <Typography variant="h6" gutterBottom>
                                            Check your typing skills, start typing using your keyboard. Click on the box to start.
                                </Typography>
                                    </Paper>
                                </Grid>
                            </Grow>
                        </VizSensor>
                        <VizSensor
                            partialVisibility
                            onChange={(isVisible) => {
                                setState({ ...state, visor9: isVisible });
                            }}
                        >
                            <Grow
                                in={state.visor9}
                                style={{ transformOrigin: '0 10 0' }}
                                {...(state.visor9 ? { timeout: 500 } : {})}
                            >
                                <Grid item xs={12}>
                                    <Paper className={classes.paper}>
                                        <TypeWriter />
                                    </Paper>
                                </Grid>
                            </Grow>
                        </VizSensor>
                        <VizSensor
                            partialVisibility
                            onChange={(isVisible) => {
                                setState({ ...state, visor10: isVisible });
                            }}
                        >
                            <Grow
                                id="getintouch"
                                in={state.visor10}
                                style={{ transformOrigin: '0 10 0' }}
                                {...(state.visor10 ? { timeout: 500 } : {})}
                            >
                                <Grid item xs={12} ref={getintouchRef}>
                                    <Paper className={classes.paper}>
                                        <Typography variant="h5" gutterBottom style={{ fontStyle: 'italic', color: '#9F2F2F' }}>
                                            Aim Trainer <Box component="span">03</Box>
                                        </Typography>
                                        <Divider />
                                        <Typography variant="h6" gutterBottom>
                                            If you love playing games like CS GO or Valorant or even COD you can try out this simple aimtrainer. 
                                            Test your skills by getting a high score  in 30 seconds. This is a great way to practice your aim and flicks.
                                            Happy gaming. 
                                            
                                </Typography >
                                        <Typography variant="h6" gutterBottom style={{ fontStyle: 'italic', color: '#9F2F2F' }} >
                                            <Link href="/aimtrainer" style={{ fontStyle: 'italic', color: '#9F2F2F'  }}>
                                            Take me there -&gt;
                                            </Link>
                                        </Typography>
                                    </Paper>
                                </Grid>
                            </Grow>
                        </VizSensor>
                        <VizSensor
                            partialVisibility
                            onChange={(isVisible) => {
                                
                                setState({ ...state, visor11: isVisible });
                                if(isVisible){
                                    console.log("if Contact getting called")
                                    globalCache.insert('handleContactBackground')
                                }
                                else if(loaded){
                                    console.log("else Contact getting called")
                                    globalCache.insert('handleProjectsBackground')
                                }
                            }}
                        >
                            <Grow
                                in={state.visor11}
                                style={{ transformOrigin: '0 10 0' }}
                                {...(state.visor11 ? { timeout: 500 } : {})}
                            >
                                <Grid item xs={12} style={{ }}>
                                    <Paper className={classes.paper}>
                                    <Typography variant="h3" style={{ color: theme.palette.text.secondary, fontWeight: 'bold' }} id="getintouch">get in touch</Typography>
                                        <Divider />
                                        <div className={classes.rootForm}>
                                            <div>
                                                <TextField
                                                id="standard-start-adornment1"
                                                value={inputState.name}
                                                className={clsx(classes.margin, classes.textField)}
                                                onChange={(text)=>setInputState({...inputState, name: text.target.value})}
                                                InputProps={{
                                                    startAdornment: <InputAdornment position="start">Name:</InputAdornment>,
                                                }}
                                                />
                                                <TextField
                                                id="standard-start-adornment2"
                                                value={inputState.email}
                                                className={clsx(classes.margin, classes.textField)}
                                                onChange={(text)=>setInputState({...inputState, email: text.target.value})}
                                                style={{marginTop: '3%'}}
                                                InputProps={{
                                                    startAdornment: <InputAdornment position="start">Email:</InputAdornment>,
                                                }}
                                                />
                                                <TextField
                                                id="standard-start-adornment3"
                                                value={inputState.description}
                                                style={{marginTop: '7%'}}
                                                className={clsx(classes.margin, classes.textField)}
                                                onChange={(text)=>setInputState({...inputState, description: text.target.value})}
                                                InputProps={{
                                                    startAdornment: <InputAdornment position="start">Message:</InputAdornment>,
                                                }}
                                                />
                                                <Button onClick={handleClick} variant="contained" color="secondary" style={{  marginTop: '3%', width: '20%'}}> 
                                                    Submit
                                                </Button>
                                            </div>
                                            
                                            </div>
                                    </Paper>
                                </Grid>
                            </Grow>
                        </VizSensor>
                        <VizSensor
                            onChange={(isVisible) => {
                                setState({ ...state, visor12: isVisible });
                                if(isVisible){
                                    console.log("if Social getting called")
                                    globalCache.insert('handleSocialBackground')
                                }
                                else if(loaded){
                                    console.log("else Social getting called")
                                    globalCache.insert('handleContactBackground')
                                }
                            }}
                        >
                            <Grow
                                id="socialmedia"
                                in={state.visor12}
                                style={{ transformOrigin: '0 10 0' }}
                                {...(state.visor12 ? { timeout: 500 } : {})}
                            >
                                <Grid item xs={12} ref={socialmediaRef} style={{ borderLeft: '5px solid #9f2f2f' }}>
                                    <Paper className={classes.paper}>
                                    <Typography variant="h3" style={{ color: theme.palette.text.secondary, fontWeight: 'bold' }} id="socialmedia">social media</Typography>
                                    <Divider/>
                                    <div style={{marginTop: '3%', marginBottom: '2%'}}>
                                        <Link href="https://www.linkedin.com/in/hridaypratim/" color="inherit" target="_blank"><LinkedInIcon style={{width: '5vw', height: '5vh'}}/></Link>
                                        
                                        <Link href="https://www.github.com/hpb66" color="inherit" target="_blank"><GitHubIcon style={{width: '5vw', height: '5vh', marginLeft: '2%'}}/></Link>
                                        <Link href="https://www.instagram.com/thesortinggame/" color="inherit" target="_blank"><InstagramIcon style={{width: '5vw', height: '5vh', marginLeft: '2%'}}/></Link>
                                    </div>
                                    <Typography variant="h6" gutterBottom>
                                            Or reach me on
                                </Typography>
                                <Typography variant="h7" gutterBottom style={{fontWeight: 'lighter'}}>
                                            thesortingfactory@gmail.com
                                </Typography>
                                    </Paper>
                                </Grid>
                            </Grow>
                        </VizSensor>

                    </Grid>
                </div>
                <div>
                    <Snackbar
                        anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                        }}
                        open={open}
                        autoHideDuration={6000}
                        onClose={handleClose}
                        message={submitMessage}
                        action={
                        <React.Fragment>
                            {/* <Button color="secondary" size="small" onClick={handleClose}>
                            UNDO
                            </Button> */}
                            <IconButton size="small" aria-label="close" color="secondary" onClick={handleClose}>
                            <CloseIcon fontSize="small" />
                            </IconButton>
                        </React.Fragment>
                        }
                    />
                    </div>
            </Container>
        </React.Fragment>
    )
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth={false}>
                <Hidden mdUp implementation="css">
                    {mainContainer}
                </Hidden>
                <Hidden mdDown implementation="css">
                    <div style={{ width: `calc(100% - ${drawerWidth}px)` }}>
                        {mainContainer}
                    </div>
                </Hidden>

            </Container>
        </React.Fragment>

    );
}