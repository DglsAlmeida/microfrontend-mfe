import React from 'react';
import { HeaderContainer, HeaderContent, NavBar } from './styles';
import { Link, useLocation} from 'react-router-dom';

export const Header = () => {
  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");

  return (
    <HeaderContainer>
      <HeaderContent>
        <NavBar>
          <h2>SHOPPING</h2>
          <ul>
            <li className={splitLocation[1] === "" ? "active" : ""}>
              <Link to="/">PRODUCTS</Link>
            </li>
            <li className={splitLocation[1] === "cart" ? "active" : ""}>
              <Link to="/cart">CART</Link>
            </li>
          </ul>
        </NavBar>
      </HeaderContent>
    </HeaderContainer>
  )
}