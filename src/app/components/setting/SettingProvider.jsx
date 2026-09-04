'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import en from '../translation/en'
import fa from '../translation/fa'

const SettingsContext = createContext()

export function SettingsProvider({ children }) {
  const [theme, setTheme] = useState('dark')

  const [primaryColor, setPrimaryColor] = useState('#22c55e')

  const [direction, setDirection] = useState('ltr')

  const [language, setLanguageState] = useState('en')
  const setLanguage = (value) => {
    setLanguageState(value)
    document.cookie = `language=${value};path=/; max-age=31536000`
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const savedColor = localStorage.getItem('primaryColor')
    const savedLangusge = document.cookie.split('; ').find(row=>row.startsWith('language='))?.split('=')[1]

    if (savedTheme === 'light' || savedTheme === 'dark') {
      setTheme(savedTheme)
    }

    if (savedLangusge === 'en' || savedLangusge === 'fa') {
      setLanguage(savedLangusge)
    }

    if (savedColor) {
      setPrimaryColor(savedColor)
    }
  }, [])


  useEffect(() => {
    const root = document.documentElement

    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }

    localStorage.setItem('theme', theme)
  }, [theme])


  useEffect(() => {
    document.documentElement.style.setProperty(
      '--primary', primaryColor
    )

    localStorage.setItem('primaryColor', primaryColor)
  }, [primaryColor])


  useEffect(() => {
    document.documentElement.dir = direction
    localStorage.setItem('direction', direction)
  }, [direction])

  useEffect(() => {
    const newDirection = language === 'fa' ? 'rtl' : 'ltr'
    setDirection(newDirection)
  }, [language])


  return (
    <SettingsContext.Provider value={{ theme, setTheme, primaryColor, setPrimaryColor, direction, setDirection, language, setLanguage }}>
      {children}
    </SettingsContext.Provider>
  )
}

export function useSettings() {
  return useContext(SettingsContext)
}