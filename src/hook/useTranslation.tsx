import { useMemo } from 'react'
import { useRouter } from 'next/router'
import es from '../../public/locales/es'
import en from '../../public/locales/en'

interface Translations {
  [key: string]: any;
}

export default function useTranslations(): Translations {
  const router = useRouter()
  const { locale } = router

  const translations = useMemo(() => {
    return locale === 'en' ? en : es
  }, [locale])

  return translations
}
