import React from 'react';
import { hot } from 'react-hot-loader';
import { Mode } from 'chayns-components';
import Intro from './intro/Intro';
import PersonFinderContainer from '../containers/PersonFinderContainer';
import UserListContainer from '../containers/UserListContainer';
import NewFavForm from '../components/newFavForm/NewFavForm';
import Display from '../components/display/Display';

const App = () => (
    <div>
        <Intro />
        <Mode mode={1} group={1}>
            <PersonFinderContainer />
        </Mode>
        <NewFavForm />
        <Display />
    </div>
);

export default hot(module)(App);
