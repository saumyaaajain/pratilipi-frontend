import React from 'react'
import { Link } from 'react-router-dom'
import {AppBar, Toolbar, Typography, IconButton, makeStyles, Button } from '@material-ui/core'
import {useAuth} from "../context/auth";
import { HomeTwoTone } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();
    const {state, dispatch} = useAuth()
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <Link to='/'><HomeTwoTone /></Link>
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Stories Feed
                    </Typography>
                        {state.isAuthenticated && <Link to='/add-story'><Button>Add a new story</Button></Link>}
                        {state.isAuthenticated && <Button onClick={() => dispatch({type: 'LOGOUT'})}>Log Out</Button>}
                        {!state.isAuthenticated && <Link to='/signup'><Button>Sign Up</Button></Link>}
                        {!state.isAuthenticated && <Link to='/login'><Button>Login</Button></Link>}
                </Toolbar>
            </AppBar>
        </div>
    );
}

