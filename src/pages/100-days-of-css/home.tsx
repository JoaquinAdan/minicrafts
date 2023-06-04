import { Button, Grid, Box, Typography } from '@mui/material'
import useTranslations from '@/hook/useTranslation'
import { useRouter } from 'next/router'
import Link from 'next/link'
import React from 'react'

const fulfilled = 1

const generateButtonData = () => {
  const buttonData = []
  for (let i = 1; i <= 100; i++) {
    const button = {
      path: `/100-days-of-css/day-${i}`,
      text: `${i}`,
      fulfilled: i > fulfilled,
    }
    buttonData.push(button)
  }
  return buttonData
}
const Home = () => {
  const t = useTranslations()
  const router = useRouter()

  const { asPath } = router

  return (
    <Box sx={{ width: { xs: '95%', sm: '80%' } }}>
      <Typography
        className='text-transparent bg-clip-text bg-gradient-to-l from-pink-600 via-purple-500 to-blue-500'
        variant='h4'
        sx={{ fontWeight: 'bold', fontSize: '2rem' }}
      >
        {t.daysOfCss.title}
      </Typography>
      <Typography
        variant='subtitle1'
        sx={{ fontSize: '1.125rem', pt: '1rem', pb: '1.5rem' }}
        dangerouslySetInnerHTML={{ __html: t.daysOfCss.subtitle }}
      />
      <Grid
        container
        columns={{ xs: 9, sm: 16, md: 30, lg: 46 }}
        sx={{ gap: { xs: '5px', md: '10px' }, display: 'flex', justifyContent: 'center' }}
      >
        {generateButtonData().map((data, index) => (
          <Grid key={index} item xs={2} md={4} display='flex' justifyContent='center'>
            <Link href={data.fulfilled ? asPath : data.path} style={{ cursor: 'inherit' }}>
              <Button variant='outlined' disabled={data.fulfilled}>
                {data.text}
              </Button>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Home
