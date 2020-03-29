import React, { Component } from 'react';
import './LogInBtn.css';


class LogInBtn extends Component {

        render() {
                return (
                        <button
                                className='Centre'
                                onClick={this.props.onClick} >
                                Log in
                        </button>
                )
        }
}

export default LogInBtn;