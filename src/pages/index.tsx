import React from 'react'
import { Box, Typography, Grid } from '@mui/material'
import VisualCode from '@/components/VisualCode'
import useTranslations from '@/hook/useTranslation'
import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from '@mui/material'

const value = `import { useMemo } from 'react'
import { useRouter } from 'next/router'
import es from '../../public/locales/es'
import en from '../../public/locales/en'

interface Translations {
  [key: string]: any;
}

export default function useTranslations(): Translations {
  const router = useRouter()
  const { locale } = router
  const translations = useMemo(() => {
    return locale === 'en' ? en : es
  }, [locale])
  return translations
}
`

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
    { src: '/svg/vercelIcon.svg', alt: 'Vercel' },
  ]

  return (
    <Box sx={{ width: { xs: '95%', sm: '80%' } }}>
      <Typography
        className='text-transparent bg-clip-text bg-gradient-to-l from-pink-600 via-purple-500 to-blue-500'
        variant='h4'
        sx={{ fontWeight: 'bold', fontSize: '2rem' }}
      >
        {t.home.title}
      </Typography>
      <Typography
        variant='subtitle1'
        sx={{ fontSize: '1.125rem', pt: '1rem', pb: '1.5rem' }}
        dangerouslySetInnerHTML={{ __html: t.home.subtitle }}
      />
      <Box>
        <VisualCode value={value} height={'auto'} />
      </Box>
      <Typography variant='subtitle1' fontSize='1.125rem' sx={{ fontSize: '1.125rem', py: '1.5rem' }}>
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
            sx={{ borderColor: theme.palette.primary.main, height: '100%' }}
            className='border-2 py-4 px-1 w-28 rounded-md'
          >
            <Box
              component={Link}
              sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              href='https://twitter.com/'
              passHref
            >
              <Image src={tech.src} alt={tech.alt} width={50} height={50} />
              <Typography variant='subtitle1' sx={{ fontSize: '1.125rem' }}>
                {tech.alt}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
