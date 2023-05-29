'use client';
import { javascript } from '@codemirror/lang-javascript';
import { xcodeDark } from '@uiw/codemirror-theme-xcode';
import CodeMirror from '@uiw/react-codemirror';
import React from 'react';
import Layout from '@/components/Layout/Layout';
import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import es from '../../public/locales/es';
import en from '../../public/locales/en';

const value = ` return (
  <Layout>
    <div>hola</div>
    <CodeMirror
      value="console.log('hello world!');"
      editable={false}
      height='200px'
      theme={xcodeDark}
      extensions={[javascript({ jsx: true })]}
    />
  </Layout>
)`;

export default function Home() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : es;
  return (
    <Layout>
      <Box sx={{ width: '80%' }}>
        <Typography
          variant="h4"
          className="font-extrabold pb-4 text-transparent text-4xl bg-clip-text bg-gradient-to-l from-pink-600 via-purple-500 to-blue-500"
        >
          {t.title}
          Welcome to MiniCrafts
        </Typography>
        <Typography variant="subtitle1" className="pt-4 pb-8">
          Welcome to MiniCrafts! On this website, you will discover components
          and mini applications that @JoaquinAdan creates with the purpose of
          practice and sharing to the community in case they can be useful to
          anyone. Here, you'll find the main code for each component, including
          the logic and styles that make everything work and look as intended.
        </Typography>
        <Box>
          <CodeMirror
            value={value}
            editable={false}
            height="280px"
            width="100%"
            theme={xcodeDark}
            extensions={[javascript({ jsx: true })]}
          />
        </Box>
      </Box>
    </Layout>
  );
}
