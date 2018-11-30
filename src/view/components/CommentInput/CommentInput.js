import React, { Component } from 'react';


class CommentInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null
        }
    }

    render() {
        return (
            <>
                <input type="text" placeholder='Add your comment...' />
                <input type="button" value='SEND' />
            </>
        );
    }
}

export { CommentInput };