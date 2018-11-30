import React, { Component } from 'react';

import { CommentItem } from '../CommentItem/CommentItem';


class CommentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: null,
        }
    }

    componentDidMount() {


    }

    render() {

        return (
            <>
                <CommentItem />
                <CommentItem />
                <CommentItem />
                <CommentItem />
            </>
        );
    }
}

export default CommentList;
