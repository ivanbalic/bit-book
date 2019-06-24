import React from "react";

import PeopleItem from "./PeopleItem/PeopleItem";

const PeopleList = ({ users }) => (
  <div className="row">
    {users.map(user => (
      <PeopleItem user={user} key={user.id} />
    ))}
  </div>
);

export { PeopleList };
