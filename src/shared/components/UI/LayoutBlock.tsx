import React from 'react'
import styled from 'styled-components'

export const LayoutBlockWrapper = styled.div`
  margin-top: 3rem;
  margin-bottom: 6rem;

  > .header {
    margin-bottom: 2rem;
    font-weight: 700;
    font-size: 2.8rem;
    line-height: 1.2;
    color: black;
  }

  > .body {
  }
`

export const LayoutBlock: React.FC<{ title?: string; children?: React.ReactNode }> = ({ title, children }) => {
  return (
    <LayoutBlockWrapper>
      {title && <div className={'header'}>{title}</div>}
      <div className={'body'}>{children}</div>
    </LayoutBlockWrapper>
  )
}

export const Panel = styled.div`
  background-color: #ffffff;
  border-radius: 0.5rem;
  height: 100%;
  padding: 3rem;
`
