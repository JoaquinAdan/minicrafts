import React from 'react'
import Layout from '@/components/Layout/Layout'
import { useRouter } from 'next/router'
import es from '../../../public/locales/es'
import en from '../../../public/locales/en'

const Temperature = (): JSX.Element => {
  const router = useRouter()
  const { locale } = router
  const t = locale === 'en' ? en : es
  return (
    <Layout>
      <div>
        {t.title}
        app temperature
      </div>
    </Layout>
  )
}

export default Temperature
