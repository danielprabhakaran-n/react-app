import React, {Component} from 'react';
import Logo from '../layouts/logo';

class Header extends Component {
    render(){
        return(
            <div className="header">
            <Logo />
            </div>
        )
    }
}

export default Header;