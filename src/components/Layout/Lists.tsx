import React from 'react'
import { Box, List, ListItem, ListItemButton, Divider, Button, Menu, MenuItem } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Logo from '@/components/svgs/Logo'
import { SunIcon, MoonIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import { getTranslations } from '@/utils/getTranslations'

type Props = {
  toggleTheme: () => void,
  mode: 'light' | 'dark',
}

const Lists = ({ toggleTheme, mode }: Props): JSX.Element => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const t = getTranslations()

  const paths = [
    { text: t.paths.calculator, path: 'calculator' },
    { text: t.paths.temperature, path: 'temperature' },
  ]
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget)

  const handleClose = () => setAnchorEl(null)

  const router = useRouter()

  const { asPath, locale } = router

  const open = Boolean(anchorEl)

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <ListItemButton sx={{ display: 'flex', flexDirection: 'column' }}>
        <Link href={`/`}>
          <Logo />
        </Link>
        <Box>
          <Button onClick={toggleTheme}>
            {mode === 'light' ? <MoonIcon className='h-6 w-6 text-dark' /> : <SunIcon className='h-6 w-6 text-white' />}
          </Button>
          <Button
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            sx={{ color: '#0084de' }}
          >
            {locale === 'en' ? (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <Image src='/en.png' alt='united states flag' width='20' height='20' /> English
              </Box>
            ) : (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <Image src='/es.png' alt='bandera española' width='20' height='20' /> Español
              </Box>
            )}
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <Link href={asPath} locale='es'>
              <MenuItem onClick={handleClose}>
                <Image src='/es.png' alt='bandera española' width='20' height='20' /> Español
              </MenuItem>
            </Link>
            <Link href={asPath} locale='en'>
              <MenuItem onClick={handleClose}>
                <Image src='/en.png' alt='united states flag' width='20' height='20' /> English
              </MenuItem>
            </Link>
          </Menu>
        </Box>
      </ListItemButton>
      <Divider />
      <List>
        {paths.map((nav, index) => (
          <ListItem key={index} sx={{ justifyContent: 'center' }} disablePadding>
            <Link style={{ width: '100%' }} href={`/mini-app/${nav.path}`}>
              <ListItemButton sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                {nav.text}
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider />
      <ListItem sx={{ justifyContent: 'center' }} disablePadding>
        <Link style={{ width: '100%' }} href={`/100-days-of-css/home`}>
          <ListItemButton sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            {t.paths.cssDays}
          </ListItemButton>
        </Link>
      </ListItem>
    </Box>
  )
}

export default Lists
