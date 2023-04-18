import { NavLink } from "react-router-dom"
import React from 'react';


//Header displayed upon successful login of the user on the dashboard.
const Header = () => {

  const navigation = [
    { path: '/listBook', name: 'List Book' },
    { path: '/add', name: 'Add Book' },
  ]

  return (
    <header>
      <nav>
        {navigation.map(nav => (
          <NavLink
            key={nav.name}
            to={nav.path}
          >
            {nav.name}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}

export default Header;
