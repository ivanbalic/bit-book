import React from 'react';
import { Switch, Route } from 'react-router-dom';

import FeedPage from '../../pages/FeedPage';
import PeoplePage from '../../pages/PeoplePage/PeoplePage';
import ProfilePage from '../../pages/ProfilePage/ProfilePage';
import SinglePostPage from '../../pages/SinglePostPage';
import LoginAndRegister from '../../pages/LoginAndRegister/LoginAndRegister';

const Main = (props) => {

    return (
        <main className='container'>
            <div className='row'>
                <Switch>
                    {/* <Route path='/' component={LoginAndRegister} /> */}
                    <Route path='/post-details/:postType/:postId' component={SinglePostPage} />
                    <Route path='/profile/:userId' component={ProfilePage} />
                    <Route path='/people' component={PeoplePage} />
                    <Route path='/feed' component={FeedPage} />
                    {/* <Route path='/' component={LoginAndRegister} /> */}
                </Switch>
            </div>
        </main>
    );
}

export { Main };