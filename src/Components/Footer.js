import React, {Component} from 'react';
import './Footer.css';

class Footer extends Component {
  
  render() {
    return (
      <div className="Footer">
        <div className="container">
            <div className="row">
                {/* Column1 */}
                <div className="col">
                <h4>Contato</h4>
                    <ul className="list-unstyled">
                        <li>Isabela R. Peres</li>
                        <li>e-mail: isarperes89@gmail.com</li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <p className="col-sm">
                    &copy;{new Date().getFullYear()} CONVERSOR INC | Todos os direitos reservados  
                </p>
            </div>
        </div>
      </div>
    );
  }
}

export default Footer;