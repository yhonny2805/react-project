import React from 'react';
import './EmployeeList.css';

class EmployeeList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("https://my-json-server.typicode.com/yhonny2805/test/employees")
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
                <ul className='mancolor'>
                    <h2 className='h21'>Employee List Report</h2>
                    <table>
                        <tr>
                            <th>ID</th>
                            <th>Complete Name</th>
                            <th>Username</th>
                            <th>Emai Address</th>
                        </tr>
                        {items.map(item => (
                            <tr key={item.name}>
                                {item.id}
                                <td>{item.name}</td>
                                <td> {item.username} </td>
                                <td> {item.email}</td>
                            </tr>
                        ))}
                    </table>
                </ul>
            );
        }
    }
}

export default EmployeeList;