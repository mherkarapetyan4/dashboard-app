import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material'
import React, { useEffect, useMemo } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { createReportRequest, editReportRequest } from 'shared/state/ducks/reports/actions'
import { IReport } from 'shared/state/ducks/reports/model'

import { setFormValues } from 'shared/utils/form'

interface ICreateReportProps {
  isOpen: boolean
  onClose: () => void
  data: IReport | null
}

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const ReportFormModal: React.FC<ICreateReportProps> = React.memo(({ isOpen, onClose, data }) => {
  const dispatch = useDispatch()
  const form = useForm<IReport>()
  const isEdition = useMemo(() => data !== null, [data])

  useEffect(() => {
    if (data) {
      setFormValues<IReport>(form.setValue, data)
    }
  }, [data, form])

  useEffect(() => {
    form.watch()
  }, [form])

  const handleSubmit = () => {
    //   should be a validation
    if (isEdition) {
      dispatch(editReportRequest({ data: form.getValues() }, () => onClose()))
    } else {
      dispatch(createReportRequest({ data: form.getValues() }, () => onClose()))
    }
  }

  return (
    <Dialog open={isOpen} onClose={onClose} fullWidth maxWidth={'sm'}>
      <>
        <DialogTitle>{isEdition ? `Edit - ${data?.title}` : 'Create New Report'}</DialogTitle>
        <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} style={{ paddingTop: 10 }}>
          <Controller
            name="title"
            control={form.control}
            render={({ field }) => <TextField {...field} label={'Title'} />}
          />
          <Controller
            name="date"
            control={form.control}
            render={({ field }) => (
              <>
                <InputLabel id={'test'}>Date</InputLabel>
                <Select {...field} labelId={'test'}>
                  {months.map((month, index) => (
                    <MenuItem key={index} value={index + 1}>
                      {month}
                    </MenuItem>
                  ))}
                </Select>
              </>
            )}
          />
          <Controller
            name="userId"
            control={form.control}
            render={({ field }) => <TextField {...field} label={'User Id'} />}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => onClose()}>Cancel</Button>
          <Button
            variant={'contained'}
            onClick={() => {
              handleSubmit()
            }}
          >
            Save
          </Button>
        </DialogActions>
      </>
    </Dialog>
  )
})

export default ReportFormModal
