import { createPortal } from 'react-dom'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

import Button from '@shared/Button'
import { colors } from '@/styles/colorPalette'

interface FixedBottomButtonProps {
  label: string
  onClick: () => void
}

function FixedBottomButton({ label, onClick }: FixedBottomButtonProps) {
  const $portal_root = document.getElementById('root-portal')

  if ($portal_root == null) {
    return null
  }

  return createPortal(
    <Container>
      <Button size="medium" full={true} onClick={onClick} css={buttonStyles}>
        {label}
      </Button>
    </Container>,
    $portal_root,
  )
}

const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px 10px 8px;
  background-color: ${colors.white};
`

const buttonStyles = css`
  border-radius: 8px;
`

export default FixedBottomButton
