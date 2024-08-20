import React from 'react'
import styled from 'styled-components/macro'

import { COLORS, MEDIA_QUERIES } from '../../constants'

import SearchInput from '../SearchInput'
import UnstyledButton from '../UnstyledButton'
import Icon from '../Icon'

const SuperHeader = () => {
  return (
    <div>
      <Wrapper>
        <MarketingMessage>
          Free shipping on domestic orders over $75!
        </MarketingMessage>
        <SearchInput />
        <HelpLink href="/help">Help</HelpLink>
        <UnstyledButton>
          <Icon id="shopping-bag" strokeWidth={1} />
        </UnstyledButton>
      </Wrapper>
      <DecorativeBox />
    </div>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  font-size: 0.875rem;
  color: ${COLORS.gray[300]};
  background-color: ${COLORS.gray[900]};
  height: 40px;
  padding-left: 32px;
  padding-right: 32px;
  @media ${MEDIA_QUERIES.tabletAndDown} {
    display: none;
  }
`

const DecorativeBox = styled.div`
  display: none;

  @media ${MEDIA_QUERIES.tabletAndDown} {
    display: block;
    height: 4px;
    background-color: ${COLORS.gray[900]};
    margin-left: auto;
  }
`

const MarketingMessage = styled.span`
  color: ${COLORS.white};
  margin-right: auto;
`

const HelpLink = styled.a`
  color: inherit;
  text-decoration: none;
  outline-offset: 2px;

  &:not(:focus-visible) {
    outline: none;
  }
`

export default SuperHeader
