import React from 'react'
import { Box, Typography, Grid } from '@mui/material'
import VisualCode from '@/components/VisualCode'
import { getTranslations } from '@/utils/getTranslations'
import NextIcon from '@/components/svgs/NextIcon'
import ReactIcon from '@/components/svgs/ReactIcon'
import { useTheme } from '@mui/material'

const value = `import { useRouter } from 'next/router'
import es from '../../public/locales/es'
import en from '../../public/locales/en'

export const getTranslations = () => {
  const router = useRouter()
  const { locale } = router
  return locale === 'en' ? en : es
}`

export default function Home() {
  const t = getTranslations()
  const theme = useTheme()
  console.log(theme.palette.primary.main)
  const techs = [
    { Icon: <ReactIcon color={theme.palette.primary.main} />, alt: 'react js' },
    { Icon: <NextIcon color={theme.palette.primary.main} />, alt: 'next js' },
    { Icon: <NextIcon color={theme.palette.primary.main} />, alt: 'next js' },
    { Icon: <NextIcon color={theme.palette.primary.main} />, alt: 'next js' },
    { Icon: <NextIcon color={theme.palette.primary.main} />, alt: 'next js' },
    { Icon: <NextIcon color={theme.palette.primary.main} />, alt: 'next js' },
    { Icon: <NextIcon color={theme.palette.primary.main} />, alt: 'next js' },
    { Icon: <NextIcon color={theme.palette.primary.main} />, alt: 'next js' },
    { Icon: <NextIcon color={theme.palette.primary.main} />, alt: 'next js' },
  ]

  return (
    <Box sx={{ width: { xs: '95%', sm: '80%' } }}>
      <Typography
        variant='h4'
        className='font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-l from-pink-600 via-purple-500 to-blue-500'
      >
        {t.home.title}
      </Typography>
      <Typography
        variant='subtitle1'
        className='pt-4 pb-6 text-lg'
        dangerouslySetInnerHTML={{ __html: t.home.subtitle }}
      />
      <Box>
        <VisualCode value={value} height={'auto'} />
      </Box>
      <Typography variant='subtitle1' className='py-6 text-lg'>
        {t.home.techs}
      </Typography>
      <Grid
        container
        columns={{ xs: 4.1, sm: 12, md: 16, lg: 24, xl: 32 }}
        sx={{ gap: { xs: '5px', md: '10px' }, display: 'flex', justifyContent: 'center' }}
      >
        {techs.map((tech, index) => (
          <Grid
            key={index}
            xs={2}
            sm={4}
            md={4}
            className='border-blue-400 border-2 flex flex-col items-center justify-center columns py-4 px-1 w-28 rounded-md'
          >
            {tech.Icon}
            <Typography variant='subtitle1' className='text-lg'>
              {tech.alt}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
