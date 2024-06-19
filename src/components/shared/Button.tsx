import { css } from '@emotion/react'
import styled from '@emotion/styled'

import {
  ButtonColor,
  buttonColorMap,
  buttonWeakMap,
  ButtonSize,
  buttonSizeMap,
} from '@styles/button'

interface ButtonProps {
  color?: ButtonColor
  size?: ButtonSize
  weak?: boolean
  full?: boolean
  disabled?: boolean
}

const Button = styled.button<ButtonProps>(
  {
    borderRadius: '6px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  ({ color = 'primary', weak }) =>
    weak ? buttonWeakMap[color] : buttonColorMap[color],
  ({ size = 'small' }) => buttonSizeMap[size],
  ({ full }) =>
    full
      ? css`
          display: block;
          width: 100%;
          border-radius: 0;
        `
      : undefined,
  ({ disabled }) =>
    disabled
      ? css`
          opacity: 0.25;
          cursor: initial;
        `
      : undefined,
)

export default Button
