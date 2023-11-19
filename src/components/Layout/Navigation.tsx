import BarChartIcon from '@mui/icons-material/BarChart'
import ReportIcon from '@mui/icons-material/Comment'
import PeopleIcon from '@mui/icons-material/People'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import * as React from 'react'
import { Link } from 'react-router-dom'

const mainListItems = (
  <React.Fragment>
    <ListItemButton component={Link} to={'/users'}>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Users" />
    </ListItemButton>

    <ListItemButton component={Link} to={'/reports'}>
      <ListItemIcon>
        <ReportIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItemButton>
    <ListItemButton component={Link} to={'/analytics'}>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Analytics" />
    </ListItemButton>
  </React.Fragment>
)

// sss

const Navigation = () => {
  return <List component="nav">{mainListItems}</List>
}

export default Navigation
