import React from 'react'
import { ThemeContextType } from '../../../data'

export const themes = {
  dark: 'dark',
  light: 'light',
}

export const ThemeContext = React.createContext<Partial<ThemeContextType>>({})

const getTheme = () => {
  const theme = `${window?.localStorage?.getItem('theme')}`
  if (Object.values(themes).includes(theme)) return theme

  const userMedia = window.matchMedia('(prefers-color-scheme: light)')
  if (userMedia.matches) return themes.light

  return themes.dark
}

export const ThemeProvider = ({ children }: { children: any }) => {
  const [ theme, setTheme ] = React.useState(getTheme)

  React.useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [ theme ])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

