/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components/macro'
import { DialogOverlay, DialogContent } from '@reach/dialog'

import UnstyledButton from '../UnstyledButton'
import Icon from '../Icon'
import VisuallyHidden from '../VisuallyHidden'
import { COLORS, WEIGHTS } from '../../constants'

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null
  }

  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content aria-label="navigation-menu">
        <CloseButton onClick={onDismiss}>
          <Icon id="close" />
          <VisuallyHidden>close menu</VisuallyHidden>
        </CloseButton>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>

        <Footer>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </Footer>
      </Content>
    </Overlay>
  )
}

const Overlay = styled(DialogOverlay)`
  position: fixed;
  inset: 0;
  background: var(--color-backdrop);
`
const Content = styled(DialogContent)`
  background: var(--color-white);
  width: 300px;
  margin-left: auto;
  height: 100%;
  padding: 24px 16px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;
`

const Link = styled.a`
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
`

const NavLink = styled(Link)`
  font-size: 1.125rem;
  text-transform: uppercase;

  &:first-of-type {
    color: var(--color-secondary);
  }
`

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 24px;
  right: 16px;
`

const Footer = styled.footer`
  position: absolute;
  bottom: 24px;
  left: 16px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`

const FooterLink = styled(Link)`
  font-size: calc(14 / 16 * 1rem);
  color: var(--color-gray-700);
`

export default MobileMenu
