import React from 'react'
import Layout from '@/components/Layout/Layout'
import { Box, Typography, Grid } from '@mui/material'
import VisualCode from '@/components/VisualCode'
import { getTranslations } from '@/utils/getTranslations'
import Image from 'next/image'

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

  const techs = [
    { src: '/techs/next.png', alt: 'next js logo' },
    { src: '/techs/react.png', alt: 'react js logo' },
    { src: '/techs/next.png', alt: 'next js logo' },
    { src: '/techs/next.png', alt: 'next js logo' },
    { src: '/techs/next.png', alt: 'next js logo' },
    { src: '/techs/next.png', alt: 'next js logo' },
    { src: '/techs/next.png', alt: 'next js logo' },
    { src: '/techs/next.png', alt: 'next js logo' },
  ]

  return (
    <Layout>
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
        <Grid container spacing={2}>
          {techs.map((tech, index) => (
            <Grid
              key={index}
              {...{ xs: 6, md: 4, lg: 3 }}
              minHeight={160}
              display='flex'
              justifyContent='center'
              alignItems='center'
            >
              <Image src={tech.src} alt={tech.alt} width='100' height='100' />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Layout>
  )
}
