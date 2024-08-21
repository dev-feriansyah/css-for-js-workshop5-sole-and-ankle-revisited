import React from 'react'
import styled from 'styled-components/macro'

import Header from '../Header'
import ShoeIndex from '../ShoeIndex'
import { MEDIA_QUERIES } from '../../constants'

const App = () => {
  const [sortId, setSortId] = React.useState('newest')

  return (
    <>
      <Header />
      <Main>
        <ShoeIndex sortId={sortId} setSortId={setSortId} />
      </Main>
    </>
  )
}

const Main = styled.main`
  padding: 64px 32px;

  @media ${MEDIA_QUERIES.tabletAndDown} {
    padding-top: 48px;
    padding-bottom: 48px;
  }

  @media ${MEDIA_QUERIES.phoneAndDown} {
    padding-left: 16px;
    padding-right: 16px;
  }
`

export default App
