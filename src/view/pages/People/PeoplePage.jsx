import React, { Component, Fragment } from "react";

import { PeopleList } from "./PeopleList/PeopleList";
import { Loader } from "../../components/Loader/Loader";
import { NoResults } from "../../components/NoResults/NoResults";
import { ImageCarousel } from "../../components/ImageCarousel/ImageCarousel";
import { RecentlyActive } from "../../components/RecentlyActive/RecentlyActive";
import { CarouselItem } from "../../components/ImageCarousel/CarouselItem/CatouselItem";
import { userCommunicator } from "../../../communicators/UserCommunicator/UserCommunicator";

class PeoplePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: null,
      searchResult: null
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(searchTerm) {
    const { users } = this.state;
    const searchResult = users.filter(user => {
      return user.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    this.setState({ searchResult });
  }

  componentDidMount() {
    userCommunicator.getUsers().then(users => {
      this.setState({ users, searchResult: users });
    });
  }

  render() {
    const { searchResult } = this.state;

    return (
      <Fragment>
        <ImageCarousel linkTarget={"#search"}>
          <CarouselItem
            active={"active"}
            text={"Meet amazing people."}
            imgSrc={
              "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            }
          />
          <CarouselItem
            text={"Share your funny stories..."}
            imgSrc={
              "https://images.unsplash.com/photo-1504022462188-88f023db97bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            }
          />
          <CarouselItem
            text={"...your happy moments..."}
            imgSrc={
              "https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            }
          />
          <CarouselItem
            text={"...exciting trips..."}
            imgSrc={
              "https://images.unsplash.com/photo-1520645521318-f03a712f0e67?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            }
          />
          <CarouselItem
            text={"...and incredible adventures."}
            imgSrc={
              "https://images.unsplash.com/photo-1521336575822-6da63fb45455?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            }
          />
        </ImageCarousel>
        <main className="container" id="search">
          <div className="row">
            <div className="col-sm-12 col-lg-9">
              <div className="input-group shadow sticky-header">
                <span className="input-group-btn">
                  <button type="button" className="btn button-active">
                    <i className="fas fa-search" />
                  </button>
                </span>
                <input
                  type="text"
                  placeholder="Search"
                  className="form-control"
                  onChange={({ target }) => this.handleSearch(target.value)}
                />
              </div>
              {searchResult ? (
                searchResult.length ? (
                  <PeopleList users={searchResult} />
                ) : (
                  <NoResults className="bg-light w-100 shadow py-3 border-thick mt-3" />
                )
              ) : (
                <Loader className="blue mt-3" />
              )}
            </div>
            <div className="col-sm-12 col-lg-3">
              <RecentlyActive withLink={false} />
            </div>
          </div>
        </main>
      </Fragment>
    );
  }
}

export { PeoplePage };
