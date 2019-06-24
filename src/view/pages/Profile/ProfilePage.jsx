import React, { Component, Fragment } from "react";

import { EditProfile } from "./EditProfile/EditProfile";
import { Loader } from "../../components/Loader/Loader";
import { FeedList } from "../../components/FeedList/FeedList";
import { ProfileContent } from "./ProfileContent/ProfileContent";
import { CreatePost } from "../../components/CreatePost/CreatePost";
import { PostFilter } from "../../components/PostFilter/PostFilter";
import { MostCommented } from "../../components/MostCommented/MostCommented";
import { postCommunicator } from "../../../communicators/PostCommunicator/PostCommunicator";
import { userCommunicator } from "../../../communicators/UserCommunicator/UserCommunicator";

import "./ProfilePage.css";

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myPosts: null,
      profile: null,
      filterParam: "all"
    };
    this.loadPosts = this.loadPosts.bind(this);
    this.loadProfile = this.loadProfile.bind(this);
  }

  loadProfile(userId) {
    userCommunicator
      .getSingleUser(userId)
      .then(profile => {
        this.setState({
          profile,
          userId: userId
        });
      })
      .catch(({ message }) => {
        this.props.history.push({
          pathname: "/error",
          state: { message }
        });
      });
  }

  loadPosts() {
    postCommunicator
      .getPosts()
      .then(posts => {
        const myPosts = posts.filter(
          post => post.userId === this.props.location.state.userId
        );
        this.setState({
          myPosts
        });
      })
      .catch(({ message }) => {
        this.props.history.push({
          pathname: "/error",
          state: { message }
        });
      });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.state.userId !== this.props.location.state.userId) {
      this.loadProfile(this.props.location.state.userId);
      this.loadPosts();
    }
  }

  componentDidMount() {
    Promise.all([
      userCommunicator.getSingleUser(this.props.location.state.userId),
      postCommunicator.getPosts()
    ])
      .then(([profile, posts]) => {
        const myPosts = posts.filter(
          post => post.userId === this.props.location.state.userId
        );
        this.setState({
          myPosts,
          profile
        });
      })
      .catch(({ message }) => {
        this.props.history.push({
          pathname: "/error",
          state: { message }
        });
      });
  }

  render() {
    const { profile, myPosts, filterParam } = this.state;
    const filteredPosts =
      filterParam === "all"
        ? myPosts
        : myPosts.filter(post => {
            return post.type === filterParam;
          });

    return (
      <Fragment>
        <img
          className="profile-cover container p-0"
          src={`https://images.unsplash.com/photo-1470219556762-1771e7f9427d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80`}
          alt="cover"
        />
        <main className="container p-0">
          {profile ? (
            <Fragment>
              <ProfileContent profile={profile} />
              <EditProfile loadProfile={this.loadProfile} profile={profile} />
            </Fragment>
          ) : (
            <Loader className="blue" />
          )}
          <div className="row d-flex flex-row">
            <div className="col-md-4">
              <PostFilter
                className="sticky-first"
                handleChange={({ target }) =>
                  this.setState({ filterParam: target.value })
                }
              />
              <MostCommented posts={myPosts} className="sticky-second" />
            </div>
            <div className="col-md-8">
              {profile ? (
                <Fragment>
                  {profile.id === parseInt(sessionStorage.getItem("userId")) ? (
                    <CreatePost
                      name={profile.name}
                      image={profile.image}
                      reload={this.loadPosts}
                    />
                  ) : null}
                  <FeedList posts={filteredPosts} />
                </Fragment>
              ) : null}
            </div>
          </div>
        </main>
      </Fragment>
    );
  }
}

export { ProfilePage };
