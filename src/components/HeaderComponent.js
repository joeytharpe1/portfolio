import React from 'react'
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ContactMailOutlinedIcon from '@material-ui/icons/ContactMailOutlined';
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex',
    },
    title: {
        flexGrow: 1,
    },
    button: {
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.secondary.main,
            transition: "transform 0.15s ease-in-out",
            "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
        }
    }
}));

function Header() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title} align="center">
                        <Button component={Link} to='/home' className={classes.button}
                            size="small"
                            color="inherit"
                            startIcon={<HomeOutlinedIcon />}
                        >
                            Home
                        </Button>
                    </Typography>

                    <Typography variant="h6" className={classes.title} align="center">
                        <Button component={Link} to='/projects' className={classes.button}
                            size="small"
                            color="inherit"
                            startIcon={<WorkOutlineOutlinedIcon />}
                        >
                            Projects
                        </Button>
                    </Typography>
                    <Typography variant="h6" className={classes.title} align="center">
                        <Button component={Link} to='/contact' className={classes.button}
                            size="small"
                            color="inherit"
                            startIcon={<ContactMailOutlinedIcon />}
                        >
                            Contact
                        </Button>
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;
