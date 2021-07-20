import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Contact from './ContactComponent';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Projects from './ProjectsComponent';
import Footer from './FooterComponent';

import StarfieldAnimation from 'react-starfield-animation';


import { createMuiTheme, ThemeProvider, CssBaseline } from '@material-ui/core';
// import createMuiTheme from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#000000',
        },
        secondary: {
            main: '#BCA88E',
        },
        warning: {
            main: '#fff',
        },
        type: 'dark'
    },
    typography: {
        fontFamily: 'Garamond',
    },
    spacing: 2,
    overrides: {
        MuiInputLabel: {
            root: {
                color: "black",
                // border: "1px solid red"
            },
        },
        MuiOutlinedInput: {
            root: {
               
                backgroundColor: "#BCA88E",
                opacity: 0.5,
            }
        },
        
    },
  

})

function Main() {



    return (
        <>
            <StarfieldAnimation
                id='starfield'
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',

                }}
            />
            <CssBaseline>
                <ThemeProvider theme={theme}>
                    <Header />
                    <Switch>
                        <Route path='/home' component={Home} />
                        <Route exact path='/home#projects' component={Projects} />
                        <Route exact path='/home#contact' component={Contact} />
                        <Redirect to='/home' />
                    </Switch>
                    <Footer />
                </ThemeProvider>
            </CssBaseline>
        </>
    )
}

export default Main;