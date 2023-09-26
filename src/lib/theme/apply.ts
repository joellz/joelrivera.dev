import { browser } from '$app/environment'

export const applyTheme = () => {
  if (browser) {
    const isPersistedThemeDark = localStorage?.theme === 'dark'
    const isThemeSet = !('theme' in localStorage)
    const prefersDark = window.matchMedia('prefers-color-scheme: dark').matches

    if (isPersistedThemeDark || (isThemeSet && prefersDark)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }
}