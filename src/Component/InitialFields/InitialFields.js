import React from 'react';
import './InitialFields.css';
//import { render } from '@testing-library/react';

class InitialFields extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
        };
    }


    handleChange = (event) => {
        let nam = event.target.firstname;
        let lastnam = event.target.lastname;
        this.setState({ [nam]: lastnam });

    }

    render() {
        return (
            <form>
                <div className=''>
                    <h2 className='subtitle'>Enter your full name and hit submit:</h2>
                    <input className='Generic'
                        name='firstname'
                        type="text"
                        placeholder='First Name'
                        onChange={this.handleChange}
                        value={this.state.firstname}
                    />
                    <input className='Generic'
                        name='lastname'
                        type="text"
                        placeholder='Last Name'
                        onChange={this.handleChange}
                        value={this.state.lastname}
                    />
                    <button
                        type="submit"
                        className='Submit'>
                        Submit
                    </button>
                </div>

            </form >
        );
    }
}

export default InitialFields;
