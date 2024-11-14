import React, {Component} from 'react';

import { NavBar } from './NavBar';
import { MainContent } from './MainContent';

export default class App extends Component {

    render() { // every component should have render method, which renders something for the user

        return <React.Fragment>
            <NavBar />
            <MainContent />
        </React.Fragment>
    }
}