import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import {useState, useMemo, useEffect} from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import themeCreated from '@/styles/theme'
import Layout from '@/components/Layout/Layout'
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
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout mode={mode} toggleTheme={toggleTheme}>
        <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}
