import { ArrowLeftIcon } from '@heroicons/react/20/solid'
import { Box, Button, useTheme } from '@mui/material'
import Link from 'next/link'
import React from 'react'

type Props = {
  children: React.ReactNode | React.ReactNode[],
}

const CssLayout = ({ children }: Props): JSX.Element => {
  const theme = useTheme()
  return (
    <Box sx={{ width: { xs: '95%', sm: '80%' } }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <Link href='/100-days-of-css/home'>
            <Button variant='outlined'>
              <ArrowLeftIcon className='h-6 w-6 text-inherit' />
            </Button>
          </Link>
        </Box>
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <Box
            sx={{
              borderColor: theme.palette.primary.main,
              minHeight: { xs: '300px', md: '400px', lg: '500px', xl: '600px' },
              minWidth: { xs: '300px', md: '400px', lg: '500px', xl: '600px' },
            }}
            className='border-2 p-2 rounded-md mt-8'
          >
            {children}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default CssLayout
