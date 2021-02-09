import React from 'react'
import {Link} from "react-router-dom";
import styled from "styled-components";
export default function Navbar() {
    return (
        <>
      
        <NavWrapper >
          <div className="nav-center">
            <Link to="/" className="nav-link">home</Link>
            <Link to="/about" className="nav-link">about</Link>
            <Link to="/products" className="nav-link">products</Link>
          </div>

        </NavWrapper> 
        </>
    )
}



const NavWrapper = styled.nav`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  width: 100%;
  padding: 1rem 1.5rem;
  /* height:50px */
  background: var(--mainGrey);
  border-bottom: 3px solid var(--primaryColor);
  z-index: 1;
  margin-bottom:0;
  .nav-center {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1170px;
    margin: 0 auto;
  }
  
`;
