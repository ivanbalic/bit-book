import React, { Component } from "react";

import { Loader } from "../../components/Loader/Loader";
import { FeedList } from "../../components/FeedList/FeedList";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { NoResults } from "../../components/NoResults/NoResults";
import { CreatePost } from "../../components/CreatePost/CreatePost";
import { PostFilter } from "../../components/PostFilter/PostFilter";
import { MostCommented } from "../../components/MostCommented/MostCommented";
import { userCommunicator } from "../../../communicators/UserCommunicator/UserCommunicator";
import { postCommunicator } from "../../../communicators/PostCommunicator/PostCommunicator";

class FeedPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: null,
      profile: null,
      filterParam: "all",
      searchResults: null
    };
    this.loadPosts = this.loadPosts.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  loadPosts() {
    postCommunicator
      .getPosts()
      .then(posts => {
        this.setState({
          posts,
          searchResults: posts
        });
      })
      .catch(({ message }) => {
        this.props.history.push({
          pathname: "/error",
          state: { message }
        });
      });
  }

  handleSearch(searchTerm) {
    const { posts } = this.state;
    const filteredPosts = posts.filter(({ userDisplayName }) => {
      return userDisplayName.includes(searchTerm);
    });
    this.setState({
      searchResults: filteredPosts
    });
  }

  componentDidMount() {
    Promise.all([userCommunicator.getProfile(), postCommunicator.getPosts()])
      .then(([profile, posts]) => {
        sessionStorage.setItem("userId", profile.id);
        this.setState({
          posts,
          profile,
          searchResults: posts
        });
      })
      .catch(({ message }) => {
        this.props.history.push({
          pathname: "/error"
        });
        console.error(message);
      });
  }

  render() {
    const { searchResults, filterParam, posts, profile } = this.state;
    const filteredPosts =
      filterParam === "all"
        ? searchResults
        : searchResults.filter(post => {
            return post.type === filterParam;
          });
    return (
      <main className="container">
        <div className="row d-flex flex-row-reverse">
          <div className="col-md-4">
            <SearchBar
              title={"Search posts"}
              className="sticky-first"
              handleSearch={this.handleSearch}
            />
            <PostFilter
              className="sticky-second"
              handleChange={({ target }) =>
                this.setState({ filterParam: target.value })
              }
            />
            <MostCommented posts={posts} className="sticky-third" />
          </div>
          <div className="col-md-8">
            {profile ? (
              <CreatePost
                name={profile.name}
                image={profile.image}
                reload={this.loadPosts}
              />
            ) : null}
            {searchResults ? (
              searchResults.length ? (
                <FeedList posts={filteredPosts} />
              ) : (
                <NoResults className="bg-light w-100 shadow py-3 border-thick" />
              )
            ) : (
              <Loader className="blue" />
            )}
          </div>
        </div>
      </main>
    );
  }
}

export { FeedPage };
