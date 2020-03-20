import React from 'react';
import './InitialFields.css';
import { render } from '@testing-library/react';

class InitialFields extends React.Component {

    constructor(pros) {
        super(pros);
        this.state = { firstName: '', lastName: '', id: '' };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value });

    }



    render() {
        const { firstName, lastName, id } = this.state
        return (
            <form>
                <div className='Spacing'>
                    <input className='Generic' placeholder='First Name' type="text" name='firstName' value={this.state.firstName} onChange={this.handleChange} />
                    <input className='Generic' placeholder='Last Name' type="text" name='lastName' value={this.state.lastName} onChange={this.handleChange} />
                    <input className='Generic' placeholder='Account ID' type="number" number='id' value={this.state.id} onChange={this.handleChange} />
                </div>
                <button className='Submit' type="submit">Submit</button>
            </form >
        );
    }
}

export default InitialFields;
