import React from 'react'
import styled from 'styled-components'

const StyledLogo = styled.p`
    font-weight: bold;
    font-size: ${props=>props.theme.fontSizes.large};
`

const Logo = () => {
  return (
    <StyledLogo>Lyrics Collector</StyledLogo>
  )
}

export default Logo