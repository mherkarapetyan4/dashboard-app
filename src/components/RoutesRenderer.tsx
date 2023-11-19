import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AnalyticsScreen from 'screens/Analytics'
import ReportsScreen from 'screens/Reports'
import UsersScreen from 'screens/Users'

import Layout from './Layout'

const RoutesRenderer: React.FC = () => {
  return (
    <Routes>
      <Route
        path={'/'}
        element={
          <Layout>
            <UsersScreen />
          </Layout>
        }
      />
      <Route
        path={'/users'}
        element={
          <Layout>
            <UsersScreen />
          </Layout>
        }
      />
      <Route
        path={'/reports'}
        element={
          <Layout>
            <ReportsScreen />
          </Layout>
        }
      />
      <Route
        path={'/analytics'}
        element={
          <Layout>
            <AnalyticsScreen />
          </Layout>
        }
      />
    </Routes>
  )
}

export default RoutesRenderer
