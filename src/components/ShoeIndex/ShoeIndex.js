import React from 'react'
import styled from 'styled-components/macro'

import { WEIGHTS, MEDIA_QUERIES } from '../../constants'

import Breadcrumbs from '../Breadcrumbs'
import Select from '../Select'
import Spacer from '../Spacer'
import ShoeSidebar from '../ShoeSidebar'
import ShoeGrid from '../ShoeGrid'

const ShoeBreadcrumbs = () => (
  <Breadcrumbs>
    <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
    <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
    <Breadcrumbs.Crumb href="/sale/shoes">Shoes</Breadcrumbs.Crumb>
  </Breadcrumbs>
)

const ShoeIndex = ({ sortId, setSortId }) => {
  return (
    <Wrapper>
      <MainColumn>
        <Header>
          <div>
            <MobileWrapper>
              <ShoeBreadcrumbs />
            </MobileWrapper>
            <Title>Running</Title>
          </div>
          <FilterWrapper>
            <Select
              label="Sort"
              value={sortId}
              onChange={(ev) => setSortId(ev.target.value)}
            >
              <option value="newest">Newest Releases</option>
              <option value="price">Price</option>
            </Select>
          </FilterWrapper>
        </Header>
        <Spacer size={32} />
        <ShoeGrid />
      </MainColumn>
      <LeftColumn>
        <ShoeBreadcrumbs />

        <Spacer size={42} />
        <ShoeSidebar />
      </LeftColumn>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: baseline;
  gap: 32px;

  @media ${MEDIA_QUERIES.tabletAndDown} {
    gap: 8px;
  }
`

const MobileWrapper = styled.div`
  display: none;
  @media ${MEDIA_QUERIES.tabletAndDown} {
    display: revert;
  }
`

const LeftColumn = styled.div`
  flex-basis: 248px;

  @media ${MEDIA_QUERIES.tabletAndDown} {
    display: none;
  }
`

const MainColumn = styled.div`
  flex: 1;
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  @media ${MEDIA_QUERIES.tabletAndDown} {
    align-items: flex-end;
  }
`

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};
`

const FilterWrapper = styled.div`
  @media ${MEDIA_QUERIES.phoneAndDown} {
    display: none;
  }
`

export default ShoeIndex
