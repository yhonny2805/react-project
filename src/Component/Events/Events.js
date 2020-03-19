import React from 'react';
import './Events.css';

// no se puede retornar el valor de 'False' para prevenir esto se usa e.preventDefault();
function activarMensaje(e) {
    e.preventDefault();
    alert('Please wait');
}

class Events extends React.Component {
    render() {
        return (
            <div className='Centre'>
                <button onClick={activarMensaje}>Submit</button>
            </div>
        );
    }
}
export default Events;