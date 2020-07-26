import { css } from 'styled-components'

import { headerFont, bodyFont } from './variables'

export const Typography = css`
  body {
    font-family: ${bodyFont};
    h1,
    h2,
    h3 {
      font-family: ${headerFont};
    }
  }
`
