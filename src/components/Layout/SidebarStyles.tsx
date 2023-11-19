import styled, { css } from 'styled-components'

interface ISidebarWrapperProps {
  $isMenuOpen: boolean
}

export const SidebarWrapper = styled.div`
  flex: none;
  transition: 0.2s all linear;
  position: fixed;
  left: 0;
  top: ${(props) => props.theme.size.header.height};
  bottom: 0;
  z-index: 501;

  .main-nav-open & {
    opacity: 1;
    visibility: visible;
  }
`

export const SidebarContainer = styled.div`
  transition: 0.2s all linear;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 2;
  width: ${(props) => props.theme.size.nav.openedWidth};
  display: flex;
  flex-direction: column;
  //overflow: hidden;
  box-shadow: ${(props) => props.theme.base.blockShadow};
  background-color: ${(props) => props.theme.colors.menu.bg};

  @media (max-width: 768px) {
    width: 24.2rem;
    padding: 2rem 0;
    overflow-y: auto;
    justify-content: flex-start;
  }

  .main-nav-hide & {
    width: ${(props) => props.theme.size.nav.closedWidth};
    opacity: 1;
    visibility: visible;
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);

    @media (max-width: 768px) {
      transform: translateX(-120%);
    }
  }
`

export const NavMenu = styled.div`
  flex: 1;
  padding: 5rem 0;
  height: calc(100vh - ${(props) => props.theme.size.header.height});

  @media (max-width: 768px) {
    padding: 0;
    height: auto;
    flex-grow: 0;
  }
`

export const NavMenuListItem = styled.li`
  margin-bottom: 1.6rem;
  position: relative;
  padding: 0;

  @media (max-width: 768px) {
    margin-bottom: 0.2rem;
    padding: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }

  > a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${(props) => props.theme.colors.menu.main};
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.2;
    transition: color 0.3s;
    padding: 1rem 0 1rem 4.9rem;

    svg {
      width: 1.8rem;
      height: 1.8rem;
      flex: none;
      color: ${(props) => props.theme.colors.menu.fill};
      transition: color 0.3s;
    }

    .title {
      margin-inline-start: 2rem;
      font-size: 1.5rem;
      transition: 0.3s all ease-in-out;
      white-space: nowrap;
      padding-top: 0.4rem;

      @media (max-width: 768px) {
        margin-left: 2rem;
        font-size: 1.6rem;
      }
    }

    &:hover {
      color: ${(props) => props.theme.colors.menu.hover};
      svg {
        color: ${(props) => props.theme.colors.menu.fillHover};
      }
    }
  }

  &.is-active {
    position: relative;

    &:after {
      content: '';
      display: block;
      position: absolute;
      z-index: -1;
      inset-inline-start: 1.1rem;
      inset-inline-end: 0;
      top: 50%;
      transform: translateY(-47%);
      height: 5rem;
      border-start-start-radius: 100px;
      border-end-start-radius: 100px;
      background-color: ${(props) => props.theme.colors.menu.activeBg};
    }

    > a {
      color: ${(props) => props.theme.colors.menu.active};

      svg {
        color: ${(props) => props.theme.colors.menu.fillActive};
      }

      &:hover {
        color: ${(props) => props.theme.colors.menu.active};

        svg {
          color: ${(props) => props.theme.colors.menu.fillActive};
        }
      }
    }
  }
`

export const NavMenuList = styled.ul<ISidebarWrapperProps>`
  margin: 0;
  padding: 0;
  list-style: none;

  @media (max-width: 768px) {
    padding-bottom: 2rem;
    border-bottom: 1px solid #dddbe6;
  }

  ${NavMenuListItem} {
    > a {
      position: relative;
      > .title {
        ${(props) =>
          !props.$isMenuOpen
            ? css`
                opacity: 0;
                visibility: hidden;
                pointer-events: none;

                @media (max-width: 768px) {
                  visibility: visible;
                  opacity: 1;
                  pointer-events: auto;
                }
              `
            : ''}
      }

      ${(props) =>
        !props.$isMenuOpen
          ? css`
              @media (min-width: 769px) {
                &:after {
                  content: attr(title);
                  display: block;
                  position: absolute;
                  top: 50%;
                  inset-inline-start: calc(100% - 1rem);
                  color: #ffffff;
                  background-color: ${() => props.theme.base.brandColor};
                  padding: 0.3em 0.7em;
                  transform: translate(0, -50%) scale(0);
                  border-radius: var(--block-radius);
                  opacity: 0;
                  transition: all 0.1s ease-out;
                  font-size: 1.4rem;
                }

                &:hover {
                  &:after {
                    opacity: 1;
                    transform: translate(0, -50%) scale(1);
                  }
                }
              }
            `
          : ''}
    }
  }
`
