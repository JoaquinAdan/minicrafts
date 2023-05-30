import React from 'react'
import { useRouter } from 'next/router'
import es from '../../../public/locales/es'
import en from '../../../public/locales/en'

const Temperature = (): JSX.Element => {
  const router = useRouter()
  const { locale } = router
  const t = locale === 'en' ? en : es
  return (
    <div>
      {t.home.title}
      app temperature
    </div>
  )
}

export default Temperature
