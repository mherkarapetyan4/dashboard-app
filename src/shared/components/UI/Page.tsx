import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'

interface IPageProps {
  children: ReactNode
  title?: string | ReactNode
}

const PageWrapper = styled.div`
  max-width: 1920px;
  width: 100%;
`

const PageHeader = styled.div`
  margin-bottom: 2rem;
`
const PageContent = styled.div``

export const Page: FC<IPageProps> = ({ children, title }) => {
  return (
    <PageWrapper>
      <PageHeader>{title}</PageHeader>
      <PageContent>{children}</PageContent>
    </PageWrapper>
  )
}
