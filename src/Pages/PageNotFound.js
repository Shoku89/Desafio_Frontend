import React, {Component} from 'react';
import './PageNotFound.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

class PageNotFound extends Component {
  
  render() {
    return (
      <div className="PageNotFound">
        <Header />
        <h1>Page not Found</h1>
        <Footer />
      </div>
    );
  }
}

export default PageNotFound;