import React from 'react';
import Projects from './ProjectsComponent';
import Contact from './ContactComponent';


import SkillSet from './SkillSet';

import Fade from 'react-reveal/Fade';
import TextLoop from "react-text-loop";

import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) => ({
    profile: {
        marginTop: 40,
    },
    media: {
        height: 360,
        width: 250,
        margin: 'auto',
        borderRadius: '10px',
    },
    title: {
        marginTop: 30,
        marginBottom: 10,
        transition: "transform 0.15s ease-in-out",
        "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
    },
    paper: {
        border: '1px solid #BCA88E',
        // color: theme.palette.primary.main,
        // '& p': '#0000',
        backgroundColor: '#fff',
        alignItems: 'center',
        transition: "transform 0.15s ease-in-out",
        "&:hover": {
            transform: "scale3d(1.05, 1.05, 1)",
            // backgroundColor: theme.palette.primary.main,
            // color: '#fff'
        },

    },

    body1: {
        '&:hover': {
            // backgroundColor: theme.palette.primary.main,
            // color: '#fff'
        }
    },
    header: {
        color: theme.palette.primary.main,
        '&:hover': {
            color: theme.palette.secondary.main,
            cursor: 'pointer',
        }
    },
    span: {
        color: theme.palette.secondary.main,
    },
    span2: {
        color: theme.palette.secondary.main,
        fontStyle: 'italic',
        textDecoration: 'underline',
        cursor: 'pointer',
    }


}));


function Home() {
    const classes = useStyles();
    const handleClick = ()=> {
        const scrollDiv = document.getElementById("contact").offsetTop;
        window.scrollTo({ top: scrollDiv, behavior: 'smooth'});
    }
   const handleLinkedinClick = ()=> {
    window.open('https://www.linkedin.com/in/joseph-tharpe')
   }

    return (
        <Container>
            <section id="home">
                <Grid container spacing={4} align="center" justify="center" className={classes.profile}>
                    <Grid item xs={12} align="center" justify='center'>
                        <Fade bottom>
                            <CardMedia
                                className={classes.media}
                                image='images/JT.jpg'
                            />
                        </Fade>
                    </Grid>
                </Grid>
                <Grid container spacing={4} className={classes.title} align="center" justify="center">
                    <Grid item xs={12}>
                        <Fade bottom>
                            <Typography variant='h3' component='h1' align='center' color='primary' className={classes.header}>
                                I'm Joseph Tharpe, your software <TextLoop>
                                    <span style={{ color: 'grey' }}>wizard.</span>
                                    <span style={{ color: '#BCA88E' }}>magician.</span>
                                    <span style={{ color: 'black' }}>engineer.</span>
                                </TextLoop>
                            </Typography>
                        </Fade>
                    </Grid>

                </Grid>
                <Grid container spacing={4} className={classes.title}>
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
                            <Paper elevation={15} className={classes.paper}>
                                <CardContent>
                                    <Typography variant='body1' color='Primary' className={classes.body1}>
                                        I am a California and remote-capable full stack web developer, specializing in user experience to give customers the best value for their requested project. I create successful responsive websites that are fast, easy to use, and built with best practices. The main area of my expertise is front-end development, <span className={classes.span}>HTML</span>, <span className={classes.span}>CSS</span>, <span className={classes.span}>JS</span>, and <span className={classes.span}>ReactJS</span> building small and medium web apps, features, animations, and coding interactive layouts. I also have full-stack developer experience with handling things like database operations, user authentication, and application logic using <span className={classes.span}>NodeJs</span> and <span className={classes.span}>MongoDB</span>.
                                    </Typography>
                                    <Typography gutterBottom variant="body1" color="Primary" className={classes.body1}>
                                        My passion for full stack development is electric, in the truest sense. In a previous life, I was a low voltage junior electrician, where I would work with hooking up computers to IDF rooms, strip coax cables, install cat5 and cat6 cables, etc. I was jolted into the amazing power of computers from my frequent interactions with them. I am obsessed with creating projects and trying to debug difficult problems. I look forward to helping you find the most from your existing or future website. Schedule a call with me, via link:
                                    </Typography>
                                    <br />
                                    <Typography variant="body1" color='Primary' className={classes.body1}>
                                        My <span className={classes.span2} onClick={handleLinkedinClick}>LinkedIn</span> profile for more details or just <span className={classes.span2} onClick={handleClick}> Contact Me</span>
                                    </Typography>
                                </CardContent>
                            </Paper>
                        </Fade>
                    </Grid>
                </Grid>
                <SkillSet />
            </section>
            <section id='projects'>
                <Projects />
            </section>
            <section id='contact'>
                <Contact />
            </section>
        </Container>
    );
}

export default Home;
