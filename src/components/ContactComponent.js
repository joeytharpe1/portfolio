import React from 'react';
import { SendEmail } from './SendEmail';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 20,
        marginBottom: 20,
    },
    button: {
        color: theme.palette.primary.main,
        backgroundColor: '#fff',
        '&:hover': {
            backgroundColor: '#fff',
            color: theme.palette.secondary.main,
            transition: "transform 0.15s ease-in-out",
            "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
        }
    },
    card: {
        marginTop: 2,
        border: '1px solid #BCA88E',
        color: theme.palette.primary.main,
        backgroundColor: '#fff',
        alignItems: 'center',
        transition: "transform 0.15s ease-in-out",
        "&:hover": { transform: "scale3d(1.01, 1.01, 1)" },
        cursor: 'pointer',
    },
    header: {
        marginTop: 20,
        '&:hover': {
            transform: "scale3d(1.05, 1.05, 1)",
            color: theme.palette.secondary.main,
            cursor: 'pointer',
        }
    },
    label: {
        border: '1px solid #BCA88E',
        borderColor: theme.palette.primary.main
    }
}));



function Contact() {
    const classes = useStyles();

   

    return (
        <Container className={classes.root}>
            <Grid container spacing={4}>
                <Grid item xs={12}>
                <Typography gutterBottom variant="h4" color='primary' align="center" className={classes.header}>Contact</Typography>
                </Grid>
            </Grid>
            <Card className={classes.card} elevation={15}>
                <CardContent>
                    <Typography gutterBottom variant="h6" color='Primary'>contact me</Typography>
                    <Typography gutterBottom variant="body2" component='p' color='primary'>
                        fill out this form and i will get back to you within 24 hours.
                    </Typography>
                    <form >
                        <Grid container spacing={1} >
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="First Name"
                                    placeholder="Enter first name"
                                    variant="outlined"
                                    fullWidth
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Last Name"
                                    placeholder="Enter last name"
                                    variant="outlined"
                                    fullWidth
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} >
                                <TextField
                                    label="Email"
                                    placeholder="Enter Email address"
                                    variant="outlined"
                                    fullWidth
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} >
                                <TextField
                                    label="Message"
                                    placeholder="Message here"
                                    multiline
                                    rows={6}
                                    variant="outlined"
                                    fullWidth
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} >
                                <Button type='submit'  fullWidth color='#fff' onSubmit={SendEmail} className={classes.button}>
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>
            </Card>
        </Container>

    )
}

export default Contact;
