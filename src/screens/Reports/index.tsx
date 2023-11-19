import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Tooltip,
} from '@mui/material'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import Paper from '@mui/material/Paper'
import Toolbar from '@mui/material/Toolbar'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { months } from 'shared/constants/date'
import { deleteReportRequest, fetchReportsRequest } from 'shared/state/ducks/reports/actions'
import { IReport } from 'shared/state/ducks/reports/model'

import { useSelector } from 'shared/hooks/useStateSelector'

import Title from 'shared/components/MUI/Title'

import ReportFormModal from './components/ReportFormModal'

const ReportsScreen: React.FC = React.memo(() => {
  const dispatch = useDispatch()
  const { data } = useSelector((state) => state.reports)
  const [formModalIsOpened, setFormModalOpen] = useState(false)
  const [currentReport, setCurrentReport] = useState<IReport | null>(null)
  const [currentPage, setCurrentPage] = useState(0)

  useEffect(() => {
    dispatch(fetchReportsRequest({ params: { page: currentPage + 1, limit: 10 } }))
  }, [dispatch, currentPage])

  const openDeleteConfirmModal = (row: IReport) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      dispatch(deleteReportRequest({ id: row.id }))
    }
  }

  const handleEditReport = (report: IReport) => {
    setCurrentReport(report)
    setFormModalOpen(true)
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
          <Title>Orders</Title>
          <Toolbar>
            <Button
              variant="contained"
              onClick={() => {
                setFormModalOpen(true)
              }}
            >
              Create New Report
            </Button>
          </Toolbar>
          <TableContainer>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Title</TableCell>
                  <TableCell>User id</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{months[row.date - 1]}</TableCell>
                    <TableCell>{row.title}</TableCell>
                    <TableCell>{row.userId}</TableCell>
                    <TableCell align={'right'}>
                      <Box sx={{ display: 'flex', gap: '1rem' }}>
                        <Tooltip title="Edit">
                          <IconButton onClick={() => handleEditReport(row)}>
                            <EditIcon />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Delete">
                          <IconButton color="error" onClick={() => openDeleteConfirmModal(row)}>
                            <DeleteIcon />
                          </IconButton>
                        </Tooltip>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <TablePagination
            rowsPerPageOptions={[]}
            component="div"
            count={50}
            rowsPerPage={10}
            page={currentPage}
            onPageChange={(_, page) => setCurrentPage(page)}
          />
        </Paper>
      </Grid>
      <ReportFormModal
        isOpen={formModalIsOpened}
        onClose={() => {
          setFormModalOpen(false)
          setCurrentReport(null)
        }}
        data={currentReport}
      />
    </Grid>
  )
})

export default ReportsScreen
