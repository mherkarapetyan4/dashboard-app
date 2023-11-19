import styled from 'styled-components'

export const LayoutWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  transition: 0.3s;

  &.main-nav-open {
    @media (min-width: 769px) {
      margin-left: calc(
        ${(props) => props.theme.size.nav.openedWidth} - ${(props) => props.theme.size.nav.closedWidth}
      );
    }

    @media (max-width: 768px) {
      margin-right: 0;
      margin-left: 0;
    }
  }
`

export const LayoutNavigation = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 502;

  background: ${({ theme }) => theme.base.headerBg};
  justify-content: space-between;
  transition: 0.2s all linear;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    left: 0;
    min-width: 320px;
    display: block;
  }
`

export const LayoutMain = styled.div`
  padding: 3rem;
  flex-grow: 1;
  min-height: 0;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 2rem;
  }
`

export const LayoutParent = styled.div`
  padding-left: ${(props) => props.theme.size.nav.closedWidth}; // main n av width
  padding-top: ${(props) => props.theme.size.header.height}; // header   hei ght
  position: relative;
  z-index: 1;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding-left: 0;
    padding-top: 7.3rem;
  }
`
