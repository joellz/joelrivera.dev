import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatDate = (date: Date) => {
  return date.toLocaleString('en-US', {
    month: 'long',
    day: '2-digit',
    year: 'numeric'
  })
}
