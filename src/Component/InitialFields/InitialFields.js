import React from 'react';
import './InitialFields.css';
//import { render } from '@testing-library/react';

class InitialFields extends React.Component {

    constructor(props) {
        super(props);
        this.state = { firstName: '', lastName: '', };
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
                    <input className='Generic' placeholder='First Name' type="text" name='firstname'
                        value={this.state.firstname} onChange={this.handleChange}
                    />
                    <input className='Generic' placeholder='Last Name' type="text" name='lastname'
                        value={this.state.lastname} onChange={this.handleChange}
                    />
                    <button className='Submit' type="submit">Submit</button>
                </div>

            </form >
        );
    }
}

export default InitialFields;
