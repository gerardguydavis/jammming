import React from "react";
import './Track.css';

export class Track extends React.Component {
    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>{this.props.track.title}</h3>
                    <p>{this.props.track.artist} | {this.props.track.album}</p>
                </div>
                <button className="Track-action">+ or - will go here</button>
            </div>
        )
    }
    /*renderAction() {
        return (
            <button className="Track-action">{isRemoval ? '-' : '+'}</button>
)
    }*/
}