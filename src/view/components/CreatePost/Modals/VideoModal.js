import React from 'react';

const VideoModal = () => {
    return (
        <>
            <div class="modal fade" id="videoModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">New video post</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <input type="text" class="form-control col-11 m-3" placeholder="Post video" aria-label="Username" />
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary">Post video</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export {
    VideoModal
}
