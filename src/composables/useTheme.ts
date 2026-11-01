import { ref, onMounted } from 'vue'

type ThemeMode = 'dark' | 'light'

const currentTheme = ref<ThemeMode>('dark')

export function useTheme() {
  const initTheme = () => {
    if (typeof window === 'undefined') return
    const saved = localStorage.getItem('ab-theme') as ThemeMode | null
    if (saved === 'light' || saved === 'dark') {
      currentTheme.value = saved
    } else {
      // Default dark theme as requested
      currentTheme.value = 'dark'
    }
    applyTheme(currentTheme.value)
  }

  const applyTheme = (theme: ThemeMode) => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
      root.classList.remove('light')
    } else {
      root.classList.add('light')
      root.classList.remove('dark')
    }
    localStorage.setItem('ab-theme', theme)
  }

  const toggleTheme = () => {
    currentTheme.value = currentTheme.value === 'dark' ? 'light' : 'dark'
    applyTheme(currentTheme.value)
  }

  onMounted(() => {
    initTheme()
  })

  return {
    currentTheme,
    toggleTheme,
    initTheme
  }
}
