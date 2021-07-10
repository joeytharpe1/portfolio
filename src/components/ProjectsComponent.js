import React from 'react';
import RenderProject from './RenderProject'
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    button: {
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.secondary.main,
            transition: "transform 0.15s ease-in-out",
            "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
        }
    },
}));

function Projects() {
    const classes = useStyles();

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Button component={Link} to="/" color='primary' className={classes.button}>
                            Home
                        </Button>
                        <Button component={Link} to="/Projects" color="primary" className={classes.button} >
                            Projects
                        </Button>
                        <Typography color="secondary">Breadcrumb</Typography>
                    </Breadcrumbs>
                </Grid>
            </Grid>
            <RenderProject />
        </Container>
    )
}

export default Projects
