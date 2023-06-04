import { ArrowLeftIcon } from '@heroicons/react/20/solid'
import { Box, Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'
interface Props {
  mode: 'light' | 'dark';
}

const DayOne = (props: Props) => {
  console.log(props.mode)
  return (
    <Box sx={{ width: { xs: '95%', sm: '80%' } }}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <ArrowLeftIcon className='h-6 w-6 text-white' />
        <Link href='/100-days-of-css/home'>
          <Button>home</Button>
        </Link>
        <div style={{ height: '300px', width: '300px', background: 'red' }} />
      </div>
    </Box>
  )
}

export default DayOne
