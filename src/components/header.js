import { Link } from 'gatsby'
import { FaBars } from 'react-icons/fa'
import React from 'react'
import styled from 'styled-components'
import { MenuData } from '../data/NavMenu.data'
import { Button } from './Button'

const Nav = styled.nav`
  display:flex;
  justify-content:space-between;
  align-items:center;
  background:transparent;
  padding: 15px calc((100vw - 1300px)/2);
  z-index:100;
  position:relative;
  height:68px;
`
const NavLink = styled(Link)`
  color: #fff;
  display:flex;
  align-items:center;
  text-decoration:none;
  font-size:24px;
  font-weight:700;
  padding:0 1rem;
  cursor:pointer;
`
const Bars = styled(FaBars)`
  display: none;
  font-size:32px;
  padding:0 1rem;
  color: #fff;
  box-sizing:content-box;
  cursor:pointer;

  @media screen and (max-width:768px){
    display:block;
  }
`
const NavMenu = styled.div`
  display:flex;
  align-items:center;
  
  @media screen and (max-width: 768px){
    display:none;
  }
`
const MenuItem = styled(Link)`
  text-decoration:none;
  color: #fff;
  margin: 0 16px;
  font-size : 1.3rem;
  font-weight:400;
`
const NavBtn = styled.span`
  display: flex;
  align-items:center;
  padding:0 1rem;

  @media screen and (max-width:768px){
    display:none;
  }
`
function header() {
  return (
    <Nav>
      <NavLink to="/" >Explorix</NavLink>
      <Bars />
      <NavMenu>
        {MenuData.map((item, index) => (
          <MenuItem to={item.link} key={index}>{item.title}</MenuItem>
        ))}
      </NavMenu>
      <NavBtn>
        <Button round="true" primary="true" to="/trips">
          Book a flight
      </Button>
      </NavBtn>

    </Nav>
  )
}

export default header

