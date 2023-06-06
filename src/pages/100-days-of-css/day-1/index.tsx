import WorkInProgress from '@/components/WorkInProgress'
import CssLayout from '@/components/CssLayout'
import { Box } from '@mui/material'
import React from 'react'

const DayOne = (): JSX.Element => {
  return (
    <CssLayout>
      <Box sx={{ width: '100%', height: '100%', display: 'grid', placeItems: 'center' }}>
        <WorkInProgress />
      </Box>
    </CssLayout>
  )
}

export default DayOne
