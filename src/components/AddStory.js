import React, {useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import {Typography, TextField, Paper, Button, makeStyles} from '@material-ui/core';
// import Typography from '@material-ui/core/Typography';
// import TextField from '@material-ui/core/TextField';
// import Paper from "@material-ui/core/Paper";
// import {makeStyles} from "@material-ui/core/styles";
// import Button from "@material-ui/core/Button";
import {addStory} from "../util/apis";


const useStyles = makeStyles((theme) => ({
    paper: {
        // marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '50vw',
        height: '50vh',
        margin: "auto"
    },
}));

function AddStory() {
    // const classes = makeStyles();
    const classes = useStyles();
    const [title, setTitle] = React.useState("");
    const [content, setContent] = React.useState("");
    const [errors, setErrors] = React.useState([]);
    const onSubmit = async (e) => {
        e.preventDefault()
        await addStory(title, content).then((res) => res.json()).then((data) => {
            if(data.errors){
                console.log(data, data.errors)
                setErrors(data.errors.msg)
            } else {
                alert("Story Added")
                setTitle("")
                setContent("")
            }

        })
    }

    useEffect(() => console.log(errors), [errors])
    return (
        <React.Fragment>
            <Paper className={classes.paper}>
                <Typography variant="h6" gutterBottom>
                    Add A Story
                </Typography>
                {/*{(errors && errors.length > 0) ? errors.map(({message}) => <p>{message}</p>) : undefined}*/}
                <Grid container spacing={3}>
                    <Grid item xs={12} >
                        <TextField
                            value={title}
                            required
                            id="Title"
                            name="Title"
                            label="Title"
                            fullWidth
                            autoComplete="given-name"
                            onChange={(e) => {setTitle(e.target.value)}}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            value={content}
                            required
                            id="description"
                            name="Content"
                            label="Content"
                            fullWidth
                            autoComplete="family-name"
                            onChange={(e) => {setContent(e.target.value)}}
                        />
                    </Grid>
                    <Button onClick={(e) => onSubmit(e)}>Add</Button>
                </Grid>
            </Paper>
        </React.Fragment>
    );
}

export default AddStory
