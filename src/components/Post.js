import React from 'react';
import '../styles/Post.css';
import {Link} from 'react-router-dom';

const Post = (props) => {
    return (
        <Link className="card" to={`/story/${props._id}`}>
			<span className="card-header" >
				<img src={'https://via.placeholder.com/200'} alt={"Placeholder"} />
				<span className="card-title">
					<h3>{`${props.title.slice(0, 20)} ...`}</h3>
				</span>
			</span>
            <span className="card-summary">
				<p>{`${props.content.slice(0, 50)} ...`}</p>
			</span>
            <span className="card-meta">
				Read By: {props.readCount}
			</span>
        </Link>
    );
}

export default Post;
