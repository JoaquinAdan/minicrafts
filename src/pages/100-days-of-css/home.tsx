import React from 'react'
import { Button, Grid, Box } from '@mui/material'
import Link from 'next/link'

const buttonData = [
  { path: '/100-days-of-css/day-1', text: '1' },
  { path: '/100-days-of-css/day-2', text: '2' },
  { path: '/100-days-of-css/day-3', text: '3' },
  { path: '#', text: '4' },
  { path: '#', text: '5' },
  { path: '#', text: '6' },
  { path: '#', text: '7' },
  { path: '#', text: '8' },
  { path: '#', text: '9' },
  { path: '#', text: '10' },
  { path: '#', text: '11' },
]

const Home = () => {
  return (
    <Box display='flex' flexDirection='column' alignItems='center'>
      100 days of css
      <Grid
        container
        columns={{ xs: 11, sm: 16, md: 30, lg: 50 }}
        sx={{ gap: { xs: '5px', md: '10px' }, display: 'flex', justifyContent: 'center' }}
      >
        {buttonData.map((data, index) => (
          <Grid key={index} item xs={2} md={4}>
            <Link href={data.path}>
              <Button variant='outlined'>{data.text}</Button>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Home
