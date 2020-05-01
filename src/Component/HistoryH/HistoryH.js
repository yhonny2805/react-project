import React, { useEffect, useState } from 'react';
import './HistoryH.css';

const HistoryH = () => {
    const [items, setItems] = useState([])

    function getItems() {
        fetch("https://my-json-server.typicode.com/yhonny2805/user-history/holidays")
            .then(response => response.json())
            .then(items => setItems(items))
            .catch(err => console.log(err.message))

    }
    useEffect(() => {
        getItems()
    }, [])

    return (
        <ul>
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
        </ul>
    )
}

export default HistoryH;