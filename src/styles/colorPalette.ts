import { css } from '@emotion/react'

export const colorPalette = css`
  :root {
    --white: #fff;
    --black: #212121;
    --grey: #f0efef;
    --darkgrey: #969696;
    --red: #f44336;
    --blue: #2196f3;
    --green: #4caf50;
  }
`

export const colors = {
  white: 'var(--white)',
  black: 'var(--black)',
  grey: 'var(--grey)',
  darkgrey: 'var(--darkgrey)',
  red: 'var(--red)',
  blue: 'var(--blue)',
  green: 'var(--green)',
}

export type Colors = keyof typeof colors
