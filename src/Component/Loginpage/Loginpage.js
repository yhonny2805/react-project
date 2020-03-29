import React from 'react';
import './Loginpage.css';
import Greetings from '../Greetings/Greetings';
import Footer from '../Footer/Footer';
import LogInBtn from '../LogInBtn/LogInBtn';
//import LogOutBtn from '../LogOutBtn/LogOutBtn';

function LogInBt(props) {
    return (
        <div className='logintbut'>
            <button className='loginbth'
                onClick={props.onClick}>
                Log in
        </button>
        </div>
    );
}

function LogOutBt(props) {
    return (
        <div className='logoutbut'>
            <button className='logoutbtn'
                onClick={props.onClick}>
                Log out
        </button>
        </div>
    )
}


class Loginpage extends React.Component {
    constructor(props) {
        super(props);
        this.initClick = this.initClick.bind(this);
        this.outClick = this.outClick.bind(this);
        this.state = { authenticated: false };;
    }

    initClick() {
        this.setState({ authenticated: true });
    }
    outClick() {
        this.setState({ authenticated: false });
    }


    render() {
        const authenticated = this.state.authenticated;
        let buton;
        if (authenticated) {
            buton = <LogOutBt onClick={this.outClick} />;
        } else {
            buton = <LogInBt onClick={this.initClick} />;
        }
        return (
            <div className='maincolor'>
                <Greetings authenticated={authenticated} name={this.props.name} />
                {buton}
                <div>
                    <Footer />
                </div>
            </div>
        );
    }
}



export default Loginpage;





