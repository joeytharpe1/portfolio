import React from 'react'

import Fade from 'react-reveal/Fade';
import TextLoop from "react-text-loop";

import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
    title: {
        marginTop: 20,
        marginBottom: 10,
        transition: "transform 0.15s ease-in-out",
        "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
    },
    card: {
        border: '1px solid #34eba8',
        color: theme.palette.secondary.main,
        '& p': 'white',
        backgroundColor: '#000000',
        alignItems: 'center',
        transition: "transform 0.15s ease-in-out",
        "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
        cursor: 'pointer',
    },

    body1: {
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.secondary.main,
        }
    },
    header: {
        '&:hover': {
            backgroundColor: '#fff',
            color: theme.palette.secondary.main,
            cursor: 'pointer',
        }
    }


}));


function Home() {
    const classes = useStyles();

    return (
        <Container>
            <Grid container spacing={2} className={classes.title}>
                <Grid item xs={12}>
                    <Fade bottom>
                        <Typography variant='h2' align='center' color='primary' className={classes.header}>
                            I'm Joseph Tharpe, Just a guy trying to <TextLoop>
                                <span style={{ color: 'blue' }}>Code.</span>
                                <span style={{ color: '#34eba8' }}>Design.</span>
                                <span style={{ color: 'black' }}>Learn.</span>
                            </TextLoop>
                        </Typography>
                    </Fade>
                </Grid>
            </Grid>
            <Grid container spacing={2} className={classes.title}>
                <Grid item xs={12}>
                    <Fade left>
                        <Typography variant="h4" align='center' color='primary' className={classes.header} >
                            About Me
                        </Typography>
                    </Fade>
                </Grid>
            </Grid>

            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Fade right>
                        <Paper elevation={15} className={classes.card}>
                            <CardContent>
                                <Typography variant='body1' color='textPrimary' className={classes.body1}>
                                    I'm a fullstack web developer based in California.
                                    I Graduated from Nucamp coding bootcamp in August 2021.
                                    I specialize in web design, frontend and backend development to create the perfect user experience. Back in 2018-2019 i was actually a low voltage apprentice, where i would work with hooking up computers to idf rooms. i would strip coax cables, cat5 and cat6 cables and device them to different infrastructures. I realized that i love computers so much, and there has to be something out there much more than what i was doing. I found programming and i love it, you can say i am obsessed with creating projects and trying to debug difficult problems. To get to where I am today has not been easy, but with hard work, commitment and dedication I believe anything is possible.
                                </Typography>
                            </CardContent>
                        </Paper>
                    </Fade>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Home;
