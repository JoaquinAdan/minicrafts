import React from 'react'
import { Box, Typography, Grid } from '@mui/material'
import VisualCode from '@/components/VisualCode'
import { useTranslations } from '@/hook/useTranslation'
import Image from 'next/image'
import { useTheme } from '@mui/material'

const value = `import { useRouter } from 'next/router'
import es from '../../public/locales/es'
import en from '../../public/locales/en'

interface Translations {
  [key: string]: any;
}

export const useTranslations = (): Translations => {
  const router = useRouter()
  const { locale } = router
  return locale === 'en' ? en : es
}`

export default function Home() {
  const t = useTranslations()
  const theme = useTheme()
  const techs = [
    { src: '/svg/nextIcon.svg', alt: 'Next js' },
    { src: '/svg/reactIcon.svg', alt: 'React js' },
    { src: '/svg/typescriptIcon.svg', alt: 'TypeScript' },
    { src: '/svg/javascriptIcon.svg', alt: 'JavaScript' },
    { src: '/svg/tailwindIcon.svg', alt: 'Tailwind' },
    { src: '/svg/muiIcon.svg', alt: 'MUI' },
    { src: '/svg/codeMirrorIcon.svg', alt: 'Code Mirror' },
    { src: '/svg/heroIcon.svg', alt: 'HeroIcon' },
    { src: '/svg/prettierIcon.svg', alt: 'Prettier' },
    { src: '/svg/gitIcon.svg', alt: 'Git' },
    { src: '/svg/githubIcon.svg', alt: 'Github' },
  ]

  return (
    <Box sx={{ width: { xs: '95%', sm: '80%' } }}>
      <Typography
        className='text-transparent bg-clip-text bg-gradient-to-l from-pink-600 via-purple-500 to-blue-500'
        variant='h4'
        fontWeight='bold'
      >
        {t.home.title}
      </Typography>
      <Typography
        variant='subtitle1'
        fontSize='1.125rem'
        className='pt-4 pb-6 text-lg'
        dangerouslySetInnerHTML={{ __html: t.home.subtitle }}
      />
      <Box>
        <VisualCode value={value} height={'auto'} />
      </Box>
      <Typography variant='subtitle1' fontSize='1.125rem' className='py-6 text-lg'>
        {t.home.techs}
      </Typography>
      <Grid
        container
        columns={{ xs: 4.1, sm: 8, md: 16, lg: 24, xl: 34 }}
        sx={{ gap: { xs: '5px', md: '10px' }, display: 'flex', justifyContent: 'center' }}
      >
        {techs.map((tech, index) => (
          <Grid
            key={index}
            item
            xs={2}
            md={4}
            sx={{
              borderColor: theme.palette.primary.main,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            className='border-2 py-4 px-1 w-28 rounded-md'
          >
            <Image src={tech.src} alt={tech.alt} width={50} height={50} />
            <Typography variant='subtitle1' className='text-lg'>
              {tech.alt}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
