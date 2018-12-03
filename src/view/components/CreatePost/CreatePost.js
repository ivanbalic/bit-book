import React, { Component } from "react";
import "./CreatePost.css";
import { ImageModal } from './Modals/ImageModal';
import { TextModal } from './Modals/TextModal';
import { VideoModal } from './Modals/VideoModal';

class CreatePost extends Component {
    constructor(props) {
        super(props);

        this.state = {
            active: false
        };
    }

    toggleClass = () => {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    };

    render() {
        return (
            <>
                <ImageModal loadPosts={this.props.loadPosts} />
                <TextModal loadPosts={this.props.loadPosts} />
                <VideoModal loadPosts={this.props.loadPosts} />
                <div className="buttonContainer">
                    <ul className={this.state.active ? "list-group" : "list-group displayNone"}>
                        <li className="list-group-item buttonList border-0">
                            <button type="button" className="btn btn-primary rounded-circle buttonHeight" data-toggle="modal" data-target="#textModal" />
                            <span>Post</span>
                        </li>
                        <li className="list-group-item buttonList border-0">
                            <button type="button" className="btn btn-success rounded-circle buttonHeight" data-toggle="modal" data-target="#imageModal" />
                            <span>Image</span>
                        </li>
                        <li className="list-group-item buttonList border-0">
                            <button type="button" className="btn btn-danger rounded-circle buttonHeight" data-toggle="modal" data-target="#videoModal" />
                            <span>Video</span>
                        </li>
                    </ul>
                </div>
                <button type="button" className="btn btn-warning rounded-circle singleButton" onClick={this.toggleClass}>+</button>
            </>
        );
    }
}

export { CreatePost };
