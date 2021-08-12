import React from 'react';
import { PROJECTS } from '../Shared/project';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import RemoveRedEyeOutlinedIcon from '@material-ui/icons/RemoveRedEyeOutlined';
import Fade from 'react-reveal/Fade';


const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 10,
    },
    media: {
        height: 260,
        backgroundPosition: 'top'
    },
    card: {
        border: '1px solid #BCA88E',
        color: '#fff',
        backgroundColor: '#fff',
        transition: "transform 0.5s ease-in-out",
        "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
        cursor: 'pointer',
    },
    button: {
        color: theme.palette.primary.main,
        '&:hover': {
            fontstyle: 'italic',
            // backgroundColor: theme.palette.primary.main,
            color: theme.palette.secondary.main,
            transition: "transform 0.5s ease-in-out",
            "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
        }
    },
    body1: {
        '&:hover': {
            // backgroundColor: theme.palette.primary.main,
            color: theme.palette.secondary.main,
        }
    },
}));


function RenderProject() {
    const classes = useStyles();

    return (
        <Container className={classes.root} >
            <Grid container align='center' justify='center' spacing={4}>
                {PROJECTS.map((project) => (
                    <Grid item key={project.id} xs={12} sm={3}>
                        <Fade top>
                            <Card className={classes.card} elevation={15}>
                                <CardContent>
                                    <Typography variant='h6' color='primary' className={classes.body1}>{project.name}</Typography>
                                </CardContent>
                                <CardMedia
                                    className={classes.media}
                                    image={project.image}
                                    title={project.name}
                                />
                                <CardContent>
                                    <Typography variant='body1' color='primary' className={classes.body1}>
                                        {project.description}
                                    </Typography>
                                </CardContent>
                                <Button onClick={() => window.open(project.url)}
                                    className={classes.button}
                                    endIcon={<RemoveRedEyeOutlinedIcon />}
                                >
                                {project.button}
                                </Button>
                            </Card>
                        </Fade>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default RenderProject;