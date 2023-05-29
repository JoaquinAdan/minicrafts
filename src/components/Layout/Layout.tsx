'use client';
import { Box,IconButton,Drawer,AppBar,Toolbar,CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { Bars3Icon } from '@heroicons/react/20/solid';
import React from 'react';
import useBreakpoint from '@/hook/useBreakpoint';
import themeCreated from '@/constants/theme';
import Lists from './Lists';

const drawerWidth = 240;
interface Props {
  window?: () => Window;
  children: React.ReactNode | React.ReactNode[];
}

export default function ResponsiveDrawer(props: Props): JSX.Element {
  const { window } = props;

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const [mode, setMode] = React.useState<'light' | 'dark'>('light');

  const theme = React.useMemo(() => themeCreated(mode), [mode]);

  const toggleTheme = () => {
    localStorage.setItem('themeMode', mode === 'light' ? 'dark' : 'light');
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  const matches = useBreakpoint('xs');

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const container = window !== undefined ? () => window().document.body : undefined;

  React.useEffect(() => {
    const storage = localStorage.getItem('themeMode');
    if (storage) setMode(storage as 'light' | 'dark');
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex' }}>
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
            display: { xs: 'block', sm: 'none' },
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <Bars3Icon className="h-6 w-6 text-white" />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          <Drawer
            container={container}
            variant="temporary"
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
            <Lists toggleTheme={toggleTheme} mode={mode} />
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: drawerWidth,
              },
            }}
            open
          >
            <Lists toggleTheme={toggleTheme} mode={mode} />
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{ flexGrow: 1, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
          {!matches && <Toolbar />}
          <Box sx={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', pt: {xs: '72px', sm: '52px'} }}>
            {props.children}
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
