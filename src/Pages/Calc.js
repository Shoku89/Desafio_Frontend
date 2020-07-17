import React, {Component} from 'react';
import './Calc.css';
import Conversor from "../Components/Conversor";
import Header from '../Components/Header';

class Calc extends Component {
  
  render() {
    return (
      <div className="Calc">
          <Header />
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