import React from "react";
import im from './profil.png';

import fontawesome from '@fortawesome/fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'

fontawesome.library.add(brands)

function Header (){
    return (    
<div className="container">
  <div className="row justify-content-center align-items-start mt-5">
    <div className="col-12 col-md-6 text-center">
      <img
              src={im}
              alt=""
              className="rounded-circle mb-4"
              width="200"
              height="210"

        />
      <h1>Wissal Maalfi</h1>
      <h3>Future ingénieur en informatique et réseau</h3>
      <ul className="list-unstyled">
        <li><a href="https://www.linkedin.com/in/wissal-maalfi-497617203/"><i class="fab fa-linkedin"></i> LinkedIn</a></li>
        <li><a href="https://github.com/maalfiwissal"><i class="fab fa-github"></i> GitHub</a></li>
      </ul>

      </div>
    </div>
  </div>    
    );
}
export default Header;