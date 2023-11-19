import { LinearProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchUsersRequest } from 'shared/state/ducks/users/actions'

import { useSelector } from 'shared/hooks/useStateSelector'

import Title from 'shared/components/MUI/Title'

const UsersScreen: React.FC = () => {
  const dispatch = useDispatch()
  const tableEl = useRef<HTMLDivElement>(null)
  const [distanceBottom, setDistanceBottom] = useState(0)
  const { pending, data } = useSelector((state) => state.users)
  const [hasMore] = useState(true)
  const [limit, setLimit] = useState(20)

  const scrollListener = useCallback(() => {
    if (tableEl.current === null) return

    const bottom = tableEl.current.scrollHeight - tableEl.current.clientHeight

    if (!distanceBottom) {
      setDistanceBottom(Math.round(bottom * 0.2))
    }
    if (tableEl.current.scrollTop > bottom - distanceBottom && hasMore && !pending) {
      setLimit((prev) => {
        // to avoid this we should have total count of data from db
        if (prev - data.length > 10) return prev
        return prev + 5
      })
    }
  }, [hasMore, pending, distanceBottom, data])

  useLayoutEffect(() => {
    const tableRef = tableEl.current
    tableRef?.addEventListener('scroll', scrollListener)
    return () => {
      tableRef?.removeEventListener('scroll', scrollListener)
    }
  }, [scrollListener])

  useEffect(() => {
    dispatch(fetchUsersRequest({ params: { page: 1, limit } }))
  }, [dispatch, limit])

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
          <Title>Users</Title>
          <TableContainer ref={tableEl} sx={{ maxHeight: 440 }}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell>name</TableCell>
                  <TableCell>email</TableCell>
                  <TableCell>date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.dateJoined}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            {pending && <LinearProgress />}
          </TableContainer>
          {/*<Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>*/}
          {/*  See more orders*/}
          {/*</Link>*/}
        </Paper>
      </Grid>
    </Grid>
  )
}

export default UsersScreen
