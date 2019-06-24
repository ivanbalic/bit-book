import React, { Fragment } from "react";

import PostItem from "./PostItem/PostItem";
import { Loader } from "../../components/Loader/Loader";
import { getMostCommented } from "../../../shared/helpers";

const MostCommented = ({ posts }) => {
  return (
    <div className="card my-4 shadow sticky-third most-commented">
      <h5 className="card-header button-active">Most commented</h5>
      <div className="card-body bg-light">
        {posts ? (
          <Fragment>
            {getMostCommented([...posts]).map((post, i) => (
              <PostItem post={post} key={i} />
            ))}
          </Fragment>
        ) : (
          <Loader className="blue" />
        )}
      </div>
    </div>
  );
};

export { MostCommented };
