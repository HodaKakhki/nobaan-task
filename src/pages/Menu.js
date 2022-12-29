import React from "react";
import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" activeClassName="bg-blue" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" activeClassName="bg-blue" exact>
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to="/users" activeClassName="bg-blue" exact>
            Users
          </NavLink>
        </li>
        <li>
          <NavLink to="/verification" activeClassName="bg-blue" exact>
            Verification
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
