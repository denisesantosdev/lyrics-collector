import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLogo = styled.p`
    font-weight: bold;
    font-size: ${props=>props.theme.fontSizes.large};
`

const Logo = () => {
  return (
    <StyledLogo><Link to={'/'}>Lyrics Collector</Link></StyledLogo>
  )
}

export default Logo