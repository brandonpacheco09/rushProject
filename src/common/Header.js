import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';
import {Link} from 'react-router';

const Header = () => {
    return(
        <div className="header">
            <div className="imgDiv">
                <Link to='/' activeClassName='active'><img src={logo} className="headerImg"></img></Link>
            </div>
            <div className="linksDiv">
                <Link to='/pledgeClasses' activeClassName='active'>Pledge Classes</Link>
                {' | '}
                <Link to='/Bids' activeClassName='active'>Bids</Link>
            </div>
        </div>
    );
}

export default Header;