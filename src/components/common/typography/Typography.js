import styled from 'styled-components'
import { breakpoint } from '../../../configs/utilities'

export const PageTitle = styled.h1`
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  line-height: 32px;
  letter-spacing: 0.2em;
  text-transform: uppercase;

  @media screen and (max-width: ${breakpoint.xsm}) {
    font-size: 8vw;
    line-height: 10vw;
  }

  @media screen and (min-width: ${breakpoint.md}) {
    font-size: 36px;
    line-height: 44px;
  }
`

export const SectionTitle = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.13em;
  text-transform: uppercase;
  
  @media screen and (max-width: ${breakpoint.xsm}) {
    font-size: 8vw;
    line-height: 10vw;
    text-align: center;
  }

  @media screen and (min-width: ${breakpoint.md}) {
    font-size: 30px;
    line-height: 38px;
  }

  @media screen and (min-width: ${breakpoint.xxl}) {
    font-size: 36px;
    line-height: 44px;
  }
`

export const SectionDescription = styled.p`
  font-weight: 300;
  font-size: 16px;
  line-height: 28px;
  text-transform: uppercase;

  @media screen and (max-width: ${breakpoint.xsm}) {
    font-size: 6vw;
  }

  @media screen and (min-width: ${breakpoint.xxl}) {
    font-size: 18px;
    line-height: 30px;
  }
`

export const SectionText = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  margin: 10px 0;

  @media screen and (max-width: ${breakpoint.xsm}) {
    font-size: 4vw;
  }
`
