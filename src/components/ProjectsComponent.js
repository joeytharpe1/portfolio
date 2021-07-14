import React from 'react';
import RenderProject from './RenderProject'
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';



const useStyles = makeStyles((theme) => ({
    button: {
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.secondary.main,
            transition: "transform 0.15s ease-in-out",
            "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
        }
    },
    header: {
        marginTop: 20,
        '&:hover': {
            transform: "scale3d(1.05, 1.05, 1)",
            color: theme.palette.secondary.main,
            cursor: 'pointer',
        }
    },
}));

function Projects() {
    const classes = useStyles();

    return (
        <Container>
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant='h4' align='center' justify='center' className={classes.header}>
                        Projects
                    </Typography>
                </Grid>
            </Grid>
            <RenderProject />
        </Container>
    )
}

export default Projects
