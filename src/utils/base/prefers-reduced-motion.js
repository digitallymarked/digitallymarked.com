import { css } from 'styled-components'

export const PrefersReducedMotion = css`
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-durration: 0.001s !important;
      transition-durration: 0.001s !important;
    }
  }
`
