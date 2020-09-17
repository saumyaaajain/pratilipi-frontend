import React from 'react';
import VisibilityIcon from '@material-ui/icons/Visibility';

import '../styles/SingleStory.css'

const SingleStory = (props) => {
    return (
        <div>
            <div className="Card1">
                <ul className="details">
                    <h4>{props.title}</h4>
                    <li>------------------</li>
                    <li>------------</li>
                    <li>---------------</li>
                    <li>------</li>
                </ul>
                <div className="description">
                    <div className="line">
                        <h1 className="product_name">{props.title}</h1>
                        <div>
                        <h1 className="product_price">
                            <span>{props.currCount} {props.currCount > 1 ? 'people' : 'person'} currently <VisibilityIcon /> </span>
                        </h1>
                        </div>
                    </div>
                    <h2>{props.readCount} people have already read it</h2>
                    <p className="summary">{props.content}</p>
                </div>
            </div>
        </div>
    );
}

export default SingleStory;
