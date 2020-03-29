import React from 'react';
import './UseridList.css';


const list = [
    {
        id: '1',
        firstname: 'Yhonnatan',
    },
    {
        id: '2',
        firstname: 'Dave',
    },
    {
        id: '3',
        firstname: 'Juan',
    },
    {
        id: '4',
        firstname: 'Esteban',
    },
    {
        id: '5',
        firstname: 'Heimily',
    },

];
const UserIdList = () => (

    <ul>
        {list.map(item => (
            <li key={item.id}>
                <div>{item.id}</div>
                <div>{item.firstname}</div>
            </li>
        ))}
    </ul>
);


export default UserIdList;