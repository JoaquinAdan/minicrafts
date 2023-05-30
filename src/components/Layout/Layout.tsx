'use client'
import { Box, IconButton, Drawer, AppBar, Toolbar } from '@mui/material'
import { Bars3Icon } from '@heroicons/react/20/solid'
import React from 'react'
import useBreakpoint from '@/hook/useBreakpoint'
import Lists from './Lists'

const drawerWidth = 240
interface Props {
  window?: () => Window;
  children: React.ReactNode | React.ReactNode[];
  mode: 'light' | 'dark';
  toggleTheme: () => void;
}

export default function Layout(props: Props): JSX.Element {
  const { window } = props

  const [mobileOpen, setMobileOpen] = React.useState(false)
  const [startX, setStartX] = React.useState(0)

  const matches = useBreakpoint('xs')

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    const touch = event.touches[0]
    setStartX(touch.clientX)
  }

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    const touch = event.touches[0]
    const differenceX = touch.clientX - startX
    const isMovingRight = differenceX > 50
    setMobileOpen(isMovingRight)
  }

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen)

  const container = window !== undefined ? () => window().document.body : undefined

  return (
    <Box
      sx={{ display: 'flex' }}
      className={`sidebar ${mobileOpen && true}`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <AppBar
        position='fixed'
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          display: { xs: 'block', sm: 'none' },
        }}
      >
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <Bars3Icon className='h-6 w-6 text-white' />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box component='nav' sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }} aria-label='mailbox folders'>
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }} // Better open performance on mobile.
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          <Lists toggleTheme={props.toggleTheme} mode={props.mode} />
        </Drawer>
        <Drawer
          variant='permanent'
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
          open
        >
          <Lists toggleTheme={props.toggleTheme} mode={props.mode} />
        </Drawer>
      </Box>
      <Box component='main' sx={{ flexGrow: 1, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
        {!matches && <Toolbar />}
        <Box sx={{ minHeight: '90vh', display: 'flex', justifyContent: 'center', py: { xs: '10vh', sm: '5vh' } }}>
          {props.children}
        </Box>
      </Box>
    </Box>
  )
}
