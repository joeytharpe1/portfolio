import React from 'react';
import Myskills from './Myskills';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CardContent from '@material-ui/core/CardContent';

import Fade from 'react-reveal/Fade';


const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 20,
        marginBottom: 10,
    },
    paper: {
        backgroundColor: '#fff',
        transition: "transform 0.15s ease-in-out",
        "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
    },
    Typography: {
        alignItems: 'center',
        transition: "transform 0.15s ease-in-out",
        '&:hover': {
            backgroundColor: '#fff',
            color: theme.palette.secondary.main,
            cursor: 'pointer',
        }
    },
    slider: {
        '&:hover': {
            // backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.main,
        }
    },
    textani: {
        color: theme.palette.secondary.main,
    }


}));


function SkillSet() {
    const classes = useStyles();

    return (
        <Grid container spacing={3} className={classes.root}>
            <Grid item xs={12} md={8}>
                <Paper elevation={15} className={classes.paper}>
                    <CardContent>
                        <Fade left>
                            <Typography gutterBottom variant='body2' color='primary' className={classes.Typography}>
                                Frontend
                            </Typography>

                            <Slider
                                className={classes.slider}
                                color='secondary'
                                value={9}
                                max={10}
                                valueLabelDisplay="auto"
                                aria-labelledby="non-linear-slider"
                            />
                        </Fade>
                        <Fade bottom>
                            <Typography gutterBottom variant='body2' color='primary' className={classes.Typography}>
                                Backend
                            </Typography>
                            <Slider
                                className={classes.slider}
                                color='secondary'
                                value={7}
                                max={10}
                                valueLabelDisplay="auto"
                                aria-labelledby="non-linear-slider"
                            />
                        </Fade>
                        <Fade right>
                            <Typography gutterBottom variant='body2' color='primary' className={classes.Typography}>
                                React Js
                            </Typography>
                            <Slider
                                className={classes.slider}
                                color='secondary'
                                value={8}
                                max={10}
                                valueLabelDisplay="auto"
                                aria-labelledby="non-linear-slider"
                            />
                        </Fade>
                    </CardContent>
                </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
                <Myskills />
            </Grid>
        </Grid>
    )
}

export default SkillSet
