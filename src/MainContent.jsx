import React, {Component} from 'react';

export class MainContent extends Component {

    // this property contains the dynamic content that you want to render inside your component
    // it is a javascript object. You can use nested objects inside the state
    state = { appTitle: "Customers" };

    render() {

        return <div>
            
            <h4 className="border-bottom m-1 p-1">{this.state.appTitle}</h4>

        </div>;
    }
}