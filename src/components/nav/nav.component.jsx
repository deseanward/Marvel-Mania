import React from 'react'
import { NavContainer, NavContent, NavItem } from './nav.styles'

const Navigation = () => {
  return (
      <NavContainer>
          <NavContent>
            <NavItem to='/comics'>Comics</NavItem>
            <NavItem to='/characters'>Characters</NavItem>
            <NavItem to='/movies'>Movies</NavItem>
            <NavItem to='/Games'>Games</NavItem>
          </NavContent>
      </NavContainer>
  )
}

export default Navigation