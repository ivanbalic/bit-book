import React from "react";

import "./NoResults.css";

const NoResults = ({ className }) => {
  return (
    <div className={className}>
      <p className="result-message">
        <i className="fas fa-search" />
        We couldn't find any matching result
      </p>
    </div>
  );
};

export { NoResults };
