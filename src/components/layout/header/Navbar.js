import React from 'react'
import { Link } from 'react-router-dom';
import {AuthService} from '../../../services/AuthService'

export default class Navbar extends React.Component {


  constructor(props) {
    super(props);

    this.authService = new AuthService();
    
  }
  

  login = () => {
    this.authService.login();
  };

  render(){
    return (
      <div className="col-xl-8 col-lg-8 col-md-8 d-none d-md-block d-lg-block">
          <ul className="crypt-heading-menu fright">
              <li>
              <Link to='/exchangeuserless'>Borsa</Link>
              </li>
              <li className="crypt-box-menu menu-green">
                <a onClick={this.login} style={{cursor: "pointer"}}>Giriş yap</a>
              </li>
          </ul>
      </div>
    )
  }



  
}