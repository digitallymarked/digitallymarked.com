import { css } from 'styled-components'

import { colors, bodyFont } from './variables'

export const SiteResets = css`
  body {
    margin: 0;
    background-color: ${colors.light};
    font-family: ${bodyFont};
  }
`
