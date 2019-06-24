import React from "react";

const DeleteButton = ({ handleDelete }) => (
  <span className="btn text-secondary float-right m-2" onClick={handleDelete}>
    <i className="fas fa-trash-alt" id="delete" />
  </span>
);

export { DeleteButton };
