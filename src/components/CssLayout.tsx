import { ArrowLeftIcon } from '@heroicons/react/20/solid'
import { Box, Button, Typography, useTheme } from '@mui/material'
import Link from 'next/link'
import React from 'react'

type Props = {
  children: React.ReactNode | React.ReactNode[],
  text: string,
}

const CssLayout = ({ children, text }: Props): JSX.Element => {
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
        <Box sx={{ display: 'grid', placeItems: 'center' }}>
          <Typography
            variant='subtitle1'
            sx={{ fontSize: '1.125rem', mt: '1rem' }}
            dangerouslySetInnerHTML={{ __html: text }}
          />
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Box
              sx={{
                borderColor: theme.palette.primary.main,
                minHeight: { xs: '300px', md: '400px', lg: '450px' },
                minWidth: { xs: '300px', md: '400px', lg: '450px' },
                borderWidth: '2px',
                p: '2px',
                mt: '1rem',
                borderRadius: '8px',
              }}
            >
              {children}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default CssLayout
