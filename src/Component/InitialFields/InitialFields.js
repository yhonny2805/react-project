import React from 'react';
import './InitialFields.css';

function InitialFields(props) {
    return (
        <div>
            <div>
                <input type="text" placeholder='First Name' className='Generic' />
                <input type="text" placeholder='Last Name' className='Generic' /> <input type="text" placeholder='Account ID' className='Generic' />
            </div>
        </div>
    );
}

export default InitialFields;