import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }
  render() {
    const { search } = this.state;
    const { title, handleSearch, className } = this.props;
    return (
      <div className={`card my-4 border-0 shadow ${className}`}>
        <h5 className="card-header button-active">{title}</h5>
        <div className="card-body bg-light">
          <div className="input-group">
            <input
              type="text"
              value={search}
              placeholder="Search by users"
              className="form-control"
              onChange={({ target }) => this.setState({ search: target.value })}
            />
            <span className="input-group-btn">
              <button
                type="button"
                className="btn button-active"
                onClick={() => handleSearch(search)}
              >
                <i className="fas fa-search" />
              </button>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export { SearchBar };
