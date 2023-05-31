import { ClipboardDocumentListIcon } from '@heroicons/react/20/solid'
import { xcodeDark } from '@uiw/codemirror-theme-xcode'
import toast, { Toaster } from 'react-hot-toast'
import { javascript } from '@codemirror/lang-javascript'
import CodeMirror from '@uiw/react-codemirror'
import { Box } from '@mui/material'
import useBreakpoint from '@/hook/useBreakpoint'
import useTranslations from '@/hook/useTranslation'
import React from 'react'

type Props = {
  value: string,
  height: string,
}

const VisualCode = ({ value, height }: Props): JSX.Element => {
  const t = useTranslations()
  const matches = useBreakpoint('sm')
  const copyContent = async () => {
    try {
      await navigator.clipboard.writeText(value)
      ;(() => toast.success(t.toast.copySuccess))()
    } catch (err) {
      ;(() => toast.error(t.toast.copyError))()
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
