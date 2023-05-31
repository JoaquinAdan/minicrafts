import React from 'react'
import { Box, Typography, Grid } from '@mui/material'
import VisualCode from '@/components/VisualCode'
import { getTranslations } from '@/utils/getTranslations'
import {
  CodeMirrorIcon,
  TypescriptIcon,
  JavscriptIcon,
  PrettierIcon,
  TailwindIcon,
  GithubIcon,
  ReactIcon,
  NextIcon,
  HeroIcon,
  MuiIcon,
  GitIcon,
} from '@/components/svgs/svgStorage'
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
    { Icon: <NextIcon color={theme.palette.primary.main} />, alt: 'Next js' },
    { Icon: <ReactIcon color={theme.palette.primary.main} />, alt: 'React js' },
    { Icon: <TypescriptIcon color={theme.palette.primary.main} />, alt: 'TypeScript' },
    { Icon: <JavscriptIcon color={theme.palette.primary.main} />, alt: 'JavaScript' },
    { Icon: <TailwindIcon color={theme.palette.primary.main} />, alt: 'Tailwind' },
    { Icon: <MuiIcon color={theme.palette.primary.main} />, alt: 'MUI' },
    { Icon: <CodeMirrorIcon color={theme.palette.primary.main} />, alt: 'Code Mirror' },
    { Icon: <HeroIcon color={theme.palette.primary.main} />, alt: 'HeroIcon' },
    { Icon: <PrettierIcon color={theme.palette.primary.main} />, alt: 'Prettier' },
    { Icon: <GitIcon color={theme.palette.primary.main} />, alt: 'Git' },
    { Icon: <GithubIcon color={theme.palette.primary.main} />, alt: 'Github' },
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
        columns={{ xs: 4.1, sm: 12, md: 16, lg: 24, xl: 34 }}
        sx={{ gap: { xs: '5px', md: '10px' }, display: 'flex', justifyContent: 'center' }}
      >
        {techs.map((tech, index) => (
          <Grid
            key={index}
            xs={2}
            md={4}
            sx={{ borderColor: theme.palette.primary.main }}
            className='border-2 flex flex-col items-center justify-center columns py-4 px-1 w-28 rounded-md'
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
