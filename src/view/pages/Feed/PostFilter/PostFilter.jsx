import React from "react";

const PostFilter = ({ handleChange }) => {
  return (
    <div className="card my-4 border-0 shadow sticky-second">
      <h5 className="card-header button-active">Filter posts</h5>
      <div className="card-body bg-light">
        <div className="row">
          <div className="col-lg-12">
            <div className="input-group mb-3">
              <div className="input-group-prepend rounded">
                <label
                  className="input-group-text button-active"
                  htmlFor="inputGroupSelect01"
                >
                  By type
                </label>
              </div>
              <select
                className="custom-select"
                id="inputGroupSelect01"
                onChange={handleChange}
              >
                <option value="all">All</option>
                <option value="text">Text</option>
                <option value="image">Image</option>
                <option value="video">Video</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { PostFilter };
