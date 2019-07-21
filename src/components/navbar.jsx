import React from 'react';

// class Navbar extends Component {
//     render() {
//         return (
//             <nav className="navbar navbar-light bg-light">
//                 <a className="navbar-brand" href="#">
//                     Navbar{" "}
//                     <span className='badge badge-pill badge-secondary'>{this.props.totalCounters}</span>
//                 </a>
//             </nav>)
//     }
// }

// Stateless functional componenet
const Navbar = ({ totalCounters }) => {
    console.log('Navbar - Rendered')

    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="https://www.youtube.com/watch?v=Ke90Tje7VS0">
                Navbar{" "}
                <span className='badge badge-pill badge-secondary'>{totalCounters}</span>
            </a>
        </nav>)
}

export default Navbar;