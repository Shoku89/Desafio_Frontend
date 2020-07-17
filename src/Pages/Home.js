import React, {Component} from 'react';
import './Home.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer';


class Home extends Component {
  
  render() {
    return (
      <div className="Home">
        <Header />
        <img src="/images/EE.jpg" alt=""/>
        <Footer />
      </div>
    );
  }
}

export default Home;