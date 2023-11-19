import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { toggleUImenu } from 'shared/state/ducks/ui/actions'
import styled from 'styled-components'

interface IHeaderProps {
  isMenuOpen: boolean
}

const HeaderLogo = styled.div`
  margin-inline-start: 1.6rem;
  margin-inline-end: 2rem;

  .main-nav-open & {
    a {
      transition: 0.3s;
      @media (min-width: 769px) {
        background-size: 16rem 2.1rem;
        width: 16.4rem;
        height: 4.1rem;
      }
    }
  }

  > a {
    font-size: 0;
    background: ${(props) => props.theme.base.mainLogo};
    background-size: 22rem 2.1rem;
    width: 4.2rem;
    height: 2.1rem;
    display: block;
    transition: all 0.3s;

    @media (max-width: 768px) {
      width: 24rem;
    }
  }
  @media (max-width: 768px) {
    order: 2;
    margin-inline-start: 0;
    margin-inline-end: 1.5rem;
  }
`

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: ${(props) => props.theme.size.header.height};
  z-index: 505;
  position: relative;
  box-shadow: ${(props) => props.theme.base.blockShadow};
  padding: 0 2.5rem;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 0 2rem;
  }
`

const HeaderButtons = styled.div`
  margin-inline-end: 1.5rem;

  @media (max-width: 768px) {
    order: 1;
  }
`

const HeaderButtonsIcon = styled.a`
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #101011;
  margin-left: -0.8rem;
  cursor: pointer;
  > span {
    display: block;
    width: 1.8rem;
    height: 1.3rem;
    position: relative;

    > span {
      display: block;
      font-size: 0;
      position: absolute;
      width: 1.8rem;
      height: 2px;
      border-radius: 1px;
      background-color: currentColor;
      opacity: 1;

      top: 50%;
      left: 0;
      margin-top: -1px;
      transition: all 0.3s;
      transform-origin: center;
    }
    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 1.8rem;
      height: 2px;
      border-radius: 1px;
      background-color: currentColor;
      top: 50%;
      left: 0;
      margin-top: -1px;
      transition: all 0.3s;
    }

    &:before {
      transform: translate(0, -0.7rem);
    }
    &:after {
      transform: translate(0, 0.7rem);
    }
  }

  &:hover {
    color: var(--header-link-hover-color);
  }

  &.is-active {
    > span {
      > span {
        transform: scale(0);
      }

      &:before {
        transform: translate(0, 0) rotate(45deg);
      }

      &:after {
        transform: translate(0, 0) rotate(-45deg);
      }
    }
  }
`

const Header: React.FC<IHeaderProps> = ({ isMenuOpen }) => {
  const dispatch = useDispatch()
  return (
    <HeaderWrapper>
      <HeaderLogo>
        <Link to="/users">Dashboard</Link>
      </HeaderLogo>
      <HeaderButtons>
        <HeaderButtonsIcon
          href="#"
          onClick={(e) => {
            e.preventDefault()
            dispatch(toggleUImenu())
          }}
          className={isMenuOpen ? 'is-active' : ''}
        >
          <span>
            <span>Menu</span>
          </span>
        </HeaderButtonsIcon>
      </HeaderButtons>
    </HeaderWrapper>
  )
}

export default Header
