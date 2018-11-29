import React, { Component } from 'react';

class TextModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: ""
        }
    }

    getInputValue = (event) => {

        console.log(event.target.value);
        this.setState({
            inputValue: event.target.value
        })
    }


    render() {

        return (
            <>
                <div class="modal fade" id="textModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">New text post</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <input type="text" class="form-control col-11 m-3" value={this.state.inputValue} onChange={this.getInputValue} placeholder="Post text" aria-label="Username" />
                            <p>alert</p>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-primary">Post text</button>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        );

    }
}

export {
    TextModal
}