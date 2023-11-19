import {
  MenuItem,
  Select,
  type SelectChangeEvent,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import { LineChart } from '@mui/x-charts/LineChart'
import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { months } from 'shared/constants/date'
import { fetchReportsRequest } from 'shared/state/ducks/reports/actions'
import { IReport } from 'shared/state/ducks/reports/model'

import { useSelector } from 'shared/hooks/useStateSelector'

interface ReportCounts {
  [date: string]: number
}
const AnalyticsScreen: React.FC = () => {
  const dispatch = useDispatch()
  const { data } = useSelector((state) => state.reports)
  const [currentMonth] = useState<number | string>(1)

  const reportsByMonths = useMemo(() => {
    const obj: ReportCounts = {}

    data.forEach((row: IReport) => {
      if (obj[row.date]) {
        obj[row.date] = obj[row.date] + 1
      } else {
        obj[row.date] = 1
      }
    })

    return months.map((_, idx) => (obj[idx + 1] ? obj[idx + 1] : 0))
  }, [data])

  const reportsByUsers = useMemo(() => {
    const obj: ReportCounts = {}

    data.forEach((row: IReport) => {
      if (obj[row.userId]) {
        obj[row.userId] = obj[row.userId] + 1
      } else {
        obj[row.userId] = 1
      }
    })

    return obj
  }, [data])

  useEffect(() => {
    dispatch(fetchReportsRequest({ params: { filter: ' ' } }))
  }, [dispatch])

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8} lg={8}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 240,
          }}
        >
          <LineChart
            series={[{ data: reportsByMonths, label: 'reports', area: true, showMark: false }]}
            xAxis={[{ scaleType: 'point', data: months }]}
            sx={{
              '.MuiLineElement-root': {
                display: 'none',
              },
            }}
          />
        </Paper>
      </Grid>
      <Grid item xs={12} md={4} lg={4}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 240,
          }}
        >
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>User id</TableCell>
                  <TableCell>Total Reports</TableCell>
                </TableRow>
              </TableHead>
              {Object.keys(reportsByUsers).map((row, idx) => {
                return (
                  <TableRow key={idx}>
                    <TableCell>{row}</TableCell>
                    <TableCell>{reportsByUsers[row]}</TableCell>
                  </TableRow>
                )
              })}
            </Table>
          </TableContainer>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default AnalyticsScreen
