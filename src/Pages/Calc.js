import React, {Component} from 'react';
import './Calc.css';
import Conversor from "../Components/Conversor";
import Footer from '../Components/Footer';
import Menu from '../Components/Menu';

class Calc extends Component {
  
  render() {
    return (
      <div className="Calc">
        <div className="Header">
        <h1>Conversor</h1>
        <Menu />
      </div>  
        <h1>Conversor de moedas</h1>
        <div className="linha">
          <Conversor moedaA="USD" moedaB="BRL"></Conversor>
          <Conversor moedaA="BRL" moedaB="USD"></Conversor>
          </div>
          <div className="linha">
          <Conversor moedaA="CAD" moedaB="BRL"></Conversor>
          <Conversor moedaA="BRL" moedaB="CAD"></Conversor>
          </div>
          <div className="linha">
          <Conversor moedaA="EUR" moedaB="BRL"></Conversor>
          <Conversor moedaA="BRL" moedaB="EUR"></Conversor>
          </div>
      </div>
    );
  }
}

export default Calc;