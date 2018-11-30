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
            <div className='mt-4 px-4 input-group-prepend'>
                <input className='form-control' type="text" placeholder='Add your comment...' />
                <input type="button" value='SEND' />
            </div>
        );
    }
}

export { CommentInput };