import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.css'

class Header extends Component {
  render() {
    return(
      <header className="header-main">
        <div className="header-break">
          <h1>The Sandtot <span>(and brauts)</span></h1>
          <nav>
            <ul>
              <li><Link to='/Teams'>Teams</Link></li>
              <li><Link to='/Leaders'>Leaders</Link></li>
              <li><Link to='/Chat'><span className="span-1">BrauTalk</span></Link></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;