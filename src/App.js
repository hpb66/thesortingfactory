import React from 'react';
import './index.css';
import Drawer from './components/Drawer';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { useState } from "react";
import {globalCache} from './GlobalCache';
import AimTrainer from './components/aimtrainer/aim-trainer';
export default function App() {
    const [darkState, setDarkState] = useState(true);
    const palletType = darkState ? "dark" : "light";
    const darkTheme = createMuiTheme({
        palette: {
          type: palletType,

        },
        typography:{
            fontFamily: ['Poppins', 'sans-serif'].join(','),
        }
      });
      const handleThemeChange = () => {
        setDarkState(!darkState);
      };
      globalCache.registerCallback('theme', handleThemeChange);
    return (
        <Router>
            <Switch>
            <Route path="/aimtrainer" strict={true}>
                    <ThemeProvider theme={darkTheme}>
                        <AimTrainer />
                    </ThemeProvider>
                </Route>
                <Route path="/" strict={true}>
                    <ThemeProvider theme={darkTheme}>
                        <Drawer />
                        <Home />
                        
                    </ThemeProvider>
                </Route>
                
            </Switch>
        </Router>
    )
}
