import React from 'react';
import './LoginControl.css';
import Initloginpage from '../Initloginpage/Initloginpage';
import Navigationmenu from '../Navigationmenu/Navigationmenu';


class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = { isLoggedIn: false };
    }

    handleLoginClick() {
        this.setState({ isLoggedIn: true });
    }

    handleLogoutClick() {
        this.setState({ isLoggedIn: false });
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} handleLogout={this.handleLogoutClick} handleLogin={this.handleLoginClick} />
            </div>
        );
    }
}

function UserGreeting(props) {

    return (
        <div>
            <h1>Welcome back!</h1>;
            <Navigationmenu handleLogout={props.handleLogout} />
        </div>

    )
}

function GuestGreeting(props) {
    return (
        <div>
            <Initloginpage handleLogin={props.handleLogin} />
        </div>
    )

}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting handleLogout={props.handleLogout} />;
    }
    return <GuestGreeting handleLogin={props.handleLogin} />;
}


export default LoginControl;