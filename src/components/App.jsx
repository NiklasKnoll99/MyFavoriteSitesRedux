import React from 'react';
import { hot } from 'react-hot-loader';
import { Mode } from 'chayns-components';
import Intro from './intro/Intro';
import PersonFinderContainer from '../containers/PersonFinderContainer';
import UserListContainer from '../containers/UserListContainer';
import NewFavForm from '../components/newFavForm/NewFavForm';

const App = () => (
    <div>
        <Intro />
        <Mode mode={1} group={1}>
            <PersonFinderContainer />
        </Mode>
        <NewFavForm/>
    </div>
);

export default hot(module)(App);
