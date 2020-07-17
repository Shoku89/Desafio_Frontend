import React, {Component} from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';

class Menu extends Component {
  
  render() {
    return (
      <div className="Menu">
          <ul>
              <Link className="Home" to="/">Home</Link>
              <Link to="/calc">Calculadora</Link>
          </ul>
      </div>
    );
  }
}

export default Menu;