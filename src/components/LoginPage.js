import React from 'react';
import { Avatar, Button, CssBaseline, TextField, Grid, Box, Typography, makeStyles, Container, } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import { Link as RouteLink, } from 'react-router-dom';
import Copyright from "./Copyright";
import {signin} from "../util/apis";
import {useAuth} from "../context/auth";


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignIn() {
    const classes = useStyles();
    const { dispatch } = useAuth();
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [error, setError] = React.useState("");


    const onSubmit = async (e) => {
        e.preventDefault();
        await signin(email, password).then((res) => {
            return res.json();
        }).then((data) => {
            console.log(data)
            if(data.token){
                // TODO: dispatch event
                dispatch({type: "LOGIN", payload: data})
            }
            if(data.errors){
                setError(data.errors.msg)
            }
        });
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                {error.length > 0 && error}
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={(e) => onSubmit(e)}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item>
                            <RouteLink to="signup" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </RouteLink>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
}
