'use client'

import { useRouter } from 'next/navigation'
import { useSettings } from '../context/SettingsContext'

export default function LanguageSwitcher() {
  const router = useRouter()
  const { language, setLanguage } = useSettings()

  const changeLanguage = (value) => {
    setLanguage(value)
    router.refresh()
  }

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>
        EN
      </button>

      <button onClick={() => changeLanguage('fa')}>
        FA
      </button>
    </div>
  )
}