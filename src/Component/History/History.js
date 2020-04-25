import React from 'react';
import './History.css';

class History extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("https://my-json-server.typicode.com/yhonny2805/user-history/holidays")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        error: null,
                        isLoaded: true,
                        items: result
                    });
                },
                // Manejo de errores
                (errors) => {
                    this.setState({
                        error: errors,
                        isLoaded: true,
                        items: []
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div> Loading...</div>;
        } else {
            return (
                <ul className='main'>
                    <div><h2 className='h21'>History Report</h2></div>
                    <table>
                        <tr>
                            <th>ID</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Total Holidays Spent</th>
                        </tr>
                        {items.map(item => (
                            <tr key={item.start}>
                                <td>{item.id}</td>
                                <td>{item.start}</td>
                                <td> {item.end} </td>
                                <td> {item.spent}</td>
                            </tr>
                        ))}
                    </table>
                </ul>
            );
        }
    }
}

export default History;