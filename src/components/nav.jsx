import {Link} from 'react-router'

const Nav = () => {
    return (
        <nav>
            <ul id="nav-ul-list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/highlights">Menu</Link></li>
                <li><Link to="/bookingPage">Reservations</Link></li>
                <li><Link to="/orderOnline">Order Online</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    );
};

export default Nav;
