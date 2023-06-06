import React from 'react'
import Image from 'next/image'
import { Box, Typography } from '@mui/material'
import useTranslations from '@/hook/useTranslation'

const WorkInProgress = (): JSX.Element => {
  const t = useTranslations()

  return (
    <Box position='relative' display='flex' alignItems='center' justifyContent='center' width={300} height={300}>
      <Typography
        variant='h4'
        sx={{
          fontWeight: 'bold',
          fontSize: '2.5rem',
          position: 'absolute',
          top: '65%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          color: '#000',
        }}
      >
        {t.workInProgress}
      </Typography>
      <Image src='/workInProgress.png' alt='work in progress' width={300} height={300} />
    </Box>
  )
}

export default WorkInProgress
