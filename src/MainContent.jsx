import React, {Component} from 'react';

export class MainContent extends Component {

    // this property contains the dynamic content that you want to render inside your component
    // it is a javascript object. You can use nested objects inside the state
    state = { appTitle: "Customers", appTextNotifications: "Notifications", notificationNumbers: 12};

    render() {

        return <div>
            
            <h4 className="border-bottom m-1 p-1">{this.state.appTitle}</h4>

            <button type="button" className="btn btn-primary position-relative m-3">
                {this.state.appTextNotifications} 
                
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {this.state.notificationNumbers}
                    <span className="visually-hidden">unread messages</span>
                </span>
            </button>

            <button className="btn btn-info m-2" onClick = {this.onRefreshClick}>
                Refresh Notification's badge
            </button>
        </div>;
    }

    onRefreshClick = () => { // executes when user clicks on REFRESH button

        console.log("set notification badge: random number");
        this.setState({ // randomly set notification number between 1 and 100
            notificationNumbers: Math.floor(Math.random() * 100) + 1
        });

    }
}