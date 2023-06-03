import React from 'react'
import { Button } from '@mui/material'
import Link from 'next/link'

const dayOne = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Link href='/100-days-of-css/home'>
        <Button>home</Button>
      </Link>
      <div style={{ height: '300px', width: '300px', background: 'red' }} />
    </div>
  )
}

export default dayOne
