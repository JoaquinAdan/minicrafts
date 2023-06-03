import React from 'react'
import { Button, Grid, Box } from '@mui/material'
import Link from 'next/link'

const generateButtonData = () => {
  const buttonData = []

  for (let i = 1; i <= 100; i++) {
    const button = {
      path: `/100-days-of-css/day-${i}`,
      text: `${i}`,
    }
    buttonData.push(button)
  }

  return buttonData
}

const Home = () => {
  return (
    <Box display='flex' flexDirection='column' alignItems='center'>
      100 days of css
      <Grid
        container
        columns={{ xs: 11, sm: 16, md: 30, lg: 46 }}
        sx={{ gap: { xs: '5px', md: '10px' }, display: 'flex', justifyContent: 'center' }}
      >
        {generateButtonData().map((data, index) => (
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
