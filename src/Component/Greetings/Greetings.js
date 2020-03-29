import React from 'react';
import './Greetings.css';
import InitialFields from '../Initialfields/Initialfields';
//import Loginpage from '../Loginpage/Loginpage';

function GreetingsAuthenticated(props) {
    return <h1>Welcome! {props.name}</h1>
}

function GreetingsUnauthenticated(props) {
    return <InitialFields />
}

class Greetings extends React.Component {
    render() {
        if (this.props.authenticated) {
            return <GreetingsAuthenticated name={this.props.name} />;
        }
        return <GreetingsUnauthenticated />;
    }
}

export default Greetings;