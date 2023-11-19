import React from 'react'
import styled from 'styled-components'

// Styled components for the table
const TableWrapper = styled.div`
  border: ${(props) => props.theme.components.blockBorder};
  border-radius: ${(props) => props.theme.components.blockRadius};
  max-width: 100%;

  &:not(:last-child) {
    margin-bottom: 3rem;
  }
`

const Table = styled.table`
  width: 100%;
  max-width: 100%;
  border: none;
  margin: 0;
  padding: 0;
  border-collapse: collapse;
  table-layout: fixed;

  > thead {
    > tr {
      > th {
        padding: 1rem 2rem;

        &:first-child {
          padding-left: 0;
        }

        &:last-child {
          padding-right: 0;
        }

        font-weight: 400;
        font-size: 1.6rem;
        line-height: 1.2;
        color: ${(props) => props.theme.colors.table.thColor};
      }
    }
  }

  > tbody {
    max-width: 100%;
    > tr {
      &.tr-100p {
        > td {
          opacity: 0.5;
        }
      }

      > td {
        padding: 2rem;
        font-size: 1.6rem;
        overflow-wrap: break-word;

        &:first-child {
          padding-left: 0;
        }

        &:last-child {
          padding-right: 0;
        }

        border-top: 1px solid ${(props) => props.theme.colors.table.tdBorderColor};

        &.td-link {
          font-size: 1.4rem;
        }

        &.td-ttu {
          text-transform: uppercase;
        }

        &.td-highlight {
          color: ${(props) => props.theme.base.brandColor};
        }

        &.td-highlight2 {
          font-weight: bold;
        }

        &.td-empty {
          text-align: center;
        }

        &.td-icon {
          position: relative;

          .icon-td {
            position: absolute;
            top: 50%;
            inset-inline-start: 0;
            transform: translate(calc(-100% - 0.4rem), -50%);

            @media (max-width: 768px) {
              top: 0;
              transform: translate(calc(-100% - 0.4rem), 20%);
            }
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    display: block;

    > thead {
      display: none;
    }
    > tbody {
      display: block;
      max-width: 100%;

      > tr {
        border-bottom: 1px solid ${(props) => props.theme.colors.table.tdBorderColor};
        display: flex;
        flex-direction: column;
        padding: 1rem 0;
        width: 100%;
        max-width: 100%;

        &:first-child {
          padding-top: 0;
        }

        &:last-child {
          //padding-bottom: 0;
        }

        > td {
          display: block;
          padding: 0.5rem 0;
          border-top: none;
          font-size: 1.4rem;
          max-width: 100%;

          &.very-first-mobile {
            order: -1;
          }

          &.td-empty {
            padding: 0;
          }

          &[data-title] {
            display: flex;
            width: 100%;
            align-items: flex-start;
            justify-content: flex-start;
            overflow-wrap: anywhere;
            &:before {
              content: attr(data-title);
              display: block;
              width: 45%;
              flex-shrink: 0;
              margin-right: 1.5rem;
              color: ${(props) => props.theme.colors.table.thColor};
              font-weight: normal;
            }
          }
        }
      }
    }
  }
`

export default { Wrapper: TableWrapper, Content: Table }
