import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function generateId(key?: number) {
	return Math.random().toString(36) + key;
}

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}