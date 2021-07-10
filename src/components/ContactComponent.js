import React from 'react';
import { SendEmail } from './SendEmail';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    button: {
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.secondary.main,
            transition: "transform 0.15s ease-in-out",
            "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
        }
    },
    card: {
        marginTop: 10,
        border: '1px solid #34eba8',
        color: theme.palette.secondary.main,
        '& p': 'white',
        backgroundColor: '#000000',
        alignItems: 'center',
        transition: "transform 0.15s ease-in-out",
        "&:hover": { transform: "scale3d(1.01, 1.01, 1)" },
        cursor: 'pointer',
    },
}));


function Contact() {
    const classes = useStyles();


    return (

        <Card className={classes.card}>
            <CardContent>
                <Typography gutterBottom variant="h5" color='textPrimary'>Contact me</Typography>
                <Typography gutterBottom variant="body2" component='p' color='textSecondary'>
                    fill out this form and i will get back to you within 24 hours.
                </Typography>
                <form >
                    <Grid container spacing={2} >
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
                            <Button type='submit' variant='contained' fullWidth color='primary' onSubmit={SendEmail} className={classes.button}>
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </CardContent>
        </Card>

    )
}

export default Contact;
