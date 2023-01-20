import React from 'react'
import styled from 'styled-components'
import { color, breakpoint, transition } from '../../../configs/utilities'
import { Link } from 'gatsby-plugin-react-intl'

const ButtonLink = (props) => {
  return props.external ? (
    <ExternalLink href={props.to} target="_blank" rel="noopener noreferrer">
      <ButtonStyle>{props.buttonText}</ButtonStyle>
    </ExternalLink>
  ) : (
    <InternalLink to={props.to}>
      <ButtonStyle>{props.buttonText}</ButtonStyle>
    </InternalLink>
  )
}

export default ButtonLink

const InternalLink = styled(Link)``

const ExternalLink = styled.a``

const ButtonStyle = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  background: ${color.blue};
  color: ${color.blue};
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  cursor: pointer;
  transition: ${transition.default};

  &:hover {
    opacity: 0.8;
  }

  @media screen and (max-width: ${breakpoint.xsm}) {
    font-size: 5vw;
  }

  @media screen and (min-width: ${breakpoint.md}) {
    padding: 12px 30px;
    font-size: 14px;
    max-width: 250px;
  }
`