import { useMediaQuery, Theme } from '@mui/material'
import { useTheme } from '@mui/material/styles'

type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export default function useBreakpoint(br: Breakpoint): boolean {
  const theme: Theme = useTheme()
  const matches: boolean = useMediaQuery(theme.breakpoints.up(br))

  return matches
}
