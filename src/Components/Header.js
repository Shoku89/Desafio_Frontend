import React, {Component} from 'react';
import './Header.css';
import Menu from '../Components/Menu';

class Header extends Component {
  
  render() {
    return (
      <div className="Header">
        <h1>Conversor</h1>
        <Menu />
      </div>
    );
  }
}

export default Header;