import { ClipboardDocumentListIcon } from '@heroicons/react/20/solid'
import { xcodeDark } from '@uiw/codemirror-theme-xcode'
import toast, { Toaster } from 'react-hot-toast'
import { javascript } from '@codemirror/lang-javascript'
import CodeMirror from '@uiw/react-codemirror'
import { Box } from '@mui/material'
import useBreakpoint from '@/hook/useBreakpoint'
import React from 'react'

type Props = {
  value: string,
  height: string,
}

const VisualCode = ({ value, height }: Props): JSX.Element => {
  const matches = useBreakpoint('sm')
  const copyContent = async () => {
    try {
      await navigator.clipboard.writeText(value)
      ;(() => toast.success('Codigo copiado correctamente pa'))()
    } catch (err) {
      ;(() => toast.error('Hubo un error pibe'))()
    }
  }
  return (
    <Box sx={{ position: 'relative' }}>
      <CodeMirror
        value={value}
        editable={false}
        height={height}
        width='100%'
        theme={xcodeDark}
        extensions={[javascript({ jsx: true })]}
      />
      <Box
        onClick={copyContent}
        className='absolute top-2 right-2 border-2 border-white rounded-md flex text-white	px-2 py-1 cursor-pointer'
      >
        <ClipboardDocumentListIcon className='h-6 w-6 text-white' />
        {matches && 'Copy'}
      </Box>
      <Toaster />
    </Box>
  )
}

export default VisualCode
