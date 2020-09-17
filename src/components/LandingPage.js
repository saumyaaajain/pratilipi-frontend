import React from "react";
import { Grid } from '@material-ui/core';

import Post from './Post'

const LandingPage = (props) => {
    return (
        <div>
            <h1> Welcome to Feeds</h1>
            <div style={{"margin": "7vh 6.2vw"}}>
                <Grid container spacing={3}>
                    <Grid item>
                        <Grid container justify={"center"} spacing={8}>
                            {props.feed.map((story, index) => <Post key={index} id={props.feed._id} {...story} />)}
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
export default LandingPage;
