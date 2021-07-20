import React from 'react'

import Link from '@material-ui/core/Link';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles((theme) => ({
    appbar: {
        marginBottom: 15,
    },
    root: {
        flexGrow: 1,
        display: 'flex',
    },
    title: {
        flexGrow: 1,

    },
    button: {
        color: '#fff',
        '&:hover': {
            // backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.main,
            transition: "transform 0.15s ease-in-out",
            "&:hover": {
                transform: "scale3d(1.05, 1.05, 1)",
                textDecoration: 'none',
            },
        }
    }
}));

function Header() {
    const classes = useStyles();

    const handleClick = ()=> {
        const scrollDiv = document.getElementById("contact").offsetTop;
        window.scrollTo({ top: scrollDiv, behavior: 'smooth'});
    }
    const handleClickHome = ()=> {
        const scrollDivHome = document.getElementById("home").offsetTop;

        window.scrollTo({ top: scrollDivHome, behavior: 'smooth'});
    }

    const handleClickProject = ()=> {
        const scrollDivProject = document.getElementById("projects").offsetTop;

        window.scrollTo({ top: scrollDivProject, behavior: 'smooth'});
    }

   
    return (
        <div className={classes.root}>
            <AppBar position="static" color="secondary" >
                <Toolbar>
                    <Typography variant="h6" color='textSecondary' className={classes.title} align="center">
                        <Link href="#Home" className={classes.button}
                        onClick={handleClickHome}
                            color='inherit'
                        >
                            Home
                        </Link>
                    </Typography>
                    <Typography variant="h6" className={classes.title} align="center">
                        <Link href="#projects" className={classes.button}
                            onClick={handleClickProject}
                            color='inherit'
                        >
                            Projects
                        </Link >
                    </Typography>
                    <Typography variant="h6" className={classes.title} align="center">
                        <Link href="#contact" className={classes.button}
                            onClick={handleClick}
                            color='inherit'
                        >
                            Contact
                        </Link >

                    </Typography>

                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;
