import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import themeCreated from '@/constants/theme'
import Layout from '@/components/Layout/Layout'
import {useState, useMemo, useEffect} from 'react'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  const [mode, setMode] = useState<'light' | 'dark'>('light')
  const theme = useMemo(() => themeCreated(mode), [mode])

  const toggleTheme = () => {
    localStorage.setItem('themeMode', mode === 'light' ? 'dark' : 'light')
    setMode(mode === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    const storage = localStorage.getItem('themeMode');
    if (storage) setMode(storage as 'light' | 'dark');
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout mode={mode} toggleTheme={toggleTheme}>
      <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}
