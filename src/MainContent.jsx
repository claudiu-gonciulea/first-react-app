import React, {Component} from 'react';

export class MainContent extends Component {

    // this property contains the dynamic content that you want to render inside your component
    // it is a javascript object. You can use nested objects inside the state
    state = { appTitle: "Users", usersCount: 4,
                users: [
                    {id: 1, name: "Jane Doe", state: "New York", address: {streetName:"Broadway", streetNumber: 21}},
                    {id: 2, name: "John Doe", state: "New York", address: {streetName:"Broadway", streetNumber: 21}},
                    {id: 3, name: "Billy", state: "Chicago", address: {streetName:"Michigan Avenue", streetNumber: "4A"}},
                    {id: 4, name: "Sam", state: "Washington", address: {streetName:"Pennsylvania Avenue", streetNumber: 8}},
                ],        
                appTextNotifications: "Notifications", notificationNumbers: 12};

    render() {

        return <div>

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


            <h4 className="border-bottom m-1 p-1">{this.state.appTitle}</h4>

            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>User Name</th>
                        <th>State where user lives</th>
                        <th>Street: number, name</th>
                    </tr>
                </thead>

                
                <tbody>
                    {this.state.users.map((user) => {
                        return (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.state}</td>
                                <td>{user.address.streetNumber}, {user.address.streetName}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

        </div>;
    }

    onRefreshClick = () => { // executes when user clicks on REFRESH button

        console.log("set notification badge: random number");
        this.setState({ // randomly set notification number between 1 and 100
            notificationNumbers: Math.floor(Math.random() * 100) + 1
        });

    }
}