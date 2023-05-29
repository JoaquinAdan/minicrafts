import React from 'react'
import Layout from '@/components/Layout/Layout'
import { Box, Typography } from '@mui/material'
import VisualCode from '@/components/VisualCode'
import { getTranslations } from '@/utils/getTranslations'

const value = `  <Layout>
    <div>hola</div>
    <CodeMirror
      value="console.log('hello world!');"
      editable={false}
      height='200px'
      theme={xcodeDark}
      extensions={[javascript({ jsx: true })]}
    />
  </Layout>`

export default function Home() {
  const t = getTranslations()
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
          className='pt-4 pb-8 text-lg'
          dangerouslySetInnerHTML={{ __html: t.home.subtitle }}
        />
        <Box>
          <VisualCode value={value} />
        </Box>
      </Box>
    </Layout>
  )
}
