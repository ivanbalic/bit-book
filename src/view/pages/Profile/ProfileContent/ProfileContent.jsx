import React from "react";

const ProfileContent = ({ profile }) => {
  const {
    id,
    name,
    image,
    email,
    postNumber,
    description,
    commentNumber
  } = profile;
  return (
    <div className="profile bg-light rounded">
      <img
        className="profile-img bg-white border rounded shadow"
        src={image}
        alt="avatar"
      />
      <div className="profile-text mt-3">
        <h1>{name}</h1>
        <p className="w-50 mx-auto">{description}</p>
      </div>
      {id === parseInt(sessionStorage.getItem("userId")) ? (
        <div className="w-100 text-center">
          <button
            className="btn button-active fit-content shadow"
            data-toggle="modal"
            data-target="#editProfile"
          >
            <i className="fas fa-user-edit" /> Edit
          </button>
        </div>
      ) : (
        <div className="w-100 text-center">
          <button className="btn button-active fit-content shadow">
            <i className="fas fa-user-plus" /> Add Friend
          </button>
        </div>
      )}
      <hr />
      <h3 className="text-center">About</h3>
      <p className="text-center text-muted">
        <i className="fas fa-envelope" /> {email}
      </p>
      <div className="w-100 d-flex justify-content-center">
        <button type="button" className="btn button-active mb-3 mr-5 shadow">
          Comments <span className="badge badge-light">{commentNumber}</span>
        </button>
        <button type="button" className="btn button-active mb-3 shadow">
          Posts <span className="badge badge-light">{postNumber}</span>
        </button>
      </div>
    </div>
  );
};

export { ProfileContent };
