import React from 'react'
import { Button } from '@mui/material'
import Link from 'next/link'

const Home = () => {
  return (
    <div>
      100 days of css
      <Link href='/100-days-of-css/dayOne'>
        <Button>1</Button>
      </Link>
      <Link href='/100-days-of-css/dayTwo'>
        <Button>2</Button>
      </Link>
    </div>
  )
}

export default Home
