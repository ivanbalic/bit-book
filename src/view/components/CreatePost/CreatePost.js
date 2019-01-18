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
                            <button type="button" className="btn creat-post rounded-circle buttonHeight" data-toggle="modal" data-target="#textModal" onClick={this.toggleClass}><i className="fas fa-feather-alt"></i></button>
                        </li>
                        <li className="list-group-item buttonList border-0">
                            <button type="button" className="btn creat-post rounded-circle buttonHeight" data-toggle="modal" data-target="#imageModal" onClick={this.toggleClass}><i className="fas fa-image"></i></button>
                        </li>
                        <li className="list-group-item buttonList border-0">
                            <button type="button" className="btn creat-post rounded-circle buttonHeight" data-toggle="modal" data-target="#videoModal" onClick={this.toggleClass}><i className="fab fa-youtube"></i></button>
                        </li>
                    </ul>
                </div>
                <button type="button" className="btn creat-post rounded-circle singleButton" onClick={this.toggleClass}><i className="fas fa-plus"></i></button>
            </>
        );
    }
}

export { CreatePost };
