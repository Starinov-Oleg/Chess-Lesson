import { Key } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const StyledNavLink = styled(NavLink)`
  font-family: 'Mochiy';
  font-size: 1.2rem;
  color: white;
  text-align: left;
  &:focus,
  &:hover,
  &:link,
  &:active {
    text-decoration: none;
  }
  text-decoration: ${props => {
    console.log(props.style)
    return props.style ? isActive => (isActive ? 'underline' : 'none') : 'none'
  }};
  &:hover {
    text-decoration: underline;
  }
  &[aria-current] {
    color: gold;
  }
  @media (max-width: 1256px) {
    width: auto;
    padding: 10px 12px;
    font-size: 12px;
  }
`
const StyledUl = styled.ul`
  list-style-type: none;
`

interface MenuItemProps {
  navlinkItems: any
}
function SubMenuList({ navlinkItems }: MenuItemProps) {
  return (
    <StyledUl>
      {navlinkItems.submenu.map((submenu: { name: string; href: string }, i: Key | null | undefined) => (
        <li key={i}>
          <StyledNavLink to={submenu.href}>{submenu.name}</StyledNavLink>
        </li>
      ))}
    </StyledUl>
  )
}
export default SubMenuList
