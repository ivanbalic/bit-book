import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FeedPage from '../../pages/FeedPage';
import PeoplePage from '../../pages/PeoplePage';
import ProfilePage from '../../pages/ProfilePage';
import SinglePostPage from '../../pages/SinglePostPage';

const Main = (props) => {

    return (
        <main className='container'>
            <Switch>
                <Route path='/post-details' component={SinglePostPage} />
                <Route path='/people' component={PeoplePage} />
                <Route path='/profile' component={ProfilePage} />
                <Route path='/' component={FeedPage} />
            </Switch>
        </main>
    );
}

export { Main };