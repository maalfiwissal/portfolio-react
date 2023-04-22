import React from "react";
import { Link } from 'react-router-dom';

function Nav(){
    return(
            
<nav className="navbar navbar-expand-lg navbar-light bg-info">

<ul className="navbar-nav m-auto">
      <li className="nav-item active">
        <Link to="/" className="nav-link text-uppercase ml-5">Aceuil</Link>
      </li>
      <li className="nav-item">
          <Link to ="/formations" className='nav-link text-uppercase ml-5'>Formations</Link>
      </li>
      <li className="nav-item">
        <Link to="/experiences" className="nav-link text-uppercase ml-5">Expériences</Link>
      </li>
      <li className="nav-item">
        <Link to="/projets" className="nav-link text-uppercase ml-5">Projets</Link>
      </li>
      <li className="nav-item">
        <Link to="/certifications" className="nav-link text-uppercase ml-5">Certifications</Link>
      </li>
      
    </ul>
    

</nav>
      
      
    )
}
export default  Nav;