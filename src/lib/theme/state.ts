import { writable } from 'svelte/store'
import { browser } from '$app/environment'

type Themes = 'light' | 'dark'
export const theme = writable<Themes>(browser && localStorage.theme)
