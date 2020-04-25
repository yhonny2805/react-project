import React from 'react';
import DatePicker from "react-datepicker";
import './NewRequests.css';

import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';

class NewRequests extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            value1: null,
            value2: null,

        };
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    handleChange1(date) {
        this.setState({
            value1: date

        })
    }

    handleChange2(date) {
        this.setState({
            value2: date

        })
    }


    onFormSubmit(e) {
        e.preventDefault();
        console.log(this.state.value1)
        console.log(this.state.value2)
    }

    render() {
        return (
            <div>
                <div className="text-center">
                    <form onSubmit={this.onFormSubmit}>
                        <div className="form-group dats">
                            <p>Start Date</p>
                            <DatePicker
                                selected={this.state.value1}
                                onChange={this.handleChange1}
                                dateFormat="MMMM d, yyyy"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <p>End Date</p>
                            <DatePicker
                                selected={this.state.value2}
                                onChange={this.handleChange2}
                                dateFormat="MMMM d, yyyy"
                                className="form-control"
                            />
                        </div>
                        <button onClick={Message} className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        );
    }

}

function Message() {
    alert("Your Holidays Request has been submitted!");
}

export default NewRequests; 