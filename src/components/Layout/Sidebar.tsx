import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import { NavMenu, NavMenuList, NavMenuListItem, SidebarContainer, SidebarWrapper } from './SidebarStyles'

interface ISidebarProps {
  isMenuOpen: boolean
}

const Sidebar: React.FC<ISidebarProps> = ({ isMenuOpen }) => {
  const location = useLocation()

  return (
    <SidebarWrapper>
      <SidebarContainer>
        <NavMenu>
          <NavMenuList $isMenuOpen={isMenuOpen}>
            <NavMenuListItem
              className={location.pathname === '/' || location.pathname.match('/users') ? 'is-active' : ''}
            >
              <Link to={'/users'} title={'Users'}>
                <span className={'img'}>
                  <svg>
                    <use xlinkHref="#users"></use>
                  </svg>
                </span>
                <span className={'title'}>Users</span>
              </Link>
            </NavMenuListItem>
            <NavMenuListItem className={location.pathname.match('/reports') ? 'is-active' : ''}>
              <Link to={'/reports'} title={'Reports'}>
                <span className={'img'}>
                  <svg>
                    <use xlinkHref="#reports"></use>
                  </svg>
                </span>
                <span className={'title'}>Reports</span>
              </Link>
            </NavMenuListItem>
            <NavMenuListItem className={location.pathname.match('/analytics') ? 'is-active' : ''}>
              <Link to={'/analytics'} title={'Analytics'}>
                <span className={'img'}>
                  <svg>
                    <use xlinkHref="#analytics"></use>
                  </svg>
                </span>
                <span className={'title'}>Analytics</span>
              </Link>
            </NavMenuListItem>
          </NavMenuList>
        </NavMenu>
      </SidebarContainer>
      <svg width="0" height="0" className="hidden" fill="none" xmlns="http://www.w3.org/2000/svg">
        <symbol id="users" viewBox="0 0 50 50">
          <path
            d="M30.933,32.528  c-0.146-1.612-0.09-2.737-0.09-4.21c0.73-0.383,2.038-2.825,2.259-4.888c0.574-0.047,1.479-0.607,1.744-2.818  c0.143-1.187-0.425-1.855-0.771-2.065c0.934-2.809,2.874-11.499-3.588-12.397c-0.665-1.168-2.368-1.759-4.581-1.759  c-8.854,0.163-9.922,6.686-7.981,14.156c-0.345,0.21-0.913,0.878-0.771,2.065c0.266,2.211,1.17,2.771,1.744,2.818  c0.22,2.062,1.58,4.505,2.312,4.888c0,1.473,0.055,2.598-0.091,4.21C19.367,37.238,7.546,35.916,7,45h38  C44.455,35.916,32.685,37.238,30.933,32.528z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="2"
          />
        </symbol>

        <symbol id="reports" fill="none" viewBox="0 0 18 18">
          <path
            d="m14.902 4.735-3.492-3.63A.33.33 0 0 0 11.17 1h-7.01C3.52 1 3 1.542 3 2.205v13.59C3 16.458 3.52 17 4.158 17h9.684c.637 0 1.158-.54 1.158-1.205V4.987a.37.37 0 0 0-.098-.252Zm-3.39-2.52.112.117 2.096 2.181.112.117h-1.85a.484.484 0 0 1-.473-.492V2.215h.002Zm2.33 14.075H4.158a.486.486 0 0 1-.476-.493V2.207c0-.273.214-.492.476-.492h6.668v2.427c0 .664.521 1.206 1.159 1.206h2.333V15.8c0 .268-.214.49-.476.49Z"
            fill="currentColor"
          />
          <path
            d="M9.661 4.838a.35.35 0 0 1-.342.356H5.462a.35.35 0 0 1-.342-.356.35.35 0 0 1 .342-.357h3.857a.35.35 0 0 1 .342.357ZM12.878 7.612a.35.35 0 0 1-.342.356H5.462a.35.35 0 0 1-.342-.356.35.35 0 0 1 .342-.356h7.074c.19.002.342.16.342.356ZM12.88 10.388a.35.35 0 0 1-.342.356H5.464a.35.35 0 0 1-.342-.356.35.35 0 0 1 .342-.356h7.074a.35.35 0 0 1 .342.356ZM12.88 13.162a.35.35 0 0 1-.342.357H5.464a.35.35 0 0 1-.342-.357.35.35 0 0 1 .342-.356h7.074c.188 0 .342.161.342.356Z"
            fill="currentColor"
          />
        </symbol>
        <symbol id="analytics" viewBox="0 0 18 18">
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            d="M5.16 13.613V12.06M9 13.613v-3.105M12.84 13.612V8.947M12.84 4.387l-.345.405a14.162 14.162 0 0 1-7.335 4.53"
          />
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.643 4.387h2.197v2.19"
          />
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 16.5h4.5c3.75 0 5.25-1.5 5.25-5.25v-4.5C16.5 3 15 1.5 11.25 1.5h-4.5C3 1.5 1.5 3 1.5 6.75v4.5C1.5 15 3 16.5 6.75 16.5Z"
          />
        </symbol>
      </svg>
    </SidebarWrapper>
  )
}

export default Sidebar
