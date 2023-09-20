import { browser } from '$app/environment'
import { theme } from '$lib/theme/state'
import { get } from 'svelte/store'

export const setTheme = () => {
  const currentTheme = get(theme)

  if (browser) {
    if (currentTheme === 'light') {
      theme.set('dark')
      localStorage.setItem('theme', 'dark')
      document.documentElement.classList.add('dark')
    }
    if (currentTheme === 'dark') {
      theme.set('light')
      localStorage.setItem('theme', 'light')
      document.documentElement.classList.remove('dark')
    }
  }
}
