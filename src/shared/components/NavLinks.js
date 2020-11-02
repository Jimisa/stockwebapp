import React from 'react';
import {NavLink} from 'react-router-dom';

import './NavLinks.css'

const NavLinks = (props) => {
  return (
      <ul className='nav-links'>
          <li>
              <NavLink to="/" className='list' exact>Spares</NavLink>
          </li>
          <li>
              <NavLink to="/suppliers" className='list' exact>Suppliers</NavLink>
          </li>
          <li>
              <NavLink to="/spare/new" className='add' exact>Spare</NavLink>
          </li>
          <li>
              <NavLink to="/supplier/new" className='add' exact>Supplier</NavLink>
          </li>
          <li>
              <NavLink to="/authenticate" className='user' exact></NavLink>
          </li>
      </ul>
  );
}

export default NavLinks;
