import React, { useEffect } from "react";
import {useParams} from 'react-router-dom';
import {getStory} from "../util/apis";
import SingleStory from './SingleStory'
import socketIOClient from "socket.io-client";

function Story() {
    let {id} = useParams();
    const [peopleViewing, setPeopleViewing] = React.useState(1);
    const [storyData, setStoryData] = React.useState([]);
    useEffect( () => {
        async function fetchStory() {
            await getStory(id).then((res) => res.json()).then((data) => setStoryData(data));
        }
        fetchStory();
    }, [id])

    useEffect(() => {
        console.log('useEffect ran once', id)
        if(id !== undefined){
            const socket = socketIOClient(process.env.REACT_APP_SERVER_URL);
            socket.emit ('join_room', {roomID: id});
            socket.on(`update_room_count_${id}`, data => {
                console.log(data)
                setPeopleViewing(data);
            });
            return () => socket.disconnect();
        }
    }, [id]);

    return(
        <SingleStory {...storyData} currCount={peopleViewing} />
    );
}

export default Story
