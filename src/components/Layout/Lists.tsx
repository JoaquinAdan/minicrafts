import React from 'react'
import { Box, List, ListItem, ListItemButton, Divider, Button } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { paths } from '@/constants/paths'
import Logo from '@/components/svgs/Logo'
import { SunIcon, MoonIcon } from '@heroicons/react/20/solid'

type Props = {
  toggleTheme: () => void,
  mode: 'light' | 'dark',
}

const Lists = ({ toggleTheme, mode }: Props): JSX.Element => {
  const router = useRouter()
  const { asPath } = router
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <ListItemButton>
        <Link href={`/`}>
          <Logo />
        </Link>
        <Button onClick={toggleTheme}>
          {mode === 'light' ? <MoonIcon className='h-6 w-6 text-dark' /> : <SunIcon className='h-6 w-6 text-white' />}
        </Button>
      </ListItemButton>
      <Divider />
      <List>
        {paths.map((nav, index) => (
          <ListItem key={index} sx={{ justifyContent: 'center' }} disablePadding>
            <Link href={`/mini-app/${nav.path}`}>
              <ListItemButton>{nav.text}</ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
      <Link href={asPath} locale='es'>
        <Button>ES</Button>
      </Link>
      <Link href={asPath} locale='en'>
        <Button>EN</Button>
      </Link>
    </Box>
  )
}

export default Lists
