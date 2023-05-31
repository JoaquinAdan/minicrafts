import { useRouter } from 'next/router'
import es from '../../public/locales/es'
import en from '../../public/locales/en'

interface Translations {
  [key: string]: any;
}

export const useTranslations = (): Translations => {
  const router = useRouter()
  const { locale } = router
  return locale === 'en' ? en : es
}
