import React, {Component} from 'react';

export class MainContent extends Component {

    // this property contains the dynamic content that you want to render inside your component
    // it is a javascript object. You can use nested objects inside the state
    state = { appTitle: "Customers", appTextNotifications: "Notifications", notificationNumbers: 12};

    render() {

        return <div>
            
            <h4 className="border-bottom m-1 p-1">{this.state.appTitle}</h4>

            <button type="button" className="btn btn-primary position-relative">
                {this.state.appTextNotifications} 
                
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {this.state.notificationNumbers}
                    <span className="visually-hidden">unread messages</span>
                </span>
            </button>

        </div>;
    }
}