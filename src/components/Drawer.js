import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { globalCache } from '../GlobalCache';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import '../title.scss';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('md')]: {

            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginRight: drawerWidth,
        },
    },
    menuButton: {
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: theme.palette.type === 'dark' ? "#000" : "#fff",
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

function ResponsiveDrawer(props) {
    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [state, setState] = React.useState({
        checkedA: true,
    });
    const [backgroundState, setbackgroundState] = React.useState({
        about: true,
        projects: false,
        contact: false, 
        social: false
    });
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
        globalCache.insert('theme');
        globalCache.insert('typewriterTheme');
    
    };
    const handleAboutClick = (ev) => {
        if(mobileOpen){
            setMobileOpen(false)
        }
        globalCache.insert('about');
    }
    const handleProjClick = (ev) => {
        if(mobileOpen){
            setMobileOpen(false)
        }
        console.log("clicked proj")
        globalCache.insert('projects');
    }
    const handlegetintouch = (ev) => {
        if(mobileOpen){
            setMobileOpen(false)
        }
        globalCache.insert('getintouch');
    }
    const handleSocialMedia = (ev) => {
        if(mobileOpen){
            setMobileOpen(false)
        }
        globalCache.insert('socialmedia');
    }
    const handleAboutBackground = () => {
        setbackgroundState({
            about: true,
            projects: false,
            contact: false, 
            social: false
        })
    }
    globalCache.registerCallback('handleAboutBackground', handleAboutBackground);
    const handleProjectsBackground = () => {
        setbackgroundState({
            about: false,
            projects: true,
            contact: false, 
            social: false
        })
    }
    globalCache.registerCallback('handleProjectsBackground', handleProjectsBackground);
    const handleContactBackground = () => {
        setbackgroundState({
            about: false,
            projects: false,
            contact: true, 
            social: false
        })
    }
    globalCache.registerCallback('handleContactBackground', handleContactBackground);
    const handleSocialBackground = () => {
        setbackgroundState({
            about: false,
            projects: false,
            contact: false, 
            social: true
        })
    }
    globalCache.registerCallback('handleSocialBackground', handleSocialBackground);
    const[title,setTitle] = React.useState("");
    
    const[glitch, setGlitch] = React.useState(true);
    const drawer = (
        <div>
            <div className={classes.toolbar} />
            <Divider />
            <List>
                <ListItem button key="About" button style={backgroundState.about?theme.palette.type === 'dark'?{backgroundColor: '#333'}:{backgroundColor: "#eee"}:{}} onClick={handleAboutClick}>
                    <ListItemIcon><PermIdentityIcon /></ListItemIcon>
                    <ListItemText primary="About" />
                </ListItem>
                <ListItem button style={backgroundState.projects?theme.palette.type === 'dark'?{backgroundColor: '#333'}:{backgroundColor: "#eee"}:{}} key="Projects" onClick={handleProjClick}>
                    <ListItemIcon><AccountTreeIcon /></ListItemIcon>
                    <ListItemText primary="Projects" />
                    
                </ListItem>
                <ListItem button key="Contact" button style={backgroundState.contact?theme.palette.type === 'dark'?{backgroundColor: '#333'}:{backgroundColor: "#eee"}:{}} onClick={handlegetintouch}>
                    <ListItemIcon><PermContactCalendarIcon /></ListItemIcon>
                    <ListItemText primary="Contact" />
                </ListItem>
                <ListItem button key="Social Media" button style={backgroundState.social?theme.palette.type === 'dark'?{backgroundColor: '#333'}:{backgroundColor: "#eee"}:{}} onClick={handleSocialMedia}>
                    <ListItemIcon><LinkedInIcon /></ListItemIcon>
                    <ListItemText primary="Social Media" />
                </ListItem>
                <ListItem button key="Resume" style={{  }}>
                    <ListItemIcon><MenuBookIcon /></ListItemIcon>
                    <ListItemText primary="Resume" />
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem>
                    <FormGroup row>
                        <FormControlLabel
                            control={<Switch checked={state.checkedA} onChange={handleChange} name="checkedA" />}
                            label={state.checkedA ? "Dark Theme" : "Light Theme"}
                        />
                    </FormGroup>

                </ListItem>
                
            </List>

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar} style={theme.palette.type === 'dark' ? { backgroundColor: '#303030', color: '#fff', boxShadow: 'none', } : { background: '#fafafa', color: '#000',boxShadow: 'none' , }}>
                <Toolbar>
                    {/* <Typography variant="h5" onClick={()=>setGlitch(!glitch)} style={{ flexGrow: 1, fontFamily: "'Homemade Apple', cursive" }}>
                        Introducing
                </Typography> */}
                    <div class="headercontainer" >
                        <div class="glitch" data-text="HRIDAY">HRIDAY</div>
                        <div class="glow">CYBERCOUNTESS</div>
                        <p class="subtitle">Engineer﹒Gamer</p>
                        </div>
                        <div class="scanlines">

                    </div>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="end"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>

                </Toolbar>
            </AppBar>

            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden mdUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={'right'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden mdDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        anchor={'right'}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
        </div>
    );
}

ResponsiveDrawer.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default ResponsiveDrawer;