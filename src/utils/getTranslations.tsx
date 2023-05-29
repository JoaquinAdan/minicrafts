import { useRouter } from 'next/router'
import es from '../../public/locales/es'
import en from '../../public/locales/en'

export const getTranslations = () => {
  const router = useRouter()
  const { locale } = router
  return locale === 'en' ? en : es
}
