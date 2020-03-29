import React, { Component } from 'react';
import './LogOutBtn.css';

class LogOutBtn extends Component {

    render() {
        return (
            <button
                className='Centre'
                onClick={this.props.onClick} >
                Log out
            </button>
        )
    }
}

export default LogOutBtn;