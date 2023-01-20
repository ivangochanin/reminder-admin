import styled from 'styled-components'
import { breakpoint } from '../../../configs/utilities'

export const ContentWrapper = styled.div`
  max-width: 1680px;
  margin: 0 auto;
  `

export const LayoutWrapper = styled.div`
  max-width: 1680px;
  margin: 0 auto;
  padding: 0 20px;
  @media screen and (min-width: ${breakpoint.md}) {
    padding: 0 30px;
  }

  @media screen and (min-width: ${breakpoint.xl}) {
    padding: 0 50px;
  }
  `

export const ViewWrapper = styled.div`
  max-width: 1680px;
	height: 88vh;
  overflow-x: auto;
  margin: 0 auto;
  padding: 30px 20px;

  @media screen and (min-width: ${breakpoint.md}) {
    padding: 30px;
  }

  @media screen and (min-width: ${breakpoint.xl}) {
    padding: 30px 50px;
  }
`
