import { browser } from '$app/environment'
import { theme } from '$lib/theme/state'
import { get } from 'svelte/store'

export const applyTheme = () => {
  if (!browser) return

  const currentTheme = get(theme)
  const isPersistedThemeDark = localStorage?.theme === 'dark'
  const isThemeSet = !('theme' in localStorage)
  const prefersDark = window.matchMedia('prefers-color-scheme: dark').matches

  if (!currentTheme) {
    theme.set('dark')
    localStorage.setItem('theme', 'dark')
    document.documentElement.classList.add('dark')
    return
  }

  if (isPersistedThemeDark || (isThemeSet && prefersDark)) {
    return document.documentElement.classList.add('dark')
  } else {
    theme.set('light')
    localStorage.setItem('theme', 'light')
    document.documentElement.classList.remove('dark')
  }
}
