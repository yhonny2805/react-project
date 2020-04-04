// import React from 'react';
// import './Initialfields.css';
// import Header from '../Header/Header';
// import LogInBtn from '../LogInBtn/LogInBtn';
// import { render } from '@testing-library/react';

// class Initialfields extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             firstName: '',
//             lastName: '',
//         };
//     }


//     handleChange = (event) => {
//         const { name, value } = event.target;
//         this.setState({ [name]: value });
//     }

//     render() {
//         return (
//             <form className='maincolor'>
//                 <div>
//                     <div>
//                         <Header />
//                     </div>
//                     <h2 className='subtitle'>Sign in</h2>
//                     <div className='fields'>
//                         <div>
//                             <input className='Generic'
//                                 name='firstname'
//                                 type="text"
//                                 placeholder='Email address'
//                                 onChange={this.handleChange}
//                                 value={this.state.value}
//                             />
//                         </div>
//                         <div>
//                             <input className='Generic'
//                                 name='lastname'
//                                 type="text"
//                                 placeholder='Password'
//                                 onChange={this.handleChange}
//                                 value={this.state.value}
//                             />
//                         </div>
//                     </div>
//                 </div>

//             </form >
//         );
//     }
// }

// export default Initialfields;
